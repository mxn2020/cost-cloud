import { Target, Plus } from "lucide-react";
import { Button, Card, Badge } from "@geenius-ui/react-css";

const budgets = [
    { id: "1", name: "AWS Production", spent: "$4,250", limit: "$5,000", pct: 85, status: "Warning" },
    { id: "2", name: "GCP Staging", spent: "$850", limit: "$2,000", pct: 42, status: "Healthy" },
    { id: "3", name: "Vercel Frontend", spent: "$120", limit: "$100", pct: 120, status: "Exceeded" },
    { id: "4", name: "MongoDB Atlas", spent: "$450", limit: "$1,000", pct: 45, status: "Healthy" }
];

export default function BudgetsPage() {
    return (<div style={{ padding: "var(--space-8)", maxWidth: 1200 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700, display: "flex", alignItems: "center", gap: "var(--space-2)" }}><Target style={{ color: "var(--color-accent-primary)" }} /> Budgets</h1>
            <Button variant="primary" icon={<Plus size={16} />}>Create Budget</Button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "var(--space-4)" }}>
            {budgets.map(b => (<Card key={b.id} padding="md">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-2)", fontSize: "var(--font-size-lg)", fontWeight: 700 }}>
                    <span>{b.name}</span>
                    <span style={{ color: b.status === "Exceeded" ? "var(--color-danger)" : b.status === "Warning" ? "var(--color-warning)" : "var(--color-success)" }}>{b.spent} / {b.limit}</span>
                </div>
                <div style={{ background: "var(--color-bg-tertiary)", height: 8, borderRadius: 4, overflow: "hidden", marginBottom: "var(--space-3)" }}>
                    <div style={{ background: b.status === "Exceeded" ? "var(--color-danger)" : b.status === "Warning" ? "var(--color-warning)" : "var(--color-success)", height: "100%", width: `${Math.min(b.pct, 100)}%` }}></div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "13px" }}>
                    <span style={{ color: "var(--color-text-secondary)" }}>{b.pct}% used</span>
                    <Badge variant={b.status === "Healthy" ? "success" : b.status === "Warning" ? "warning" : "error"}>{b.status}</Badge>
                </div>
            </Card>))}
        </div>
    </div>);
}
