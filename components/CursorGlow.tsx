"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorGlow() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const smoothX = useSpring(x, { stiffness: 80, damping: 20 });
    const smoothY = useSpring(y, { stiffness: 80, damping: 20 });

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
            className="pointer-events-none fixed inset-0 z-0"
        >
            <div className="h-[400px] w-[400px] rounded-full bg-purple-600/30 blur-3xl" />
        </motion.div>
    );
}
