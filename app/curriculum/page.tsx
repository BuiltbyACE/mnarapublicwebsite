import type { Metadata } from "next";
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, GraduationCap, School, Sparkles } from 'lucide-react';
import InnerPageHero from '../components/ui/InnerPageHero';
import SectionWrapper from '../components/SectionWrapper';

export const metadata: Metadata = {
  title: "Curriculum Pathways",
  description:
    "Explore Mnara School Nairobi's academic stages from Early Years to Lower and Upper Secondary, blending the AlBaseer International Islamic Curriculum with Cambridge IGCSE standards.",
  openGraph: {
    title: "Curriculum | Mnara School Nairobi",
    description:
      "Nurturing academic excellence and character. Explore Early Years, Primary, and Secondary pathways with AlBaseer Islamic subjects and Cambridge IGCSE.",
    images: [{ url: "/images/hero-1.jpg", width: 1920, height: 1080 }],
  },
  alternates: {
    canonical: "https://www.mnaraschool.com/curriculum",
  },
};

const pathways = [
  {
    title: "Early Years Foundation (3 Years–7 Years)",
    age: "3–7 Years",
    description: "Nurturing curiosity and a love for learning in our youngest learners through play-based discovery and character formation.",
    image: "/images/earlyyears.jpeg",
    href: "/curriculum/early-years",
    icon: School,
    color: "bg-pink-50 text-pink-600",
  },
  {
    title: "Lower Primary (Key Stage 1)",
    age: "6–7 Years",
    description: "Transitioning from child-led to structured learning. Key subjects include ICT, Humanities, Global Perspective, and Art & Design.",
    image: "/images/primaryschool.jpeg",
    href: "/curriculum/primary",
    icon: BookOpen,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Upper Primary (Key Stage 2)",
    age: "8–11 Years",
    description: "Focusing on specialized learning, career awareness, life skills, and humanities.",
    image: "/images/hero-3.jpg",
    href: "/curriculum/primary",
    icon: BookOpen,
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    title: "Lower Secondary (Key Stage 3)",
    age: "12–14 Years",
    description: "A vibrant learning environment with an emphasis on essential life skills and Islamic mentorship.",
    image: "/images/hero-1.jpg",
    href: "/curriculum/middle-school",
    icon: GraduationCap,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Upper Secondary – Key Stage 4",
    age: "15–16 Years",
    description: "Cambridge IGCSE and AlBaseer subjects, preparing students for higher education with academic excellence and Islamic values.",
    image: "/images/hero-2.jpg",
    href: "/curriculum/highschool",
    icon: Sparkles,
    color: "bg-primary/5 text-primary",
  },
];


export default function CurriculumOverviewPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <InnerPageHero
        title="Our Curriculum"
        image="/images/hero-1.jpg"
        breadcrumbs={[]}
      />

      {/* Intro Section */}
      <SectionWrapper id="curriculum-intro" bg="white">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="section-label">Academic Excellence</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-text-dark">
            Tailored Pathways for Every Stage
          </h2>
          <p className="text-text-muted text-lg leading-relaxed">
            At Mnara School Nairobi, we provide a structured and nurturing environment that evolves with your child. From the first steps in Early Years to the critical thinking required in secondary school, our curriculum is designed to inspire lifelong learners.
          </p>
        </div>
      </SectionWrapper>

      {/* AlBaseer Islamic Curriculum Section */}
      <SectionWrapper id="islamic-curriculum" bg="white" className="!pt-0">
        <div className="max-w-6xl mx-auto bg-primary/5 border border-primary/10 rounded-[3rem] p-8 md:p-14 shadow-sm flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div className="flex-1 space-y-6">
            <span className="section-label">Integrated Learning</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-dark">
              AlBaseer International Islamic Curriculum
            </h2>
            <p className="text-text-muted text-base lg:text-lg leading-relaxed">
              At Mnara School Nairobi, we believe in a balanced education that addresses the intellect, body, and spirit. The AlBaseer International Islamic Curriculum is designed to blend seamlessly with our academic offerings.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "International Islamic curriculum standard",
                "Integrated academic and Islamic education",
                "Strong focus on character formation",
                "Holistic learning and spiritual growth"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-text-dark font-medium text-sm">
                  <span className="w-5 h-5 rounded-full bg-primary/15 text-primary flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/images/hero-1.jpg"
              alt="AlBaseer Curriculum"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Pathways Grid */}
      <SectionWrapper id="pathways" bg="offwhite">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {pathways.map((pathway) => (
            <div
              key={pathway.title}
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Image Side */}
                <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                  <Image
                    src={pathway.image}
                    alt={pathway.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content Side */}
                <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className={`w-12 h-12 ${pathway.color} rounded-2xl flex items-center justify-center`}>
                        <pathway.icon size={24} />
                      </div>
                      <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider">
                        Age: {pathway.age}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-text-dark group-hover:text-primary transition-colors">
                      {pathway.title}
                    </h3>
                    <p className="text-text-muted leading-relaxed text-sm">
                      {pathway.description}
                    </p>
                  </div>

                  <Link
                    href={pathway.href}
                    className="mt-8 flex items-center gap-2 font-bold text-primary group/link uppercase tracking-wider text-sm"
                  >
                    Explore Pathway 
                    <ArrowRight size={18} className="group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Comparison / Final Note Section */}
      <SectionWrapper id="why-mnara" bg="white">
        <div className="bg-secondary rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
                Why Choose <br /> <span className="text-gold">Mnara&apos;s Curriculum?</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                We are committed to Academic Excellence, preparing our students under the global standards of the Cambridge IGCSE and the spiritual depth of the AlBaseer Subjects. We focus on holistic development, critical thinking, and character building.
              </p>
              <div className="pt-6">
                <Link href="/contact" className="btn-secondary !border-gold !text-gold hover:!bg-gold hover:!text-secondary">
                  Schedule a Consultation
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Global Standard", val: "IGCSE" },
                { label: "Faculty Experts", val: "50+" },
                { label: "Nationalities", val: "15+" },
                { label: "Modern Labs", val: "10" }
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm text-center">
                  <div className="text-2xl md:text-3xl font-black text-white mb-1">{stat.val}</div>
                  <div className="text-xs text-white/50 uppercase tracking-widest font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

    </div>
  );
}