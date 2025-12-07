import { experience } from "@/data/siteData"

export function Experience() {
    return (
        <section id="experience" className="py-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-16 text-center text-gray-900 dark:text-white">
                    {experience.title}
                </h2>

                <div className="relative border-l border-gray-200 dark:border-gray-700 ml-4 md:ml-6 space-y-12">
                    {experience.jobs.map((job, index) => (
                        <div key={index} className="relative pl-8 md:pl-12">
                            {/* Timeline Dot */}
                            <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-purple-600 ring-4 ring-white dark:ring-gray-950" />

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                    {job.company}
                                </h3>
                                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                                    {job.period}
                                </span>
                            </div>

                            <div className="mb-4">
                                <p className="text-lg font-medium text-purple-600 dark:text-purple-400">
                                    {job.role}
                                </p>
                                {job.client && (
                                    <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                                        Client: {job.client}
                                    </p>
                                )}
                            </div>

                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                {job.description}
                            </p>

                            <ul className="space-y-2">
                                {job.highlights.map((highlight, idx) => (
                                    <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                                        <span className="block mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-gray-600 shrink-0" />
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
