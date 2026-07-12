import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you were looking for could not be found.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-off-white flex flex-col items-center justify-center px-4 text-center">
      <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center rotate-3 shadow-xl mb-8">
        <span className="text-white font-heading font-black text-4xl -rotate-3">M</span>
      </div>
      <h1 className="font-heading text-6xl font-black text-primary mb-4">404</h1>
      <h2 className="font-heading text-2xl font-bold text-text-dark mb-4">Page Not Found</h2>
      <p className="text-text-muted text-lg max-w-md mb-10 leading-relaxed">
        We couldn&apos;t find the page you were looking for. It may have moved or the link may be incorrect.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/" className="btn-primary">
          Back to Home
        </Link>
        <Link href="/contact" className="btn-outline-primary">
          Contact Us
        </Link>
      </div>
    </div>
  );
}
