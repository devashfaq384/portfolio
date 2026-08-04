"use client";

import { motion } from "framer-motion";
import { Search, Users, LayoutDashboard, ArrowRight } from "lucide-react";

// ── Approach Variant 1: "One Platform" ──────────────────────────────────
// Business-outcome focused, not code-focused. Signature: a visual showing
// scattered tools consolidating into one platform — this is the literal
// pitch ("I can turn your 6 disconnected tools into one product"), shown
// rather than just stated. No terminal/code chrome — built for a business
// decision-maker, not a fellow developer.

const SCATTERED_TOOLS = ["Spreadsheets", "WhatsApp", "Notion", "Email Chains", "Invoicing App", "Booking Tool"];

const PILLARS = [
    {
        icon: Search,
        title: "I research before I build",
        detail:
            "Before writing a line of code, I look at how your business actually runs today — where time gets lost, where customers get frustrated, what your team repeats manually. The product gets built around that, not around a generic template.",
    },
    {
        icon: Users,
        title: "I design for your users, not just your spec",
        detail:
            "A feature list isn't a product. I think about who's actually using the software day to day — your team, your customers — and design the experience around what makes their job easier, not just what's technically possible.",
    },
    {
        icon: LayoutDashboard,
        title: "I build one platform, not another tool to manage",
        detail:
            "Most businesses I talk to are juggling five or six disconnected tools just to run day-to-day operations. My job is to replace that sprawl with one purpose-built platform that actually fits how you work.",
    },
];

export default function ApproachVariant1() {
    return (
        <section className="relative w-full bg-[#0A0B0F] py-24 lg:py-32">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 max-w-2xl"
                >
                    <span className="font-mono text-[13px] text-[#5EEAD4]">how I think & work</span>
                    <h2 className="mt-3 font-[Space_Grotesk,sans-serif] text-3xl sm:text-4xl font-bold text-[#F5F6F8]">
                        I don't just build features. I build your one-stop platform.
                    </h2>
                    <p className="mt-4 text-[16px] leading-relaxed text-[#8B92A5]">
                        Most businesses run on a patchwork of tools that were never
                        meant to work together. I build the single platform that
                        replaces that patchwork — designed around how your business and
                        your customers actually use it.
                    </p>
                </motion.div>

                {/* consolidation visual */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 items-center mb-20"
                >
                    {/* before: scattered tools */}
                    <div className="rounded-2xl border border-[#1F232E] bg-[#12141C] p-6">
                        <p className="font-mono text-[11px] uppercase tracking-wide text-[#5B6270] mb-4">
                            Before — scattered across tools
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {SCATTERED_TOOLS.map((tool, idx) => (
                                <motion.span
                                    key={tool}
                                    initial={{ opacity: 0, y: 8, rotate: idx % 2 === 0 ? -2 : 2 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.3, delay: idx * 0.06 }}
                                    className="rounded-lg border border-[#2A2E3A] bg-[#0E1017] px-3 py-2 text-[13px] text-[#8B92A5]"
                                >
                                    {tool}
                                </motion.span>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#5EEAD4]/10 text-[#5EEAD4] rotate-90 lg:rotate-0">
                            <ArrowRight className="h-5 w-5" />
                        </div>
                    </div>

                    {/* after: one platform */}
                    <div className="rounded-2xl border border-[#5EEAD4]/30 bg-gradient-to-br from-[#12141C] to-[#0E1017] p-6">
                        <p className="font-mono text-[11px] uppercase tracking-wide text-[#5EEAD4] mb-4">
                            After — one platform, built for you
                        </p>
                        <div className="rounded-xl border border-[#1F232E] bg-[#0A0B0F] p-5">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="h-2 w-2 rounded-full bg-[#5EEAD4]" />
                                <span className="text-[14px] font-medium text-[#F5F6F8]">Your Business, Unified</span>
                            </div>
                            <p className="text-[13px] leading-relaxed text-[#8B92A5]">
                                Customers, bookings, payments, and communication — in one
                                place, built around your actual workflow.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* pillars */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {PILLARS.map((pillar, idx) => {
                        const Icon = pillar.icon;
                        return (
                            <motion.div
                                key={pillar.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="rounded-2xl border border-[#1F232E] bg-[#12141C] p-6"
                            >
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#5EEAD4]/10 text-[#5EEAD4] mb-5">
                                    <Icon className="h-5 w-5" />
                                </div>
                                <h3 className="font-[Space_Grotesk,sans-serif] text-[17px] font-semibold text-[#F5F6F8] mb-2.5">
                                    {pillar.title}
                                </h3>
                                <p className="text-[14px] leading-relaxed text-[#8B92A5]">{pillar.detail}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}