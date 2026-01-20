"use client";

import Link from "next/link";
import { Home } from "lucide-react";
import { motion } from "framer-motion";
import Magnetic from "@/components/Magnetic";

type HomeButtonProps = {
    activeTab: "Home" | "About" | "Projects" | "Contact";
    setActiveTab: (tab: "Home" | "About" | "Projects" | "Contact") => void;
};

export default function HomeButton({ activeTab, setActiveTab }: HomeButtonProps) {
    return (
        <Link href="/" onClick={() => setActiveTab('Home')}>
            <Magnetic>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`
                        relative
                        flex items-center justify-center
                        h-10 w-10
                        rounded-full
                        transition-all duration-300
                        border
                        shadow-md
                        
                        /* LIGHT MODE */
                        bg-zinc-100/80 border-zinc-200 text-zinc-600
                        hover:bg-purple-600 hover:text-white hover:border-purple-600
                        
                        /* DARK MODE */
                        dark:bg-zinc-900/80 dark:border-zinc-800 dark:text-zinc-400
                        dark:hover:bg-purple-500 dark:hover:text-white dark:hover:border-purple-500

                        /* ACTIVE TAB STATE */
                        ${activeTab === 'Home'
                        ? 'text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-500/30'
                        : ''
                    }
                    `}
                >
                    <Home size={18} strokeWidth={activeTab === 'Home' ? 2.5 : 2} />

                    {/* Subtle glow effect for active home state */}
                    {activeTab === 'Home' && (
                        <motion.div
                            layoutId="home-glow"
                            className="absolute inset-0 rounded-full bg-purple-500/10 dark:bg-purple-400/10 blur-md"
                        />
                    )}
                </motion.div>
            </Magnetic>
        </Link>
    );
}