import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { languageFlags, languageLabels, supportedLanguages } from "@/assets/ts/languages";
import { useLanguage } from "@/components/language-provider";

export function LanguageToggle() {
  const { language, setLanguage, content } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative size-9 hover:text-primary transition-colors">
          <span aria-hidden className="text-base leading-none">{languageFlags[language]}</span>
          <span className="sr-only">{content.language.srOnly}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44">
        {supportedLanguages.map((item) => (
          <DropdownMenuItem
            key={item}
            onClick={() => setLanguage(item)}
            className="flex items-center justify-between cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <span aria-hidden>{languageFlags[item]}</span>
              <span>{languageLabels[item]}</span>
            </span>
            {language === item && <Check className="size-3 text-primary" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}