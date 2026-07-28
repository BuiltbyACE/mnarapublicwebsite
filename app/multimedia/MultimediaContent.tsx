'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Camera, Search, X } from 'lucide-react';
import InnerPageHero from '../components/ui/InnerPageHero';
import SectionWrapper from '../components/SectionWrapper';

const photos = [
  { id: 1,   src: '/images/DSC_8016.jpg',  alt: 'School life at Mnara',            category: 'Campus Life' },
  { id: 2,   src: '/images/DSC_8024.jpg',  alt: 'Students at Mnara School',        category: 'Campus Life' },
  { id: 3,   src: '/images/DSC_8025.jpg',  alt: 'Learning moment at Mnara',        category: 'Academic' },
  { id: 4,   src: '/images/DSC_8026.jpg',  alt: 'Mnara School community',          category: 'Campus Life' },
  { id: 5,   src: '/images/DSC_8027.jpg',  alt: 'Students in session',             category: 'Academic' },
  { id: 6,   src: '/images/DSC_8028.jpg',  alt: 'Mnara campus activity',           category: 'Campus Life' },
  { id: 7,   src: '/images/IMG_0002.jpg',  alt: 'Mnara School students',           category: 'Academic' },
  { id: 8,   src: '/images/IMG_0009.jpg',  alt: 'Students at Mnara',               category: 'Academic' },
  { id: 9,   src: '/images/IMG_0011.jpg',  alt: 'Classroom moment',                category: 'Academic' },
  { id: 10,  src: '/images/IMG_0012.jpg',  alt: 'Mnara learning environment',      category: 'Academic' },
  { id: 11,  src: '/images/IMG_0013.jpg',  alt: 'Student activity',                category: 'Campus Life' },
  { id: 12,  src: '/images/IMG_0014.jpg',  alt: 'School event',                    category: 'Special Events' },
  { id: 13,  src: '/images/IMG_0015.jpg',  alt: 'Mnara students engaged',          category: 'Academic' },
  { id: 14,  src: '/images/IMG_0016.jpg',  alt: 'School life highlights',          category: 'Campus Life' },
  { id: 15,  src: '/images/IMG_0017.jpg',  alt: 'Students collaborating',          category: 'Academic' },
  { id: 16,  src: '/images/IMG_0018.jpg',  alt: 'Mnara community gathering',       category: 'Special Events' },
  { id: 17,  src: '/images/IMG_0023.jpg',  alt: 'Campus activities',               category: 'Campus Life' },
  { id: 18,  src: '/images/IMG_0024.jpg',  alt: 'Students in class',               category: 'Academic' },
  { id: 19,  src: '/images/IMG_0025.jpg',  alt: 'Learning at Mnara',               category: 'Academic' },
  { id: 20,  src: '/images/IMG_0026.jpg',  alt: 'School moments',                  category: 'Campus Life' },
  { id: 21,  src: '/images/IMG_0029.jpg',  alt: 'Students engaged in activities',  category: 'Academic' },
  { id: 22,  src: '/images/IMG_0030.jpg',  alt: 'Mnara school environment',        category: 'Campus Life' },
  { id: 23,  src: '/images/IMG_0031.jpg',  alt: 'Student group activity',          category: 'Academic' },
  { id: 24,  src: '/images/IMG_0032.jpg',  alt: 'Learning session',                category: 'Academic' },
  { id: 25,  src: '/images/IMG_0033.jpg',  alt: 'School event highlights',         category: 'Special Events' },
  { id: 26,  src: '/images/IMG_0034.jpg',  alt: 'Mnara school activities',         category: 'Campus Life' },
  { id: 27,  src: '/images/IMG_0035.jpg',  alt: 'Students at work',                category: 'Academic' },
  { id: 28,  src: '/images/IMG_0036.jpg',  alt: 'Campus life',                     category: 'Campus Life' },
  { id: 29,  src: '/images/IMG_0040.jpg',  alt: 'Mnara students',                  category: 'Academic' },
  { id: 30,  src: '/images/IMG_0041.jpg',  alt: 'School day at Mnara',             category: 'Campus Life' },
  { id: 31,  src: '/images/IMG_0042.jpg',  alt: 'Students learning together',      category: 'Academic' },
  { id: 32,  src: '/images/IMG_0043.jpg',  alt: 'Mnara school community',          category: 'Campus Life' },
  { id: 33,  src: '/images/IMG_0044.jpg',  alt: 'School activity',                 category: 'Campus Life' },
  { id: 34,  src: '/images/IMG_0045.jpg',  alt: 'Mnara learning moment',           category: 'Academic' },
  { id: 35,  src: '/images/IMG_0046.jpg',  alt: 'Students participating',          category: 'Academic' },
  { id: 36,  src: '/images/IMG_0047.jpg',  alt: 'Campus snapshot',                 category: 'Campus Life' },
  { id: 37,  src: '/images/IMG_0048.jpg',  alt: 'Mnara school event',              category: 'Special Events' },
  { id: 38,  src: '/images/IMG_0049.jpg',  alt: 'Students at Mnara',               category: 'Academic' },
  { id: 39,  src: '/images/IMG_0050.jpg',  alt: 'School life at Mnara',            category: 'Campus Life' },
  { id: 40,  src: '/images/IMG_0051.jpg',  alt: 'Mnara community event',           category: 'Special Events' },
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
                aria-label={`View ${photo.alt}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
                    {photo.category}
                  </div>
                  <div className="text-white font-semibold flex items-center justify-between">
                    {photo.alt}
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Search size={14} className="text-white" />
                    </div>
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
