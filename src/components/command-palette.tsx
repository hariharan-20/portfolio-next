"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import { AnimatePresence, motion } from "framer-motion"
import {
    Command,
    Search,
    FileText,
    Moon,
    Sun,
    Laptop,
    User,
    Briefcase,
    Code,
    Mail,
    Home,
    Folder
} from "lucide-react"
import { projects, hero } from "@/data/siteData"
import { cn } from "@/lib/utils"

export function CommandPalette() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [query, setQuery] = React.useState("")
    const router = useRouter()
    const { setTheme } = useTheme()

    // Toggle with ⌘K
    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setIsOpen((open) => !open)
            }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    const navigation = [
        { name: "Home", href: "/", icon: Home },
        { name: "About", href: "/#about", icon: User },
        { name: "Experience", href: "/#experience", icon: Briefcase },
        { name: "Projects", href: "/#projects", icon: Folder },
        { name: "Skills", href: "/#skills", icon: Code },
        { name: "Contact", href: "/#contact", icon: Mail },
    ]

    const projectItems = projects.items.map((project) => ({
        name: project.name,
        href: `/projects/${project.name.toLowerCase().replace(/\s+/g, "-")}`,
        icon: Folder,
    }))

    const filteredItems = [
        ...navigation.map((item) => ({ ...item, type: "Page" })),
        ...projectItems.map((item) => ({ ...item, type: "Project" })),
        { name: "Download Resume", action: () => window.open(hero.resumeUrl, "_blank"), icon: FileText, type: "Action" },
        { name: "Theme: Light", action: () => setTheme("light"), icon: Sun, type: "Theme" },
        { name: "Theme: Dark", action: () => setTheme("dark"), icon: Moon, type: "Theme" },
        { name: "Theme: System", action: () => setTheme("system"), icon: Laptop, type: "Theme" },
    ].filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))

    const handleSelect = (item: any) => {
        if (item.href) {
            router.push(item.href)
        } else if (item.action) {
            item.action()
        }
        setIsOpen(false)
        setQuery("")
    }

    if (!isOpen) return null

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.1 }}
                        className="relative w-full max-w-lg overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-950"
                    >
                        <div className="flex items-center px-4 py-3 border-b border-gray-100 dark:border-gray-800">
                            <Search className="w-5 h-5 text-gray-400 mr-3" />
                            <input
                                autoFocus
                                className="flex-1 bg-transparent outline-none text-gray-900 placeholder-gray-400 dark:text-gray-100 text-lg"
                                placeholder="Type a command or search..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            <kbd className="hidden sm:inline-block px-2 py-0.5 text-xs font-semibold text-gray-500 bg-gray-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                                ESC
                            </kbd>
                        </div>
                        <div className="max-h-[60vh] overflow-y-auto py-2">
                            {filteredItems.length === 0 ? (
                                <div className="px-4 py-8 text-center text-gray-500 text-sm">
                                    No results found.
                                </div>
                            ) : (
                                <div className="px-2">
                                    {filteredItems.map((item, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleSelect(item)}
                                            className={cn(
                                                "w-full flex items-center px-3 py-3 text-left text-sm rounded-lg group transition-colors",
                                                "hover:bg-gray-100 dark:hover:bg-gray-900 focus:bg-gray-100 dark:focus:bg-gray-900 outline-none"
                                            )}
                                        >
                                            <item.icon className="w-4 h-4 mr-3 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100" />
                                            <span className="flex-1 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 font-medium">
                                                {item.name}
                                            </span>
                                            {item.type && (
                                                <span className="text-xs text-gray-400 opacity-50 uppercase tracking-wider">
                                                    {item.type}
                                                </span>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
