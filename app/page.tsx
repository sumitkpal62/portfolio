"use client";

import { motion, AnimatePresence } from "framer-motion";
import HoverGrid from "@/components/HoverGrid";
import { useEffect, useState } from "react";


const greetings = [
    "Hi",
    "Hola",
    "नमस्ते",
    "Bonjour",
    "こんにちは",
    "Ciao",
];


export default function HomePage() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % greetings.length);
        }, 10000); // 10 seconds

        return () => clearInterval(interval);
    }, []);
    return (
        <main className="relative min-h-screen overflow-hidden">

            {/* Cursor-follow background */}

            <HoverGrid />


            {/* CONTENT */}
            <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl"
                >
                    <h1 className="text-5xl font-extrabold">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={greetings[index]}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="inline-block min-w-[4ch] text-purple-400"
                            >
                                {greetings[index]}
                            </motion.span>
                        </AnimatePresence>, I&apos;m{" "}
                        <span className="text-purple-500">Sumit Kumar</span>
                    </h1>

                    <p className="mt-6 text-lg text-gray-400">
                        I build modern web experiences with motion, performance,
                        and clean architecture.
                    </p>
                </motion.div>
            </section>
        </main>
    );
}
