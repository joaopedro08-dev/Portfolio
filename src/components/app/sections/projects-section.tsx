import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { BsGithub } from "react-icons/bs";
import { projects } from "@/assets/ts/projects";
import { getProjectTypeKey, projectDescriptions } from "@/assets/ts/languages";
import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn, staggerContainer } from "@/lib/animations";

type ProjectTypeKey = "all" | "fullstack" | "web" | "mobile" | "frontend" | "backend" | "desktop" | "study";

const TYPE_ORDER: ProjectTypeKey[] = ["all", "fullstack", "web", "mobile", "frontend", "backend", "desktop", "study"];
const ALL_TECHS = "__all__";
const MOBILE_BREAKPOINT = 768;
const MOBILE_PROJECTS_PER_LOAD = 3;
const DESKTOP_PROJECTS_PER_LOAD = 6;

const getProjectsPerLoad = () => {
    if (typeof window === "undefined") return DESKTOP_PROJECTS_PER_LOAD;
    return window.innerWidth < MOBILE_BREAKPOINT ? MOBILE_PROJECTS_PER_LOAD : DESKTOP_PROJECTS_PER_LOAD;
};

const typeMatches: Record<ProjectTypeKey, string[]> = {
    all: ["Todos", "All"],
    fullstack: ["Full-stack", "Full-Stack"],
    web: ["Web"],
    mobile: ["Mobile"],
    frontend: ["Front-end", "Frontend"],
    backend: ["Back-end", "Backend"],
    desktop: ["Desktop"],
    study: ["Estudo", "Study"],
};

const matchesType = (projectTypes: string[], typeKey: ProjectTypeKey) => {
    if (typeKey === "all") {
        return true;
    }

    return projectTypes.some((type) => typeMatches[typeKey].includes(type));
};

export default function ProjectsSection() {
    const { content, language } = useLanguage();
    const [activeType, setActiveType] = useState<ProjectTypeKey>("all");
    const [activeTech, setActiveTech] = useState(ALL_TECHS);
    const [projectsPerLoad, setProjectsPerLoad] = useState(getProjectsPerLoad);
    const [visiblePages, setVisiblePages] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            setProjectsPerLoad(getProjectsPerLoad());
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const filtered = projects.filter((p) => {
        const matchType = matchesType(p.type, activeType as ProjectTypeKey);
        const matchTech = activeTech === ALL_TECHS || p.techs.includes(activeTech);
        return matchType && matchTech;
    });

    useEffect(() => {
        setVisiblePages(1);
    }, [activeType, activeTech, projectsPerLoad]);

    const visibleProjectsCount = Math.min(filtered.length, visiblePages * projectsPerLoad);
    const initialVisibleCount = Math.min(projectsPerLoad, filtered.length);

    const clearFilters = () => {
        setActiveType("all");
        setActiveTech(ALL_TECHS);
        setVisiblePages(1);
    };

    const hasActiveFilter = activeType !== "all" || activeTech !== ALL_TECHS;
    const visibleProjects = filtered.slice(0, visibleProjectsCount);
    const hasMoreProjects = visibleProjects.length < filtered.length;
    const allTypes = TYPE_ORDER.filter((typeKey) => typeKey === "all" || projects.some((project) => matchesType(project.type, typeKey)));
    const allTechs = [ALL_TECHS, ...Array.from(new Set(projects.flatMap((project) => project.techs))).sort()];

    const getTypeLabel = (typeKey: ProjectTypeKey) => content.projects.types[typeKey];
    const getTechLabel = (tech: string) => (tech === ALL_TECHS ? content.projects.allTechs : tech);

    return (
        <motion.section
            id="projects"
            className="py-12 px-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className="w-full max-w-7xl mx-auto flex flex-col gap-10">
                <motion.div className="flex flex-col gap-2" variants={staggerContainer} initial="hidden" animate="visible">
                    <motion.span className="text-xs font-medium uppercase tracking-widest text-primary" variants={fadeInUp} custom={0}>
                        {content.projects.label}
                    </motion.span>
                    <motion.h2 className="text-3xl md:text-4xl font-bold tracking-tight" variants={fadeInUp} custom={1}>
                        {content.projects.titlePrefix} <span className="text-primary">{content.projects.titleHighlight}</span>
                    </motion.h2>
                    <motion.p className="text-sm text-muted-foreground max-w-lg" variants={fadeInUp} custom={2}>
                        {content.projects.description}
                    </motion.p>
                </motion.div>

                <motion.div className="flex flex-col gap-5" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <motion.div className="flex flex-col gap-2.5" variants={fadeInUp} custom={0}>
                        <span className="text-xs md:text-sm text-muted-foreground font-medium px-0.5">{content.projects.typeLabel}:</span>
                        <div className="flex flex-wrap gap-2">
                            {allTypes.map((typeKey, i) => (
                                <motion.div key={typeKey} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }}>
                                    <Button
                                        variant={activeType === typeKey ? "default" : "outline"}
                                        size="sm"
                                        className="rounded-full text-xs md:text-sm h-7 md:h-8 px-3 md:px-4"
                                        onClick={() => {
                                            setActiveType(typeKey);
                                            setVisiblePages(1);
                                            if (typeKey === "all") {
                                                setActiveTech(ALL_TECHS);
                                            }
                                        }}
                                    >
                                        {getTypeLabel(typeKey)}
                                    </Button>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div className="flex flex-col gap-2.5" variants={fadeInUp} custom={1}>
                        <span className="text-xs md:text-sm text-muted-foreground font-medium px-0.5">{content.projects.techLabel}:</span>
                        <div className="flex flex-wrap gap-2">
                            {allTechs.map((tech, i) => (
                                <motion.div key={tech} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }}>
                                    <Button
                                        variant={activeTech === tech ? "default" : "outline"}
                                        size="sm"
                                        className="rounded-full text-xs md:text-sm h-7 md:h-8 px-3 md:px-4"
                                        onClick={() => {
                                            setActiveTech(tech);
                                            setVisiblePages(1);
                                        }}
                                    >
                                        {getTechLabel(tech)}
                                    </Button>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4" variants={fadeInUp} custom={2}>
                    <span className="text-xs sm:text-sm text-muted-foreground">
                        {content.projects.count(visibleProjects.length, filtered.length)}
                    </span>
                    {hasActiveFilter && (
                        <Button variant="ghost" size="sm" className="text-xs sm:text-sm h-7 md:h-8 w-fit" onClick={clearFilters}>
                            {content.projects.clearFilters}
                        </Button>
                    )}
                </motion.div>

                {filtered.length > 0 ? (
                    <>
                        <motion.div
                            className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                        >
                            {visibleProjects.map((project, index) => (
                                <motion.div key={project.title} variants={scaleIn} custom={index} whileHover={{ y: -5 }}>
                                    <Card className="border-border/60 flex flex-col hover:shadow-lg transition-shadow h-full">
                                        <CardContent className="flex flex-col gap-3 p-4 flex-1">
                                            <Badge variant="outline" className="w-fit text-xs rounded-full px-3">
                                                {project.type.map((type) => content.projects.projectTypeBadges[getProjectTypeKey(type) as keyof typeof content.projects.projectTypeBadges] ?? type).join(" • ")}
                                            </Badge>

                                            <div className="flex flex-col gap-2">
                                                <h3 className="text-sm font-semibold leading-snug">{project.title}</h3>
                                                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                                                    {projectDescriptions[language][project.title] ?? project.description}
                                                </p>
                                            </div>

                                            <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                                                {project.techs.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex gap-2 pt-1">
                                                <motion.div whileHover={{ scale: 1.05 }} className="flex-1">
                                                    <Button variant="outline" size="sm" className="w-full text-xs" asChild>
                                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                            <BsGithub className="mr-1.5 h-3.5 w-3.5" />
                                                            {content.projects.github}
                                                        </a>
                                                    </Button>
                                                </motion.div>
                                                {project.demo && (
                                                    <motion.div whileHover={{ scale: 1.05 }} className="flex-1">
                                                        <Button size="sm" className="w-full text-xs" asChild>
                                                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                                                <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                                                                {content.projects.demo}
                                                            </a>
                                                        </Button>
                                                    </motion.div>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>

                        {hasMoreProjects && (
                            <motion.div className="flex justify-center mt-2" variants={fadeInUp} custom={3}>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="rounded-full px-5"
                                    onClick={() => setVisiblePages((prev) => prev + 1)}
                                >
                                    {content.projects.showMore}
                                </Button>
                            </motion.div>
                        )}

                        {visibleProjects.length > initialVisibleCount && (
                            <motion.div className="flex justify-center mt-2" variants={fadeInUp} custom={4}>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="rounded-full px-5"
                                    onClick={() => setVisiblePages(1)}
                                >
                                    {content.projects.showLess}
                                </Button>
                            </motion.div>
                        )}
                    </>
                ) : (
                    <motion.div className="flex flex-col items-center justify-center py-16 text-muted-foreground gap-2" variants={fadeInUp} custom={3}>
                        <p className="text-sm">{content.projects.empty}</p>
                        <Button variant="ghost" size="sm" onClick={clearFilters}>
                            {content.projects.clearFilters}
                        </Button>
                    </motion.div>
                )}
            </div>
        </motion.section>
    );
}