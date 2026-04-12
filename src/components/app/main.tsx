import HeroSection from "./sections/hero-section";
import AboutSection from "./sections/about-me-section";
import ProjectsSection from "./sections/projects-section";
import SkillsSection from "./sections/skills-sections";
import ContactSection from "./sections/contact-section";

interface MainProps {
    className?: string;
}

export default function Main({ className = "" }: MainProps) {
    return (
        <main className={`w-full flex-1 ${className}`}>
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <SkillsSection />
            <ContactSection />
        </main>
    );
}