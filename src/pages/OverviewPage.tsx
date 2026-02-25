import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { DollarSign, TrendingUp, TrendingDown, ExternalLink } from "lucide-react";
const data = [
    { month: "Jan", aws: 1200, gcp: 800, do: 150 },
    { month: "Feb", aws: 1350, gcp: 750, do: 150 },
    { month: "Mar", aws: 1400, gcp: 900, do: 180 },
    { month: "Apr", aws: 1420, gcp: 850, do: 150 },
    { month: "May", aws: 1600, gcp: 950, do: 200 },
    { month: "Jun", aws: 1580, gcp: 880, do: 160 },
];
export default function OverviewPage() {
    return (<div style={{ padding: "var(--space-6)", maxWidth: 1400 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <div>
                <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700 }}>Spending Overview</h1>
                <p style={{ color: "var(--color-text-secondary)", fontSize: "14px", marginTop: 4 }}>Multi-cloud cost aggregation</p>
            </div>
            <div style={{ display: "flex", gap: "var(--space-2)" }}>
                <button className="btn btn-sm">This Month</button>
                <button className="btn btn-primary btn-sm">Export Report</button>
            </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-4)", marginBottom: "var(--space-6)" }}>
            <div className="card" style={{ padding: "var(--space-5)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", marginBottom: "var(--space-3)", color: "var(--color-text-secondary)", fontSize: "13px" }}><DollarSign size={16} /> MTD Spend</div>
                <div style={{ fontSize: "32px", fontWeight: 700, fontFamily: "var(--font-mono)" }}>$2,620.00</div>
                <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: "var(--space-2)", fontSize: "13px", color: "var(--color-warning)" }}><TrendingUp size={14} /> +4.2% from last month</div>
            </div>
            <div className="card" style={{ padding: "var(--space-5)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", marginBottom: "var(--space-3)", color: "var(--color-text-secondary)", fontSize: "13px" }}><DollarSign size={16} /> Forecast (EOM)</div>
                <div style={{ fontSize: "32px", fontWeight: 700, fontFamily: "var(--font-mono)", color: "var(--color-accent-primary)" }}>$3,145.00</div>
                <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: "var(--space-2)", fontSize: "13px", color: "var(--color-success)" }}><TrendingDown size={14} /> Below budget ($3,500)</div>
            </div>
            <div className="card" style={{ padding: "var(--space-5)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", marginBottom: "var(--space-3)", color: "var(--color-text-secondary)", fontSize: "13px" }}><DollarSign size={16} /> Avg Daily Spend</div>
                <div style={{ fontSize: "32px", fontWeight: 700, fontFamily: "var(--font-mono)" }}>$124.76</div>
                <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: "var(--space-2)", fontSize: "13px", color: "var(--color-text-tertiary)" }}>Based on last 30 days</div>
            </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "var(--space-6)" }}>
            <div className="card" style={{ padding: "var(--space-5)" }}>
                <h2 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "var(--space-4)" }}>Spend by Provider (6 months)</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data} layout="vertical">
                        <XAxis type="number" tick={{ fontSize: 11, fill: "#6B7280" }} axisLine={false} tickLine={false} tickFormatter={v => `$${v}`} />
                        <YAxis type="category" dataKey="month" tick={{ fontSize: 11, fill: "#6B7280" }} axisLine={false} tickLine={false} />
                        <Tooltip contentStyle={{ background: "var(--color-bg-secondary)", border: "1px solid var(--color-border)", borderRadius: 8, fontSize: 12, fontFamily: "var(--font-mono)" }} cursor={{ fill: "var(--color-bg-secondary)" }} />
                        <Bar dataKey="aws" stackId="a" fill="#F59E0B" name="AWS" />
                        <Bar dataKey="gcp" stackId="a" fill="#3B82F6" name="GCP" />
                        <Bar dataKey="do" stackId="a" fill="#10B981" name="DigitalOcean" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="card" style={{ padding: "var(--space-5)" }}>
                <h2 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "var(--space-4)" }}>Top Services</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                    {[
                        { name: "Amazon EC2", provider: "AWS", cost: "$940.50", pct: "35%" },
                        { name: "Cloud SQL", provider: "GCP", cost: "$420.00", pct: "16%" },
                        { name: "Amazon RDS", provider: "AWS", cost: "$380.25", pct: "14%" },
                        { name: "Kubernetes Eng", provider: "GCP", cost: "$290.00", pct: "11%" },
                        { name: "Droplets", provider: "DigitalOcean", cost: "$160.00", pct: "6%" }
                    ].map(s => (
                        <div key={s.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div>
                                <div style={{ fontWeight: 600, fontSize: "14px", display: "flex", alignItems: "center", gap: 4 }}>{s.name} <ExternalLink size={12} style={{ color: "var(--color-text-tertiary)" }} /></div>
                                <div style={{ fontSize: "12px", color: "var(--color-text-secondary)" }}>{s.provider}</div>
                            </div>
                            <div style={{ textAlign: "right" }}>
                                <div style={{ fontFamily: "var(--font-mono)", fontWeight: 600 }}>{s.cost}</div>
                                <div style={{ fontSize: "11px", color: "var(--color-text-secondary)" }}>{s.pct} of total</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>);
}
