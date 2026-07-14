import type { Metadata } from "next";
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import InnerPageHero from '../components/ui/InnerPageHero';
import SectionWrapper from '../components/SectionWrapper';
import { activities } from '../lib/data';

export const metadata: Metadata = {
  title: "Co-Curricular Activities",
  description:
    "Explore Mnara School's co-curricular programs: sports, music, ballet, robotics, art & craft, debate, and more. Beyond the classroom excellence in Nairobi.",
  openGraph: {
    title: "Co-Curricular Activities | Mnara School",
    description:
      "Beyond the classroom — explore sports, music, ballet, robotics, art & craft, and debate programs.",
    images: [{ url: "/images/hero-2.jpg", width: 1920, height: 1080 }],
  },
  alternates: {
    canonical: "https://www.mnaraschool.com/co-curricular/",
  },
};

export default function CoCurricularPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <InnerPageHero
        title="Co-Curricular Activities"
        image="/images/hero-2.jpg"
        breadcrumbs={[{ label: 'Co-Curricular' }]}
      />

      {/* Introduction Section */}
      <SectionWrapper id="intro" bg="white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full text-primary font-bold text-sm uppercase tracking-widest">
            <Star size={16} fill="currentColor" />
            Beyond the Classroom
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-dark">
            Nurturing Talents & <span className="text-primary">Building Character</span>
          </h2>
          <p className="text-text-muted text-lg md:text-xl leading-relaxed">
            Nurturing students&apos; gifts, strengthening character, and connecting skills to career pathways.
          </p>
        </div>
      </SectionWrapper>

      {/* Activities Grid */}
      <SectionWrapper id="activities-grid" bg="offwhite">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col"
            >
              {/* Icon/Color Header */}
              <div className={`h-2 shadow-sm bg-gradient-to-r ${activity.color}`} />
              
              <div className="p-8 flex flex-col flex-1">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${activity.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <activity.icon className="text-white" size={28} />
                </div>
                
                <h3 className="text-2xl font-bold text-text-dark mb-4 group-hover:text-primary transition-colors">
                  {activity.title}
                </h3>
                
                <p className="text-text-muted leading-relaxed mb-8 flex-1">
                  {activity.description}
                </p>
                
                <Link
                  href={activity.href}
                  className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary-dark transition-colors group/link"
                >
                  Explore Activity
                  <ArrowRight size={18} className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper id="cta" noPadding>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="relative rounded-[3rem] bg-secondary p-12 md:p-20 overflow-hidden shadow-2xl">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('/images/hero-1.jpg')] bg-cover bg-center mix-blend-overlay" />
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
            
            <div className="relative z-10 text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white max-w-2xl mx-auto">
                Ready to Join the <br /> <span className="text-gold">Mnara Community?</span>
              </h2>
              <p className="text-white/70 text-lg max-w-xl mx-auto">
                Discover how our holistic approach to education can transform your child’s future.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-secondary h-14 px-10 text-lg !border-white !text-white hover:!bg-white hover:!text-primary transition-all">
                  Book a Campus Visit
                </Link>
                <Link href="/admissions" className="btn-primary h-14 px-10 text-lg">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
