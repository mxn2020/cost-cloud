import { BarChart3 } from "lucide-react";
import { Card, Badge, Select, SelectItem } from "@geenius-ui/react-css";

const usageData = [
    { resource: "EC2 - t3.medium", provider: "AWS", metric: "vCPU Hours", value: "14,520", status: "High" },
    { resource: "Cloud SQL - Postgres", provider: "GCP", metric: "Storage (GB)", value: "450", status: "Normal" },
    { resource: "S3 Standard", provider: "AWS", metric: "Storage (TB)", value: "12.4", status: "Normal" },
    { resource: "Serverless Functions", provider: "Vercel", metric: "Invocations", value: "2.4M", status: "Critical" }
];

export default function UsagePage() {
    return (<div style={{ padding: "var(--space-8)", maxWidth: 1200 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700, display: "flex", alignItems: "center", gap: "var(--space-2)" }}><BarChart3 style={{ color: "var(--color-accent-primary)" }} /> Usage Metrics</h1>
            <div style={{ display: "flex", gap: "var(--space-2)" }}>
                <Select defaultValue="all">
                    <SelectItem value="all">All Resources</SelectItem>
                    <SelectItem value="compute">Compute</SelectItem>
                    <SelectItem value="storage">Storage</SelectItem>
                </Select>
            </div>
        </div>

        <div style={{ display: "grid", gap: "var(--space-4)" }}>
            {usageData.map((u, i) => (<Card key={i} padding="md" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                    <h3 style={{ fontSize: "var(--font-size-lg)", fontWeight: 700, marginBottom: 4 }}>{u.resource}</h3>
                    <div style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}>
                        <span>{u.provider}</span> • <span className="mono">{u.metric}</span>
                    </div>
                </div>
                <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: "var(--font-size-xl)", fontWeight: 700, fontFamily: "var(--font-mono)" }}>{u.value}</div>
                    <Badge variant={u.status === "Normal" ? "success" : u.status === "High" ? "warning" : "error"}>{u.status}</Badge>
                </div>
            </Card>))}
        </div>
    </div>);
}
