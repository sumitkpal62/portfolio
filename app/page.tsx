"use client";

import { motion } from "framer-motion";
import CursorGlow from "@/components/CursorGlow";
import HoverGrid from "@/components/HoverGrid";
import Navbar from "@/components/Navbar";


export default function HomePage() {
    return (
        <main className="relative min-h-screen overflow-hidden">
            <Navbar/>
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
                        Hi, I&apos;m{" "}
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
