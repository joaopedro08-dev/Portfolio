import { Moon, Sun, Monitor, Check } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const { content } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild >
        <Button variant="outline" size="icon" className="relative size-9 hover:text-primary transition-colors">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">{content.theme.srOnly}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="flex items-center justify-between cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <Sun className="size-4" />
            <span>{content.theme.light}</span>
          </div>
          {theme === "light" && <Check className="size-3 text-primary" />}
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="flex items-center justify-between cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <Moon className="size-4" />
            <span>{content.theme.dark}</span>
          </div>
          {theme === "dark" && <Check className="size-3 text-primary" />}
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="flex items-center justify-between cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <Monitor className="size-4" />
            <span>{content.theme.system}</span>
          </div>
          {theme === "system" && <Check className="size-3 text-primary" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}