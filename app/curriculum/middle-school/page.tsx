import type { Metadata } from "next";
import { Rocket, ShieldCheck, Target } from 'lucide-react';
import CurriculumPageLayout from '../../components/CurriculumPageLayout';
import { CurriculumPageData } from '../../lib/types';

export const metadata: Metadata = {
  title: "Lower Secondary (Key Stage 3)",
  description:
    "Mnara School Lower Secondary program for Ages 12-14 (Key Stage 3). Academic excellence meets personal growth, essential life skills, and Islamic mentorship in Nairobi.",
  openGraph: {
    title: "Lower Secondary (Key Stage 3) | Mnara School",
    description:
      "A vibrant learning environment focusing on academic excellence, life skills, and Islamic mentorship (Ages 12-14).",
    images: [{ url: "/images/hero-2.jpg", width: 1920, height: 1080 }],
  },
  alternates: {
    canonical: "https://www.mnaraschool.com/curriculum/middle-school/",
  },
};

export default function MiddleSchoolPage() {
  const data: CurriculumPageData = {
    hero: {
      title: 'Lower Secondary (Key Stage 3)',
      subtitle: 'A vibrant learning environment focusing on academic excellence, life skills, and Islamic mentorship (Ages 12–14).',
      image: '/images/hero-2.jpg',
    },
    sections: [
      {
        title: 'Academic Excellence',
        description: 'Our curriculum is carefully designed to transition students from primary foundations to more rigorous, specialized academic study, preparing them for Cambridge IGCSE and AlBaseer subjects.',
        image: '/images/hero-1.jpg',
      },
      {
        title: 'Essential Life Skills & Islamic Mentorship',
        description: 'Beyond textbooks, we focus on developing critical life skills including leadership, communication, and emotional adaptability, fully grounded in Islamic values and mentorship.',
        image: '/images/hero-2.jpg',
      },
    ],
    learningAreas: [
      'Advanced Mathematics',
      'English Language & Lit',
      'Integrated Science',
      'ICT & Computer Science',
      'Art & Design',
      'Global Perspective',
      'Humanities',
      'Critical Thinking',
    ],
    highlights: [
      {
        title: 'Islamic Mentorship',
        description: 'Guiding young minds in self-awareness, faith, and character under the shade of Islamic values.',
        icon: Target,
      },
      {
        title: 'Essential Life Skills',
        description: 'Empowering students with resilience, independence, adaptability, and leadership capabilities.',
        icon: Rocket,
      },
      {
        title: 'Future Readiness',
        description: 'Providing a solid foundation preparing students for Upper Secondary, IGCSE, and purposeful success.',
        icon: ShieldCheck,
      },
    ],
  };

  return <CurriculumPageLayout data={data} breadcrumbLabel="Lower Secondary – Key Stage 3" />;
}