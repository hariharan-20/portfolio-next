import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Calendar } from "lucide-react"
import { projects } from "@/data/siteData"

export async function generateStaticParams() {
    return projects.items.map((project) => ({
        slug: project.name.toLowerCase().replace(/\s+/g, "-"),
    }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const project = projects.items.find(
        (p) => p.name.toLowerCase().replace(/\s+/g, "-") === slug
    )

    if (!project) {
        notFound()
    }

    return (
        <article className="min-h-screen py-24 px-6 md:px-12 lg:px-20">
            <div className="max-w-4xl mx-auto">
                <Link href="/#projects" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Projects
                </Link>

                <header className="mb-16">
                    <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
                        <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 text-sm font-medium">
                            {project.role}
                        </span>
                        {/* Date could go here if available */}
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        {project.name}
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                        {project.description}
                    </p>
                </header>

                {project.caseStudy ? (
                    <div className="space-y-16">
                        <section className="grid md:grid-cols-3 gap-8 border-y border-gray-100 dark:border-gray-800 py-8">
                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.caseStudy.stack.map((tech) => (
                                        <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm text-gray-700 dark:text-gray-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="md:col-span-2">
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">Key Features</h3>
                                <ul className="grid sm:grid-cols-2 gap-2">
                                    {project.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm">
                                            <span className="block mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-500 shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        <section className="space-y-8">
                            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Problem</h2>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {project.caseStudy.problem}
                                </p>
                            </div>

                            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Solution</h2>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {project.caseStudy.solution}
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/10 rounded-2xl p-8 border border-purple-100 dark:border-purple-900/50">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Impact & Results</h2>
                                <p className="text-gray-700 dark:text-gray-200 leading-relaxed font-medium">
                                    {project.caseStudy.impact}
                                </p>
                            </div>
                        </section>
                    </div>
                ) : (
                    <div className="p-8 bg-gray-50 rounded-xl text-center text-gray-500">
                        Detailed case study coming soon...
                    </div>
                )}
            </div>
        </article>
    )
}
