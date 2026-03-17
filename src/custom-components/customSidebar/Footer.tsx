import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useSidebar } from "@/components/ui/sidebar"

export default function Footer() {
  const { open, setOpen } = useSidebar();
  return (
    <section className="flex items-center">
      <Button onClick={() => setOpen(!open)} variant="outline" size="icon" className="rounded-full">
        <ArrowRight className="size-4" />
      </Button>
    </section>
  )
}
