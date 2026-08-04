"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight, Github, GitMerge, Linkedin, Terminal } from "lucide-react";

// ── Variant B: "Systems" ─────────────────────────────────────────────────
// Direction: dark, technical, engineer-credible — for clients who want to
// feel they're hiring a serious builder, not a designer.
// Tokens:
//   base: #0A0B0F   surface: #12141C   ink: #F5F6F8
//   muted: #8B92A5  accent: #5EEAD4 (teal)   accent-dim: #134E4A
// Type: display = Space Grotesk, body = Inter, mono = JetBrains Mono (terminal)
// Signature: a typed terminal sequence that "builds and deploys" live,
// literalizing "production-ready" for a technical audience.

const TERMINAL_LINES = [
    { text: "$ npm run build", delay: 0 },
    { text: "✓ Compiled successfully", delay: 900, tone: "success" },
    { text: "$ npm run deploy --prod", delay: 1600 },
    { text: "✓ Deployed to production", delay: 2500, tone: "success" },
    { text: "→ Idea shipped in weeks, not months.", delay: 3300, tone: "accent" },
];

const TECH_STACK = ["React", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL", "TypeScript"];

export default function HeroVariantB() {
    const [visibleLines, setVisibleLines] = useState(0);
    const [cycle, setCycle] = useState(0);

    useEffect(() => {
        const timers = TERMINAL_LINES.map((_, idx) =>
            setTimeout(() => setVisibleLines((v) => Math.max(v, idx + 1)), TERMINAL_LINES[idx].delay + 300)
        );
        const resetTimer = setTimeout(() => {
            setVisibleLines(0);
            setCycle((c) => c + 1); // triggers the effect to re-run and loop
        }, 6500);
        return () => {
            timers.forEach(clearTimeout);
            clearTimeout(resetTimer);
        };
    }, [cycle]);

    return (
        <section className="relative w-full bg-[#0A0B0F] overflow-hidden">
            {/* faint grid backdrop */}
            <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage:
                        "linear-gradient(#F5F6F8 1px, transparent 1px), linear-gradient(90deg, #F5F6F8 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                }}
            />
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[36rem] rounded-full bg-[#5EEAD4]/10 blur-3xl" />

            <div className="relative mx-auto max-w-6xl px-6 lg:px-8 pt-28 pb-24 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 rounded-full border border-[#1F232E] bg-[#12141C] px-4 py-1.5 mb-7"
                >
                    <Terminal className="h-3.5 w-3.5 text-[#5EEAD4]" />
                    <span className="font-mono text-[13px] text-[#8B92A5]">
                        Ash Full Stack Dev:~$ whoami
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="font-[Space_Grotesk,sans-serif] text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-[#F5F6F8]"
                >
                    Ashfaq Ahmad — Full Stack
                    <br />
                    Software Engineer building{" "}
                    <span className="text-[#5EEAD4]">production systems</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-6 max-w-xl mx-auto text-[16.5px] leading-relaxed text-[#8B92A5]"
                >
                    3+ years on the MERN stack, turning business ideas into
                    production-ready MVPs, SaaS platforms, and scalable web
                    applications — from architecture to deployment.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-9 flex flex-wrap items-center justify-center gap-4"
                >
                    <a
                        href="https://www.linkedin.com/in/ashfaq-ahmad-a96380236"
                        className="group inline-flex items-center gap-2 rounded-lg bg-[#5EEAD4] px-6 py-3.5 text-[15px] font-semibold text-[#0A0B0F] transition-transform hover:scale-[1.03]"
                    >
                        Let's Discuss to Build Something
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                </motion.div>

                {/* signature: live terminal */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="mt-14 mx-auto max-w-xl text-left rounded-xl border border-[#1F232E] bg-[#0E1017] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] overflow-hidden"
                >
                    <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[#1F232E]">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
                        <span className="ml-3 font-mono text-[11.5px] text-[#5B6270]">
                            production-deploy.sh
                        </span>
                    </div>
                    <div className="p-5 font-mono text-[13.5px] leading-7 min-h-[168px]">
                        {TERMINAL_LINES.map((line, idx) => (
                            <p
                                key={line.text}
                                className="transition-opacity duration-300"
                                style={{
                                    opacity: idx < visibleLines ? 1 : 0,
                                    color:
                                        line.tone === "success"
                                            ? "#5EEAD4"
                                            : line.tone === "accent"
                                                ? "#F5F6F8"
                                                : "#8B92A5",
                                    fontWeight: line.tone === "accent" ? 600 : 400,
                                }}
                            >
                                {line.text}
                            </p>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
                >
                    {TECH_STACK.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-md border border-[#1F232E] bg-[#12141C] px-3 py-1 font-mono text-[12px] text-[#8B92A5]"
                        >
                            {tech}
                        </span>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-8 flex items-center justify-center gap-4 text-[#8B92A5]"
                >
                    <a href="https://github.com/ashfaqFullstack" aria-label="GitHub" className="hover:text-[#5EEAD4] transition-colors">
                        <GitMerge className="h-5 w-5" />
                    </a>
 
                    <a href="https://www.linkedin.com/in/ashfaq-ahmad-a96380236" aria-label="LinkedIn" className="hover:text-[#5EEAD4] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#ffffff">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}