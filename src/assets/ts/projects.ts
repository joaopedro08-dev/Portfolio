type Project = {
    title: string;
    description: string;
    type: string[];
    techs: string[];
    github: string;
    demo?: string;
};

export const projects: Project[] = [
    {
        title: "Abertura-SigaAluno",
        description: "Página introdutória do SigaAluno desenvolvida como parte do TCC.",
        type: ["Web", "Front-end"],
        techs: ["React", "JavaScript", "Ionic", "Tailwind", "Vite", "Framer Motion"],
        github: "https://github.com/joaopedro08-dev/Abertura-SigaAluno",
    },
    {
        title: "Backend-SigaAluno",
        description: "Serviço back-end do sistema de gestão escolar SigaAluno para o TCC.",
        type: ["Back-end"],
        techs: ["Java", "JWT", "Spring Boot", "Maven", "Spring Security", "Spring JPA", "Mercado Pago SDK"],
        github: "https://github.com/joaopedro08-dev/Backend-SigaAluno",
    },
    {
        title: "Frontend-SigaAluno",
        description: "Interface front-end do sistema de gestão escolar SigaAluno para o TCC.",
        type: ["Web", "Front-end"],
        techs: ["React", "TypeScript", "Ionic", "Axios", "Tailwind", "Vite", "Framer Motion"],
        github: "https://github.com/joaopedro08-dev/Frontend-SigaAluno",
    },
    {
        title: "Atelie-Backend",
        description: "API do Atelie baseada em GraphQL com integração ao banco de dados e autenticação.",
        type: ["Back-end"],
        techs: ["Java", "GraphQL", "JWT", "Spring Boot", "PostgreSQL", "Spring Security", "Spring JPA"],
        github: "https://github.com/joaopedro08-dev/Atelie-Backend",
    },
    {
        title: "Capitaes-da-Areia",
        description: "Projeto web de leitura e atividades sobre a obra Capitães da Areia, desenvolvido no SESI.",
        type: ["Web", "Front-end"],
        techs: ["React", "TypeScript", "Tailwind", "Vite", "Framer Motion", "Shadcn UI"],
        github: "https://github.com/joaopedro08-dev/Capitaes-da-Areia",
    },
    {
        title: "CheckList",
        description: "Aplicação Full Stack para gerenciamento de produtos, desenvolvida como preparação para o TCC do SENAI.",
        type: ["Full-stack"],
        techs: ["React", "Java", "Spring Boot", "PostgreSQL"],
        github: "https://github.com/joaopedro08-dev/CheckList",
    },
    {
        title: "Atelie-Frontend",
        description: "Loja virtual de e-commerce baseada em produtos próprios e autorizados, com interface moderna e integração GraphQL.",
        type: ["Web", "Front-end", "Desktop"],
        techs: ["React", "TypeScript", "Next.js", "GraphQL", "Tailwind", "Tauri"],
        github: "https://github.com/joaopedro08-dev/Atelie-Frontend",
    },
    {
        title: "BattleDex",
        description: "Projeto de acessibilidade desenvolvido no curso de ADS, com foco em inclusão e facilidade de acesso para pessoas com deficiência.",
        type: ["Web"],
        techs: ["React", "JavaScript"],
        github: "https://github.com/joaopedro08-dev/BattleDex",
    },
    {
        title: "TecnoSegurança",
        description: "App mobile com foco em segurança, desenvolvido no SENAI com integração de IA e BI. Disponível para Android.",
        type: ["Mobile"],
        techs: ["Ionic", "React", "TypeScript"],
        github: "https://github.com/joaopedro08-dev/TecnoSeguranca",
    },
    {
        title: "GeoSP",
        description: "App de turismo sobre São Paulo com IA integrada, acessibilidade e mapas interativos para explorar destinos, restaurantes e aventuras.",
        type: ["Mobile"],
        techs: ["Ionic", "Angular", "HTML"],
        github: "https://github.com/joaopedro08-dev/GeoSP",
    },
    {
        title: "ExploraBrasil",
        description: "Aplicativo de geografia desenvolvido para o projeto integrador SESI/SENAI em Ourinhos/SP. Disponível para Android.",
        type: ["Mobile"],
        techs: ["Android"],
        github: "https://github.com/joaopedro08-dev/ExploraBrasil",
    },
    {
        title: "Nexus-Frontend",
        description: "Plataforma com interface inspirada em ferramentas de IA com frontend em Next.js.",
        type: ["Web", "Front-end"],
        techs: ["TypeScript", "Next.js"],
        github: "https://github.com/joaopedro08-dev/Nexus-Frontend",
    },
    {
        title: "Nexus-Backend",
        description: "Backend para plataforma de IA, desenvolvido com Express, GraphQL e integração de modelos de linguagem.",
        type: ["Back-end"],
        techs: ["TypeScript", "Express", "GraphQL", "SQLite"],
        github: "https://github.com/joaopedro08-dev/Nexus-Backend",
    },
    {
        title: "Sprints",
        description: "Sistema de gerenciamento de biblioteca desenvolvido durante o curso no SENAI.",
        type: ["Web"],
        techs: ["HTML", "CSS", "PHP", "phpMyAdmin"],
        github: "https://github.com/joaopedro08-dev/Sprints",
    },
    {
        title: "Filmes-Frontend",
        description: "Catálogo de filmes com frontend em Vue.js/TypeScript.",
        type: ["Web", "Front-end"],
        techs: ["Vue", "TypeScript"],
        github: "https://github.com/joaopedro08-dev/Filmes-Frontend",
    },
    {
        title: "Filmes-Backend",
        description: "API de filmes com Express, TypeScript e integração com banco de dados MongoDB.",
        type: ["Back-end"],
        techs: ["Python", "FastAPI", "MongoDB"],
        github: "https://github.com/joaopedro08-dev/Filmes-Backend",
    },
    {
        title: "Todolist-Frontend",
        description: "Aplicação de lista de tarefas com frontend em JavaScript.",
        type: ["Web", "Front-end"],
        techs: ["JavaScript"],
        github: "https://github.com/joaopedro08-dev/Todolist-Frontend",
    },
    {
        title: "Todolist-Backend",
        description: "API de lista de tarefas com Python e FastAPI, banco de dados em memória.",
        type: ["Back-end"],
        techs: ["Python", "FastAPI"],
        github: "https://github.com/joaopedro08-dev/Todolist-Backend",
    },
    {
        title: "Authentication-Java",
        description: "API de autenticação simples com Spring Boot, GraphQL, JWT e PostgreSQL.",
        type: ["Back-end"],
        techs: ["Java", "Spring Boot", "GraphQL", "PostgreSQL"],
        github: "https://github.com/joaopedro08-dev/Authentication-Java",
    },
    {
        title: "Grade",
        description: "Jogo de palavras moderno inspirado no Wordle, com modos Single, Duo e Quartet.",
        type: ["Web", "Mobile"],
        techs: ["TypeScript", "React"],
        github: "https://github.com/joaopedro08-dev/Grade",
    },
    {
        title: "Projeto-Integrador",
        description: "Projeto integrador desenvolvido em 2025 por alunos do 3º ano do SESI Ourinhos/SP, em parceria com o SENAI.",
        type: ["Web"],
        techs: ["HTML", "CSS"],
        github: "https://github.com/joaopedro08-dev/Projeto-Integrador",
    },
    {
        title: "Fundamentals-Rust",
        description: "Fundamentos básicos da linguagem Rust utilizando o gerenciador de pacotes Cargo.",
        type: ["Estudo"],
        techs: ["Rust"],
        github: "https://github.com/joaopedro08-dev/Fundamentals-Rust",
    },
    {
        title: "Anabolizantes",
        description: "Site informativo sobre anabolizantes, seus usos, riscos e efeitos colaterais.",
        type: ["Web"],
        techs: ["HTML", "CSS"],
        github: "https://github.com/joaopedro08-dev/Anabolizantes",
    },
];