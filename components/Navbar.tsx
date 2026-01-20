"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Magnetic from "@/components/Magnetic";
import HomeButton from "@/components/HomeButton";
import { useState } from "react";

const navItems: { label: ActiveTab; href: string }[] = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
];

type ActiveTab = "Home" | "About" | "Projects" | "Contact";

export default function Navbar() {
    let [activeTab, setActiveTab] = useState<ActiveTab>('Home');

    const setActive = (tabName: ActiveTab) => {
        setActiveTab(tabName);
    }

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
                fixed top-6 inset-x-0
                z-[50]
                flex justify-center
                pointer-events-none
            "
        >
            <div className="
                pointer-events-auto
                flex items-center gap-8
                rounded-full
                px-6 py-3
                transition-all duration-300
                border
                shadow-2xl

                /* LIGHT MODE: White semi-transparent */
                bg-white/70 border-zinc-200 text-zinc-800

                /* DARK MODE: Deep slate semi-transparent */
                dark:bg-black/80 dark:border-white/10 dark:text-zinc-400

                backdrop-blur-md
            ">
                <HomeButton activeTab={activeTab} setActiveTab={setActiveTab} />

                {navItems.map(item => (
                    <Magnetic key={item.label} strength={0.25}>
                        <Link onClick={() => setActive(item.label)} href={item.href}>
                            <motion.span
                                whileHover={{ scale: 1.1 }}
                                className={`
                                    relative
                                    cursor-pointer
                                    text-sm 
                                    font-semibold 
                                    transition-colors
                                    /* Active States */
                                    ${activeTab === item.label
                                    ? 'text-purple-600 dark:text-purple-400'
                                    : 'hover:text-purple-500 dark:hover:text-white'}
                                `}
                            >
                                {item.label}

                                {/* Animated underline for active state */}
                                {activeTab === item.label && (
                                    <motion.div
                                        layoutId="nav-underline"
                                        className="absolute -bottom-1 left-0 w-full h-[1px] bg-purple-500"
                                    />
                                )}
                            </motion.span>
                        </Link>
                    </Magnetic>
                ))}
            </div>
        </motion.nav>
    );
}