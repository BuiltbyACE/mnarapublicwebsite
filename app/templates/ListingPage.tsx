import { ReactNode } from 'react';
import InnerPageHero from '../components/ui/InnerPageHero';
import SectionWrapper from '../components/SectionWrapper';
import CTABanner from '../components/CTABanner';

interface ListingPageProps {
  title: string;
  image: string;
  breadcrumbs: { label: string; href?: string }[];
  children: ReactNode;
}

export default function ListingPage({ title, image, breadcrumbs, children }: ListingPageProps) {
  return (
    <>
      <InnerPageHero title={title} image={image} breadcrumbs={breadcrumbs} />
      <SectionWrapper id="listing-content" className="py-16 md:py-24 bg-off-white">
        {/* We use an off-white background here typically for listings to make white cards pop */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {children}
        </div>
      </SectionWrapper>
      <CTABanner />
    </>
  );
}
