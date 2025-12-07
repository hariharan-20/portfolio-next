"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { Sun, Moon, Laptop } from "lucide-react"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
            >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute top-2 h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <div
                            className="fixed inset-0 z-40"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 10 }}
                            className="absolute right-0 mt-2 z-50 min-w-[120px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-950"
                        >
                            {[
                                { name: "Light", value: "light", icon: Sun },
                                { name: "Dark", value: "dark", icon: Moon },
                                { name: "System", value: "system", icon: Laptop },
                            ].map((item) => (
                                <button
                                    key={item.value}
                                    onClick={() => {
                                        setTheme(item.value)
                                        setIsOpen(false)
                                    }}
                                    className={cn(
                                        "flex w-full items-center gap-2 px-4 py-2.5 text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800",
                                        theme === item.value && "text-blue-500 font-medium"
                                    )}
                                >
                                    <item.icon className="h-4 w-4" />
                                    {item.name}
                                </button>
                            ))}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}
