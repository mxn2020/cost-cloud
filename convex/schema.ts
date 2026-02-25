import { defineSchema, defineTable } from "convex/server"; import { v } from "convex/values";
export default defineSchema({
    providers: defineTable({ name: v.string(), status: v.string(), connectedAt: v.string() }),
    resources: defineTable({ name: v.string(), type: v.string(), providerId: v.id("providers"), region: v.string(), estCostMonth: v.number(), status: v.string() }),
    budgets: defineTable({ name: v.string(), limitAmount: v.number(), usedAmount: v.number(), scope: v.string() })
});
