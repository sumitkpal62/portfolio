"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
    return (
        <main className="relative min-h-screen transition-colors duration-500 bg-zinc-50 dark:bg-[#050505] px-6 py-32 selection:bg-purple-500/30">
            <div className="mx-auto max-w-3xl">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter text-zinc-900 dark:text-white">
                        Let&apos;s Build <span className="text-purple-600 dark:text-purple-500">Infrastructure</span>
                    </h1>
                    <p className="mt-6 text-lg text-zinc-600 dark:text-slate-400 leading-relaxed">
                        Looking for a Data Engineer to architect your pipelines or optimize your warehouse?
                        Let&apos;s discuss how we can turn your data into a strategic asset.
                    </p>
                </motion.div>

                {/* Contact Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="
                        mt-16
                        rounded-2xl
                        border border-zinc-200 dark:border-white/10
                        bg-white/80 dark:bg-zinc-900/40
                        backdrop-blur-md
                        p-10
                        shadow-xl dark:shadow-none
                    "
                >
                    {/* Contact info grid */}
                    <div className="grid gap-10 sm:grid-cols-2">
                        <div className="space-y-8">
                            <div>
                                <p className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-400 dark:text-slate-500">
                                    Email
                                </p>
                                <a
                                    href="mailto:sumit@example.com"
                                    className="mt-2 block text-xl font-medium text-zinc-800 dark:text-slate-100 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                                >
                                    sumit@example.com
                                </a>
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-400 dark:text-slate-500">
                                    Social Directory
                                </p>
                                <div className="mt-4 flex flex-col gap-3">
                                    <a href="#" className="text-zinc-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> LinkedIn
                                    </a>
                                    <a href="#" className="text-zinc-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> GitHub
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-between">
                            <div>
                                <p className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-400 dark:text-slate-500">
                                    Location
                                </p>
                                <p className="mt-2 text-xl text-zinc-800 dark:text-slate-100">
                                    India <span className="text-zinc-400 dark:text-slate-600">(GMT +5:30)</span>
                                </p>
                            </div>

                            {/* Direct Action */}
                            <motion.a
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href="mailto:sumit@example.com"
                                className="
                                    mt-10 sm:mt-0
                                    text-center
                                    rounded-xl
                                    bg-purple-600
                                    px-8 py-4
                                    font-bold
                                    text-white
                                    shadow-lg shadow-purple-600/20
                                    hover:bg-purple-700
                                    transition-all
                                "
                            >
                                Initiate Discussion
                            </motion.a>
                        </div>
                    </div>
                </motion.div>

                {/* Professional Footer Note */}
                <p className="mt-10 text-center text-sm text-zinc-400 dark:text-slate-600">
                    Currently open to Data Engineering roles and freelance architecture consulting.
                </p>
            </div>
        </main>
    );
}