import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-stone-50 text-center px-4">
      <h1 className="text-9xl font-serif font-bold text-nature-green mb-4 opacity-20">404</h1>
      <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6">Page Not Found</h2>
      <p className="text-xl text-stone-600 mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="px-8 py-3 bg-nature-green text-white font-bold rounded-full hover:bg-green-800 transition-colors shadow-lg"
      >
        Return Home
      </Link>
    </div>
  );
}
