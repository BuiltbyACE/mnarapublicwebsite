import { ReactNode } from 'react';
import InnerPageHero from '../components/ui/InnerPageHero';
import SectionWrapper from '../components/SectionWrapper';
import CTABanner from '../components/CTABanner';

interface DetailPageProps {
  title: string;
  image: string;
  breadcrumbs: { label: string; href?: string }[];
  mainContent: ReactNode;
  sidebarContent?: ReactNode;
}

export default function DetailPage({ title, image, breadcrumbs, mainContent, sidebarContent }: DetailPageProps) {
  return (
    <>
      <InnerPageHero title={title} image={image} breadcrumbs={breadcrumbs} />
      <SectionWrapper id="detail-content" className="py-16 md:py-24 bg-white">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-8">
            {mainContent}
          </div>
          {sidebarContent && (
            <aside className="lg:col-span-1 sticky top-28 bg-off-white rounded-2xl p-6 border border-gray-100">
              {sidebarContent}
            </aside>
          )}
        </div>
      </SectionWrapper>
      <CTABanner />
    </>
  );
}
