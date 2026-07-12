import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AlteVola() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-primary/90" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-primary/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          We nurture young minds to fly high and achieve their full potential.
        </h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          At Mnara School, our integrated curriculum blends academics with
          co-curricular activities, from robotics and music to sports and the
          arts, ensuring children grow holistically in knowledge, skills, and
          character.
        </p>
        <Link href="/admissions" className="btn-secondary inline-flex">
          Apply Now
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
