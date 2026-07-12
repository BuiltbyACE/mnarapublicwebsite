import { ElementType } from 'react';

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  icon?: ElementType;
  description?: string;
  color?: string;
  isMega?: boolean;
}


export interface Curriculum {
  title: string;
  subtitle: string;
  description: string;
  icon: ElementType;
  href: string;
  image: string;
}

export interface Activity {
  title: string;
  description: string;
  longDescription?: string;
  features?: string[];
  icon: ElementType;
  href: string;
  color: string;
  image?: string;
}

export interface Testimonial {
  text: string;
  author?: string;
  role?: string;
}

export interface BlogPost {
  title: string;
  date: string;
  image: string;
  href: string;
}

export interface ValueProp {
  icon: ElementType;
  title: string;
  description: string;
}

export interface ListIconItem {
  text: string;
  icon: ElementType;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  icon: ElementType;
}

export interface MnaraValue {
  letter: string;
  word: string;
  description?: string;
  icon: ElementType;
  color: string;
}

export interface CurriculumSection {
  title: string;
  description: string;
  image: string;
}

export interface CurriculumHighlight {
  title: string;
  description: string;
  icon: ElementType;
}

export interface CurriculumPageData {
  hero: {
    title: string;
    subtitle: string;
    image: string;
  };
  sections: CurriculumSection[];
  learningAreas: string[];
  highlights: CurriculumHighlight[];
}

export interface GalleryPhoto {
  id: number;
  src: string;
  alt: string;
  category: 'School Buildings' | 'Parents' | 'Students & Teachers';
}
