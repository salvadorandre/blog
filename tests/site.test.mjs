import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import test from "node:test";

const dist = path.resolve("dist");

function getHtmlFiles(directory) {
    return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
        const entryPath = path.join(directory, entry.name);
        return entry.isDirectory()
            ? getHtmlFiles(entryPath)
            : entry.name.endsWith(".html") ? [entryPath] : [];
    });
}

function resolveLocalUrl(url, currentFile) {
    const pathname = decodeURIComponent(url.split(/[?#]/, 1)[0]);
    if (!pathname || pathname === "/") return path.join(dist, "index.html");
    if (pathname.endsWith("/")) return path.join(dist, pathname, "index.html");
    if (path.extname(pathname)) return path.join(dist, pathname);

    const routeIndex = path.join(dist, pathname, "index.html");
    if (existsSync(routeIndex)) return routeIndex;
    return path.join(currentFile, "..", pathname);
}

test("se generan las páginas principales y al menos una página por proyecto", () => {
    const htmlFiles = getHtmlFiles(dist).map((file) => path.relative(dist, file));
    assert.ok(htmlFiles.includes("index.html"));
    assert.ok(htmlFiles.includes(path.join("portafolio", "index.html")));
    assert.ok(htmlFiles.includes(path.join("CV", "index.html")));
    assert.ok(htmlFiles.includes("404.html"));
    assert.ok(htmlFiles.some((file) => file.startsWith(path.join("proyecto", ""))));
});

test("los enlaces y recursos locales de las páginas generadas existen", () => {
    const htmlFiles = getHtmlFiles(dist);
    const problems = [];

    for (const file of htmlFiles) {
        const html = readFileSync(file, "utf8");
        for (const [, url] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
            if (!url.startsWith("/") || url.startsWith("//")) continue;
            const target = resolveLocalUrl(url, file);
            if (!existsSync(target)) problems.push(`${path.relative(dist, file)} -> ${url}`);
        }
    }

    assert.deepEqual(problems, [], `Recursos/enlaces locales inexistentes:\n${problems.join("\n")}`);
});

test("el CV publica las doce certificaciones y enlaza a sus diplomas", () => {
    const cv = readFileSync(path.join(dist, "CV", "index.html"), "utf8");
    assert.equal((cv.match(/class="certification-card"/g) ?? []).length, 12);
    assert.equal((cv.match(/aria-label="Ver certificado:/g) ?? []).length, 12);
});
