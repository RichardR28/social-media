import { SidebarGroup } from "@/components/ui/sidebar";
import { NavSidebarButton } from "./NavSidebarButton";
import { LayoutDashboard, Table2, CalendarDays, Grid3X3, Eye } from "lucide-react";

export function Content() {


  return (
    <section className="flex w-full flex-col gap-4">
      <SidebarGroup className="pt-0 flex w-full flex-col gap-4">
        <NavSidebarButton label="Kanban" href="/kanban" tooltip="Status dos projetos" icon={<LayoutDashboard />} />
        <NavSidebarButton label="Planilha" href="/sheet" tooltip="Listagem de tarefas" icon={<Table2 />} />
        <NavSidebarButton label="Calendário" href="/calendar" tooltip="Calendário de posts" icon={<CalendarDays />} />
        <NavSidebarButton label="Linha editorial" href="/grid-instagram" tooltip="Linha editorial" icon={<Grid3X3 />} />
        <NavSidebarButton label="Aprovação" href="/approval" tooltip="Solicitações de aprovação" icon={<Eye />} />
      </SidebarGroup>
    </section>
  )
}