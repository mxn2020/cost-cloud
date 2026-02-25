import { Server, Filter, ChevronDown, CheckCircle2 } from "lucide-react";
const resources = [
    { id: "1", name: "i-0a1b2c3d4e5f6g7h8", type: "EC2 t3.xlarge", provider: "AWS", region: "us-east-1", cost: "$120.50", status: "running" },
    { id: "2", name: "prod-db-primary", type: "RDS db.r6g.large", provider: "AWS", region: "us-east-1", cost: "$380.25", status: "running" },
    { id: "3", name: "k8s-cluster-node-1", type: "GCP n2-standard-4", provider: "GCP", region: "us-central1", cost: "$145.00", status: "running" },
    { id: "4", name: "k8s-cluster-node-2", type: "GCP n2-standard-4", provider: "GCP", region: "us-central1", cost: "$145.00", status: "running" },
    { id: "5", name: "frontend-assets", type: "S3 Bucket", provider: "AWS", region: "eu-west-1", cost: "$45.10", status: "active" },
    { id: "6", name: "dev-worker-droplet", type: "Droplet 4GB", provider: "DigitalOcean", region: "nyc3", cost: "$24.00", status: "stopped" },
];
export default function ResourcesPage() {
    return (<div style={{ padding: "var(--space-6)", maxWidth: 1400 }}>
        <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700, marginBottom: "var(--space-6)" }}>Resource Breakdown</h1>

        <div className="card" style={{ overflow: "hidden" }}>
            <div style={{ padding: "var(--space-4)", background: "var(--color-bg-secondary)", borderBottom: "1px solid var(--color-border)", display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
                <button className="btn btn-sm" style={{ background: "var(--color-bg-card)" }}><Filter size={14} /> Filter</button>
                <button className="btn btn-sm" style={{ background: "var(--color-bg-card)" }}>Provider <ChevronDown size={14} /></button>
                <button className="btn btn-sm" style={{ background: "var(--color-bg-card)" }}>Region <ChevronDown size={14} /></button>
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
                <thead>
                    <tr style={{ borderBottom: "1px solid var(--color-border)", background: "var(--color-bg-card)" }}>
                        {["Resource Name", "Type", "Provider", "Region", "Est. Cost (MTD)", "Status"].map(h => (
                            <th key={h} style={{ textAlign: "left", padding: "12px 16px", fontSize: "11px", textTransform: "uppercase", letterSpacing: 1, color: "var(--color-text-tertiary)", fontWeight: 600 }}>{h}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {resources.map(r => (
                        <tr key={r.id} style={{ borderBottom: "1px solid var(--color-border)" }}>
                            <td style={{ padding: "14px 16px", fontWeight: 500 }}><div style={{ display: "flex", alignItems: "center", gap: 8 }}><Server size={14} style={{ color: "var(--color-text-tertiary)" }} /> {r.name}</div></td>
                            <td style={{ padding: "14px 16px", color: "var(--color-text-secondary)" }}>{r.type}</td>
                            <td style={{ padding: "14px 16px" }}><span className="badge badge-neutral">{r.provider}</span></td>
                            <td style={{ padding: "14px 16px", fontFamily: "var(--font-mono)", fontSize: "12px" }}>{r.region}</td>
                            <td style={{ padding: "14px 16px", fontFamily: "var(--font-mono)", fontWeight: 600 }}>{r.cost}</td>
                            <td style={{ padding: "14px 16px" }}>
                                {r.status === "running" || r.status === "active" ? <span style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--color-success)", fontWeight: 500, fontSize: "12px" }}><CheckCircle2 size={14} /> Active</span> : <span style={{ color: "var(--color-text-tertiary)", fontSize: "12px" }}>{r.status}</span>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>);
}
