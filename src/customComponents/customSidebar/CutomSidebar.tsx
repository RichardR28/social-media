import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import Header from "./Header"
import Footer from "./Footer"

export default function CutomSidebar() {
  return (
    <Sidebar id="custom-sidebar" variant="floating" collapsible="icon">
      <SidebarHeader className="pt-4 pb-4">
        <Header />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="pt-0">Teste</SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Footer />
      </SidebarFooter>
    </Sidebar>
  )
}