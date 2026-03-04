import { DollarSign } from "lucide-react";
import { Card, Select, SelectItem } from "@geenius-ui/react-css";

const spendData = [
    { service: "EC2 Instances", provider: "AWS", env: "Production", cost: "$4,250.00", trend: "+12%" },
    { service: "Cloud SQL", provider: "GCP", env: "Production", cost: "$1,840.00", trend: "+5%" },
    { service: "S3 Storage", provider: "AWS", env: "Production", cost: "$850.00", trend: "-2%" },
    { service: "Edge Network", provider: "Vercel", env: "All", cost: "$140.00", trend: "+24%" },
    { service: "Cloud Functions", provider: "GCP", env: "Staging", cost: "$45.00", trend: "0%" }
];

export default function SpendPage() {
    return (<div style={{ padding: "var(--space-8)", maxWidth: 1200 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700, display: "flex", alignItems: "center", gap: "var(--space-2)" }}><DollarSign style={{ color: "var(--color-accent-primary)" }} /> Spend Analysis</h1>
            <Select defaultValue="30d">
                <SelectItem value="7d">Last 7 Days</SelectItem>
                <SelectItem value="30d">Last 30 Days</SelectItem>
                <SelectItem value="90d">Last 90 Days</SelectItem>
            </Select>
        </div>

        <Card padding="none">
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr style={{ borderBottom: "1px solid var(--color-border)", background: "var(--color-bg-secondary)" }}>
                        <th style={{ textAlign: "left", padding: "12px 16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)" }}>Service</th>
                        <th style={{ textAlign: "left", padding: "12px 16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)" }}>Provider</th>
                        <th style={{ textAlign: "left", padding: "12px 16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)" }}>Environment</th>
                        <th style={{ textAlign: "right", padding: "12px 16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)" }}>Cost</th>
                        <th style={{ textAlign: "right", padding: "12px 16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)" }}>Trend</th>
                    </tr>
                </thead>
                <tbody>
                    {spendData.map((s, i) => (<tr key={i} style={{ borderBottom: "1px solid var(--color-border)" }}>
                        <td style={{ padding: "12px 16px", fontSize: "14px", fontWeight: 600 }}>{s.service}</td>
                        <td style={{ padding: "12px 16px", fontSize: "13px" }}>{s.provider}</td>
                        <td style={{ padding: "12px 16px", fontSize: "13px" }}>{s.env}</td>
                        <td style={{ padding: "12px 16px", fontSize: "14px", fontWeight: 600, textAlign: "right" }}>{s.cost}</td>
                        <td style={{ padding: "12px 16px", fontSize: "13px", textAlign: "right", color: s.trend.startsWith("+") ? "var(--color-danger)" : "var(--color-success)" }}>{s.trend}</td>
                    </tr>))}
                </tbody>
            </table>
        </Card>
    </div>);
}
