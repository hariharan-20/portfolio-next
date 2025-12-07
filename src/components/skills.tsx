import { skills } from "@/data/siteData"

export function Skills() {
    return (
        <section id="skills" className="py-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-16 text-center text-gray-900 dark:text-white">
                    {skills.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.categories.map((category, index) => (
                        <div
                            key={index}
                            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900/40"
                        >
                            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                                {category.name}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.items.map((item, i) => (
                                    <span
                                        key={i}
                                        className="rounded-md bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300 transition-colors hover:bg-purple-100 hover:text-purple-700 dark:hover:bg-purple-900/30 dark:hover:text-purple-300"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
