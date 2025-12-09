import { FC } from "hono/jsx";

const layout: FC<{ children: any }> = ({children}) => {
    return (
        <div class="min-h-screen flex flex-col">

        {/* --- Header --- */}
        <header class="bg-gray-800 text-white p-4">
        <nav class="max-w-4xl mx-auto flex gap-6">
            <a href="/" class="hover:underline">Home</a>
            <a href="/about" class="hover:underline">About</a>
        </nav>
        </header>

      {/* --- Main Content --- */}
        <main class="flex-1 max-w-4xl mx-auto p-6">
            {children}
        </main>

      {/* --- Footer --- */}
        <footer class="bg-gray-200 text-center p-4 mt-8">
            <p class="text-sm text-gray-700">© 2025 My HonoX App</p>
        </footer>
    </div>
    )
}

export default layout;