import Image from 'next/image';
import type { Metadata } from "next";
import Link from 'next/link';
import { CheckCircle2, GraduationCap, BookOpen, Rocket } from 'lucide-react';
import InnerPageHero from '../../components/ui/InnerPageHero';
import SectionWrapper from '../../components/SectionWrapper';

export const metadata: Metadata = {
  title: "Upper Secondary – Key Stage 4",
  description:
    "Mnara School Upper Secondary curriculum (Key Stage 4, Ages 15–16). Preparing students for Cambridge IGCSE and AlBaseer examinations with a focus on academic excellence, Islamic values, and future readiness.",
  openGraph: {
    title: "Upper Secondary – Key Stage 4 | Mnara School",
    description:
      "Upper Secondary at Mnara School — Cambridge IGCSE, AlBaseer subjects, and holistic preparation for higher education (Ages 15–16).",
    images: [{ url: "/images/hero-3.jpg", width: 1920, height: 1080 }],
  },
  alternates: {
    canonical: "https://www.mnaraschool.com/curriculum/highschool/",
  },
};

const learningAreas = [
  'English Language & Literature',
  'Mathematics',
  'Integrated Sciences',
  'ICT & Computer Science',
  'Humanities',
  'Global Perspective',
  'Art & Design',
  'Quran & Tajweed',
  'Islamic Studies (AlBaseer)',
  'Arabic Language',
  'Physical Education',
];

const highlights = [
  {
    title: 'Cambridge IGCSE Pathway',
    description: 'Students follow the internationally recognised Cambridge IGCSE framework, gaining qualifications that open doors to universities and institutions worldwide.',
    icon: GraduationCap,
  },
  {
    title: 'AlBaseer Islamic Curriculum',
    description: 'Integrated Islamic education through the AlBaseer International Islamic Curriculum, reinforcing moral character, Quran memorisation, and deep understanding of Islamic values.',
    icon: BookOpen,
  },
  {
    title: 'Holistic & Career Preparation',
    description: 'Beyond academic achievement, students are equipped with leadership, communication, and life skills that connect their education to real-world purpose and career pathways.',
    icon: Rocket,
  },
];

export default function HighSchoolPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <InnerPageHero
        title="Upper Secondary – Key Stage 4"
        image="/images/hero-2.jpg"
        breadcrumbs={[
          { label: 'Curriculum', href: '/curriculum' },
          { label: 'Upper Secondary' },
        ]}
      />

      {/* Subtitle */}
      <section className="py-12 md:py-16 bg-off-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xl md:text-2xl text-text-muted leading-relaxed font-medium">
            Preparing students for Cambridge IGCSE examinations and beyond, grounded in the AlBaseer International Islamic Curriculum (Ages 15–16).
          </p>
        </div>
      </section>

      {/* Overview Sections */}
      <SectionWrapper id="overview" bg="white">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-dark">
              Academic Excellence at Key Stage 4
            </h2>
            <div className="h-1.5 w-20 bg-primary rounded-full" />
            <p className="text-text-muted text-lg leading-relaxed">
              Upper Secondary at Mnara School is where academic rigour meets personal purpose. Students engage in a comprehensive programme that balances Cambridge IGCSE subjects with the AlBaseer Islamic Curriculum, ensuring every learner is both academically prepared and spiritually grounded.
            </p>
            <p className="text-text-muted text-lg leading-relaxed">
              At this stage, learners deepen subject specialisation, sharpen critical thinking, and develop the skills necessary for higher education, professional life, and meaningful contribution to society.
            </p>
          </div>
          <div className="flex-1 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-2.jpg"
                alt="Upper Secondary students at Mnara School"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -z-10 w-full h-full border-2 border-primary/10 rounded-3xl -bottom-6 -right-6" />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="issuance" bg="offwhite">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-dark">
              Islamic Values & Servant Leadership
            </h2>
            <div className="h-1.5 w-20 bg-primary rounded-full" />
            <p className="text-text-muted text-lg leading-relaxed">
              Islamic mentorship remains at the core of every student&apos;s journey through Upper Secondary. Students are guided to develop strong moral character, Quran proficiency, and an understanding of Islamic jurisprudence (Fiqh) and Hadeeth, preparing them to be principled leaders and positive contributors to society.
            </p>
            <p className="text-text-muted text-lg leading-relaxed">
              Through the AlBaseer curriculum&apos;s structured Islamic studies, learners graduate with both academic qualifications and a deeply rooted Islamic identity.
            </p>
          </div>
          <div className="flex-1 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-1.jpg"
                alt="Islamic studies and mentorship at Mnara School"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -z-10 w-full h-full border-2 border-primary/10 rounded-3xl -top-6 -left-6" />
          </div>
        </div>
      </SectionWrapper>

      {/* Learning Areas */}
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

      {/* Highlights */}
      <SectionWrapper id="highlights">
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

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-br from-primary to-primary-dark overflow-hidden relative shadow-2xl text-center p-12 md:p-20">
          <div className="absolute inset-0 bg-hero-3 bg-cover bg-center opacity-10 mix-blend-overlay" />
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
                Contact Admissions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}