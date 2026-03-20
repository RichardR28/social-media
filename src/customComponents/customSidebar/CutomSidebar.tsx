import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"
import Header from "./Header"
import { Content } from "./Content"
import Footer from "./Footer"

export default function CutomSidebar() {
  return (
    <Sidebar id="custom-sidebar" variant="floating" collapsible="icon">
      <SidebarHeader className="pt-4 pb-4 h-auto overflow-hidden">
        <Header />
      </SidebarHeader>
      <SidebarContent>
        <Content />
      </SidebarContent>
      <SidebarFooter>
        <Footer />
      </SidebarFooter>
    </Sidebar>
  )
}