import { BrowserRouter, Routes, Route } from "react-router";
import { CutomSidebar } from "./custom-components";
import { Home } from "./views";
import { SidebarProvider } from "./components/ui/sidebar";

export default function Router() {

  return (
    <SidebarProvider defaultOpen={false}>
      <CutomSidebar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </SidebarProvider>
  )
}