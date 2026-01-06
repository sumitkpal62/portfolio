"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode, useRef } from "react";

type MagneticProps = {
    children: ReactNode;
    strength?: number; // attraction strength
};

export default function Magnetic({
                                     children,
                                     strength = 0.35,
                                 }: MagneticProps) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const smoothX = useSpring(x, { stiffness: 300, damping: 20 });
    const smoothY = useSpring(y, { stiffness: 300, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const relX = e.clientX - rect.left - rect.width / 2;
        const relY = e.clientY - rect.top - rect.height / 2;

        x.set(relX * strength);
        y.set(relY * strength);
    };

    const reset = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            style={{ x: smoothX, y: smoothY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={reset}
            className="inline-block"
        >
            {children}
        </motion.div>
    );
}
