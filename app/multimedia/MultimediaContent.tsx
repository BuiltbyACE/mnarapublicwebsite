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
  { id: 41,  src: '/images/IMG_0052.jpg',  alt: 'Students collaborating',          category: 'Academic' },
  { id: 42,  src: '/images/IMG_0053.jpg',  alt: 'Learning at Mnara School',        category: 'Academic' },
  { id: 43,  src: '/images/IMG_0054.jpg',  alt: 'Mnara campus moment',             category: 'Campus Life' },
  { id: 44,  src: '/images/IMG_0055.jpg',  alt: 'School gathering',                category: 'Special Events' },
  { id: 45,  src: '/images/IMG_0056.jpg',  alt: 'Mnara school students',           category: 'Academic' },
  { id: 46,  src: '/images/IMG_0057.jpg',  alt: 'Student engagement',              category: 'Academic' },
  { id: 47,  src: '/images/IMG_0058.jpg',  alt: 'School day highlights',           category: 'Campus Life' },
  { id: 48,  src: '/images/IMG_0059.jpg',  alt: 'Mnara event',                     category: 'Special Events' },
  { id: 49,  src: '/images/IMG_0060.jpg',  alt: 'Students at Mnara',               category: 'Academic' },
  { id: 50,  src: '/images/IMG_0061.jpg',  alt: 'Mnara campus life',               category: 'Campus Life' },
  { id: 51,  src: '/images/IMG_0062.jpg',  alt: 'School activity session',         category: 'Academic' },
  { id: 52,  src: '/images/IMG_0063.jpg',  alt: 'Mnara students engaged',          category: 'Academic' },
  { id: 53,  src: '/images/IMG_0064.jpg',  alt: 'Campus highlights',               category: 'Campus Life' },
  { id: 54,  src: '/images/IMG_0065.jpg',  alt: 'Mnara school life',               category: 'Campus Life' },
  { id: 55,  src: '/images/IMG_0066.jpg',  alt: 'School event moment',             category: 'Special Events' },
  { id: 56,  src: '/images/IMG_0067.jpg',  alt: 'Students learning',               category: 'Academic' },
  { id: 57,  src: '/images/IMG_0068.jpg',  alt: 'Mnara learning environment',      category: 'Academic' },
  { id: 58,  src: '/images/IMG_0069.jpg',  alt: 'Mnara school community',          category: 'Campus Life' },
  { id: 59,  src: '/images/IMG_0070.jpg',  alt: 'Campus activity',                 category: 'Campus Life' },
  { id: 60,  src: '/images/IMG_0071.jpg',  alt: 'Students at Mnara',               category: 'Academic' },
  { id: 61,  src: '/images/IMG_0072.jpg',  alt: 'Mnara school moment',             category: 'Academic' },
  { id: 62,  src: '/images/IMG_0073.jpg',  alt: 'Campus snapshot',                 category: 'Campus Life' },
  { id: 63,  src: '/images/IMG_0074.jpg',  alt: 'Mnara students engaged',          category: 'Academic' },
  { id: 64,  src: '/images/IMG_0075.jpg',  alt: 'School life highlights',          category: 'Campus Life' },
  { id: 65,  src: '/images/IMG_0076.jpg',  alt: 'Learning session',                category: 'Academic' },
  { id: 66,  src: '/images/IMG_0077.jpg',  alt: 'Students collaborating',          category: 'Academic' },
  { id: 67,  src: '/images/IMG_0078.jpg',  alt: 'Mnara school day',                category: 'Campus Life' },
  { id: 68,  src: '/images/IMG_0079.jpg',  alt: 'School activities',               category: 'Campus Life' },
  { id: 69,  src: '/images/IMG_0080.jpg',  alt: 'Mnara community',                 category: 'Campus Life' },
  { id: 70,  src: '/images/IMG_0081.jpg',  alt: 'Students in session',             category: 'Academic' },
  { id: 71,  src: '/images/IMG_0082.jpg',  alt: 'Mnara campus life',               category: 'Campus Life' },
  { id: 72,  src: '/images/IMG_0083.jpg',  alt: 'School event',                    category: 'Special Events' },
  { id: 73,  src: '/images/IMG_0084.jpg',  alt: 'Students at Mnara',               category: 'Academic' },
  { id: 74,  src: '/images/IMG_0085.jpg',  alt: 'Mnara learning moment',           category: 'Academic' },
  { id: 75,  src: '/images/IMG_0086.jpg',  alt: 'School day at Mnara',             category: 'Campus Life' },
  { id: 76,  src: '/images/IMG_0087.jpg',  alt: 'Campus highlights',               category: 'Campus Life' },
  { id: 77,  src: '/images/IMG_0088.jpg',  alt: 'Students engaged',                category: 'Academic' },
  { id: 78,  src: '/images/IMG_0089.jpg',  alt: 'Mnara school life',               category: 'Campus Life' },
  { id: 79,  src: '/images/IMG_0090.jpg',  alt: 'School moment',                   category: 'Campus Life' },
  { id: 80,  src: '/images/IMG_0091.jpg',  alt: 'Mnara students',                  category: 'Academic' },
  { id: 81,  src: '/images/IMG_0092.jpg',  alt: 'Learning environment',            category: 'Academic' },
  { id: 82,  src: '/images/IMG_0093.jpg',  alt: 'Campus activity',                 category: 'Campus Life' },
  { id: 83,  src: '/images/IMG_0094.jpg',  alt: 'School snapshot',                 category: 'Campus Life' },
  { id: 84,  src: '/images/IMG_0095.jpg',  alt: 'Mnara school community',          category: 'Campus Life' },
  { id: 85,  src: '/images/IMG_0096.jpg',  alt: 'Students at Mnara',               category: 'Academic' },
  { id: 86,  src: '/images/IMG_0097.jpg',  alt: 'Mnara campus moment',             category: 'Campus Life' },
  { id: 87,  src: '/images/IMG_0098.jpg',  alt: 'School activity',                 category: 'Campus Life' },
  { id: 88,  src: '/images/IMG_0099.jpg',  alt: 'Mnara learning session',          category: 'Academic' },
  { id: 89,  src: '/images/IMG_0100.jpg',  alt: 'Students collaborating',          category: 'Academic' },
  { id: 90,  src: '/images/IMG_0102.jpg',  alt: 'Mnara school event',              category: 'Special Events' },
  { id: 91,  src: '/images/IMG_0103.jpg',  alt: 'Campus life at Mnara',            category: 'Campus Life' },
  { id: 92,  src: '/images/IMG_0104.jpg',  alt: 'Students in class',               category: 'Academic' },
  { id: 93,  src: '/images/IMG_0105.jpg',  alt: 'School activity session',         category: 'Campus Life' },
  { id: 94,  src: '/images/IMG_0106.jpg',  alt: 'Mnara students',                  category: 'Academic' },
  { id: 95,  src: '/images/IMG_0107.jpg',  alt: 'Mnara community gathering',       category: 'Special Events' },
  { id: 96,  src: '/images/IMG_0108.jpg',  alt: 'School day highlights',           category: 'Campus Life' },
  { id: 97,  src: '/images/IMG_0109.jpg',  alt: 'Learning at Mnara',               category: 'Academic' },
  { id: 98,  src: '/images/IMG_0110.jpg',  alt: 'Mnara campus life',               category: 'Campus Life' },
  { id: 99,  src: '/images/IMG_0111.jpg',  alt: 'Students engaged in activities',  category: 'Academic' },
  { id: 100, src: '/images/IMG_0112.jpg',  alt: 'Mnara school moments',            category: 'Campus Life' },
  { id: 101, src: '/images/IMG_0113.jpg',  alt: 'Campus snapshot',                 category: 'Campus Life' },
  { id: 102, src: '/images/IMG_0114.jpg',  alt: 'School event at Mnara',           category: 'Special Events' },
  { id: 103, src: '/images/IMG_0117.jpg',  alt: 'Mnara students',                  category: 'Academic' },
  { id: 104, src: '/images/IMG_0120.jpg',  alt: 'School life at Mnara',            category: 'Campus Life' },
  { id: 105, src: '/images/IMG_0121.jpg',  alt: 'Learning session',                category: 'Academic' },
  { id: 106, src: '/images/IMG_0122.jpg',  alt: 'Students at Mnara',               category: 'Academic' },
  { id: 107, src: '/images/IMG_0123.jpg',  alt: 'Mnara community moment',          category: 'Campus Life' },
  { id: 108, src: '/images/IMG_0124.jpg',  alt: 'School activity',                 category: 'Campus Life' },
  { id: 109, src: '/images/IMG_0125.jpg',  alt: 'Mnara school event',              category: 'Special Events' },
  { id: 110, src: '/images/IMG_0126.jpg',  alt: 'Students collaborating',          category: 'Academic' },
  { id: 111, src: '/images/IMG_0127.jpg',  alt: 'Mnara campus highlights',         category: 'Campus Life' },
  { id: 112, src: '/images/IMG_0128.jpg',  alt: 'School day at Mnara',             category: 'Campus Life' },
  { id: 113, src: '/images/IMG_0130.jpg',  alt: 'Mnara learning environment',      category: 'Academic' },
  { id: 114, src: '/images/IMG_0131.jpg',  alt: 'Students in session',             category: 'Academic' },
  { id: 115, src: '/images/IMG_0132.jpg',  alt: 'Campus life',                     category: 'Campus Life' },
  { id: 116, src: '/images/IMG_0133.jpg',  alt: 'Mnara community',                 category: 'Campus Life' },
  { id: 117, src: '/images/IMG_0137.jpg',  alt: 'School activities',               category: 'Campus Life' },
  { id: 118, src: '/images/IMG_0140.jpg',  alt: 'Mnara students learning',         category: 'Academic' },
  { id: 119, src: '/images/IMG_0142.jpg',  alt: 'Students at Mnara',               category: 'Academic' },
  { id: 120, src: '/images/IMG_0145.jpg',  alt: 'Campus snapshot',                 category: 'Campus Life' },
  { id: 121, src: '/images/IMG_0147.jpg',  alt: 'Mnara school event',              category: 'Special Events' },
  { id: 122, src: '/images/IMG_0148.jpg',  alt: 'Learning moment',                 category: 'Academic' },
  { id: 123, src: '/images/IMG_0149.jpg',  alt: 'Mnara campus life',               category: 'Campus Life' },
  { id: 124, src: '/images/IMG_0150.jpg',  alt: 'School day highlights',           category: 'Campus Life' },
  { id: 125, src: '/images/IMG_0153.jpg',  alt: 'Students engaged',                category: 'Academic' },
  { id: 126, src: '/images/IMG_0154.jpg',  alt: 'Mnara community moment',          category: 'Campus Life' },
  { id: 127, src: '/images/IMG_0155.jpg',  alt: 'School activities',               category: 'Campus Life' },
  { id: 128, src: '/images/IMG_0159.jpg',  alt: 'Mnara school gathering',          category: 'Special Events' },
  { id: 129, src: '/images/IMG_0160.jpg',  alt: 'Students at Mnara',               category: 'Academic' },
  { id: 130, src: '/images/IMG_0161.jpg',  alt: 'Mnara campus life',               category: 'Campus Life' },
  { id: 131, src: '/images/IMG_0162.jpg',  alt: 'School event moment',             category: 'Special Events' },
  { id: 132, src: '/images/IMG_0164.jpg',  alt: 'Learning at Mnara',               category: 'Academic' },
  { id: 133, src: '/images/IMG_9886.jpg',  alt: 'Mnara school community',          category: 'Campus Life' },
  { id: 134, src: '/images/IMG_9887.jpg',  alt: 'Students learning together',      category: 'Academic' },
  { id: 135, src: '/images/IMG_9888.jpg',  alt: 'Campus activity',                 category: 'Campus Life' },
  { id: 136, src: '/images/IMG_9889.jpg',  alt: 'Mnara students',                  category: 'Academic' },
  { id: 137, src: '/images/IMG_9890.jpg',  alt: 'School life at Mnara',            category: 'Campus Life' },
  { id: 138, src: '/images/IMG_9893.jpg',  alt: 'Mnara school event',              category: 'Special Events' },
  { id: 139, src: '/images/IMG_9894.jpg',  alt: 'Students at Mnara',               category: 'Academic' },
  { id: 140, src: '/images/IMG_9897.jpg',  alt: 'Mnara community gathering',       category: 'Special Events' },
  { id: 141, src: '/images/IMG_9898.jpg',  alt: 'Campus highlights',               category: 'Campus Life' },
  { id: 142, src: '/images/IMG_9900.jpg',  alt: 'Mnara school day',                category: 'Campus Life' },
  { id: 143, src: '/images/IMG_9901.jpg',  alt: 'Students in class',               category: 'Academic' },
  { id: 144, src: '/images/IMG_9902.jpg',  alt: 'Learning at Mnara',               category: 'Academic' },
  { id: 145, src: '/images/IMG_9903.jpg',  alt: 'Mnara campus life',               category: 'Campus Life' },
  { id: 146, src: '/images/IMG_9904.jpg',  alt: 'School event',                    category: 'Special Events' },
  { id: 147, src: '/images/IMG_9905.jpg',  alt: 'Students collaborating',          category: 'Academic' },
  { id: 148, src: '/images/IMG_9906.jpg',  alt: 'Mnara school moment',             category: 'Campus Life' },
  { id: 149, src: '/images/IMG_9907.jpg',  alt: 'Students engaged',                category: 'Academic' },
  { id: 150, src: '/images/IMG_9908.jpg',  alt: 'Campus snapshot',                 category: 'Campus Life' },
  { id: 151, src: '/images/IMG_9909.jpg',  alt: 'Mnara students',                  category: 'Academic' },
  { id: 152, src: '/images/IMG_9916.jpg',  alt: 'School gathering',                category: 'Special Events' },
  { id: 153, src: '/images/IMG_9917.jpg',  alt: 'Mnara learning environment',      category: 'Academic' },
  { id: 154, src: '/images/IMG_9918.jpg',  alt: 'Campus life at Mnara',            category: 'Campus Life' },
  { id: 155, src: '/images/IMG_9919.jpg',  alt: 'Students at Mnara',               category: 'Academic' },
  { id: 156, src: '/images/IMG_9920.jpg',  alt: 'Mnara school activities',         category: 'Campus Life' },
  { id: 157, src: '/images/IMG_9924.jpg',  alt: 'School event highlights',         category: 'Special Events' },
  { id: 158, src: '/images/IMG_9925.jpg',  alt: 'Students learning',               category: 'Academic' },
  { id: 159, src: '/images/IMG_9926.jpg',  alt: 'Mnara community',                 category: 'Campus Life' },
  { id: 160, src: '/images/IMG_9927.jpg',  alt: 'School day at Mnara',             category: 'Campus Life' },
  { id: 161, src: '/images/IMG_9928.jpg',  alt: 'Learning session',                category: 'Academic' },
  { id: 162, src: '/images/IMG_9929.jpg',  alt: 'Mnara students engaged',          category: 'Academic' },
  { id: 163, src: '/images/IMG_9930.jpg',  alt: 'Campus activity',                 category: 'Campus Life' },
  { id: 164, src: '/images/IMG_9932.jpg',  alt: 'Mnara campus moment',             category: 'Campus Life' },
  { id: 165, src: '/images/IMG_9933.jpg',  alt: 'School life',                     category: 'Campus Life' },
  { id: 166, src: '/images/IMG_9934.jpg',  alt: 'Students at Mnara',               category: 'Academic' },
  { id: 167, src: '/images/IMG_9935.jpg',  alt: 'Mnara learning moment',           category: 'Academic' },
  { id: 168, src: '/images/IMG_9938.jpg',  alt: 'Campus snapshot',                 category: 'Campus Life' },
  { id: 169, src: '/images/IMG_9940.jpg',  alt: 'School event',                    category: 'Special Events' },
  { id: 170, src: '/images/IMG_9941.jpg',  alt: 'Mnara community gathering',       category: 'Special Events' },
  { id: 171, src: '/images/IMG_9942.jpg',  alt: 'Students engaged in activities',  category: 'Academic' },
  { id: 172, src: '/images/IMG_9943.jpg',  alt: 'Mnara school life',               category: 'Campus Life' },
  { id: 173, src: '/images/IMG_9944.jpg',  alt: 'Learning at Mnara',               category: 'Academic' },
  { id: 174, src: '/images/IMG_9952.jpg',  alt: 'Campus activity',                 category: 'Campus Life' },
  { id: 175, src: '/images/IMG_9953.jpg',  alt: 'Mnara students',                  category: 'Academic' },
  { id: 176, src: '/images/IMG_9984.jpg',  alt: 'School day highlights',           category: 'Campus Life' },
  { id: 177, src: '/images/IMG_9985.jpg',  alt: 'Students collaborating',          category: 'Academic' },
  { id: 178, src: '/images/IMG_9986.jpg',  alt: 'Mnara campus life',               category: 'Campus Life' },
  { id: 179, src: '/images/IMG_9987.jpg',  alt: 'Students at Mnara',               category: 'Academic' },
  { id: 180, src: '/images/IMG_9988.jpg',  alt: 'School moment',                   category: 'Campus Life' },
  { id: 181, src: '/images/IMG_9994.jpg',  alt: 'Mnara school community',          category: 'Campus Life' },
  { id: 182, src: '/images/IMG_9995.jpg',  alt: 'Students learning together',      category: 'Academic' },
  { id: 183, src: '/images/IMG_9996.jpg',  alt: 'Campus highlights',               category: 'Campus Life' },
  { id: 184, src: '/images/IMG_9997.jpg',  alt: 'Mnara learning session',          category: 'Academic' },
  { id: 185, src: '/images/IMG_9999.jpg',  alt: 'School life at Mnara',            category: 'Campus Life' },
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
