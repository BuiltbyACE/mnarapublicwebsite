import { ReactNode } from 'react';
import InnerPageHero from '../components/ui/InnerPageHero';
import SectionWrapper from '../components/SectionWrapper';
import CTABanner from '../components/CTABanner';

interface StandardPageProps {
  title: string;
  image: string;
  breadcrumbs: { label: string; href?: string }[];
  children: ReactNode;
}

export default function StandardPage({ title, image, breadcrumbs, children }: StandardPageProps) {
  return (
    <>
      <InnerPageHero title={title} image={image} breadcrumbs={breadcrumbs} />
      <SectionWrapper id="main-content" className="py-16 md:py-24 bg-white">
        {children}
      </SectionWrapper>
      <CTABanner />
    </>
  );
}
