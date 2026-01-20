"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const COLS = 14;
const ROWS = 10;
const TOTAL = COLS * ROWS;
const MAX_DISTANCE = 250; // Slightly larger for smoother interaction

export default function HoverGrid() {
    const [mouse, setMouse] = useState({ x: -9999, y: -9999 });
    const [viewport, setViewport] = useState({ w: 0, h: 0 });

    useEffect(() => {
        const updateSize = () => {
            setViewport({
                w: window.innerWidth,
                h: window.innerHeight,
            });
        };

        updateSize();
        const handleMouseMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });

        window.addEventListener("resize", updateSize);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("resize", updateSize);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    if (viewport.w === 0 || viewport.h === 0) return null;

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none transition-colors duration-500 bg-zinc-50 dark:bg-[#050505]">
            <div
                className="grid h-full w-full"
                style={{
                    gridTemplateColumns: `repeat(${COLS}, 1fr)`,
                    gridTemplateRows: `repeat(${ROWS}, 1fr)`,
                }}
            >
                {Array.from({ length: TOTAL }).map((_, i) => {
                    const col = i % COLS;
                    const row = Math.floor(i / COLS);

                    const x = (col + 0.5) * (viewport.w / COLS);
                    const y = (row + 0.5) * (viewport.h / ROWS);

                    const dx = mouse.x - x;
                    const dy = mouse.y - y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    const intensity = Math.max(0, 1 - distance / MAX_DISTANCE);

                    return (
                        <motion.div
                            key={i}
                            animate={{
                                // Light Mode: Very subtle purple tint
                                // Dark Mode: Deeper purple glow
                                backgroundColor: `rgba(147, 51, 234, ${intensity * 0.15})`,
                                borderColor: intensity > 0.1
                                    ? "rgba(147, 51, 234, 0.3)"
                                    : "rgba(161, 161, 170, 0.1)", // zinc-400 equivalent
                            }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="border-[0.5px] border-zinc-200 dark:border-white/5"
                        />
                    );
                })}
            </div>

            {/* Soft overlay to make the grid less "harsh" on content */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-50 via-transparent to-zinc-50 dark:from-[#050505] dark:via-transparent dark:to-[#050505]" />
        </div>
    );
}