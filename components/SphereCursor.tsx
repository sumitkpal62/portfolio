"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function SphereCursor() {
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Smooth laggy motion (sphere feel)
    const smoothX = useSpring(mouseX, {
        stiffness: 300,
        damping: 25,
        mass: 0.8,
    });

    const smoothY = useSpring(mouseY, {
        stiffness: 300,
        damping: 25,
        mass: 0.8,
    });

    useEffect(() => {
        const move = (e: MouseEvent) => {
            mouseX.set(e.clientX - 10);
            mouseY.set(e.clientY - 10);
        };

        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            style={{ x: smoothX, y: smoothY }}
            className="
        pointer-events-none
        fixed top-0 left-0 z-[9999]
        h-5 w-5
        rounded-full
        bg-purple-500
        shadow-[0_0_20px_rgba(147,51,234,0.6)]
        mix-blend-difference
      "
        />
    );
}
