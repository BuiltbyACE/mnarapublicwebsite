import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import InnerPageHero from './ui/InnerPageHero';
import SectionWrapper from './SectionWrapper';
import { CurriculumPageData } from '../lib/types';

interface CurriculumPageLayoutProps {
  data: CurriculumPageData;
  breadcrumbLabel: string;
}

export default function CurriculumPageLayout({ data, breadcrumbLabel }: CurriculumPageLayoutProps) {
  const { hero, sections, learningAreas, highlights } = data;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <InnerPageHero
        title={hero.title}
        image={hero.image}
        breadcrumbs={[{ label: breadcrumbLabel }]}
      />

      {/* Intro / Subtitle Section */}
      <section className="py-12 md:py-16 bg-off-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xl md:text-2xl text-text-muted leading-relaxed font-medium">
            {hero.subtitle}
          </p>
        </div>
      </section>

      {/* Alternating Content Sections */}
      {sections.map((section, index) => (
        <SectionWrapper
          key={section.title}
          id={`section-${index}`}
          bg={index % 2 === 1 ? 'offwhite' : 'white'}
        >
          <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            {/* Text Content */}
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-dark">
                {section.title}
              </h2>
              <div className="h-1.5 w-20 bg-primary rounded-full" />
              <p className="text-text-muted text-lg leading-relaxed">
                {section.description}
              </p>
            </div>

            {/* Image */}
            <div className="flex-1 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover transform hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Decorative elements */}
              <div className={`absolute -z-10 w-full h-full border-2 border-primary/10 rounded-3xl ${index % 2 === 1 ? '-top-6 -left-6' : '-bottom-6 -right-6'}`} />
            </div>
          </div>
        </SectionWrapper>
      ))}

      {/* Learning Areas / Programs Section */}
      <SectionWrapper id="learning-areas" bg="dark">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-bold uppercase tracking-widest mb-4">
            Our Curriculum
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">Key Learning Areas</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningAreas.map((area) => (
            <div
              key={area}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-gold shrink-0 mt-1" size={20} />
                <span className="text-lg font-semibold group-hover:text-gold transition-colors">{area}</span>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Highlights / Features Section */}
      <SectionWrapper id="features">
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight) => (
            <div
              key={highlight.title}
              className="p-8 rounded-3xl bg-off-white border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform bg-primary/5">
                <highlight.icon className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-text-dark mb-4">{highlight.title}</h3>
              <p className="text-text-muted leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-br from-primary to-primary-dark overflow-hidden relative shadow-2xl text-center p-12 md:p-20">
          <div className="absolute inset-0 bg-[url('/images/hero-3.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay" />
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
              Ready to start your <br /> Mnara journey?
            </h2>
            <p className="text-white/80 text-xl max-w-2xl mx-auto">
              Join our community and give your child the foundation they deserve for a bright future.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link href="/admissions" className="btn-secondary h-14 px-10 text-lg !border-white !text-white hover:!bg-white hover:!text-primary">
                Enroll Now
              </Link>
              <Link href="/contact" className="h-14 px-10 flex items-center gap-2 text-white font-bold hover:text-white/80 transition-colors">
                Book a Visit <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
