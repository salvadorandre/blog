const selector = [
    ".project-card",
    ".education-card",
    ".certification-card",
    ".skill",
].join(",");

let observer: IntersectionObserver | undefined;

const revealItems = () => {
    const items = document.querySelectorAll<HTMLElement>(selector);
    const certificateImages = document.querySelectorAll<HTMLImageElement>(".certificate-preview img");

    certificateImages.forEach((image) => {
        if (image.dataset.fallbackListener === "true") return;
        image.dataset.fallbackListener = "true";
        const showFallback = () => image.closest(".certificate-preview")?.classList.add("preview-unavailable");
        image.addEventListener("error", showFallback, { once: true });
        if (image.complete && image.naturalWidth === 0) showFallback();
    });

    observer?.disconnect();

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        items.forEach((item) => item.classList.add("is-visible"));
        document.documentElement.classList.remove("js-reveal");
        return;
    }

    if (!("IntersectionObserver" in window)) {
        items.forEach((item) => item.classList.add("is-visible"));
        document.documentElement.classList.remove("js-reveal");
        return;
    }

    document.documentElement.classList.add("js-reveal");
    observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const item = entry.target as HTMLElement;
            item.classList.add("is-visible", "animate__animated", "animate__fadeInUp");
            item.addEventListener("animationend", () => {
                item.classList.remove("animate__animated", "animate__fadeInUp");
            }, { once: true });
            currentObserver.unobserve(item);
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    items.forEach((item) => {
        if (item.classList.contains("is-visible")) return;
        observer?.observe(item);
    });
};

revealItems();
document.addEventListener("astro:page-load", revealItems);
