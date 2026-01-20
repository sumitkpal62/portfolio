"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
    // Curated skills based on your specific background
    const skills = [
        { category: "Cloud & DB", items: ["GCP", "AWS", "Azure", "SQL", "BigQuery", "Snowflake"] },
        { category: "Data Engineering", items: ["ETL", "Informatica PowerCenter", "Pandas", "NumPy", "Airflow"] },
        { category: "Programming", items: ["Python", "C++", "OOPS", "R"] },
        { category: "Visualization", items: ["PowerBI", "Tableau"] },
    ];

    return (
        <main className="relative min-h-screen transition-colors duration-500 bg-zinc-50 dark:bg-[#050505] px-6 py-32">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mx-auto max-w-4xl"
            >
                {/* Heading */}
                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tighter text-zinc-900 dark:text-white">
                    System <span className="text-purple-600 dark:text-purple-500">Architect</span>
                </h1>

                {/* Narrative Bio */}
                <div className="mt-12 space-y-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                    <p>
                        Hi, I’m <span className="font-bold text-zinc-900 dark:text-white">Sumit Kumar</span>.
                        I specialize in building the hidden infrastructure that powers modern business intelligence.
                    </p>
                    <p>
                        With a foundation in <span className="text-purple-600 dark:text-purple-400 font-medium">Informatica PowerCenter</span> and
                        robust system design using <span className="text-purple-600 dark:text-purple-400 font-medium">C++</span>, I bridge the gap
                        between legacy stability and modern cloud scalability. I don&apos;t just move data; I ensure its
                        integrity, performance, and accessibility.
                    </p>
                </div>

                {/* What I Do Section */}

                <section className="mt-20 grid gap-12 md:grid-cols-2">
                    <div>
                        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                            <span className="h-px w-8 bg-purple-500" /> What I Do
                        </h2>
                        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                            I design and implement <span className="font-semibold text-zinc-800 dark:text-zinc-200">End-to-End ETL pipelines</span>.
                            My focus is on transforming raw, unstructured data into optimized schemas within Cloud Data Warehouses like
                            BigQuery and Snowflake.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                            <span className="h-px w-8 bg-purple-500" /> My Philosophy
                        </h2>
                        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                            Data is only as valuable as it is reliable. I advocate for
                            <span className="font-semibold text-zinc-800 dark:text-zinc-200"> code-based orchestration</span> and automated testing
                            to prevent pipeline failures before they reach the dashboard.
                        </p>
                    </div>
                </section>

                {/* Categorized Skills */}
                <section className="mt-24">
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-10 text-center">Technical Stack</h2>
                    <div className="grid gap-6 sm:grid-cols-2">
                        {skills.map((group) => (
                            <div key={group.category} className="p-6 rounded-2xl border border-zinc-200 dark:border-white/5 bg-white/50 dark:bg-white/5">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 mb-4">
                                    {group.category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {group.items.map(skill => (
                                        <span key={skill} className="px-3 py-1 text-sm rounded-md bg-zinc-100 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/10">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Professional Goal */}
                <section className="mt-24 p-8 rounded-3xl bg-purple-600/5 border border-purple-500/20 text-center">
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Looking for my next challenge</h2>
                    <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
                        I am seeking roles as a <span className="text-purple-600 dark:text-purple-400 font-bold">Data Engineer</span> or
                        <span className="text-purple-600 dark:text-purple-400 font-bold"> ETL Developer</span> where I can leverage my
                        multi-cloud experience to build high-performance data systems.
                    </p>
                </section>
            </motion.div>
        </main>
    );
}