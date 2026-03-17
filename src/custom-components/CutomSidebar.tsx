import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"

export default function CutomSidebar() {
  return (
    <Sidebar side="left" variant="floating" collapsible="offcanvas">
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        <SidebarGroup>t</SidebarGroup>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  )
}