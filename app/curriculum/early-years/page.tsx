import type { Metadata } from "next";
import { Heart, Star, Users } from 'lucide-react';
import CurriculumPageLayout from '../../components/CurriculumPageLayout';
import { CurriculumPageData } from '../../lib/types';

export const metadata: Metadata = {
  title: "Early Years Foundation (3–7 Years)",
  description:
    "Mnara School's Early Years Foundation program for ages 3-7. Play-based learning, nurturing curiosity, and building strong foundations in a warm Nairobi environment.",
  keywords: [
    "early years foundation Nairobi",
    "kindergarten Nairobi Kenya",
    "nursery school Nairobi",
    "play-based learning Kenya",
    "Mnara School early years",
  ],
  openGraph: {
    title: "Early Years Foundation (3–7 Years) | Mnara School",
    description:
      "Early Years Foundation at Mnara School (Ages 3–7). Play-based learning under Key Learning Areas.",
    images: [{ url: "https://www.mnaraschool.com/images/earlyyears.webp", width: 1920, height: 1080, alt: "Mnara School Early Years Foundation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Early Years Foundation (3–7 Years) | Mnara School",
    description:
      "Play-based learning for ages 3-7 at Mnara School Nairobi.",
    images: ["https://www.mnaraschool.com/images/earlyyears.webp"],
  },
  alternates: {
    canonical: "https://www.mnaraschool.com/curriculum/early-years/",
  },
};

export default function EarlyYearsPage() {
  const data: CurriculumPageData = {
    hero: {
      title: 'Early Years Foundation (3 Years–7 Years)',
      subtitle: 'English Language under Key Learning Areas.',
      image: '/images/earlyyears.jpeg',
    },
    sections: [
      {
        title: 'Structured Play & Discovery',
        description: 'Learning through structured, carefully planned play is at the centre of our curriculum. Children develop social, emotional, physical, and creative skills through natural, engaging learning experiences.',
        image: '/images/earlyyear2.webp',
      },
      {
        title: 'Holistic Development',
        description: 'Our program focuses on the whole child. Beyond early literacy and numeracy, we emphasize physical education, outdoor learning, and spiritual nurturing to build a strong foundation for future growth.',
        image: '/images/IMG_0083.jpg',
      },
    ],
    learningAreas: [
      'English Language',
      'Tarbiyaat',
      'Quran',
      'Arabic',
      'Environmental Studies',
      'Number Work',
      'Qaida',
      'Creative Art',
      'Physical Education',
    ],
    highlights: [
      {
        title: 'Nurturing Environment',
        description: 'A warm and safe space where children feel valued and supported in their first steps of education.',
        icon: Heart,
      },
      {
        title: 'Foundation for Success',
        description: 'Building the critical early skills that prepare students for a smooth transition into Primary school.',
        icon: Star,
      },
      {
        title: 'Social & Emotional Growth',
        description: 'Emphasis on developing self-confidence, teamwork, and empathy through daily interactions.',
        icon: Users,
      },
    ],
  };

  return <CurriculumPageLayout data={data} breadcrumbLabel="Early Years" />;
}