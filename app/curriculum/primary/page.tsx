import type { Metadata } from "next";
import { Sparkles, Trophy, Lightbulb } from 'lucide-react';
import CurriculumPageLayout from '../../components/CurriculumPageLayout';
import { CurriculumPageData } from '../../lib/types';

export const metadata: Metadata = {
  title: "Primary School Curriculum",
  description:
    "Mnara School Primary program for ages 6-11. Building strong academic foundations through Key Stages 1 & 2 with Cambridge and AlBaseer pathways in Nairobi.",
  openGraph: {
    title: "Primary School Curriculum | Mnara School",
    description:
      "Building confident, well-rounded learners through a holistic and academic approach (Ages 6-11).",
    images: [{ url: "/images/primaryschool.jpeg", width: 1920, height: 1080 }],
  },
};

export default function PrimarySchoolPage() {
  const data: CurriculumPageData = {
    hero: {
      title: 'Primary School Curriculum',
      subtitle: 'Building confident, well-rounded learners through a holistic and academic approach (Ages 6–11).',
      image: '/images/primaryschool.jpeg',
    },
    sections: [
      {
        title: 'Lower Primary (Key Stage 1 - Ages 6–7)',
        description: 'Transitioning from play-based discovery to more structured learning. Students follow a balanced daily timetable focusing on core academic subjects alongside ICT, Humanities, Global Perspective, and Art & Design. Academic Excellence is fostered through IGCSE and AlBaseer subjects from an early stage, building a strong foundation for future learning.',
        image: '/images/primaryschool.jpeg',
      },
      {
        title: 'Upper Primary (Key Stage 2)',
        description: 'Building on foundational learning with advanced academic and practical experiences. Students engage in specialized learning, humanities, career awareness, and essential life skills.',
        image: '/images/hero-3.jpg',
      },
    ],
    learningAreas: [
      'English Literacy & Language',
      'Mathematics & Numeracy',
      'Science & Discovery',
      'ICT & Digital Literacy',
      'Humanities',
      'Global Perspective',
      'Art & Design',
      'Quran & Islamic Studies',
    ],
    highlights: [
      {
        title: 'Nurturing Talents',
        description: 'Focus on identifying and developing children\'s unique talents and interests through structured co-curricular pathways.',
        icon: Sparkles,
      },
      {
        title: 'Strengthening Character',
        description: 'We prioritize moral development and character building, helping learners grow into independent and responsible individuals.',
        icon: Trophy,
      },
      {
        title: 'Future Career Connections',
        description: 'Helping students connect their early learning and skills to future real-world applications and careers.',
        icon: Lightbulb,
      },
    ],
  };

  return <CurriculumPageLayout data={data} breadcrumbLabel="Primary School" />;
}