"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, GitMerge } from "lucide-react";

// ── Projects Variant 1: "Case Studies" ──────────────────────────────────
// Same Systems tokens as Hero/About Variant B.
// Each project reads as a mini case study: problem → solution → result.
// Numbering is used deliberately here — this genuinely is an ordered list
// of case studies, not decoration.

// interface Project {
//     number: string;
//     title: string;
//     problem: string;
//     solution: string;
//     result: string;
//     stack: string[];
//     liveUrl?: string;
//     githubUrl?: string;
//     image: string;
// }

const PROJECTS = [
    {
        number: "01",
        title: "QuantX Funded (Aeon Funded) - Prop Trading Platform Frontend",
        problem:
            "Prop trading platforms require high-performance, real-time user interfaces for challenge selection, evaluation tracking, Dashboard for Customers & Admin to perform payout requests without lag or confusing UI flows.",
        solution:
            "Built a modern, responsive frontend featuring interactive evaluation plan selectors, dynamic trader dashboards, rule/drawdown tracking visuals, and seamless authentication workflows.",
        result:
            "Delivered a smooth trading Dashboard and client-side application supporting $570K+ in distributed trader payouts, featuring 95% payout rate visibility and fast account evaluation tracking.",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Redux Toolkit", "REST APIs"],
        liveUrl: "https://quantxfund.io/",
        githubUrl: "#", // Replace with your repository link if private/internal
        image: "/assets/aeon-funded.png",
    },
    {
        number: "02",
        title: "NewYorkCityBookings - Direct Short-Term Rental Platform",
        problem:
            "High third-party service fees (15–25%) on major OTA platforms like Airbnb reduced profit margins for property managers and increased costs for travelers.",
        solution:
            "Shipped a full-stack SaaS booking platform featuring real-time date availability filtering, property listings, direct reservation management, and streamlined guest checkout.",
        result:
            "Hosted over 600+ guests with a 4.8★ rating while eliminating middleman commission fees for property owners and saving travelers up to 25% on bookings.",
        stack: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL"],
        liveUrl: "https://newyorkcitybookings.com/",
        githubUrl: "#", // Replace with your repository link if public
        image: "/assets/city_booking.png",
    },
    {
        number: "03",
        title: "Print Map Studio - Custom City Map Poster Generator",
        problem:
            "Creating high-resolution, aesthetically customized city map posters for printing traditionally required complex GIS or vector graphics software, making it inaccessible for non-designers.",
        solution:
            "Developed a web-based design tool that allows users to search any city worldwide, customize map styles (monochrome, vintage, modern dark), adjust typography, frame bounds, and export print-ready high-DPI outputs.",
        result:
            "Built a seamless browser-based canvas tool enabling instant vector map rendering, real-time visual style switching, and high-resolution poster generation.",
        stack: ["React", "Next.js", "TypeScript", "Mapbox GL / Leaflet", "HTML5 Canvas", "Tailwind CSS"],
        liveUrl: "https://printmap-six.vercel.app/",
        githubUrl: "#", // Replace with your repository link if available
        image: "/assets/print-city.png",
    }
];

export default function ProjectsVariant1() {
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
                    <span className="font-mono text-[13px] text-[#5EEAD4]">// A Few Publications</span>
                    <h2 className="mt-3 font-[Space_Grotesk,sans-serif] text-3xl sm:text-4xl font-bold text-[#F5F6F8]">
                        Projects that shipped to production
                    </h2>
                </motion.div>

                <div className="space-y-6">
                    {PROJECTS.map((project, idx) => (
                        <motion.div
                            key={project.number}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: (idx % 2) * 0.05 }}
                            className="group grid grid-cols-1 lg:grid-cols-12 gap-8 rounded-2xl border border-[#1F232E] bg-[#12141C] p-6 sm:p-8 transition-colors hover:border-[#5EEAD4]/30"
                        >
                            {/* image */}
                            <div className="lg:col-span-5 relative">
                                <div className="absolute -top-3 -left-3 font-[Space_Grotesk,sans-serif] text-5xl font-bold text-[#1F232E] select-none">
                                    {project.number}
                                </div>
                                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#1F232E] bg-[#0E1017]">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                                    />
                                </div>
                            </div>

                            {/* content */}
                            <div className="lg:col-span-7 flex flex-col">
                                <div className="flex flex-col md:flex-row items-end md:items-start  md:justify-between gap-4">
                                    <h3 className="font-[Space_Grotesk,sans-serif] text-xl sm:text-2xl font-semibold text-[#F5F6F8]">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center gap-3 shrink-0">
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                aria-label="View code"
                                                className="text-[#8B92A5] hover:text-[#5EEAD4] transition-colors"
                                            >
                                                <GitMerge className="h-5 w-5" />
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                aria-label="View live site"
                                                className="text-[#8B92A5] hover:text-[#5EEAD4] transition-colors"
                                            >
                                                <ArrowUpRight className="h-5 w-5" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className="mt-4 space-y-3">
                                    <div>
                                        <p className="font-mono text-[11px] uppercase tracking-wide text-[#5B6270] mb-1">
                                            Problem
                                        </p>
                                        <p className="text-[14.5px] leading-relaxed text-[#8B92A5]">{project.problem}</p>
                                    </div>
                                    <div>
                                        <p className="font-mono text-[11px] uppercase tracking-wide text-[#5B6270] mb-1">
                                            Solution
                                        </p>
                                        <p className="text-[14.5px] leading-relaxed text-[#8B92A5]">{project.solution}</p>
                                    </div>
                                    <div>
                                        <p className="font-mono text-[11px] uppercase tracking-wide text-[#5EEAD4] mb-1">
                                            Result
                                        </p>
                                        <p className="text-[14.5px] leading-relaxed text-[#F5F6F8]">{project.result}</p>
                                    </div>
                                </div>

                                <div className="mt-5 pt-5 border-t border-[#1F232E] flex flex-wrap gap-1.5">
                                    {project.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-md border border-[#1F232E] bg-[#0E1017] px-2.5 py-1 font-mono text-[11.5px] text-[#8B92A5]"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}