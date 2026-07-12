import { ReactNode } from 'react';
import InnerPageHero from '../components/ui/InnerPageHero';
import SectionWrapper from '../components/SectionWrapper';
import CTABanner from '../components/CTABanner';

interface FormPageProps {
  title: string;
  image: string;
  breadcrumbs: { label: string; href?: string }[];
  formContent: ReactNode;
  infoContent?: ReactNode;
}

export default function FormPage({ title, image, breadcrumbs, formContent, infoContent }: FormPageProps) {
  return (
    <>
      <InnerPageHero title={title} image={image} breadcrumbs={breadcrumbs} />
      <SectionWrapper id="form-content" className="py-16 md:py-24 bg-white">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="order-2 lg:order-1 space-y-8">
            {infoContent}
          </div>
          <div className="order-1 lg:order-2 bg-off-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            {formContent}
          </div>
        </div>
      </SectionWrapper>
      <CTABanner />
    </>
  );
}
