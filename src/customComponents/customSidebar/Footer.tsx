import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, Moon, Sun, PlusIcon } from "lucide-react"
import { useSidebar } from "@/components/ui/sidebar"
import { useTheme } from "../themeProvider/ThemeProvider";
import { Modal, CustomTooltip, Divider } from "../";
import CreatePostForm from "./CreatePostForm";

export default function Footer() {
  const { open, setOpen } = useSidebar();
  const { theme, setTheme } = useTheme();

  return (
    <section className="flex items-center justify-center flex-col gap-4 pb-3">
      <Modal title="Novo Post" description="Preencha as informações para criar um novo post" openTrigger={
        <CustomTooltip fullWidth description="Criar um novo post">
          {open ?
            <div className="flex w-full items-center justify-start gap-2">
              <Button variant="default" size="lg" className="w-full bg-orange-500 hover:bg-orange-600 text-white hover:text-black overflow-hidden">
                <PlusIcon className="size-6" />
                <span className="text-[16px] font-medium">Criar Post</span>
              </Button>
            </div>
            :
            <div className="w-full flex items-center justify-center gap-2">
              <Button variant="default" size="icon-lg" className="rounded-full size-12 bg-orange-500 hover:bg-orange-600 text-white hover:text-black">
                <PlusIcon className="size-6" />
              </Button>
            </div>
          }
        </CustomTooltip>
      }
      >
        <CreatePostForm />
      </Modal>
      <Divider />
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
