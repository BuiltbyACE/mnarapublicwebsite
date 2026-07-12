'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { heroSlides } from '../lib/data';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Only the active slide and any previously-shown slide have an <Image> in the DOM.
  // Slides 1 and 2 aren't fetched until they first appear.
  const [loadedSlides, setLoadedSlides] = useState<Set<number>>(new Set([0]));

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const next = (prev + 1) % heroSlides.length;
      setLoadedSlides((s) => new Set([...s, next]));
      return next;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="hero" className="relative h-[85vh] min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Slides */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105'
            }`}
            aria-hidden={index !== currentSlide}
          >
            {loadedSlides.has(index) && (
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
                fetchPriority={index === 0 ? 'high' : 'auto'}
                quality={72}
                sizes="100vw"
              />
            )}
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="hero-overlay absolute inset-0 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-800 ease-out ${
                index === currentSlide
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8 hidden'
              }`}
              aria-hidden={index !== currentSlide}
            >
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6 border border-white/20">
                Welcome to Mnara School
              </span>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {slide.title}
              </h1>

              <p className="text-white/90 text-lg sm:text-xl mb-8 leading-relaxed max-w-lg">
                {slide.subtitle}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/about" className="btn-primary">
                  Explore Our World
                  <ChevronRight size={18} />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Book a Tour
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === currentSlide
                ? 'bg-primary w-10'
                : 'bg-white/50 w-2 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 80L60 73.3C120 66.7 240 53.3 360 46.7C480 40 600 40 720 46.7C840 53.3 960 66.7 1080 66.7C1200 66.7 1320 53.3 1380 46.7L1440 40V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
