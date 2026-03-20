import { BrowserRouter, Routes, Route } from "react-router";
import { CutomSidebar, ThemeProvider } from "./customComponents";
import { Home } from "./views";
import { SidebarProvider } from "./components/ui/sidebar";


export default function Router() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <SidebarProvider defaultOpen={false} style={{
        "--sidebar-width": "190px",
        "--sidebar-width-icon": "70px"
      } as React.CSSProperties}>
        <CutomSidebar />
        <main className="p-[8px] flex flex-1 justify-start">
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
            </Routes>
          </BrowserRouter>
        </main>
      </SidebarProvider>
    </ThemeProvider>
  )
}