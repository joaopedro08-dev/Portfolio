import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, ExternalLink } from "lucide-react";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn, staggerContainer } from "@/lib/animations";
import { useLanguage } from "@/components/language-provider";

type Contact = {
    label: string;
    value: string;
    href: string;
    icon: React.ReactNode;
    external: boolean;
    color: string;
    bgColor: string;
};

export default function ContactSection() {
    const { content } = useLanguage();

    const contacts: Contact[] = [
        {
            label: "GitHub",
            value: "joaopedro08-dev",
            href: "https://github.com/joaopedro08-dev",
            icon: <BsGithub size={20} />,
            external: true,
            color: "#FFFFFF",
            bgColor: "bg-gray-800 dark:bg-gray-700",
        },
        {
            label: "LinkedIn",
            value: "João Pedro Dala Dea Mello",
            href: "https://www.linkedin.com/in/jo%C3%A3o-pedro-dala-dea-mello-3266003a3/",
            icon: <BsLinkedin size={20} />,
            external: true,
            color: "#0A66C2",
            bgColor: "bg-blue-50 dark:bg-blue-950",
        },
        {
            label: "WhatsApp",
            value: "+55 (14) 99681-5396",
            href: "https://wa.me/5514996815396",
            icon: <BsWhatsapp size={20} />,
            external: true,
            color: "#25D366",
            bgColor: "bg-green-50 dark:bg-green-950",
        },
        {
            label: "Email",
            value: "joao.p.mello.dev@gmail.com",
            href: "mailto:joao.p.mello.dev@gmail.com",
            icon: <Mail size={20} />,
            external: false,
            color: "#EA4335",
            bgColor: "bg-red-50 dark:bg-red-950",
        },
    ];

    return (
        <motion.section
            id="contact"
            className="py-12 px-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className="mx-auto flex flex-col gap-10">
                <motion.div className="flex flex-col gap-2" variants={staggerContainer} initial="hidden" animate="visible">
                    <motion.span className="text-xs font-medium uppercase tracking-widest text-primary" variants={fadeInUp} custom={0}>
                        {content.contact.label}
                    </motion.span>
                    <motion.h2 className="text-3xl md:text-4xl font-bold tracking-tight" variants={fadeInUp} custom={1}>
                        {content.contact.titlePrefix} <span className="text-primary">{content.contact.titleHighlight}</span>
                    </motion.h2>
                    <motion.p className="text-sm text-muted-foreground max-w-lg" variants={fadeInUp} custom={2}>
                        {content.contact.description}
                    </motion.p>
                </motion.div>

                <motion.div className="flex items-center gap-2 text-sm text-muted-foreground -mt-4" variants={fadeInUp} custom={3}>
                    <MapPin size={14} className="text-primary shrink-0" />
                    <span>{content.contact.location}</span>
                </motion.div>

                <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" variants={staggerContainer} initial="hidden" animate="visible">
                    {contacts.map((contact, index) => (
                        <motion.div key={contact.label} variants={scaleIn} custom={index}>
                            <Card className="border-border/60 hover:border-primary/40 transition-colors group h-full">
                                <CardContent className="flex flex-col gap-4 p-5">
                                    <motion.div
                                        className={`h-10 w-10 rounded-md border flex items-center justify-center transition-colors ${contact.bgColor}`}
                                        style={{ color: contact.color, borderColor: contact.color + "40" }}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                    >
                                        {contact.icon}
                                    </motion.div>

                                    <div className="flex flex-col gap-0.5">
                                        <span className="text-xs text-muted-foreground">{contact.label}</span>
                                        <span className="text-sm font-medium leading-snug break-all">
                                            {contact.value}
                                        </span>
                                    </div>

                                    <motion.div whileHover={{ scale: 1.05 }}>
                                        <Button variant="outline" size="sm" className="w-full text-xs mt-auto" asChild>
                                            <a
                                                href={contact.href}
                                                target={contact.external ? "_blank" : undefined}
                                                rel={contact.external ? "noopener noreferrer" : undefined}
                                            >
                                                {content.contact.access}
                                                <ExternalLink className="ml-1.5 h-3 w-3" />
                                            </a>
                                        </Button>
                                    </motion.div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </motion.section>
    );
}