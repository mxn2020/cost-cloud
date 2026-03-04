import { Cloud, Plus } from "lucide-react";
import { Button, Card, Badge } from "@geenius-ui/react-css";

const providers = [
    { id: "1", name: "Amazon Web Services", accounts: 3, spend: "$12,450.00", status: "Connected", lastSync: "10 mins ago" },
    { id: "2", name: "Google Cloud", accounts: 1, spend: "$3,240.50", status: "Connected", lastSync: "1 hour ago" },
    { id: "3", name: "Vercel", accounts: 2, spend: "$140.00", status: "Connected", lastSync: "5 mins ago" },
    { id: "4", name: "MongoDB Atlas", accounts: 1, spend: "$450.00", status: "Error", lastSync: "2 days ago" }
];

export default function ProvidersPage() {
    return (<div style={{ padding: "var(--space-8)", maxWidth: 1200 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700, display: "flex", alignItems: "center", gap: "var(--space-2)" }}><Cloud style={{ color: "var(--color-accent-primary)" }} /> Providers</h1>
            <Button variant="primary" icon={<Plus size={16} />}>Add Provider</Button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))", gap: "var(--space-4)" }}>
            {providers.map(p => (<Card key={p.id} padding="md">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-4)" }}>
                    <h3 style={{ fontSize: "var(--font-size-lg)", fontWeight: 700 }}>{p.name}</h3>
                    <Badge variant={p.status === "Connected" ? "success" : "error"}>{p.status}</Badge>
                </div>
                <div style={{ fontSize: "13px", color: "var(--color-text-secondary)", display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
                    <p>Accounts: <span style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>{p.accounts}</span></p>
                    <p>Spend: <span style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>{p.spend}</span></p>
                    <p>Last Sync: {p.lastSync}</p>
                </div>
            </Card>))}
        </div>
    </div>);
}
