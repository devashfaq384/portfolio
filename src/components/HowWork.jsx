"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, TestTube2, Rocket } from "lucide-react";

// ── Process Variant 2: "Card Grid" ──────────────────────────────────────
// Same content as Variant 1, presented as a horizontal scanning grid
// instead of a vertical narrative — faster to scan, mirrors the card
// language used in About Variant 2's skill categories for consistency.

// interface Step {
//     number: string;
//     icon: typeof Search;
//     title: string;
//     detail: string;
// }

const STEPS = [
    {
        number: "01",
        icon: Search,
        title: "Discovery & Scoping",
        detail: "We define the business goal, scope, and timeline before any code is written.",
    },
    {
        number: "02",
        icon: PenTool,
        title: "Architecture & Planning",
        detail: "I map the data model and choose the right stack for your speed and scale needs.",
    },
    {
        number: "03",
        icon: Code2,
        title: "Development",
        detail: "Iterative builds with regular check-ins — you see working software early and often.",
    },
    {
        number: "04",
        icon: TestTube2,
        title: "Testing & Refinement",
        detail: "Cross-browser and edge-case testing, reviewed with you before launch.",
    },
    {
        number: "05",
        icon: Rocket,
        title: "Deployment & Support",
        detail: "Production deployment, hand-off, and ongoing support after launch.",
    },
];

export default function ProcessVariant2() {
    return (
        <section className="relative w-full bg-[#0A0B0F] py-24 lg:py-32">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <span className="font-mono text-[13px] text-[#5EEAD4]">// how I work</span>
                    <h2 className="mt-3 font-[Space_Grotesk,sans-serif] text-3xl sm:text-4xl font-bold text-[#F5F6F8]">
                        From idea to production, step by step
                    </h2>
                    <p className="mt-3 text-[16px] text-[#8B92A5] max-w-xl">
                        No black box. Here's exactly what working together looks like.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {STEPS.map((step, idx) => {
                        const Icon = step.icon;
                        const isLast = idx === STEPS.length - 1;
                        return (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.45, delay: idx * 0.08 }}
                                className="relative"
                            >
                                <div className="group h-full rounded-xl border border-[#1F232E] bg-[#12141C] p-5 transition-colors hover:border-[#5EEAD4]/40">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0E1017] border border-[#1F232E] text-[#5EEAD4] transition-colors group-hover:bg-[#5EEAD4]/10">
                                            <Icon className="h-4.5 w-4.5" />
                                        </div>
                                        <span className="font-mono text-[12px] text-[#5B6270]">{step.number}</span>
                                    </div>
                                    <h3 className="font-[Space_Grotesk,sans-serif] text-[15px] font-semibold text-[#F5F6F8] mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-[13px] leading-relaxed text-[#8B92A5]">{step.detail}</p>
                                </div>

                                {/* connector arrow, desktop only, not on last card */}
                                {!isLast && (
                                    <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10 items-center justify-center h-4 w-4 text-[#2A2E3A]">
                                        <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3">
                                            <path
                                                d="M2 8H14M14 8L9 3M14 8L9 13"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}