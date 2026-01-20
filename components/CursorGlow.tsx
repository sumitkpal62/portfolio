"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorGlow() {
    const x = useMotionValue(-400); // Start off-screen
    const y = useMotionValue(-400);

    const smoothX = useSpring(x, { stiffness: 50, damping: 20 });
    const smoothY = useSpring(y, { stiffness: 50, damping: 20 });

    useEffect(() => {
        const move = (e: MouseEvent) => {
            x.set(e.clientX - 200);
            y.set(e.clientY - 200);
        };
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, [x, y]);

    return (
        <motion.div
            style={{ x: smoothX, y: smoothY }}
            className="pointer-events-none fixed top-0 left-0 z-0 overflow-hidden"
        >
            {/* LIGHT MODE: Softer, light-indigo glow with very low opacity
                DARK MODE: Stronger purple/violet glow for depth
            */}
            <div className="
                h-[400px] w-[400px] rounded-full blur-[100px] transition-colors duration-1000

                /* LIGHT MODE */
                bg-indigo-400/10

                /* DARK MODE */
                dark:bg-purple-600/20
            " />
        </motion.div>
    );
}