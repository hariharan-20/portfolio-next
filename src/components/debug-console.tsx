"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Terminal, X, Activity, Layers, Cpu } from "lucide-react"

export function DebugConsole() {
    const [isOpen, setIsOpen] = React.useState(false)
    const pathname = usePathname()
    const [metrics, setMetrics] = React.useState({
        fcp: 0,
        lcp: 0,
        cls: 0,
        memory: 0
    })

    // Toggle with ~ key
    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "`") {
                // e.preventDefault() // Don't prevent default as ~ is a valid char
                // But for a toggle, we usually want it. However, if typing in an input, it's bad.
                // Check if active element is input
                const activeTag = document.activeElement?.tagName.toLowerCase()
                if (activeTag === 'input' || activeTag === 'textarea') return

                setIsOpen((open) => !open)
            }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    // Mock metrics update
    React.useEffect(() => {
        if (!isOpen) return
        const interval = setInterval(() => {
            setMetrics({
                fcp: Math.floor(Math.random() * 200) + 800,
                lcp: Math.floor(Math.random() * 500) + 1200,
                cls: Math.random() * 0.05,
                memory: Math.floor(Math.random() * 10) + 40
            })
        }, 2000)
        return () => clearInterval(interval)
    }, [isOpen])

    // Toggle outline for component boundaries
    React.useEffect(() => {
        if (isOpen) {
            document.body.classList.add("debug-boundaries")
        } else {
            document.body.classList.remove("debug-boundaries")
        }
    }, [isOpen])

    if (!isOpen) return null

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    className="fixed bottom-4 right-4 z-[100] w-80 rounded-lg border border-gray-800 bg-black/90 p-4 text-xs font-mono text-green-400 shadow-2xl backdrop-blur-md"
                >
                    <div className="flex items-center justify-between border-b border-gray-800 pb-2 mb-3">
                        <div className="flex items-center gap-2">
                            <Terminal className="h-4 w-4" />
                            <span className="font-bold">DEV CONSOLE</span>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="hover:text-white">
                            <X className="h-4 w-4" />
                        </button>
                    </div>

                    <div className="space-y-3">
                        <div className="space-y-1">
                            <div className="flex items-center gap-2 text-gray-400">
                                <Layers className="h-3 w-3" />
                                <span>ROUTE</span>
                            </div>
                            <div className="pl-5 text-white">{pathname}</div>
                        </div>

                        <div className="space-y-1">
                            <div className="flex items-center gap-2 text-gray-400">
                                <Activity className="h-3 w-3" />
                                <span>PERFORMANCE (Est.)</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2 pl-5">
                                <div>FCP: <span className="text-white">{metrics.fcp}ms</span></div>
                                <div>LCP: <span className="text-white">{metrics.lcp}ms</span></div>
                                <div>CLS: <span className="text-white">{metrics.cls.toFixed(3)}</span></div>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <div className="flex items-center gap-2 text-gray-400">
                                <Cpu className="h-3 w-3" />
                                <span>SYSTEM</span>
                            </div>
                            <div className="pl-5">
                                <div>Memory: <span className="text-white">{metrics.memory}MB</span></div>
                                <div>Env: <span className="text-white">development</span></div>
                            </div>
                        </div>

                        <div className="pt-2 border-t border-gray-800 text-gray-500 italic">
                            Debug boundaries active
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
