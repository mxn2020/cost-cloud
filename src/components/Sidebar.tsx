import { Link, useLocation } from "react-router-dom";
import { Home, PieChart, TrendingDown, Server, Settings } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
export default function Sidebar() {
    const loc = useLocation();
    const links = [
        { to: "/", icon: Home, label: "Overview" },
        { to: "/resources", icon: Server, label: "Resource Breakdown" },
        { to: "/budgets", icon: PieChart, label: "Budgets & Forecasts" },
        { to: "/providers", icon: TrendingDown, label: "Providers" },
        { to: "/settings", icon: Settings, label: "Settings" }
    ];
    return (<aside style={{ width: "var(--sidebar-width)", background: "var(--color-bg-secondary)", borderRight: "1px solid var(--color-border)", height: "100vh", position: "fixed", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "var(--space-6)", display: "flex", alignItems: "center", gap: "var(--space-3)", borderBottom: "1px solid var(--color-border)" }}>
            <div style={{ background: "var(--color-bg-tertiary)", border: "1px solid var(--color-border-strong)", borderRadius: "var(--radius-sm)", padding: 6, display: "flex", alignItems: "center", justifyContent: "center" }}><PieChart size={20} style={{ color: "var(--color-accent-primary)" }} /></div>
            <strong style={{ fontSize: "1.1rem", fontWeight: 700, letterSpacing: "-0.5px" }}>CostCloud</strong>
        </div>
        <nav style={{ padding: "var(--space-4)", flex: 1, display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
            <div style={{ fontSize: "11px", color: "var(--color-text-tertiary)", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8, paddingLeft: "var(--space-2)" }}>FinOps</div>
            {links.map(l => <Link key={l.to} to={l.to} style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", padding: "var(--space-3)", borderRadius: "var(--radius-sm)", color: loc.pathname === l.to ? "var(--color-accent-primary)" : "var(--color-text-secondary)", background: loc.pathname === l.to ? "var(--color-bg-card)" : "transparent", fontWeight: loc.pathname === l.to ? 600 : 500, fontSize: "14px", transition: "all var(--transition-fast)", borderLeft: loc.pathname === l.to ? "2px solid var(--color-accent-primary)" : "2px solid transparent" }}><l.icon size={18} />{l.label}</Link>)}
        </nav>
        <div style={{ padding: "var(--space-4)", display: "flex", justifyContent: "flex-end", borderTop: "1px solid var(--color-border)" }}><ThemeToggle /></div>
    </aside>);
}
