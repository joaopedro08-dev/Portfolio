import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import Me from "@/assets/images/profile.jpeg";
import Resume from "@/assets/pdf/currículo-joao.p.mello-dev.pdf";
import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";

export default function AboutSection() {
    return (
        <motion.section
            id="about"
            className="py-12 px-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div className="flex justify-center md:justify-start" variants={slideInLeft} custom={0}>
                    <motion.div
                        className="relative flex items-center justify-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <motion.div
                            className="absolute w-75 h-75 md:w-85 md:h-85 rounded-full border border-dashed border-primary/30"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />
                        <div className="absolute w-67.5 h-67.5 md:w-77 md:h-77 rounded-full border border-primary/10" />

                        <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-primary/20">
                            <img
                                src={Me}
                                alt="Foto de João Pedro"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div className="flex flex-col gap-5" variants={slideInRight} custom={0}>
                    <motion.div variants={fadeInUp} custom={0}>
                        <Badge variant="outline" className="w-fit rounded-full px-4 py-1 text-xs">
                            Sobre mim
                        </Badge>
                    </motion.div>

                    <motion.h2 className="text-3xl md:text-4xl font-bold tracking-tight" variants={fadeInUp} custom={1}>
                        João Pedro Dala Dea Mello
                    </motion.h2>

                    <motion.div className="flex flex-col gap-3 text-muted-foreground text-sm leading-relaxed" variants={staggerContainer} initial="hidden" animate="visible">
                        <motion.p variants={fadeInUp} custom={2}>
                            Tenho 18 anos e iniciei minha jornada como desenvolvedor em 2024, impulsionado pela paixão pela programação durante o curso de Análise e Desenvolvimento de Sistemas no Senai de Ourinhos/SP.
                        </motion.p>
                        <motion.p variants={fadeInUp} custom={3}>
                            Desde então, venho me dedicando ao desenvolvimento de soluções web e mobile, sempre buscando aprender novas tecnologias e criar interfaces que proporcionem uma experiência intuitiva e agradável ao usuário.
                        </motion.p>
                        <motion.p variants={fadeInUp} custom={4}>
                            Acredito que bom código vai além da funcionalidade — ele precisa ser limpo, escalável e pensado para as pessoas.
                        </motion.p>
                    </motion.div>

                    <motion.div variants={fadeInUp} custom={5} whileHover={{ scale: 1.05 }}>
                        <Button variant="outline" className="w-fit mt-2" asChild>
                            <a href={Resume} target="_blank" rel="noopener noreferrer">
                                <FileText className="mr-2 h-4 w-4" />
                                Ver currículo
                            </a>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}