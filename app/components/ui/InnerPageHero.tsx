import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { ChevronRight } from 'lucide-react';

interface Breadcrumb {
  label: string;
  href?: string;
}

interface InnerPageHeroProps {
  title: string;
  image: string;
  breadcrumbs: Breadcrumb[];
}

export default function InnerPageHero({ title, image, breadcrumbs }: InnerPageHeroProps) {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mnaraschool.com' },
      ...breadcrumbs.map((crumb, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: crumb.label,
        ...(crumb.href ? { item: `https://www.mnaraschool.com${crumb.href}` } : {}),
      })),
    ],
  };

  return (
    <section className="relative h-[40vh] min-h-[300px] max-h-[500px] w-full flex items-center justify-center overflow-hidden">
      <Script id="breadcrumb-jsonld" type="application/ld+json">
        {JSON.stringify(breadcrumbJsonLd)}
      </Script>

      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/60 to-secondary/30" />

      <div className="relative z-10 text-center px-4 animate-fade-in">
        <div>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
            {title}
          </h1>

          <nav aria-label="Breadcrumb" className="flex justify-center items-center flex-wrap gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center gap-2">
                <ChevronRight size={14} className="text-white/50" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white font-medium" aria-current="page">{crumb.label}</span>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 sm:h-12 md:h-16 lg:h-20">
          <path
            d="M0 80L60 73.3C120 66.7 240 53.3 360 46.7C480 40 600 40 720 46.7C840 53.3 960 66.7 1080 66.7C1200 66.7 1320 53.3 1380 46.7L1440 40V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
