"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Magnetic from "@/components/Magnetic";
import HomeButton from "@/components/HomeButton";
import {useState} from "react";

const navItems:{ label: ActiveTab; href: string }[] = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
];



type ActiveTab = "Home" | "About" | "Projects" | "Contact";



export default function Navbar() {
    let [activeTab, setActiveTab] = useState<ActiveTab>('Home');

    const setActive = (tabName:ActiveTab) => {
        setActiveTab(tabName);
    }

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
                        fixed top-6 inset-x-0
                        z-[10000]
                        flex justify-center
                        pointer-events-none
                      ">
            <div  className="pointer-events-auto
            flex
            items-center
            gap-8
            rounded-full
            bg-gray-900/80
            backdrop-blur-md
            border
            border-gray-800
            px-6
            py-3
            shadow-lg"
            >
            <HomeButton activeTab={activeTab} setActiveTab={setActiveTab} />

            {navItems.map(item => (
                <Magnetic key={item.label} strength={0.25}>
                    <Link onClick={()=>setActive(item.label)} href={item.href}>
                        <motion.span
                            whileHover={{ scale: 1.1 }}
                            className={`
                            cursor-pointer
                            text-sm 
                            font-medium 
                            text-gray-300 
                            hover:text-purple-400 
                            transition-colors
                            ${activeTab == item.label && 'text-purple-400'}
                            `}

                        >
                            {item.label}
                        </motion.span>
                    </Link>
                </Magnetic>
            ))}</div>
        </motion.nav>
    );
}
