import { BrowserRouter, Routes, Route } from "react-router";
import { CutomSidebar } from "./custom-components";
import { Home } from "./views";
import { SidebarProvider } from "./components/ui/sidebar";
import { ThemeProvider } from "./custom-components/themeProvider/ThemeProvider";


export default function Router() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <SidebarProvider defaultOpen={false} style={{
        "--sidebar-width": "180px",
        "--sidebar-width-icon": "75px"
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