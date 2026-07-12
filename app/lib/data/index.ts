import {
  Compass, Eye, Target, BookOpen, GraduationCap, School,
  Atom, Cpu, Heart, Shield, Users, Sparkles,
  Trophy, Palette, MessageSquare, Footprints, PartyPopper,
  Award, Globe, HandHeart, UserCheck, BookHeart, Flame,
  ClipboardCheck, FileCheck, UserPlus, Rocket, Code,
} from 'lucide-react';
import { Curriculum, Activity, Testimonial, BlogPost, ValueProp, ListIconItem, StepItem, MnaraValue, NavItem } from '../types';

export const navLinks: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },

  {
    label: 'Curriculum',
    href: '#',
    isMega: true,
    children: [
      {
        label: 'Early Years Foundation (3–7 Years)',
        description: 'Nurturing curiosity and a love for learning in our youngest learners (Ages 3–7).',
        href: '/curriculum/early-years',
        icon: School,
        color: 'bg-pink-50 text-pink-600',
      },
      {
        label: 'Primary School',
        description: 'Building strong academic foundations through a well-rounded and engaging curriculum.',
        href: '/curriculum/primary',
        icon: BookOpen,
        color: 'bg-blue-50 text-blue-600',
      },
      {
        label: 'Lower Secondary – Key Stage 3',
        description: 'Where learning deepens and character is forged.',
        href: '/curriculum/middle-school',
        icon: GraduationCap,
        color: 'bg-emerald-50 text-emerald-600',
      },
      {
        label: 'High School',
        description: 'Preparing students for future success with a focus on critical thinking and leadership.',
        href: '/curriculum/highschool',
        icon: GraduationCap,
        color: 'bg-emerald-50 text-emerald-600',
      },
    ],
  },
  {
    label: 'Co-Curricular',
    href: '/co-curricular',
    children: [
      { label: 'Sports', href: '/co-curricular/sports' },
      { label: 'Robotics', href: '/co-curricular/robotics' },
      { label: 'Little Einsteins', href: '/co-curricular/little-einsteins' },
      { label: 'Art & Craft', href: '/co-curricular/art-and-craft' },
      { label: 'Debate', href: '/co-curricular/debate' },
    ],
  },

  { label: 'Events', href: '/events' },
  { label: 'Multimedia', href: '/multimedia' },
  { label: 'Contact Us', href: '/contact' },
];

export const heroSlides = [
  {
    image: '/images/hero-1.webp',
    title: 'Guiding Tomorrow’s Leaders',
    subtitle: 'At Mnara, every child is guided with purpose, supported with care, and prepared for the future.',
  },
  {
    image: '/images/hero-2.webp',
    title: 'A Place of Direction and Growth',
    subtitle: 'A safe, structured environment where learners grow in confidence, character, and capability.',
  },
  {
    image: '/images/hero-3.webp',
    title: 'Building Strong Foundations for Life',
    subtitle: 'We combine academic excellence with real-world skills to prepare every child for success.',
  },
];

export const valueProps: ValueProp[] = [
  {
    icon: Compass,
    title: 'Who We Are',
    description: 'Mnara School is a values-driven learning community built on love, growth, and excellence. We provide a safe, nurturing environment that supports learners academically, socially, and spiritually.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'To be the leading and innovative learning institution that nurtures young minds to make the world a better place.',
  },
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To discover, nurture, inspire young minds in a holistic and God-Fearing manner to achieve their full potential to positively impact the world.',
  },
];


export const curricula: Curriculum[] = [
  {
    title: 'Islamic Curriculum',
    subtitle: 'AlBaseer International Islamic Curriculum',
    description: 'An integrated academic and Islamic education curriculum focusing on character formation and holistic learning to nurture God-fearing individuals.',
    icon: BookOpen,
    href: '#',
    image: '/images/earlyyears.webp',
  },
  {
    title: 'Cambridge',
    subtitle: 'Cambridge International Pathway',
    description: 'The Cambridge pathway offers an internationally recognized curriculum, preparing learners for IGCSE and beyond with a world-class standard of education.',
    icon: GraduationCap,
    href: '#',
    image: '/images/primaryschool.webp',
  },
];

export const activities: Activity[] = [
  {
    title: 'Sports',
    description: 'A comprehensive sports program focused on physical fitness, teamwork, and discipline.',
    longDescription: 'Our sports program is designed to develop physical fitness, teamwork, and discipline through various disciplines including Swimming, Football, Basketball, and Athletics.',
    features: ['Professional Coaching', 'Modern Facilities', 'Inter-school Competitions', 'Leadership Training'],
    icon: Trophy,
    href: '/co-curricular/sports',
    color: 'from-orange-500 to-orange-600',
    image: '/images/hero-2.webp',
  },
  {
    title: 'Robotics & STEM',
    description: 'Envision and build the future through engineering and machine design.',
    longDescription: 'The Robotics program engages students in the design, construction, and operation of machines, fostering critical thinking and problem-solving skills.',
    features: ['Hands-on Building', 'Coding Basics', 'Engineering Principles', 'Team Competitions'],
    icon: Cpu,
    href: '/co-curricular/robotics',
    color: 'from-emerald-500 to-emerald-600',
    image: '/images/hero-3.webp',
  },
  {
    title: 'Little Einsteins',
    description: 'Setting the basis for a lifelong interest and knowledge of STEM Learning.',
    longDescription: 'Little Einsteins East Africa believes that Science Exploration in young children begins with Fun. We make science accessible and exciting for our youngest learners.',
    features: ['Science Lab Fun', 'Exploratory Learning', 'Critical Thinking', 'Age-appropriate STEM'],
    icon: Atom,
    href: '/co-curricular/little-einsteins',
    color: 'from-blue-500 to-blue-600',
    image: '/images/earlyyears.webp',
  },
  {
    title: 'Art & Craft',
    description: 'Unleashing creativity through various artistic mediums and techniques.',
    longDescription: 'Our Art & Craft curriculum encourages students to explore their imagination through painting, sculpting, and mixed media, fostering fine motor skills and creativity.',
    features: ['Creative Freedom', 'Varied Mediums', 'Art Exhibitions', 'Fine Motor Development'],
    icon: Palette,
    href: '/co-curricular/art-and-craft',
    color: 'from-purple-500 to-purple-600',
    image: '/images/primaryschool.webp',
  },
  {
    title: 'Debate',
    description: 'Developing communication, research, and critical thinking skills.',
    longDescription: 'The Debate club empowers students to speak with confidence, research complex topics, and engage in thoughtful argumentation on global issues.',
    features: ['Public Speaking', 'Research Skills', 'Competitive Debating', 'Global Perspectives'],
    icon: MessageSquare,
    href: '/co-curricular/debate',
    color: 'from-cyan-500 to-cyan-600',
    image: '/images/earlyyear2.webp',
  },
];

export const mnaraValues: MnaraValue[] = [
  { letter: 'M', word: 'Moral', description: 'Islamic emphasis on character and values.', icon: Heart, color: 'bg-pink-50 text-pink-600' },
  { letter: 'N', word: 'Nurturing', description: 'Caring and nurturing environment.', icon: Shield, color: 'bg-blue-50 text-blue-600' },
  { letter: 'A', word: 'Aware', description: 'Self-awareness, faith awareness and global awareness.', icon: Eye, color: 'bg-green-50 text-green-600' },
  { letter: 'R', word: 'Resilient', description: 'Resilience, independence and adaptability.', icon: Users, color: 'bg-amber-50 text-amber-600' },
  { letter: 'A', word: 'Achievers', description: 'Academic excellence with purposeful success.', icon: Sparkles, color: 'bg-purple-50 text-purple-600' },
];

export const clubs: ListIconItem[] = [
  { text: 'STEM and Robotics', icon: Code },
  { text: 'Environmental Sustainability Club', icon: Globe },
  { text: 'Soccer Club', icon: Trophy },
  { text: 'Taekwondo', icon: Shield },
  { text: 'Skating', icon: Sparkles },
  { text: 'Coding and Innovation', icon: Code },
  { text: 'Art and Craft', icon: Palette },
  { text: 'Anasheed Fairs', icon: MessageSquare },
  { text: 'Public Speaking', icon: MessageSquare },
  { text: 'Spelling Bee', icon: Award },
  { text: 'Scouts', icon: Footprints },
];

export const events: ListIconItem[] = [
  { text: 'Graduation', icon: Award },
  { text: 'Quran Competition', icon: BookOpen },
  { text: 'Fiqh Fair', icon: Globe },
  { text: 'Hadeeth Fair', icon: Award },
  { text: 'Iftaar Dinner', icon: PartyPopper },
];

export const pastoral: ListIconItem[] = [
  { text: 'Class teachers & mentors', icon: UserCheck },
  { text: 'School counselors', icon: BookHeart },
  { text: 'Spiritual nurturing', icon: Flame },
  { text: 'Character-building programs', icon: GraduationCap },
  { text: 'Peer Counselling', icon: HandHeart },
];

export const admissionSteps: StepItem[] = [
  {
    number: '01',
    title: 'Book Assessment',
    description: 'Book an assessment or interview with our admissions team',
    icon: ClipboardCheck,
  },
  {
    number: '02',
    title: 'Receive Decision',
    description: 'Receive your admission decision promptly',
    icon: FileCheck,
  },
  {
    number: '03',
    title: 'Complete Registration',
    description: 'Complete the registration process and necessary documentation',
    icon: UserPlus,
  },
  {
    number: '04',
    title: 'Begin Your Journey',
    description: 'Start your Mnara School journey and join our community',
    icon: Rocket,
  },
];

export const admissionReasons: ListIconItem[] = [
  { text: 'Holistic Islamic foundation', icon: Shield },
  { text: 'Moral development', icon: Heart },
  { text: 'Religious Mentorship in Islamic Beliefs', icon: HandHeart },
  { text: 'Strong Quran memorization', icon: BookOpen },
  { text: 'Leadership development', icon: GraduationCap },
  { text: 'Strong Servant-Style Leadership Approach', icon: UserCheck },
];

export const testimonials: Testimonial[] = [
  { text: "Every one of my child's class teachers has taught her with passion and empathy, and responded to concerns with care and professionalism. They are all wonderful." },
  { text: "The teachers give their all in shaping my son's future." },
  { text: "Every Mnara staff member offers excellent service. They are friendly, helpful, and genuinely interested in the children." },
  { text: "The school offers a wide range of co-curricular activities that expose my child to new experiences. The trip to the UK truly changed my son's perspective on football." },
  { text: "When I was searching for a school, everyone—from security at the gate to the admin staff and teachers—was kind and welcoming. I felt at home and at peace." },
  { text: "The warm welcome we received while visiting the school was one of the main reasons we chose Mnara over several other well-known schools." },
  { text: "Mnara's commitment to developing the whole child—academically, in values, confidence, and sports—is truly commendable." },
  { text: "Mnara does not only focus on a child's life at school, but also at home. As a parent, I find the parents' training sessions and nanny support very relevant." },
  { text: "Maintaining Mnara's values in both children and staff, and recruiting excellent teachers, has made me feel that my child is in good company and in good hands." },
];

export const blogPosts: BlogPost[] = [
  {
    title: 'Mnara Students Excel at the 2026 East Africa Robotics Challenge',
    date: 'May 20, 2026',
    image: '/images/earlyyear3.webp',
    href: '/events',
  },
  {
    title: 'Our Annual Cultural Arts Festival Returns This August',
    date: 'April 30, 2026',
    image: '/images/earlyyear2.webp',
    href: '/events',
  },
];

