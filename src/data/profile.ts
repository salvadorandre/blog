export const profile = {
    name: "André Salvador",
    firstName: "André",
    lastName: "Salvador",
    role: "Desarrollador de software y estudiante de Ingeniería en Sistemas.",
    introduction:
        "Este es mi espacio para compartir lo que voy construyendo. Me gusta aprender probando: desde una pequeña idea en JavaScript hasta una aplicación con herramientas que todavía estoy conociendo.",
    homeCaption: "Entre clases, código y proyectos propios.",
    company: {
        name: "Code qx",
        role: "Cofundador",
        founded: "Enero de 2026",
        logo: "/logo.png",
        paragraphs: [
            "En enero de 2026 fundé Code qx junto a unos compañeros. Nació con la visión de desarrollar y gestionar sistemas para pequeñas empresas y empresas en crecimiento.",
            "Queremos acompañar a estos negocios con herramientas que les ayuden a organizar su trabajo y gestionar sus operaciones a medida que crecen.",
        ],
    },
};

export const education = [
    { institution: "Universidad Mariano Gálvez", degree: "Ingeniería en Sistemas", period: "Actualidad", category: "Formación universitaria", image: "/umg.png", current: true },
    { institution: "FunSalud", degree: "Diplomado en Desarrollo Web", period: "2023", category: "Formación complementaria", image: "/funsalud.png", current: false },
    { institution: "Pre-universitario Galileo", degree: "Bachillerato en Computación con Orientación Científica", period: "2022–2023", category: "Educación media", image: "/galileo.jpeg", current: false },
];

export const skills: { name: string; image?: string; mark?: string; label: string; lightBackground?: boolean }[] = [
    { name: "HTML5", image: "html.svg", label: "Avanzado" },
    { name: "CSS3", image: "Css.svg", label: "Medio" },
    { name: "JavaScript", image: "Js.svg", label: "Medio" },
    { name: "Tailwind CSS", image: "tailwind.svg", label: "Medio" },
    { name: "Bootstrap 5", image: "Boostrap.svg", label: "Medio" },
    { name: "Laravel", image: "Laravel.svg", label: "Medio" },
    { name: "jQuery", image: "Jquery.svg", label: "Medio" },
    { name: "React", image: "React.svg", label: "Básico" },
    { name: "Angular", image: "Angular.svg", label: "Básico" },
    { name: "Django", image: "django.svg", label: "Básico" },
    { name: "Livewire", image: "Livewire.svg", label: "Básico" },
    { name: "PHP", image: "PHP.svg", label: "Medio" },
    { name: "MySQL", image: "MySQL.svg", label: "Base de datos" },
    { name: "PostgreSQL", image: "PostgreSQL.svg", label: "Base de datos" },
    { name: "MariaDB", image: "MariaDB.svg", label: "Base de datos", lightBackground: true },
    { name: "SQL Server", image: "SQLServer.svg", label: "Base de datos" },
];
