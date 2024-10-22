import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <nav className="bg-blue-500 p-4 text-white flex justify-around">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
        <p className="text-lg mb-6">This is a simple multi-page website built with Next.js.</p>
        <img src="/images.png" alt="Sample" className="w-1/2 mb-6" />
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Click Me
        </button>
      </main>
    </div>
  );
}