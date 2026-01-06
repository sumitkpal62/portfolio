"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
    return (
        <main className="relative min-h-screen bg-gray-950 px-6 py-32">
            <div className="mx-auto max-w-3xl">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
                        Get in <span className="text-purple-500">Touch</span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-400">
                        Have a project, opportunity, or just want to say hello?
                        Feel free to reach out.
                    </p>
                </motion.div>

                {/* Contact Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="
            mt-16
            rounded-2xl
            border border-gray-800
            bg-gray-900/60
            backdrop-blur
            p-8
            shadow-lg
          "
                >
                    {/* Contact info */}
                    <div className="space-y-6">
                        <div>
                            <p className="text-sm uppercase tracking-wide text-gray-500">
                                Email
                            </p>
                            <a
                                href="mailto:sumit@example.com"
                                className="mt-1 block text-lg font-medium text-purple-400 hover:text-purple-300 transition-colors"
                            >
                                sumit@example.com
                            </a>
                        </div>

                        <div>
                            <p className="text-sm uppercase tracking-wide text-gray-500">
                                Location
                            </p>
                            <p className="mt-1 text-lg text-gray-300">
                                India
                            </p>
                        </div>

                        <div>
                            <p className="text-sm uppercase tracking-wide text-gray-500">
                                Social
                            </p>
                            <div className="mt-2 flex gap-4">
                                <a
                                    href="https://github.com/"
                                    target="_blank"
                                    className="text-gray-300 hover:text-purple-400 transition-colors"
                                >
                                    GitHub
                                </a>
                                <a
                                    href="https://linkedin.com/"
                                    target="_blank"
                                    className="text-gray-300 hover:text-purple-400 transition-colors"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href="https://twitter.com/"
                                    target="_blank"
                                    className="text-gray-300 hover:text-purple-400 transition-colors"
                                >
                                    Twitter
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="mailto:sumit@example.com"
                        className="
              mt-10
              inline-block
              rounded-xl
              bg-purple-600
              px-8 py-4
              font-semibold
              text-white
              shadow-lg shadow-purple-600/30
              hover:bg-purple-700
              transition
            "
                    >
                        Send Email
                    </motion.a>
                </motion.div>
            </div>
        </main>
    );
}
