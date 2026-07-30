'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Camera, Search, X } from 'lucide-react';
import InnerPageHero from '../components/ui/InnerPageHero';
import SectionWrapper from '../components/SectionWrapper';

const photos = [
  { id: 1,   src: '/images/DSC_8016.jpg' },
  { id: 2,   src: '/images/DSC_8025.jpg' },
  { id: 3,   src: '/images/DSC_8028.jpg' },
  { id: 4,   src: '/images/IMG_0013.jpg' },
  { id: 5,   src: '/images/IMG_0018.jpg' },
  { id: 6,   src: '/images/IMG_0030.jpg' },
  { id: 7,   src: '/images/IMG_0057.jpg' },
  { id: 8,   src: '/images/IMG_0064.jpg' },
  { id: 9,   src: '/images/IMG_0084.jpg' },
  { id: 10,  src: '/images/IMG_9888.jpg' },
  { id: 11,  src: '/images/IMG_9890.jpg' },
  { id: 12,  src: '/images/IMG_9996.jpg' },
  { id: 13,  src: '/images/IMG_9938.jpg' },
  { id: 14,  src: '/images/IMG_9925.jpg' },
  { id: 15,  src: '/images/IMG_9924.jpg' },
  { id: 16,  src: '/images/IMG_9901.jpg' },
  { id: 17,  src: '/images/IMG_9898.jpg' },
  { id: 18,  src: '/images/IMG_0162.jpg' },
];

export default function MultimediaContent() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-white">
      <InnerPageHero
        title="Multimedia Gallery"
        image="/images/hero-3.jpg"
        breadcrumbs={[{ label: 'Multimedia' }]}
      />

      <SectionWrapper id="intro" bg="white">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="section-label">Moments Captured</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-text-dark">
            Experience Life at Mnara
          </h2>
          <p className="text-text-muted text-lg leading-relaxed">
            Explore our vibrant campus, academic achievements, and the memorable events that make Mnara School a thriving community of learners.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper id="photos" bg="offwhite">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Camera size={24} />
            </div>
            <h2 className="text-3xl font-heading font-black text-text-dark">Photo Gallery</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="group relative cursor-pointer aspect-square rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
                onClick={() => setSelectedImage(photo.src)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedImage(photo.src); }}
                aria-label="View photo"
              >
                <Image
                  src={photo.src}
                  alt="Mnara School"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Search size={16} className="text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Image Lightbox */}
      <div
        className={`fixed inset-0 z-[200] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 transition-opacity duration-300 ${
          selectedImage ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={() => setSelectedImage(null)}
        role="dialog"
        aria-modal="true"
        aria-label="Image preview"
      >
        <button 
          className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
          onClick={() => setSelectedImage(null)}
          aria-label="Close preview"
        >
          <X size={24} />
        </button>
        {selectedImage && (
          <div className="relative w-full max-w-5xl aspect-[4/3] md:aspect-video rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 scale-100" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Enlarged view"
              fill
              className="object-contain bg-black"
              sizes="100vw"
            />
          </div>
        )}
      </div>

    </div>
  );
}
