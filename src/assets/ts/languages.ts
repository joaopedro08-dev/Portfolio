export type Language = "pt" | "en" | "es";

export const supportedLanguages: Language[] = ["pt", "en", "es"];

export const languageLabels: Record<Language, string> = {
  pt: "Português - BR",
  en: "English",
  es: "Español",
};

export const languageFlags: Record<Language, string> = {
  pt: "🇧🇷",
  en: "🇺🇸",
  es: "🇪🇸",
};

export const defaultLanguage: Language = "pt";

export const getBrowserLanguage = (): Language => {
  if (typeof navigator === "undefined") {
    return defaultLanguage;
  }

  const preferred = navigator.language.toLowerCase();

  if (preferred.startsWith("en")) {
    return "en";
  }

  if (preferred.startsWith("es")) {
    return "es";
  }

  return "pt";
};

export const languageContent = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      projects: "Projetos",
      skills: "Habilidades",
      contact: "Contato",
    },
    hero: {
      badge: "Disponível para projetos",
      title: "Olá, eu sou o João Pedro",
      rolePrefix: "Desenvolvedor",
      words: ["Web", "Mobile", "Full-Stack", "Back-end", "Front-end", "DevOps", "UI/UX"],
      description:
        "Apaixonado por criar soluções inovadoras e interfaces intuitivas que geram impacto real.",
      primaryAction: "Ver projetos",
      secondaryAction: "Entre em contato",
    },
    about: {
      badge: "Sobre mim",
      title: "João Pedro Dala Dea Mello",
      paragraphs: [
        "Tenho 18 anos e iniciei minha jornada como desenvolvedor em 2024, impulsionado pela paixão pela programação durante o curso de Análise e Desenvolvimento de Sistemas no Senai de Ourinhos/SP.",
        "Desde então, venho me dedicando ao desenvolvimento de soluções web e mobile, sempre buscando aprender novas tecnologias e criar interfaces que proporcionem uma experiência intuitiva e agradável ao usuário.",
        "Acredito que bom código vai além da funcionalidade — ele precisa ser limpo, escalável e pensado para as pessoas.",
      ],
      action: "Ver currículo",
    },
    skills: {
      label: "Habilidades",
      titlePrefix: "Minhas",
      titleHighlight: "skills",
      description: "Tecnologias e ferramentas que utilizo no dia a dia e as que estou explorando.",
      mastered: "Dominando",
      learning: "Aprendendo",
      categories: {
        frontEnd: "Front-end",
        backEnd: "Back-end",
        mobile: "Mobile",
        database: "Banco de Dados",
        tools: "Ferramentas",
        languages: "Linguagens",
        desktop: "Desktop",
        nosql: "NoSql",
        cloud: "Cloud",
        others: "Outros",
      },
    },
    projects: {
      label: "Projetos",
      titlePrefix: "O que eu já",
      titleHighlight: "construí",
      description:
        "Projetos desenvolvidos ao longo da minha jornada, explorando diferentes tecnologias e desafios reais.",
      typeLabel: "Tipo",
      techLabel: "Tech",
      github: "GitHub",
      demo: "Demo",
      clearFilters: "Limpar filtros",
      showMore: "Ver mais repositórios",
      showLess: "Ver menos",
      empty: "Nenhum projeto encontrado com esses filtros.",
      allTechs: "Todas",
      count: (visible: number, total: number) =>
        `${visible} de ${total} projeto${total !== 1 ? "s" : ""} exibido${total !== 1 ? "s" : ""}`,
      types: {
        all: "Todos",
        fullstack: "Full-stack",
        web: "Web",
        mobile: "Mobile",
        frontend: "Front-end",
        backend: "Back-end",
        desktop: "Desktop",
        study: "Estudo",
      },
      projectTypeBadges: {
        all: "Todos",
        fullstack: "Full-stack",
        web: "Web",
        mobile: "Mobile",
        frontend: "Front-end",
        backend: "Back-end",
        desktop: "Desktop",
        study: "Estudo",
      },
    },
    contact: {
      label: "Contato",
      titlePrefix: "Vamos",
      titleHighlight: "conversar",
      description:
        "Estou disponível para freelas, projetos colaborativos ou apenas uma boa conversa sobre tecnologia.",
      location: "Ibirarema, SP — Brasil",
      access: "Acessar",
    },
    footer: {
      reserved: "Todos os direitos reservados.",
      developedBy: "Desenvolvido por",
    },
    theme: {
      label: "Tema",
      light: "Claro",
      dark: "Escuro",
      system: "Sistema",
      srOnly: "Selecionar tema",
    },
    language: {
      label: "Idioma",
      srOnly: "Selecionar idioma",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      badge: "Available for projects",
      title: "Hi, I'm João Pedro",
      rolePrefix: "Developer",
      words: ["Web", "Mobile", "Full-Stack", "Back-end", "Front-end", "DevOps", "UI/UX"],
      description:
        "Passionate about building innovative solutions and intuitive interfaces that create real impact.",
      primaryAction: "View projects",
      secondaryAction: "Get in touch",
    },
    about: {
      badge: "About me",
      title: "João Pedro Dala Dea Mello",
      paragraphs: [
        "I'm 18 years old and started my journey as a developer in 2024, driven by my passion for programming during my Systems Analysis and Development course at Senai in Ourinhos/SP.",
        "Since then, I've been focused on web and mobile development, always looking to learn new technologies and build interfaces that provide an intuitive and pleasant experience for users.",
        "I believe good code goes beyond functionality - it must be clean, scalable, and designed for people.",
      ],
      action: "View resume",
    },
    skills: {
      label: "Skills",
      titlePrefix: "My",
      titleHighlight: "skills",
      description: "Technologies and tools I use every day and the ones I'm exploring.",
      mastered: "Mastered",
      learning: "Learning",
      categories: {
        frontEnd: "Front-end",
        backEnd: "Back-end",
        mobile: "Mobile",
        database: "Databases",
        tools: "Tools",
        languages: "Languages",
        desktop: "Desktop",
        nosql: "NoSQL",
        cloud: "Cloud",
        others: "Others",
      },
    },
    projects: {
      label: "Projects",
      titlePrefix: "What I've",
      titleHighlight: "built",
      description:
        "Projects developed throughout my journey, exploring different technologies and real-world challenges.",
      typeLabel: "Type",
      techLabel: "Tech",
      github: "GitHub",
      demo: "Demo",
      clearFilters: "Clear filters",
      showMore: "Show more repositories",
      showLess: "Show less",
      empty: "No projects found with these filters.",
      allTechs: "All",
      count: (visible: number, total: number) =>
        `${visible} of ${total} project${total !== 1 ? "s" : ""} shown`,
      types: {
        all: "All",
        fullstack: "Full-stack",
        web: "Web",
        mobile: "Mobile",
        frontend: "Front-end",
        backend: "Back-end",
        desktop: "Desktop",
        study: "Study",
      },
      projectTypeBadges: {
        all: "All",
        fullstack: "Full-stack",
        web: "Web",
        mobile: "Mobile",
        frontend: "Front-end",
        backend: "Back-end",
        desktop: "Desktop",
        study: "Study",
      },
    },
    contact: {
      label: "Contact",
      titlePrefix: "Let's",
      titleHighlight: "talk",
      description:
        "I'm available for freelance work, collaborative projects, or just a good conversation about technology.",
      location: "Ibirarema, SP — Brazil",
      access: "Open",
    },
    footer: {
      reserved: "All rights reserved.",
      developedBy: "Developed by",
    },
    theme: {
      label: "Theme",
      light: "Light",
      dark: "Dark",
      system: "System",
      srOnly: "Select theme",
    },
    language: {
      label: "Language",
      srOnly: "Select language",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
    },
    hero: {
      badge: "Disponible para proyectos",
      title: "Hola, soy João Pedro",
      rolePrefix: "Desarrollador",
      words: ["Web", "Mobile", "Full-Stack", "Back-end", "Front-end", "DevOps", "UI/UX"],
      description:
        "Apasionado por crear soluciones innovadoras e interfaces intuitivas que generen un impacto real.",
      primaryAction: "Ver proyectos",
      secondaryAction: "Contactar",
    },
    about: {
      badge: "Sobre mí",
      title: "João Pedro Dala Dea Mello",
      paragraphs: [
        "Tengo 18 años y comencé mi camino como desarrollador en 2024, impulsado por mi pasión por la programación durante el curso de Análisis y Desarrollo de Sistemas en Senai de Ourinhos/SP.",
        "Desde entonces, me he dedicado al desarrollo web y móvil, siempre buscando aprender nuevas tecnologías y crear interfaces que ofrezcan una experiencia intuitiva y agradable al usuario.",
        "Creo que un buen código va más allá de la funcionalidad: debe ser limpio, escalable y pensado para las personas.",
      ],
      action: "Ver currículum",
    },
    skills: {
      label: "Habilidades",
      titlePrefix: "Mis",
      titleHighlight: "skills",
      description: "Tecnologías y herramientas que uso a diario y las que estoy explorando.",
      mastered: "Dominando",
      learning: "Aprendiendo",
      categories: {
        frontEnd: "Front-end",
        backEnd: "Back-end",
        mobile: "Mobile",
        database: "Bases de datos",
        tools: "Herramientas",
        languages: "Lenguajes",
        desktop: "Desktop",
        nosql: "NoSQL",
        cloud: "Cloud",
        others: "Otros",
      },
    },
    projects: {
      label: "Proyectos",
      titlePrefix: "Lo que ya",
      titleHighlight: "construí",
      description:
        "Proyectos desarrollados a lo largo de mi trayectoria, explorando diferentes tecnologías y desafíos reales.",
      typeLabel: "Tipo",
      techLabel: "Tech",
      github: "GitHub",
      demo: "Demo",
      clearFilters: "Limpiar filtros",
      showMore: "Ver más repositorios",
      showLess: "Ver menos",
      empty: "No se encontraron proyectos con estos filtros.",
      allTechs: "Todas",
      count: (visible: number, total: number) =>
        `${visible} de ${total} proyecto${total !== 1 ? "s" : ""} mostrados`,
      types: {
        all: "Todos",
        fullstack: "Full-stack",
        web: "Web",
        mobile: "Mobile",
        frontend: "Front-end",
        backend: "Back-end",
        desktop: "Desktop",
        study: "Estudio",
      },
      projectTypeBadges: {
        all: "Todos",
        fullstack: "Full-stack",
        web: "Web",
        mobile: "Mobile",
        frontend: "Front-end",
        backend: "Back-end",
        desktop: "Desktop",
        study: "Estudio",
      },
    },
    contact: {
      label: "Contacto",
      titlePrefix: "Conversemos",
      titleHighlight: "ahora",
      description:
        "Estoy disponible para trabajos freelance, proyectos colaborativos o simplemente una buena conversación sobre tecnología.",
      location: "Ibirarema, SP — Brasil",
      access: "Abrir",
    },
    footer: {
      reserved: "Todos los derechos reservados.",
      developedBy: "Desarrollado por",
    },
    theme: {
      label: "Tema",
      light: "Claro",
      dark: "Oscuro",
      system: "Sistema",
      srOnly: "Seleccionar tema",
    },
    language: {
      label: "Idioma",
      srOnly: "Seleccionar idioma",
    },
  },
} as const;

export type LanguageContent = (typeof languageContent)[Language];

export const getProjectTypeKey = (type: string) => {
  const normalized = type.toLowerCase().replace(/\s+/g, "");

  if (normalized === "fullstack" || normalized === "full-stack") {
    return "fullstack";
  }

  if (normalized === "frontend" || normalized === "front-end") {
    return "frontend";
  }

  if (normalized === "backend" || normalized === "back-end") {
    return "backend";
  }

  if (normalized === "nosql") {
    return "nosql";
  }

  if (normalized === "estudo") {
    return "study";
  }

  if (normalized === "desktop") {
    return "desktop";
  }

  if (normalized === "mobile") {
    return "mobile";
  }

  if (normalized === "web") {
    return "web";
  }

  return "all";
};

export const projectDescriptions: Record<Language, Record<string, string>> = {
  pt: {
    "Abertura-SigaAluno": "Página introdutória do SigaAluno desenvolvida como parte do TCC.",
    "Backend-SigaAluno": "Serviço back-end do sistema de gestão escolar SigaAluno para o TCC.",
    "Frontend-SigaAluno": "Interface front-end do sistema de gestão escolar SigaAluno para o TCC.",
    "Atelie-Backend": "API do Atelie baseada em GraphQL com integração ao banco de dados e autenticação.",
    "Capitaes-da-Areia": "Projeto web de leitura e atividades sobre a obra Capitães da Areia, desenvolvido no SESI.",
    CheckList: "Aplicação Full Stack para gerenciamento de produtos, desenvolvida como preparação para o TCC do SENAI.",
    "Atelie-Frontend": "Loja virtual de e-commerce baseada em produtos próprios e autorizados, com interface moderna e integração GraphQL.",
    BattleDex: "Projeto de acessibilidade desenvolvido no curso de ADS, com foco em inclusão e facilidade de acesso para pessoas com deficiência.",
    "TecnoSegurança": "App mobile com foco em segurança, desenvolvido no SENAI com integração de IA e BI. Disponível para Android.",
    GeoSP: "App de turismo sobre São Paulo com IA integrada, acessibilidade e mapas interativos para explorar destinos, restaurantes e aventuras.",
    ExploraBrasil: "Aplicativo de geografia desenvolvido para o projeto integrador SESI/SENAI em Ourinhos/SP. Disponível para Android.",
    "Nexus-Frontend": "Plataforma com interface inspirada em ferramentas de IA com frontend em Next.js.",
    "Nexus-Backend": "Backend para plataforma de IA, desenvolvido com Express, GraphQL e integração de modelos de linguagem.",
    Sprints: "Sistema de gerenciamento de biblioteca desenvolvido durante o curso no SENAI.",
    "Filmes-Frontend": "Catálogo de filmes com frontend em Vue.js/TypeScript.",
    "Filmes-Backend": "API de filmes com Express, TypeScript e integração com banco de dados MongoDB.",
    "Todolist-Frontend": "Aplicação de lista de tarefas com frontend em JavaScript.",
    "Todolist-Backend": "API de lista de tarefas com Python e FastAPI, banco de dados em memória.",
    "Authentication-Java": "API de autenticação simples com Spring Boot, GraphQL, JWT e PostgreSQL.",
    Grade: "Jogo de palavras moderno inspirado no Wordle, com modos Single, Duo e Quartet.",
    "Projeto-Integrador": "Projeto integrador desenvolvido em 2025 por alunos do 3º ano do SESI Ourinhos/SP, em parceria com o SENAI.",
    "Fundamentals-Rust": "Fundamentos básicos da linguagem Rust utilizando o gerenciador de pacotes Cargo.",
    Anabolizantes: "Site informativo sobre anabolizantes, seus usos, riscos e efeitos colaterais.",
    Taskly: "Lista de tarefas colaborativa integrada para web e mobile.",
    ProductStack: "Sistema de gerenciamento de produtos com interface moderna e API feita em PHP.",
    "Projeto Integrador Transportes": "Projeto integrador realizado na faculdade Unifio no 1º semestre de 2026.",
    StackForge: "Gerador de backend inspirado no Spring Boot para Node.js e TypeScript. Crie APIs prontas para produção com arquitetura, banco de dados, recursos e ferramentas personalizáveis.",
  },
  en: {
    "Abertura-SigaAluno": "Intro page for SigaAluno built as part of my capstone project.",
    "Backend-SigaAluno": "Back-end service for the SigaAluno school management system used in the capstone project.",
    "Frontend-SigaAluno": "Front-end interface for the SigaAluno school management system used in the capstone project.",
    "Atelie-Backend": "GraphQL-based Atelie API with database integration and authentication.",
    "Capitaes-da-Areia": "Web reading and activity project about Capitães da Areia, developed at SESI.",
    CheckList: "Full stack product management application built as preparation for the SENAI capstone.",
    "Atelie-Frontend": "E-commerce storefront based on owned and authorized products, with a modern interface and GraphQL integration.",
    BattleDex: "Accessibility project developed in the ADS course, focused on inclusion and easier access for people with disabilities.",
    "TecnoSegurança": "Mobile app focused on safety, built at SENAI with AI and BI integration. Available for Android.",
    GeoSP: "Tourism app about São Paulo with integrated AI, accessibility, and interactive maps to explore destinations, restaurants, and adventures.",
    ExploraBrasil: "Geography app developed for the SESI/SENAI integrator project in Ourinhos/SP. Available for Android.",
    "Nexus-Frontend": "Platform with an AI-tool-inspired interface and a Next.js frontend.",
    "Nexus-Backend": "Backend for an AI platform, built with Express, GraphQL, and language model integration.",
    Sprints: "Library management system developed during the SENAI course.",
    "Filmes-Frontend": "Movie catalog built with Vue.js and TypeScript.",
    "Filmes-Backend": "Movie API built with Express, TypeScript, and MongoDB integration.",
    "Todolist-Frontend": "Task list application with a JavaScript frontend.",
    "Todolist-Backend": "Task list API with Python and FastAPI, backed by in-memory storage.",
    "Authentication-Java": "Simple authentication API with Spring Boot, GraphQL, JWT, and PostgreSQL.",
    Grade: "Modern word game inspired by Wordle, with Single, Duo, and Quartet modes.",
    "Projeto-Integrador": "Integrator project developed in 2025 by 3rd-year SESI Ourinhos/SP students in partnership with SENAI.",
    "Fundamentals-Rust": "Rust language fundamentals using the Cargo package manager.",
    Anabolizantes: "Informational site about anabolic steroids, their uses, risks, and side effects.",
    Taskly: "Collaborative task list for web and mobile.",
    ProductStack: "Product management system with a modern interface and a PHP API.",
    "Projeto Integrador Transportes": "Integrator project completed at Unifio college in the first semester of 2026.",
    StackForge: "Spring Boot-inspired backend generator for Node.js and TypeScript. Create production-ready APIs with customizable architecture, database, features, and tools.",
  },
  es: {
    "Abertura-SigaAluno": "Página de introducción de SigaAluno desarrollada como parte de mi trabajo de conclusión.",
    "Backend-SigaAluno": "Servicio back-end del sistema escolar SigaAluno utilizado en el trabajo de conclusión.",
    "Frontend-SigaAluno": "Interfaz front-end del sistema escolar SigaAluno utilizada en el trabajo de conclusión.",
    "Atelie-Backend": "API de Atelie basada en GraphQL con integración de base de datos y autenticación.",
    "Capitaes-da-Areia": "Proyecto web de lectura y actividades sobre Capitães da Areia, desarrollado en SESI.",
    CheckList: "Aplicación full stack para gestión de productos creada como preparación para el trabajo de conclusión de SENAI.",
    "Atelie-Frontend": "Tienda virtual de comercio electrónico basada en productos propios y autorizados, con interfaz moderna e integración GraphQL.",
    BattleDex: "Proyecto de accesibilidad desarrollado en el curso de ADS, enfocado en la inclusión y el acceso facilitado para personas con discapacidad.",
    "TecnoSegurança": "App móvil enfocada en seguridad, desarrollada en SENAI con integración de IA y BI. Disponible para Android.",
    GeoSP: "App de turismo sobre São Paulo con IA integrada, accesibilidad y mapas interactivos para explorar destinos, restaurantes y aventuras.",
    ExploraBrasil: "Aplicación de geografía desarrollada para el proyecto integrador SESI/SENAI en Ourinhos/SP. Disponible para Android.",
    "Nexus-Frontend": "Plataforma con una interfaz inspirada en herramientas de IA y frontend en Next.js.",
    "Nexus-Backend": "Backend para una plataforma de IA, desarrollado con Express, GraphQL e integración de modelos de lenguaje.",
    Sprints: "Sistema de gestión de biblioteca desarrollado durante el curso en SENAI.",
    "Filmes-Frontend": "Catálogo de películas creado con Vue.js y TypeScript.",
    "Filmes-Backend": "API de películas creada con Express, TypeScript e integración con MongoDB.",
    "Todolist-Frontend": "Aplicación de lista de tareas con frontend en JavaScript.",
    "Todolist-Backend": "API de lista de tareas con Python y FastAPI, con almacenamiento en memoria.",
    "Authentication-Java": "API de autenticación simple con Spring Boot, GraphQL, JWT y PostgreSQL.",
    Grade: "Juego de palabras moderno inspirado en Wordle, con modos Single, Duo y Quartet.",
    "Projeto-Integrador": "Proyecto integrador desarrollado en 2025 por alumnos de 3º año de SESI Ourinhos/SP en asociación con SENAI.",
    "Fundamentals-Rust": "Fundamentos básicos del lenguaje Rust usando el gestor de paquetes Cargo.",
    Anabolizantes: "Sitio informativo sobre anabólicos, sus usos, riesgos y efectos secundarios.",
    Taskly: "Lista de tareas colaborativa para web y móvil.",
    ProductStack: "Sistema de gestión de productos con interfaz moderna y una API hecha en PHP.",
    "Projeto Integrador Transportes": "Proyecto integrador realizado en la universidad Unifio en el primer semestre de 2026.",
    StackForge: "Generador de backends inspirado en Spring Boot para Node.js y TypeScript. Crea APIs listas para producción con arquitectura, base de datos, funciones y herramientas personalizables.",
  },
} as const;