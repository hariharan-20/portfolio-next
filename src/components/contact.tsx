"use client"

import { useActionState } from "react"
import { submitContact } from "@/app/actions"
import { hero } from "@/data/siteData"
import { Linkedin, Mail, Loader2, CheckCircle2 } from "lucide-react"

const initialState = {
    success: false,
    message: ""
}

export function Contact() {
    const [state, formAction, isPending] = useActionState(submitContact, initialState)

    return (
        <section id="contact" className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50 dark:bg-gray-900/50">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                    Let's connect !
                </h2>
                <p className="mb-12 text-lg text-gray-600 dark:text-gray-300">
                    New projects, freelance enquiry, or even a coffee? I&apos;ll try my best to get back to you!
                </p>

                {state.success ? (
                    <div className="max-w-lg mx-auto p-8 bg-green-50 dark:bg-green-900/20 rounded-2xl border border-green-200 dark:border-green-900 flex flex-col items-center">
                        <CheckCircle2 className="w-12 h-12 text-green-500 mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                        <p className="text-gray-600 dark:text-gray-300">{state.message}</p>
                    </div>
                ) : (
                    <form action={formAction} className="max-w-lg mx-auto space-y-4 text-left">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-purple-400 dark:focus:ring-purple-400"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-purple-400 dark:focus:ring-purple-400"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                rows={4}
                                required
                                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-purple-400 dark:focus:ring-purple-400"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isPending}
                            className="w-full flex items-center justify-center rounded-lg bg-gray-900 py-3 text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 font-semibold disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isPending ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                                    Sending...
                                </>
                            ) : (
                                "Send Message"
                            )}
                        </button>
                    </form>
                )}

                <div className="mt-16 flex justify-center gap-8">
                    <a href={hero.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                        <Linkedin className="h-6 w-6" />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a href={`mailto:${hero.social.email}`} className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                        <Mail className="h-6 w-6" />
                        <span className="sr-only">Email</span>
                    </a>
                </div>
            </div>
        </section>
    )
}
