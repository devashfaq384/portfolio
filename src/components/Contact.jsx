"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, GitMerge } from "lucide-react";
import LinkedIn from "./LinkedIn";

// ── Contact Variant 2: "Statement CTA" ──────────────────────────────────
// No form — a bold, low-friction closer that pushes to email or LinkedIn
// DM directly. Better if you want to qualify leads through conversation
// (LinkedIn/email) rather than collect form submissions.

export default function ContactVariant2() {
    return (
        <section className="relative w-full bg-[#0A0B0F] py-28 lg:py-36 overflow-hidden">
            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage:
                        "linear-gradient(#F5F6F8 1px, transparent 1px), linear-gradient(90deg, #F5F6F8 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                }}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[28rem] w-[28rem] rounded-full bg-[#5EEAD4]/[0.07] blur-3xl" />

            <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 rounded-full border border-[#1F232E] bg-[#12141C] px-4 py-1.5 mb-8 font-mono text-[13px] text-[#5EEAD4]"
                >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#5EEAD4] animate-pulse" />
                    Currently available for new projects
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="font-[Space_Grotesk,sans-serif] text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-[#F5F6F8]"
                >
                    Got an idea worth
                    <br />
                    <span className="text-[#5EEAD4]">shipping?</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-6 max-w-lg mx-auto text-[17px] leading-relaxed text-[#8B92A5]"
                >
                    Let's turn it into a production-ready MVP or SaaS platform. Send
                    me a message on LinkedIn or drop an email — I usually reply
                    within a day.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-10 flex flex-wrap items-center justify-center gap-4"
                >
                    <a
                        href="mailto:ashfaqahmadfullstack@gmail.com"
                        className="group inline-flex items-center gap-2 rounded-lg bg-[#5EEAD4] px-7 py-4 text-[15px] font-semibold text-[#0A0B0F] transition-transform hover:scale-[1.03]"
                    >
                        <Mail className="h-4 w-4" />
                        Email Me
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                 <LinkedIn/>


                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 pt-8 border-t border-[#1F232E] flex flex-col sm:flex-row items-center justify-between gap-4"
                >
                    <p className="font-mono text-[12.5px] text-[#5B6270]">
                        © {new Date().getFullYear()} Ashfaq Ahmad — Full Stack Software Engineer
                    </p>
                    <div className="flex items-center gap-4 text-[#8B92A5]">
                        <a href="https://github.com/ashfaqFullstack" aria-label="GitHub" className="hover:text-[#5EEAD4] transition-colors">
                            <GitMerge className="h-4.5 w-4.5" />
                        </a>
                        <a href="mailto:you@example.com" aria-label="Email" className="hover:text-[#5EEAD4] transition-colors">
                            <Mail className="h-4.5 w-4.5" />
                        </a>
                        <a href="https://www.linkedin.com/in/ashfaq-ahmad-a96380236" aria-label="LinkedIn" className="hover:text-[#5EEAD4] transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#ffffff">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
          
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}