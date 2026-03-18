import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import Footer from "./Footer"

export default function CutomSidebar() {
  return (
    <Sidebar id="custom-sidebar" variant="floating" collapsible="icon">
      <SidebarHeader>header</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>Teste</SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Footer />
      </SidebarFooter>
    </Sidebar>
  )
}