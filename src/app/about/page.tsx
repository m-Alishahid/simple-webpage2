import Link from 'next/link';

export default function About() {
    return (
        <div>
            <nav className="bg-blue-500 p-4 text-white flex justify-around">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </nav>

            <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p className="text-lg">We are a team of developers creating amazing web experiences.</p>
            </main>
        </div>
    );
}