"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const COLS = 14;
const ROWS = 10;
const TOTAL = COLS * ROWS;
const MAX_DISTANCE = 200;

export default function HoverGrid() {
    const [mouse, setMouse] = useState({ x: -9999, y: -9999 });
    const [viewport, setViewport] = useState({ w: 0, h: 0 });

    // Get viewport size safely (client only)
    useEffect(() => {
        const updateSize = () => {
            setViewport({
                w: window.innerWidth,
                h: window.innerHeight,
            });
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        window.addEventListener("mousemove", e =>
            setMouse({ x: e.clientX, y: e.clientY })
        );

        return () => {
            window.removeEventListener("resize", updateSize);
            window.removeEventListener("mousemove", () => {});
        };
    }, []);

    // Avoid rendering until we know viewport size
    if (viewport.w === 0 || viewport.h === 0) return null;

    return (
        <div className="fixed inset-0 z-0">
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

                    const intensity = Math.max(
                        0,
                        1 - distance / MAX_DISTANCE
                    );

                    return (
                        <motion.div
                            key={i}
                            animate={{
                                backgroundColor: `rgba(147, 51, 234, ${0.15 + intensity * 0.6})`,
                                boxShadow:
                                    intensity > 0
                                        ? `0 0 ${20 * intensity}px rgba(147, 51, 234, ${
                                            intensity * 0.6
                                        })`
                                        : "none",
                            }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="border border-gray-800 bg-gray-950"
                        />
                    );
                })}
            </div>
        </div>
    );
}
