"use client";

import { motion } from "framer-motion";
import HoverGrid from "@/components/HoverGrid";

export default function HomePage() {
    return (
        <main className="relative h-screen overflow-hidden bg-gray-950">
            {/* Animated background */}
            <HoverGrid />

            {/* Foreground content */}
            <section className="relative z-10 h-screen flex items-center justify-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-2xl"
                >
                    <h1 className="text-5xl font-extrabold text-white">
                        Hi, I&apos;m{" "}
                        <span className="text-purple-500">Sumit Kumar</span>
                    </h1>

                    <p className="mt-6 text-lg text-gray-400">
                        Frontend Developer building interactive, animated,
                        and modern web experiences with Next.js.
                    </p>
                </motion.div>
            </section>
        </main>
    );
}
