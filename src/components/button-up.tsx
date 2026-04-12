import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ButtonUp() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className={`fixed bottom-4 right-4 z-50 flex items-center justify-center transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <Button
                onClick={scrollToTop}
                size="icon-lg"
                variant="default"
                className="rounded-full hover:bg-primary/80 hover:-translate-y-1 transition-all"
                aria-label="Voltar ao topo"
            >
                <ArrowUp className="h-5! w-5!" />
            </Button>
        </div>
    );
}