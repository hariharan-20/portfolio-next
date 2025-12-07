import { about } from "@/data/siteData"
import { CheckCircle2 } from "lucide-react"

export function About() {
    return (
        <section id="about" className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50 dark:bg-gray-900/50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
                    {about.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                            {about.description}
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                            <span className="text-purple-600 dark:text-purple-400">#</span> Highlights
                        </h3>
                        <ul className="space-y-4">
                            {about.highlights.map((highlight, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                                    <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
