"use client";

import { motion } from "framer-motion";
import {
    siReact,
    siNextdotjs,
    siTypescript,
    siJavascript,
    siTailwindcss,
    siHtml5,
    siNodedotjs,
    siGraphql,
    siRedux,
    siPostgresql,
    siGit,
    siFigma,
    siPrisma,
    siAngular,
} from "simple-icons/icons";

const techs = [
    { name: "React", icon: siReact },
    { name: "Next.js", icon: siNextdotjs },
    { name: "TypeScript", icon: siTypescript },
    { name: "JavaScript", icon: siJavascript },
    { name: "Angular", icon: siAngular },
    { name: "Tailwind CSS", icon: siTailwindcss },
    { name: "HTML5", icon: siHtml5 },
    { name: "Node.js", icon: siNodedotjs },
    { name: "GraphQL", icon: siGraphql },
    { name: "Redux", icon: siRedux },
    { name: "PostgreSQL", icon: siPostgresql },
    { name: "Git", icon: siGit },
    { name: "Figma", icon: siFigma },
    { name: "Prisma", icon: siPrisma },
];

export function TechMarquee() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-12 bg-white dark:bg-black border-y border-gray-100 dark:border-gray-800">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-black to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-black to-transparent z-10" />

            <div className="flex w-full overflow-hidden mask-image-linear-to-r">
                <motion.div
                    className="flex min-w-full shrink-0 items-center gap-6 py-4 px-4"
                    animate={{
                        x: ["0%", "-100%"],
                    }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {[...techs, ...techs].map((tech, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col items-center justify-center w-32 h-36 rounded-xl border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white dark:hover:bg-gray-800 group"
                            style={{
                                boxShadow: `0 0 0 1px transparent`,
                            }}
                        >
                            {/* Glow Effect */}
                            <div
                                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                                style={{
                                    background: `radial-gradient(circle at center, #${tech.icon.hex}, transparent 70%)`
                                }}
                            />

                            <svg
                                role="img"
                                viewBox="0 0 24 24"
                                className="h-12 w-12 fill-current mb-4 z-10 transition-transform duration-300 group-hover:scale-110"
                                style={{ color: `#${tech.icon.hex}` }}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d={tech.icon.path} />
                            </svg>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 z-10">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </motion.div>

                {/* Duplicate for loop */}
                <motion.div
                    className="flex min-w-full shrink-0 items-center gap-6 py-4 px-4"
                    animate={{
                        x: ["0%", "-100%"],
                    }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {[...techs, ...techs].map((tech, index) => (
                        <div
                            key={`dup-${index}`}
                            className="relative flex flex-col items-center justify-center w-32 h-36 rounded-xl border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white dark:hover:bg-gray-800 group"
                        >
                            {/* Glow Effect */}
                            <div
                                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                                style={{
                                    background: `radial-gradient(circle at center, #${tech.icon.hex}, transparent 70%)`
                                }}
                            />

                            <svg
                                role="img"
                                viewBox="0 0 24 24"
                                className="h-12 w-12 fill-current mb-4 z-10 transition-transform duration-300 group-hover:scale-110"
                                style={{ color: `#${tech.icon.hex}` }}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d={tech.icon.path} />
                            </svg>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 z-10">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
