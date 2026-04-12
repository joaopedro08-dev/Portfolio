import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn, staggerContainer } from "@/lib/animations";

const words = ["Web", "Mobile", "Full-Stack", "Back-end", "Front-end", "DevOps", "UI/UX"];

export default function HeroSection() {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        const word = words[wordIndex];

        const timeout = setTimeout(() => {
            if (paused) {
                setPaused(false);
                setDeleting(true);
                return;
            }

            if (!deleting) {
                setText(word.slice(0, text.length + 1));
                if (text.length + 1 === word.length) setPaused(true);
            } else {
                setText(word.slice(0, text.length - 1));
                if (text.length - 1 === 0) {
                    setDeleting(false);
                    setWordIndex((i) => (i + 1) % words.length);
                }
            }
        }, paused ? 2000 : deleting ? 80 : 150);

        return () => clearTimeout(timeout);
    }, [text, deleting, wordIndex, paused]);

    return (
        <motion.section
            id="home"
            className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <motion.div variants={scaleIn} custom={0}>
                <Badge variant="outline" className="flex items-center gap-2 rounded-full px-4 py-1 text-xs">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                    </span>
                    Disponível para projetos
                </Badge>
            </motion.div>

            <motion.div className="flex flex-col items-center gap-2 w-full" variants={fadeInUp} custom={1}>
                <motion.h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight" variants={fadeInUp} custom={2}>
                    Olá, eu sou o João Pedro
                </motion.h1>

                <motion.div className="flex items-center justify-center gap-2 md:gap-3 text-xl sm:text-2xl md:text-5xl lg:text-6xl font-bold tracking-tight flex-wrap" variants={fadeInUp} custom={3}>
                    <span>Desenvolvedor</span>
                    <span className="text-muted-foreground">
                        {text}
                        <span className="inline-block w-0.5 h-[1em] bg-foreground ml-1 align-middle animate-pulse" />
                    </span>
                </motion.div>
            </motion.div>

            <motion.p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed" variants={fadeInUp} custom={4}>
                Apaixonado por criar soluções inovadoras e interfaces intuitivas que geram impacto real.
            </motion.p>

            <motion.div className="flex flex-wrap items-center justify-center gap-3 mt-2" variants={staggerContainer} initial="hidden" animate="visible">
                <motion.div variants={fadeInUp} custom={5} whileHover={{ scale: 1.05 }}>
                    <Button size="lg" asChild>
                        <a href="#projects">
                            Ver projetos
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                </motion.div>

                <motion.div variants={fadeInUp} custom={6} whileHover={{ scale: 1.05 }}>
                    <Button size="lg" variant="outline" asChild>
                        <a href="#contact">
                            <Mail className="mr-2 h-4 w-4" />
                            Entre em contato
                        </a>
                    </Button>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}