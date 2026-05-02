import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";

export default function Footer() {
    const { content } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <motion.footer
            className="w-full border-t py-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <div className="px-6">
                <motion.div
                    className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-xs text-muted-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <p className="text-sm tracking-normal text-balance">© {currentYear} João Pedro. {content.footer.reserved}</p>
                    <p className="text-sm tracking-normal text-balance">{content.footer.developedBy} <span className="text-primary font-medium">João Pedro Dala Dea Mello</span></p>
                </motion.div>
            </div>
        </motion.footer>
    );
}