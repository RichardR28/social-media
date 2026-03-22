import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { CustomSidebar, PageContainer, ThemeProvider } from "./customComponents";
import { Home, LoginPage, CreateAccount } from "./views";
import { SidebarProvider } from "./components/ui/sidebar";

const withoutSidebarPages = ["/login", "/register"];

function App() {
  const { pathname } = useLocation();
  const showSidebar = !withoutSidebarPages.includes(pathname);

  return (
    <SidebarProvider defaultOpen={false} style={{
      "--sidebar-width": "190px",
      "--sidebar-width-icon": "70px"
    } as React.CSSProperties}>
      {showSidebar && <CustomSidebar />}
      <main className="p-[8px] flex flex-1 justify-start">
        <PageContainer>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<CreateAccount />} />
          </Routes>
        </PageContainer>
      </main>
    </SidebarProvider>
  );
}

export default function Router() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  );
}