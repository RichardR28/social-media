import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"

export default function CutomSidebar() {
  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarHeader>header</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>Teste</SidebarGroup>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  )
}