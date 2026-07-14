import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

export default function Shop() {
  return (
    <SectionWrapper id="shop" bg="offwhite">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/hero-3.jpg"
              alt="MnaraSchool merchandise"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
          </div>

          {/* Floating badge */}
          <div className="absolute -top-4 -right-4 bg-primary text-white rounded-2xl p-4 shadow-xl">
            <ShoppingBag size={32} />
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="section-label">Shop</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-dark mt-2 mb-6">
            Official School Merchandise
          </h2>
          <p className="text-text-muted text-base leading-relaxed mb-8">
            The MnaraSchool Shop provides a seamless and organized shopping
            experience designed to serve the needs of our school community. It
            reflects the school&apos;s commitment to efficiency, accessibility, and
            excellence, offering a convenient platform where parents and students
            can interact with the school&apos;s services with ease and confidence.
          </p>
          <Link href="/contact" className="btn-primary">
            Enquire Now
            <ShoppingBag size={18} />
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
