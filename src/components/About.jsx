"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layers, Wrench, Boxes } from "lucide-react";

// ── About Variant 2: "Split Panel" ──────────────────────────────────────
// Most conventional layout of the three — safest for non-technical clients
// who want a quick, human read on who you are before scanning skills.
// Left: avatar frame + live "status" badges. Right: bio + skill category cards.

const SKILL_CATEGORIES = [
    {
        icon: Code2,
        title: "Frontend",
        items: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS"],
    },
    {
        icon: Boxes,
        title: "State Management",
        items: ["Redux", "Recoil", "Zustand"],
    },
    {
        icon: Layers,
        title: "Backend",
        items: ["Node.js", "Express.js"],
    },
    {
        icon: Database,
        title: "Database",
        items: ["MongoDB", "PostgreSQL", "Firebase", "Supabase"],
    },
    {
        icon: Wrench,
        title: "Tools",
        items: ["Git", "GitHub"],
    },
];

export default function AboutVariant2() {
    return (
        <section className="relative w-full bg-[#0A0B0F] py-24 lg:py-32">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-14"
                >
                    <span className="font-mono text-[13px] text-[#5EEAD4]">// about</span>
                    <h2 className="mt-3 font-[Space_Grotesk,sans-serif] text-3xl sm:text-4xl font-bold text-[#F5F6F8]">
                        The person behind the code
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* left: avatar + status */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-4"
                    >
                        <div className="relative rounded-2xl border border-[#1F232E] bg-[#12141C] p-6 sm:p-7">
                            <div className="aspect-square w-full rounded-xl bg-gradient-to-br from-[#12141C] to-[#0E1017] border border-[#1F232E] flex items-center justify-center overflow-hidden">
                                {/* Replace with your actual photo */}
                                <img
                                    src="/assets/ashfaq.png"
                                    alt="Ashfaq Ahmad"
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div className="mt-6 space-y-3">
                                <div className="flex items-center justify-between rounded-lg bg-[#0E1017] border border-[#1F232E] px-4 py-3">
                                    <span className="font-mono text-[12.5px] text-[#8B92A5]">status</span>
                                    <span className="flex items-center gap-1.5 font-mono text-[12.5px] text-[#5EEAD4]">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#5EEAD4] animate-pulse" />
                                        available for work
                                    </span>
                                </div>
                                <div className="flex items-center justify-between rounded-lg bg-[#0E1017] border border-[#1F232E] px-4 py-3">
                                    <span className="font-mono text-[12.5px] text-[#8B92A5]">experience</span>
                                    <span className="font-mono text-[12.5px] text-[#F5F6F8]">3+ years</span>
                                </div>
                                <div className="flex items-center justify-between rounded-lg bg-[#0E1017] border border-[#1F232E] px-4 py-3">
                                    <span className="font-mono text-[12.5px] text-[#8B92A5]">based in</span>
                                    <span className="font-mono text-[12.5px] text-[#F5F6F8]">Pakistan</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* right: bio + skills */}
                    <div className="lg:col-span-8">
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="text-[17px] leading-relaxed text-[#8B92A5] max-w-2xl"
                        >
                            I'm <span className="text-[#F5F6F8] font-medium">Ashfaq Ahmad</span>,
                            a Certified Full Stack Developer and Full Stack Software
                            Engineer with 3+ years of experience on the MERN stack. I work
                            with founders and businesses to turn ideas into
                            production-ready MVPs, SaaS platforms, and scalable web
                            applications — handling everything from architecture and UI to
                            deployment and hand-off.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4"
                        >
                            {SKILL_CATEGORIES.map((cat, idx) => {
                                const Icon = cat.icon;
                                return (
                                    <motion.div
                                        key={cat.title}
                                        initial={{ opacity: 0, y: 12 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.4, delay: 0.1 + idx * 0.08 }}
                                        className="group rounded-xl border border-[#1F232E] bg-[#12141C] p-5 transition-colors hover:border-[#5EEAD4]/40"
                                    >
                                        <div className="flex items-center gap-2.5 mb-3">
                                            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#0E1017] border border-[#1F232E] text-[#5EEAD4] transition-colors group-hover:bg-[#5EEAD4]/10">
                                                <Icon className="h-4 w-4" />
                                            </div>
                                            <p className="font-[Space_Grotesk,sans-serif] text-[15px] font-semibold text-[#F5F6F8]">
                                                {cat.title}
                                            </p>
                                        </div>
                                        <div className="flex flex-wrap gap-1.5">
                                            {cat.items.map((item) => (
                                                <span
                                                    key={item}
                                                    className="rounded-md bg-[#0E1017] border border-[#1F232E] px-2 py-1 font-mono text-[11.5px] text-[#8B92A5]"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}