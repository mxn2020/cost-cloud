import { PieChart, Plus, AlertCircle } from "lucide-react";
const budgets = [
    { id: "1", name: "Production AWS", limit: "$2,000", used: "$1,340.50", pct: 67, status: "on-track" },
    { id: "2", name: "Dev / Staging GCP", limit: "$500", used: "$480.00", pct: 96, status: "at-risk" },
    { id: "3", name: "CI/CD Infrastructure", limit: "$300", used: "$150.00", pct: 50, status: "on-track" },
    { id: "4", name: "Marketing Sites", limit: "$100", used: "$110.00", pct: 110, status: "over" }
];
export default function BudgetsPage() {
    return (<div style={{ padding: "var(--space-6)", maxWidth: 1000 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700, display: "flex", alignItems: "center", gap: "var(--space-2)" }}><PieChart style={{ color: "var(--color-accent-primary)" }} /> Budgets & Alerts</h1>
            <button className="btn btn-primary"><Plus size={16} /> Create Budget</button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))", gap: "var(--space-4)" }}>
            {budgets.map(b => (
                <div key={b.id} className="card" style={{ padding: "var(--space-5)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "var(--space-4)" }}>
                        <div>
                            <h3 style={{ fontWeight: 600, fontSize: "16px", display: "flex", alignItems: "center", gap: "var(--space-2)" }}>{b.name} {b.status === "at-risk" && <AlertCircle size={16} style={{ color: "var(--color-warning)" }} />}{b.status === "over" && <AlertCircle size={16} style={{ color: "var(--color-danger)" }} />}</h3>
                            <p style={{ color: "var(--color-text-secondary)", fontSize: "13px", marginTop: 4 }}>Monthly Budget</p>
                        </div>
                        <div style={{ textAlign: "right" }}>
                            <div style={{ fontSize: "20px", fontWeight: 700, fontFamily: "var(--font-mono)", color: b.status === "over" ? "var(--color-danger)" : "inherit" }}>{b.used}</div>
                            <div style={{ fontSize: "13px", color: "var(--color-text-secondary)", fontFamily: "var(--font-mono)" }}>of {b.limit}</div>
                        </div>
                    </div>

                    <div style={{ height: 8, background: "var(--color-bg-secondary)", borderRadius: 999, overflow: "hidden", marginBottom: "var(--space-2)" }}>
                        <div style={{ height: "100%", width: `${Math.min(100, b.pct)}%`, background: b.status === "over" ? "var(--color-danger)" : b.status === "at-risk" ? "var(--color-warning)" : "var(--color-accent-primary)" }}></div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", fontWeight: 600 }}>
                        <span style={{ color: b.status === "over" ? "var(--color-danger)" : b.status === "at-risk" ? "var(--color-warning)" : "var(--color-success)" }}>{b.pct}% Used</span>
                        <span style={{ color: "var(--color-text-tertiary)" }}>Resets in 6 days</span>
                    </div>
                </div>
            ))}
        </div>
    </div>);
}
