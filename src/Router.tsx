import { BrowserRouter, Routes, Route } from "react-router";
import { CutomSidebar } from "./custom-components";
import { Home } from "./views";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";

export default function Router() {
  return (
    <SidebarProvider>
      <CutomSidebar />
      <SidebarTrigger />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </SidebarProvider>
  )
}