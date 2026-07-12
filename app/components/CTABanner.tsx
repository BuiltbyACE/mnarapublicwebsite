import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark" />

      {/* Decorative */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-20 w-40 h-40 bg-white/5 rounded-full translate-y-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
          Connect with us today and take the first step in your child&apos;s journey.
        </h2>
        <Link href="/contact" className="btn-secondary inline-flex mt-6">
          Get in Touch
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
