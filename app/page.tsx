export default function HomePage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
            {/* Hero Section */}
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                Hi, I&apos;m{" "}
                <span className="text-purple-500">Sumit Kumar</span>
            </h1>

            <p className="mt-4 max-w-xl text-gray-400 text-lg">
                A passionate developer building modern web applications using
                Next.js, TypeScript, and Tailwind CSS.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex gap-4">
                <a
                    href="/projects"
                    className="rounded-lg bg-purple-600 px-6 py-3 font-medium text-white hover:bg-purple-700 transition"
                >
                    View Projects
                </a>

                <a
                    href="/about"
                    className="rounded-lg border border-gray-700 px-6 py-3 font-medium text-gray-300 hover:bg-gray-800 transition"
                >
                    About Me
                </a>
            </div>
        </main>
    );
}
