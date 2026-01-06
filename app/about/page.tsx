"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <main className="relative min-h-screen bg-gray-950 px-6 py-32">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mx-auto max-w-3xl"
            >
                {/* Heading */}
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
                    About <span className="text-purple-500">Me</span>
                </h1>

                {/* Intro */}
                <p className="mt-6 text-lg text-gray-400 leading-relaxed">
                    Hi, I’m{" "}
                    <span className="font-semibold text-gray-200">
            Sumit Kumar
          </span>
                    , a passionate frontend-focused developer who enjoys building
                    modern, interactive, and performance-driven web applications.
                </p>

                {/* What you do */}
                <section className="mt-12">
                    <h2 className="text-2xl font-semibold text-white">
                        What I Do
                    </h2>
                    <p className="mt-4 text-gray-400 leading-relaxed">
                        I specialize in creating clean user interfaces, smooth
                        animations, and scalable frontend architectures using
                        modern technologies like Next.js, TypeScript, and
                        Tailwind CSS. I focus on writing maintainable code and
                        delivering great user experiences.
                    </p>
                </section>

                {/* Skills */}
                <section className="mt-12">
                    <h2 className="text-2xl font-semibold text-white">
                        Skills & Tools
                    </h2>

                    <div className="mt-6 flex flex-wrap gap-3">
                        {[
                            "Next.js",
                            "React",
                            "TypeScript",
                            "Tailwind CSS",
                            "JavaScript",
                            "HTML & CSS",
                            "Framer Motion",
                            "Git & GitHub",
                            "MongoDB",
                            "SQL",
                        ].map(skill => (
                            <span
                                key={skill}
                                className="
                  rounded-full
                  border border-gray-800
                  bg-gray-900/60
                  px-4 py-2
                  text-sm
                  text-gray-300
                "
                            >
                {skill}
              </span>
                        ))}
                    </div>
                </section>

                {/* Goals */}
                <section className="mt-12">
                    <h2 className="text-2xl font-semibold text-white">
                        What I’m Looking For
                    </h2>
                    <p className="mt-4 text-gray-400 leading-relaxed">
                        I’m looking for opportunities where I can grow as a
                        developer, contribute to meaningful products, and work
                        with teams that value clean code, good design, and
                        continuous learning.
                    </p>
                </section>
            </motion.div>
        </main>
    );
}
