"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "Portfolio Website",
        description:
            "A modern animated portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.",
        tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
        link: "#",
    },
    {
        title: "Task Management App",
        description:
            "A full-stack task management application with authentication and CRUD features.",
        tech: ["React", "Node.js", "MongoDB", "Express"],
        link: "#",
    },
    {
        title: "Data Dashboard",
        description:
            "An interactive dashboard for visualizing data with charts and filters.",
        tech: ["React", "Chart.js", "REST API"],
        link: "#",
    },
];

export default function ProjectsPage() {
    return (
        <main className="relative min-h-screen bg-gray-950 px-6 py-32">
            <div className="mx-auto max-w-6xl">
                {/* Page heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
                        My <span className="text-purple-500">Projects</span>
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg text-gray-400">
                        A selection of projects that showcase my skills, learning journey,
                        and passion for building modern web applications.
                    </p>
                </motion.div>

                {/* Projects grid */}
                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="
                rounded-2xl
                border border-gray-800
                bg-gray-900/60
                backdrop-blur
                p-6
                shadow-lg
                transition
              "
                        >
                            <h3 className="text-xl font-semibold text-white">
                                {project.title}
                            </h3>

                            <p className="mt-3 text-gray-400">
                                {project.description}
                            </p>

                            {/* Tech stack */}
                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.tech.map(t => (
                                    <span
                                        key={t}
                                        className="
                      rounded-full
                      border border-gray-700
                      bg-gray-800/60
                      px-3 py-1
                      text-xs
                      text-gray-300
                    "
                                    >
                    {t}
                  </span>
                                ))}
                            </div>

                            {/* Link */}
                            <a
                                href={project.link}
                                className="
                  mt-6
                  inline-block
                  text-sm
                  font-medium
                  text-purple-400
                  hover:text-purple-300
                  transition-colors
                "
                            >
                                View Project →
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
