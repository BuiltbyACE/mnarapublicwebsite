'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-off-white flex flex-col items-center justify-center px-4 text-center">
      <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center rotate-3 shadow-xl mb-8">
        <span className="text-white font-heading font-black text-4xl -rotate-3">M</span>
      </div>
      <h1 className="font-heading text-2xl font-bold text-text-dark mb-3">Something went wrong</h1>
      <p className="text-text-muted text-lg max-w-md mb-10 leading-relaxed">
        We&apos;re sorry — an unexpected error occurred. Please try again or contact us if the problem persists.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={reset}
          className="btn-primary"
        >
          Try Again
        </button>
        <Link href="/" className="btn-outline-primary">
          Back to Home
        </Link>
      </div>
      {process.env.NODE_ENV === 'development' && error?.message && (
        <p className="mt-8 text-xs text-red-400 font-mono max-w-lg break-words">{error.message}</p>
      )}
    </div>
  );
}
