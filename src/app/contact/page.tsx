import Link from 'next/link';

export default function Contact() {
    return (
        <div>
            <nav className="bg-blue-500 p-4 text-white flex justify-around">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </nav>

            <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                <p className="text-lg">You can reach us at: alishahid@gmail.com</p>
            </main>
        </div>
    );
}
