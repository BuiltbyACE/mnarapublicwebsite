'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import SectionHeader from './ui/SectionHeader';
import { testimonials } from '../lib/data';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const itemsPerView = 3;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) =>
      prev + itemsPerView >= testimonials.length ? 0 : prev + 1
    );
    setTimeout(() => setIsAnimating(false), 400);
  }, [isAnimating]);

  const prev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((p) => (p === 0 ? testimonials.length - itemsPerView : p - 1));
    setTimeout(() => setIsAnimating(false), 400);
  }, [isAnimating]);

  useEffect(() => {
    timerRef.current = setInterval(next, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next]);

  const visibleTestimonials = testimonials.slice(
    current,
    current + itemsPerView
  );

  const displayTestimonials =
    visibleTestimonials.length < itemsPerView
      ? [
          ...visibleTestimonials,
          ...testimonials.slice(0, itemsPerView - visibleTestimonials.length),
        ]
      : visibleTestimonials;

  return (
    <SectionWrapper id="testimonials">
      <SectionHeader
        label="Trusted by Parents"
        title={<>People are <span className="text-primary">talking.</span></>}
      />

      <div className="relative">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {displayTestimonials.map((t, i) => (
            <div
              key={`${current}-${i}`}
              className="testimonial-card animate-fade-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Quote size={18} className="text-primary" />
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="text-gold fill-gold"
                  />
                ))}
              </div>

              <p className="text-text-muted text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-heading font-bold text-sm">
                    P
                  </span>
                </div>
                <div>
                  <span className="block font-heading font-bold text-sm text-text-dark">
                    Parent
                  </span>
                  <span className="text-text-muted text-xs">Mnara School</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3">
          <button
            onClick={prev}
            disabled={isAnimating}
            className="w-12 h-12 rounded-full bg-off-white border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 disabled:opacity-50"
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            disabled={isAnimating}
            className="w-12 h-12 rounded-full bg-off-white border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 disabled:opacity-50"
            aria-label="Next testimonials"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}
