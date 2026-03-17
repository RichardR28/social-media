import { BrowserRouter, Routes, Route } from "react-router";
import { CutomSidebar } from "./custom-components";
import { Home } from "./views";

export default function Router() {
  return (
    <main>
      <CutomSidebar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}