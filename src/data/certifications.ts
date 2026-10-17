export const certifications = [
    { title: "Curso de PHP: Bases de Datos", category: "PHP y Laravel", courseId: "4228" },
    { title: "Curso de PHP: Integración con HTML", category: "PHP y Laravel", courseId: "2947" },
    { title: "Curso de PHP: Arreglos, Funciones y Estructuras de Control", category: "PHP y Laravel", courseId: "2794" },
    { title: "Curso Básico de PHP: Instalación, Fundamentos y Operadores", category: "PHP y Laravel", courseId: "2646" },
    { title: "Curso de Laravel", category: "PHP y Laravel", courseId: "12187" },
    { title: "Curso de Fundamentos de Node.js", category: "JavaScript y Node.js", courseId: "11982" },
    { title: "Curso de API REST con JavaScript", category: "JavaScript y Node.js", courseId: "12257" },
    { title: "Curso de Fundamentos de JavaScript", category: "JavaScript y Node.js", courseId: "10266" },
    { title: "Curso de Fundamentos de Bases de Datos y SQL", category: "Bases de datos", courseId: "13017" },
    { title: "Curso de Fundamentos de PHP", category: "PHP y Laravel", courseId: "12123" },
    { title: "Curso de Django REST Framework", category: "Backend", courseId: "10728" },
    { title: "Curso de Introducción al Desarrollo Backend", category: "Backend", courseId: "4656" },
].map((certification) => ({
    ...certification,
    url: `https://platzi.com/p/esalvadornolasco/curso/${certification.courseId}-course/diploma/detalle/`,
    image: `https://platzi.com/esalvadornolasco/curso/${certification.courseId}-course/diploma-og/og.jpeg`,
}));
