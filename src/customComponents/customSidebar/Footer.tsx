import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, Moon, Sun, PlusIcon } from "lucide-react"
import { useSidebar } from "@/components/ui/sidebar"
import { useTheme } from "../themeProvider/ThemeProvider";
import CustomTooltip from "../customTooltip/CustomTooltip";

export default function Footer() {
  const { open, setOpen } = useSidebar();
  const { theme, setTheme } = useTheme();

  return (
    <section className="flex items-center justify-center flex-col gap-3">
      <CustomTooltip fullWidth description="Criar um novo post">
        {open ?
          <div className="flex w-full items-center justify-start gap-2">
            <Button onClick={() => console.log("Add item clicked")} variant="default" size="lg" className="w-full bg-orange-500 hover:bg-orange-600 text-white hover:text-black overflow-hidden">
              <PlusIcon className="size-6" />
              <span className="text-[16px] font-medium">Criar Post</span>
            </Button>
          </div>
          :
          <div className="w-full flex items-center justify-center gap-2">
            <Button onClick={() => console.log("Add item clicked")} variant="default" size="icon-lg" className="rounded-full size-12 bg-orange-500 hover:bg-orange-600 text-white hover:text-black">
              <PlusIcon className="size-6" />
            </Button>
          </div>
        }
      </CustomTooltip>
      <hr className="w-full border-t" />
      <CustomTooltip description={theme === "dark" ? "Alterar para tema claro" : "Alterar para tema escuro"}>
        <div className="w-full flex items-center justify-center">
          <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} variant="outline" size="icon-lg" className="rounded-full size-12">
            {theme === "dark" ? <Sun className="size-6" /> : <Moon className="size-6" />}
          </Button>
        </div>
      </CustomTooltip>
      <CustomTooltip description={open ? "Recolher menu" : "Expandir menu"}>
        <div className="w-full flex items-center justify-center">
          <Button onClick={() => setOpen(!open)} variant="outline" size="icon-lg" className="rounded-full size-12">
            {open ? <ArrowLeft className="size-6" /> : <ArrowRight className="size-6" />}
          </Button>
        </div>
      </CustomTooltip>
    </section>
  )
}
