"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "Automated ETL Pipeline",
        description:
            "Architected a scalable pipeline to ingest and transform multi-source data using Python and Cloud SQL. Optimized for high throughput and data integrity.",
        tech: ["Python", "SQL", "GCP", "Airflow"],
        link: "#",
    },
    {
        title: "Retail Data Warehouse",
        description:
            "Designed a Star Schema data model for retail analytics, migrating legacy Informatica workflows to modern cloud-native architecture.",
        tech: ["dbt", "Snowflake", "Azure", "SQL"],
        link: "#",
    },
    {
        title: "Real-time Stream Processor",
        description:
            "Built a streaming architecture to process live event data, enabling real-time visualization of business-critical KPIs.",
        tech: ["Kafka", "PySpark", "AWS", "Tableau"],
        link: "#",
    },
];

export default function ProjectsPage() {
    return (
        <main className="relative min-h-screen transition-colors duration-500 bg-zinc-50 dark:bg-[#050505] px-6 py-32 selection:bg-purple-500/30">
            <div className="mx-auto max-w-6xl">
                {/* Page heading */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="border-l-4 border-purple-600 pl-6"
                >
                    <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter text-zinc-900 dark:text-white">
                        DATA <span className="text-purple-600 dark:text-purple-500">ENGINEERING</span>
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-slate-400 leading-relaxed">
                        A showcase of robust data infrastructure, scalable ETL pipelines, and
                        modern warehouse modeling.
                    </p>
                </motion.div>

                {/* Projects grid */}
                <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="
                                group relative
                                rounded-xl
                                border border-zinc-200 dark:border-white/10
                                bg-white/50 dark:bg-zinc-900/30
                                backdrop-blur-sm
                                p-8
                                hover:border-purple-500/50
                                transition-all duration-300
                                shadow-sm dark:shadow-none
                            "
                        >
                            <h3 className="text-xl font-bold text-zinc-800 dark:text-slate-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                {project.title}
                            </h3>

                            <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-slate-400">
                                {project.description}
                            </p>

                            {/* Tech stack */}
                            <div className="mt-6 flex flex-wrap gap-2">
                                {project.tech.map(t => (
                                    <span
                                        key={t}
                                        className="
                                            rounded text-[10px] uppercase tracking-widest font-bold
                                            border border-zinc-200 dark:border-white/10
                                            bg-zinc-100 dark:bg-white/5
                                            px-2 py-1
                                            text-zinc-500 dark:text-slate-300
                                        "
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Link */}
                            <a
                                href={project.link}
                                className="
                                    mt-8 flex items-center gap-2
                                    text-xs font-bold uppercase tracking-widest
                                    text-purple-600 dark:text-purple-400
                                    hover:text-purple-700 dark:hover:text-purple-300
                                    transition-colors
                                "
                            >
                                Architecture Details
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}