"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import { hero } from "@/data/siteData"
import { ThemeToggle } from "@/components/theme-toggle"

export function Hero() {
    return (
        <section className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden px-6 pt-16 md:px-12 lg:px-20">
            {/* Background Gradients */}
            <div className="absolute -top-[20%] -right-[10%] h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[100px] dark:bg-purple-900/20" />
            <div className="absolute top-[20%] -left-[10%] h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-[100px] dark:bg-blue-900/20" />

            {/* Header with Theme Toggle */}
            <div className="absolute top-6 right-6 md:right-12 z-20">
                <ThemeToggle />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1 text-center md:text-left"
                >
                    <span className="mb-4 inline-block rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                        {hero.role}
                    </span>
                    <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl dark:text-white">
                        Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">{hero.name}</span>.
                    </h1>
                    <p className="mb-8 max-w-2xl text-xl leading-relaxed text-gray-600 dark:text-gray-300 mx-auto md:mx-0">
                        {hero.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <a
                            href="#projects"
                            className="group flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-base font-semibold text-white transition-all hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                        >
                            {hero.ctaPrimary}
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                        <a
                            href={hero.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-base font-semibold text-gray-900 transition-all hover:border-gray-300 hover:bg-gray-50 dark:border-gray-700 dark:bg-transparent dark:text-white dark:hover:bg-gray-800"
                        >
                            {hero.ctaSecondary}
                            <Download className="h-4 w-4" />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative shrink-0"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                        <img
                            src={hero.image}
                            alt={hero.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Decorative Circle */}
                    <div className="absolute -inset-4 rounded-full border border-gray-200 dark:border-gray-700 -z-10 animate-spin-slow" />
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">Scroll</span>
                    <div className="h-12 w-[1px] bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-700" />
                </div>
            </motion.div>
        </section>
    )
}
