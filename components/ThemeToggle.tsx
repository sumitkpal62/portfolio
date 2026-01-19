"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import Magnetic from "@/components/Magnetic";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("dark");

    // Load saved theme on mount
    useEffect(() => {
        const saved = localStorage.getItem("theme") as "light" | "dark" | null;
        const initial = saved ?? "dark";

        setTheme(initial);
        document.documentElement.classList.toggle("dark", initial === "dark");
    }, []);

    const toggleTheme = () => {
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);

        document.documentElement.classList.toggle("dark", next === "dark");
        localStorage.setItem("theme", next);
    };

    return (
            <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle theme"
                className="
          fixed bottom-6 right-6
          z-[10001]
          h-12 w-12
          rounded-full
          flex items-center justify-center
          border
          bg-white text-yellow-500
          dark:bg-gray-900 dark:text-purple-400
          border-gray-300 dark:border-gray-700
          shadow-lg
          transition-colors
        "
            >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
    );
}
