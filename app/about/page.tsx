import type { Metadata } from "next";
import StandardPage from '../templates/StandardPage';
import { valueProps } from '../lib/data';
import CardIcon from '../components/ui/CardIcon';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Mnara School's vision, mission, and values. A nurturing school in Nairobi with campuses in Dennis Pritt, Kasuku, and Karen — guiding every child to shine.",
  openGraph: {
    title: "About Us | Mnara School",
    description:
      "Learn about Mnara School's vision, mission, and values — guiding every child to shine.",
    images: [{ url: "/images/hero-2.webp", width: 1920, height: 1080 }],
  },
  alternates: {
    canonical: "https://www.mnaraschool.com/about",
  },
};

export default function AboutPage() {
  return (
    <StandardPage
      title="About Mnara School"
      image="/images/hero-2.jpg"
      breadcrumbs={[{ label: 'About Us' }]}
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
        <div className="relative z-10">
          <span className="section-label">Our Story</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-text-dark mb-6 leading-tight">
            Mnara means{' '}
            <span className="text-primary relative inline-block">
               guiding lighthouse
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-accent rounded-full" />
            </span>{' '}
          </h2>
          <p className="text-text-muted text-base lg:text-lg mb-6 leading-relaxed">
            Your child deserves more than just education. They deserve guidance, confidence, and a future they&apos;re prepared for. At Mnara, we provide a safe, supportive environment where every child is nurtured, challenged, and empowered to succeed.
          </p>
          <p className="text-text-muted text-base lg:text-lg leading-relaxed">
            Since our founding, we have been committed to holistic development, blending rigorous academics with essential life skills, pastoral care, and co-curricular excellence to shape tomorrow&apos;s leaders.
          </p>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
            <div className="absolute -top-4 -right-4 w-full h-full rounded-3xl border-2 border-primary/20" />
            <div className="absolute -bottom-4 -left-4 w-full h-full rounded-3xl bg-primary/5" />
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-1.jpg"
                alt="Mnara School — nurturing young minds"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <div className="text-center mb-12">
          <span className="section-label">Our Core</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-dark mt-2">
            Vision, Mission & Values
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {valueProps.map(({ icon, title, description }, i) => (
            <div key={title} className={i === 1 ? 'md:-translate-y-4' : ''}>
              <CardIcon
                icon={icon}
                title={title}
                description={description}
                className="h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </StandardPage>
  );
}
