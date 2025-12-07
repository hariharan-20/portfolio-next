"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { projects } from "@/data/siteData"

export function Projects() {
    return (
        <section id="projects" className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50 dark:bg-gray-900/50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
                    {projects.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.items.map((project, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl dark:border-gray-800 dark:bg-gray-800/50"
                        >
                            {/* Glow Effect */}
                            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-purple-500/0 opacity-0 transition-all duration-500 group-hover:from-purple-500/10 group-hover:via-purple-500/5 group-hover:to-purple-500/0 group-hover:opacity-100" />

                            <div className="relative z-10">
                                <div className="mb-4 flex items-center justify-between">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                        {project.name}
                                    </h3>
                                    <Link
                                        href={`/projects/${project.name.toLowerCase().replace(/\s+/g, "-")}`}
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-500 transition-colors hover:bg-purple-100 hover:text-purple-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-purple-900/30 dark:hover:text-purple-400"
                                    >
                                        <ArrowUpRight className="h-5 w-5" />
                                    </Link>
                                </div>

                                <p className="mb-6 text-gray-600 dark:text-gray-300">
                                    {project.description}
                                </p>

                                <div className="space-y-3">
                                    {project.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                            <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative z-10 mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                                <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                                    {project.role}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
