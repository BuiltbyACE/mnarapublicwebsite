'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

const SESSION_KEY = 'mnara-hiring-seen';

const hiringAnnouncement = {
  image: '/images/mnaraschoolcarrer.png',
  alt: 'Mnara School — We are hiring. View current job openings and apply.',
};

const studentIllustration = {
  image: '/images/picture besidess.png',
};

export default function HiringAnnouncementModal() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem(SESSION_KEY);
    if (seen) return;
    const timer = setTimeout(() => {
      setOpen(true);
      document.body.style.overflow = 'hidden';
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  const close = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
      sessionStorage.setItem(SESSION_KEY, '1');
      document.body.style.overflow = '';
    }, 280);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Hiring announcement"
      className={`fixed inset-0 z-[200] flex items-center justify-center transition-opacity duration-280 ${
        closing ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60" onClick={close} aria-hidden="true" />

      {/* Scene — children + poster side by side */}
      <div
        className={`relative z-10 flex items-center gap-0 p-4 sm:p-6 transition-all duration-280 ${
          closing ? 'scale-[0.97]' : 'scale-100'
        }`}
      >
        {/* Student Illustration — left side, decorative */}
        <div className="hidden lg:block shrink-0 -mr-8 pointer-events-none select-none z-[1]">
          <Image
            src={studentIllustration.image}
            alt=""
            aria-hidden="true"
            width={300}
            height={400}
            className="w-[260px] xl:w-[300px] h-auto object-contain"
            priority
          />
        </div>

        {/* Poster Card — right side, main content */}
        <div className="relative z-[2] w-full max-w-[min(420px,calc(100vw-32px))] max-h-[calc(100vh-32px)]">
          {/* Close button */}
          <button
            onClick={close}
            aria-label="Close hiring announcement"
            className="absolute -top-3 -right-3 sm:top-0 sm:right-0 z-[3] w-10 h-10 flex items-center justify-center rounded-full bg-white text-text-dark shadow-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <X size={20} />
          </button>

          {/* Poster */}
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-white">
            <Image
              src={hiringAnnouncement.image}
              alt={hiringAnnouncement.alt}
              width={1200}
              height={1700}
              className="w-full h-auto max-h-[calc(100vh-64px)] object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
