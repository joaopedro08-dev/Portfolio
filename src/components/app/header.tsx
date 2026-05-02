import { Button } from "@/components/ui/button";
import { CodeIcon } from "lucide-react";
import { ModeToggle } from "../mode-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { motion } from "framer-motion";
import { fadeInDown, fadeInUp } from "@/lib/animations";
import { useState, useEffect } from "react";
import { useLanguage } from "@/components/language-provider";

export default function Header() {
    const { content } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const sections = ["home", "about", "projects", "skills", "contact"];

        const observer = new IntersectionObserver(
            (entries: IntersectionObserverEntry[]) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0,
                rootMargin: "-80px 0px -85% 0px"
            }
        );

        sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const navLinks = [
        { label: content.nav.home, href: "#home" },
        { label: content.nav.about, href: "#about" },
        { label: content.nav.projects, href: "#projects" },
        { label: content.nav.skills, href: "#skills" },
        { label: content.nav.contact, href: "#contact" },
    ];

    return (
        <motion.header
            className={`w-full fixed top-0 left-0 right-0 border-b z-50 transition-all duration-300 ${isScrolled
                ? "bg-linear-to-r from-primary/10 via-card/50 to-secondary/10 backdrop-blur-md border-primary/20"
                : "bg-transparent border-transparent"
                }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4">
                <motion.div
                    className="flex items-center justify-between md:flex-1 md:justify-start"
                    variants={fadeInDown}
                    initial="hidden"
                    animate="visible"
                    custom={0}
                >
                    <motion.a
                        href="/"
                        className="flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <Button size="icon" variant="outline"><CodeIcon /></Button>
                        <h2 className="font-bold text-lg">João Pedro</h2>
                    </motion.a>
                    <div className="md:hidden flex items-center gap-2">
                        <LanguageToggle />
                        <ModeToggle />
                    </div>
                </motion.div>

                <motion.nav
                    className="w-full md:flex-1 md:flex md:justify-center flex justify-center items-center"
                    variants={fadeInDown}
                    initial="hidden"
                    animate="visible"
                    custom={1}
                >
                    <ul className="flex flex-wrap items-center gap-4 md:gap-6 justify-center">
                        {navLinks.map((link, index) => (
                            <motion.li
                                key={link.label}
                                variants={fadeInUp}
                                initial="hidden"
                                animate="visible"
                                custom={index}
                                whileHover={{ scale: 1.1 }}
                            >
                                <a href={link.href}
                                    className={`relative text-sm transition-colors ${activeSection === link.href.slice(1)
                                        ? "text-primary font-medium"
                                        : "text-muted-foreground hover:text-primary"
                                        }
                                    after:absolute after:left-0 after:-bottom-0.5
                                    after:h-px after:bg-primary
                                    ${activeSection === link.href.slice(1) ? "after:w-full" : "after:w-0"}
                                    after:transition-all after:duration-300
                                    hover:after:w-full`}>
                                    {link.label}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </motion.nav>

                <motion.div
                    className="hidden md:flex md:flex-1 md:justify-end"
                    variants={fadeInDown}
                    initial="hidden"
                    animate="visible"
                    custom={2}
                >
                    <div className="flex items-center gap-2">
                        <LanguageToggle />
                        <ModeToggle />
                    </div>
                </motion.div>
            </div>
        </motion.header>
    )
}