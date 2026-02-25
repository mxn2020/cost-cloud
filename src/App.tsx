import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import OverviewPage from "./pages/OverviewPage";
import ResourcesPage from "./pages/ResourcesPage";
import BudgetsPage from "./pages/BudgetsPage";

export default function App() {
  return (<BrowserRouter>
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ marginLeft: "var(--sidebar-width)", flex: 1, minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/budgets" element={<BudgetsPage />} />
          <Route path="/providers" element={<BudgetsPage />} />
          <Route path="/settings" element={<OverviewPage />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>);
}
