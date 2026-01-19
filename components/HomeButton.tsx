"use client";

import Link from "next/link";
import { Home } from "lucide-react";
import { motion } from "framer-motion";
import Magnetic from "@/components/Magnetic";

type HomeButtonProps = {
    activeTab: "Home" | "About" | "Projects" | "Contact";
    setActiveTab: (tab: "Home" | "About" | "Projects" | "Contact") => void;
};

export default function HomeButton({activeTab,setActiveTab}: HomeButtonProps) {
    return (
        <Link href="/" onClick={()=>setActiveTab('Home')}>
            <Magnetic>
                <motion.div
                    whileHover={{ scale: 1.15 }}
                    className={`
                        z-[10001]
                        flex items-center justify-center
                        h-11 w-11
                        rounded-full
                        bg-gray-900/80
                        backdrop-blur-md
                        border border-gray-800
                        shadow-lg
                        hover:bg-purple-600
                        hover:text-white
                        transition-colors
                        ${activeTab === 'Home'?'text-purple-400': 'text-white'}
                        `}
                >
                    <Home size={20} />
                </motion.div>
            </Magnetic>
        </Link>
    );
}
