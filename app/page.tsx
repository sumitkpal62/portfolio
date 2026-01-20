"use client";

import { motion, AnimatePresence } from "framer-motion";
import HoverGrid from "@/components/HoverGrid";
import { useEffect, useState } from "react";

const greetings = [
    "Hi",           // English
    "Hola",         // Spanish
    "नमस्ते",        // Hindi
    "Bonjour",      // French
    "こんにちは",    // Japanese
    "Ciao",         // Italian
    "Olá",          // Portuguese
    "سلام",         // Arabic
    "Привет",       // Russian
    "SELECT 'Hi'",  // SQL (Very Data Engineer centric!)
    "print('Hi')",  // Python
    "fmt.Println",  // Go
    "01001000",     // Binary for 'H'
];

export default function HomePage() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % greetings.length);
        }, 3000); // 3 seconds is better for user engagement than 10

        return () => clearInterval(interval);
    }, []);

    return (
        <main className="relative min-h-screen overflow-hidden transition-colors duration-500 bg-zinc-50 dark:bg-slate-950 text-zinc-900 dark:text-slate-100">

            {/* Background Layer - HoverGrid should handle its own internal light/dark colors */}
            <div className="absolute inset-0 z-0">
                <HoverGrid />
                {/* Subtle radial glow that adapts to mode */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 dark:from-purple-900/20 via-transparent to-transparent" />
            </div>

            {/* CONTENT */}
            <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl"
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={greetings[index]}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="inline-block min-w-[3ch] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400"
                            >
                                {greetings[index]}
                            </motion.span>
                        </AnimatePresence>
                        <span className="text-zinc-800 dark:text-zinc-200">, I&apos;m </span>
                        <span className="relative inline-block">
                            Sumit Kumar
                            {/* Decorative underline */}
                            <motion.span
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ delay: 1, duration: 0.8 }}
                                className="absolute -bottom-2 left-0 h-[3px] bg-purple-500/40 dark:bg-purple-400/30 rounded-full"
                            />
                        </span>
                    </h1>

                    <p className="mt-8 text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        I architect <span className="text-purple-600 dark:text-purple-400 font-semibold">scalable data pipelines</span> and robust
                        <span className="text-purple-600 dark:text-purple-400 font-semibold"> ETL systems</span>.
                        Transforming complex data into high-performance analytical assets.
                    </p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-10 flex flex-wrap justify-center gap-4"
                    >
                        <button className="px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-500 text-white font-medium transition-all shadow-lg hover:shadow-purple-500/25">
                            View Pipelines
                        </button>
                        <button className="px-8 py-3 rounded-full border border-zinc-300 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all font-medium">
                            Read About Me
                        </button>
                    </motion.div>
                </motion.div>
            </section>
        </main>
    );
}