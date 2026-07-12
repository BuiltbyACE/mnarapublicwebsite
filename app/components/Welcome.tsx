import Image from 'next/image';
import Link from 'next/link';
import { Heart, Star, Users, Shield, Home } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const reasons = [
  { icon: Heart, text: 'A warm, nurturing environment' },
  { icon: Star, text: 'Strong academic foundations' },
  { icon: Users, text: 'Co-curricular pathways for every passion' },
  { icon: Shield, text: 'A culture of love, excellence, and integrity' },
  { icon: Home, text: 'A community that feels like home' },
];

export default function Welcome() {
  return (
    <SectionWrapper id="welcome">
      <div className="relative">
        {/* Decorative blobs */}
        <div className="blob-1 -top-20 -left-20" />
        <div className="blob-2 bottom-0 right-0" />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="relative z-10">
            <span className="section-label">Welcome to Mnara School</span>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-text-dark mb-6 leading-tight">
              Mnara means{' '}
              <span className="text-primary relative inline-block">
                 guiding lighthouse
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-accent rounded-full" />
              </span>{' '}
                
            </h2>

            <p className="text-text-muted text-base lg:text-lg mb-8 leading-relaxed">
              Your child deserves more than just education.
They deserve guidance, confidence, and a future they’re prepared for.

At Mnara, we provide a safe, supportive environment
where every child is nurtured, challenged, and empowered to succeed.
            </p>

            <div className="mb-8">
              <h3 className="font-heading font-bold text-lg text-text-dark mb-4">
                Why Mnara?
              </h3>
              <ul className="space-y-3">
                {reasons.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-primary" />
                    </span>
                    <span className="text-text-dark font-medium text-[0.95rem]">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <Link href="/about" className="btn-primary">
              Explore Our World
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              {/* Decorative frame */}
              <div className="absolute -top-4 -right-4 w-full h-full rounded-3xl border-2 border-primary/20" />
              <div className="absolute -bottom-4 -left-4 w-full h-full rounded-3xl bg-primary/5" />

              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/primaryschool.webp"
                  alt="Mnara School - nurturing young minds"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>

        

            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
