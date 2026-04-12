import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn, staggerContainer, staggerItem } from "@/lib/animations";

type Skill = {
    name: string;
    level: number;
};

type Category = {
    title: string;
    skills: Skill[];
};

const mastered: Category[] = [
    {
        title: "Front-end",
        skills: [
            { name: "React", level: 85 },
            { name: "TypeScript", level: 70 },
            { name: "JavaScript", level: 80 },
            { name: "Tailwind CSS", level: 80 },
            { name: "HTML & CSS", level: 90 },
            { name: "Next.js", level: 65 },
        ],
    },
    {
        title: "Back-end",
        skills: [
            { name: "Node.js / Express", level: 60 },
            { name: "Java / Spring Boot", level: 75 },
            { name: "Python / FastAPI", level: 60 },
            { name: "GraphQL", level: 65 },
            { name: "PHP", level: 60 },
        ],
    },
    {
        title: "Mobile",
        skills: [
            { name: "Ionic + React", level: 75 },
            { name: "Capacitor", level: 70 },
            { name: "Ionic + Angular", level: 60 },
            { name: "Flutter", level: 50 },
        ],
    },
    {
        title: "Banco de Dados",
        skills: [
            { name: "PostgreSQL", level: 75 },
            { name: "MySql", level: 70 },
            { name: "SQLite", level: 65 },
            { name: "MongoDB", level: 65 },
            { name: "phpMyAdmin", level: 60 },
        ],
    },
    {
        title: "Ferramentas",
        skills: [
            { name: "Git & GitHub", level: 80 },
            { name: "Vite", level: 75 },
            { name: "Figma", level: 65 },
            { name: "Docker", level: 55 },
            { name: "IDEs da JetBrains", level: 70 },
            { name: "VS Code", level: 80 },
        ],
    },
];

const learning: Category[] = [
    {
        title: "Linguagens",
        skills: [
            { name: "Rust", level: 20 },            
        ],
    },
    {
        title: "Front-end",
        skills: [
            { name: "Vue.js", level: 20 },
        ],
    },
    {
        title: "Desktop",
        skills: [
            { name: "Tauri", level: 25 },
        ],
    },
    {
        title: "NoSql",
        skills: [
            { name: "Redis", level: 20 },
        ],
    },
    {
        title: "Cloud",
        skills: [
            { name: "AWS", level: 15 },
            { name: "Azure", level: 25 },
        ],
    },
    {
        title: "Outros",
        skills: [
            { name: "IA / LLMs", level: 35 },
        ],
    },
];

function SkillCard({ category }: { category: Category }) {
    return (
        <motion.div variants={scaleIn} custom={0}>
            <Card className="border-border/60 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3 pt-4 px-4">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                        <CardTitle className="text-sm font-semibold">{category.title}</CardTitle>
                    </motion.div>
                </CardHeader>
                <CardContent className="flex flex-col gap-4 px-4 pb-4">
                    {category.skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className="flex flex-col gap-2"
                            variants={staggerItem}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: index * 0.05 }}
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground font-medium">{skill.name}</span>
                                <motion.span
                                    className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 100, delay: index * 0.05 + 0.1 }}
                                >
                                    {skill.level}%
                                </motion.span>
                            </div>
                            <motion.div
                                className="relative"
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1, delay: index * 0.05 + 0.2 }}
                            >
                                <Progress value={skill.level} className="h-2" />
                            </motion.div>
                        </motion.div>
                    ))}
                </CardContent>
            </Card>
        </motion.div>
    );
}

export default function SkillsSection() {
    return (
        <motion.section
            id="skills"
            className="py-12 px-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className="mx-auto flex flex-col gap-10">
                <motion.div className="flex flex-col gap-2" variants={staggerContainer} initial="hidden" animate="visible">
                    <motion.span className="text-xs font-medium uppercase tracking-widest text-primary" variants={fadeInUp} custom={0}>
                        Habilidades
                    </motion.span>
                    <motion.h2 className="text-3xl md:text-4xl font-bold tracking-tight" variants={fadeInUp} custom={1}>
                        Minhas <span className="text-primary">skills</span>
                    </motion.h2>
                    <motion.p className="text-sm text-muted-foreground max-w-lg" variants={fadeInUp} custom={2}>
                        Tecnologias e ferramentas que utilizo no dia a dia e as que estou explorando.
                    </motion.p>
                </motion.div>

                <Tabs defaultValue="dominando">
                    <TabsList className="mb-6">
                        <TabsTrigger value="dominando">
                            Dominando
                            <Badge variant="secondary" className="ml-2 text-xs px-1.5 py-0">
                                {mastered.reduce((acc, c) => acc + c.skills.length, 0)}
                            </Badge>
                        </TabsTrigger>
                        <TabsTrigger value="aprendendo">
                            Aprendendo
                            <Badge variant="secondary" className="ml-2 text-xs px-1.5 py-0">
                                {learning.reduce((acc, c) => acc + c.skills.length, 0)}
                            </Badge>
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="dominando">
                        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" variants={staggerContainer} initial="hidden" animate="visible">
                            {mastered.map((category) => (
                                <SkillCard key={category.title} category={category} />
                            ))}
                        </motion.div>
                    </TabsContent>

                    <TabsContent value="aprendendo">
                        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" variants={staggerContainer} initial="hidden" animate="visible">
                            {learning.map((category) => (
                                <SkillCard key={category.title} category={category} />
                            ))}
                        </motion.div>
                    </TabsContent>
                </Tabs>

            </div>
        </motion.section>
    );
}