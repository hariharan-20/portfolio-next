import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sync Text Editor - Real-Time Collaborative Editing",
    description:
        "A real-time collaborative text editor powered by Y.js CRDTs, Hocuspocus, and Supabase. Experience seamless multi-user editing with automatic conflict resolution.",
};

export default function ShareTextPage() {
    return (
        <div className="min-h-screen bg-gray-950 flex flex-col">
            {/* Header */}
            <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div>
                        <h1 className="text-xl font-bold text-white">
                            Sync Text Editor
                        </h1>
                        <p className="text-sm text-gray-400 mt-1">
                            Real-time collaborative editing powered by Y.js
                        </p>
                    </div>
                    <a
                        href="/"
                        className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors"
                    >
                        ← Back to Portfolio
                    </a>
                </div>
            </header>

            {/* Iframe Container */}
            <main className="flex-1 flex flex-col p-4 md:p-6">
                <div className="flex-1 bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-800">
                    <iframe
                        src="https://share-text-ut1a.vercel.app/"
                        className="w-full h-full min-h-[600px]"
                        title="Sync Text Editor - Live Demo"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        loading="lazy"
                    />
                </div>
            </main>
        </div>
    );
}
