import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Hero = dynamic(() => import('./components/Hero'), { ssr: true });
const Welcome = dynamic(() => import('./components/Welcome'), { ssr: true });
const AboutValues = dynamic(() => import('./components/AboutValues'));
const Curriculum = dynamic(() => import('./components/Curriculum'));
const StudentLife = dynamic(() => import('./components/StudentLife'));
const CoCurricular = dynamic(() => import('./components/CoCurricular'));
const Admissions = dynamic(() => import('./components/Admissions'));
const AlteVola = dynamic(() => import('./components/AlteVola'));
const BlogNews = dynamic(() => import('./components/BlogNews'));
const Testimonials = dynamic(() => import('./components/Testimonials'));
const Shop = dynamic(() => import('./components/Shop'));
const CTABanner = dynamic(() => import('./components/CTABanner'));

function SectionFallback() {
  return <div className="h-64 bg-off-white animate-pulse rounded-2xl my-8" />;
}

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Suspense fallback={<SectionFallback />}>
        <AboutValues />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Curriculum />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <StudentLife />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <CoCurricular />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Admissions />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <AlteVola />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <BlogNews />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Shop />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <CTABanner />
      </Suspense>
    </>
  );
}
