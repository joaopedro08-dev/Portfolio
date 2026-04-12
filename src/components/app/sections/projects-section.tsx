import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { BsGithub } from "react-icons/bs";
import { projects } from "@/assets/ts/projects";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn, staggerContainer } from "@/lib/animations";

const TYPE_ORDER = ["Todos", "Full-stack", "Web", "Mobile", "Front-end", "Back-end", "Desktop", "Estudo"];

const allTypes = TYPE_ORDER.filter(
    (t) => t === "Todos" || projects.some((p) => p.type.includes(t))
);

const allTechs = [
    "Todas",
    ...Array.from(new Set(projects.flatMap((p) => p.techs))).sort(),
];

export default function ProjectsSection() {
    const [activeType, setActiveType] = useState("Todos");
    const [activeTech, setActiveTech] = useState("Todas");

    const filtered = projects.filter((p) => {
        const matchType = activeType === "Todos" || p.type.includes(activeType);
        const matchTech = activeTech === "Todas" || p.techs.includes(activeTech);
        return matchType && matchTech;
    });

    const clearFilters = () => {
        setActiveType("Todos");
        setActiveTech("Todas");
    };

    const hasActiveFilter = activeType !== "Todos" || activeTech !== "Todas";

    return (
        <motion.section
            id="projects"
            className="py-12 px-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className="mx-auto flex flex-col gap-10">
                <motion.div className="flex flex-col gap-2" variants={staggerContainer} initial="hidden" animate="visible">
                    <motion.span className="text-xs font-medium uppercase tracking-widest text-primary" variants={fadeInUp} custom={0}>
                        Projetos
                    </motion.span>
                    <motion.h2 className="text-3xl md:text-4xl font-bold tracking-tight" variants={fadeInUp} custom={1}>
                        O que eu já <span className="text-primary">construí</span>
                    </motion.h2>
                    <motion.p className="text-sm text-muted-foreground max-w-lg" variants={fadeInUp} custom={2}>
                        Projetos desenvolvidos ao longo da minha jornada, explorando diferentes tecnologias e desafios reais.
                    </motion.p>
                </motion.div>

                <motion.div className="flex flex-col gap-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <motion.div className="flex flex-wrap items-center gap-2" variants={fadeInUp} custom={0}>
                        <span className="text-xs text-muted-foreground w-8">Tipo</span>
                        {allTypes.map((type, i) => (
                            <motion.div key={type} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }}>
                                <Button
                                    variant={activeType === type ? "default" : "outline"}
                                    size="sm"
                                    className="rounded-full text-xs h-7 px-3"
                                    onClick={() => setActiveType(type)}
                                >
                                    {type}
                                </Button>
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.div className="flex flex-wrap items-center gap-2" variants={fadeInUp} custom={1}>
                        <span className="text-xs text-muted-foreground w-8">Tech</span>
                        {allTechs.map((tech, i) => (
                            <motion.div key={tech} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }}>
                                <Button
                                    variant={activeTech === tech ? "default" : "outline"}
                                    size="sm"
                                    className="rounded-full text-xs h-7 px-3"
                                    onClick={() => setActiveTech(tech)}
                                >
                                    {tech}
                                </Button>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div className="flex items-center justify-between -mt-4" variants={fadeInUp} custom={2}>
                    <span className="text-xs text-muted-foreground">
                        {filtered.length} projeto{filtered.length !== 1 ? "s" : ""} encontrado{filtered.length !== 1 ? "s" : ""}
                    </span>
                    {hasActiveFilter && (
                        <Button variant="ghost" size="sm" className="text-xs h-7" onClick={clearFilters}>
                            Limpar filtros
                        </Button>
                    )}
                </motion.div>

                {filtered.length > 0 ? (
                    <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        {filtered.map((project) => (
                            <motion.div key={project.title} variants={scaleIn} custom={0} whileHover={{ y: -5 }}>
                                <Card className="border-border/60 flex flex-col hover:shadow-lg transition-shadow h-full">
                                    <CardContent className="flex flex-col gap-3 p-4 flex-1">
                                        <Badge variant="outline" className="w-fit text-xs rounded-full px-3">
                                            {project.type.join(" • ")}
                                        </Badge>

                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-sm font-semibold leading-snug">{project.title}</h3>
                                            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                                                {project.description}
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
                                                        GitHub
                                                    </a>
                                                </Button>
                                            </motion.div>
                                            {project.demo && (
                                                <motion.div whileHover={{ scale: 1.05 }} className="flex-1">
                                                    <Button size="sm" className="w-full text-xs" asChild>
                                                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                                            <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                                                            Demo
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
                ) : (
                    <motion.div className="flex flex-col items-center justify-center py-16 text-muted-foreground gap-2" variants={fadeInUp} custom={3}>
                        <p className="text-sm">Nenhum projeto encontrado com esses filtros.</p>
                        <Button variant="ghost" size="sm" onClick={clearFilters}>
                            Limpar filtros
                        </Button>
                    </motion.div>
                )}

            </div>
        </motion.section>
    );
}