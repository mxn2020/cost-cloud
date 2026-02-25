import { describe, it, expect, vi } from "vitest"; import { render, screen } from "@testing-library/react"; import { MemoryRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar"; import OverviewPage from "../pages/OverviewPage"; import ResourcesPage from "../pages/ResourcesPage"; import BudgetsPage from "../pages/BudgetsPage";

// mock recharts to prevent resize observer errors in jest/jsdom
vi.mock("recharts", () => {
    const Original = vi.importActual("recharts");
    return { ...Original, ResponsiveContainer: ({ children }: any) => <div style={{ width: 800, height: 300 }}>{children}</div>, BarChart: () => <div data-testid="bar-chart" />, Bar: () => null, XAxis: () => null, YAxis: () => null, Tooltip: () => null };
});

function wrap(ui: React.ReactElement) { return render(<MemoryRouter>{ui}</MemoryRouter>); }

describe("Pages", () => {
    it("Sidebar renders", () => { wrap(<Sidebar />); expect(screen.getByText("CostCloud")).toBeInTheDocument(); });
    it("OverviewPage renders", () => { wrap(<OverviewPage />); expect(screen.getByText("Spending Overview")).toBeInTheDocument(); });
    it("ResourcesPage renders", () => { wrap(<ResourcesPage />); expect(screen.getByText("Resource Breakdown")).toBeInTheDocument(); });
    it("BudgetsPage renders", () => { wrap(<BudgetsPage />); expect(screen.getAllByText("Budgets & Alerts")[0]).toBeInTheDocument(); });
});
