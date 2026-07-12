import type { Metadata } from "next";
import Script from "next/script";
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import InnerPageHero from '../components/ui/InnerPageHero';
import SectionWrapper from '../components/SectionWrapper';

export const metadata: Metadata = {
  title: "Events",
  description:
    "Stay up-to-date with Mnara School Nairobi events: Sports Day, Quran Competition, Hadeeth Competition, Fiqh Fair, and Public Speaking Championship.",
  openGraph: {
    title: "Events | Mnara School Nairobi",
    description:
      "Stay up-to-date with school events, Quran competitions, sports days, and educational fairs at Mnara School Nairobi.",
    images: [{ url: "/images/hero-1.jpg", width: 1920, height: 1080 }],
  },
  alternates: {
    canonical: "https://www.mnaraschool.com/events",
  },
};

const upcomingEvents = [
  {
    id: 1,
    title: 'Annual Sports Day',
    date: '2026-10-15',
    time: '08:00 AM - 04:00 PM',
    location: 'Main School Grounds',
    description: 'A day of athletic excellence and school spirit. Students compete in track and field events in a friendly, supportive environment.',
    category: 'Sports',
    url: 'https://www.mnaraschool.com/events',
    color: 'from-orange-500 to-orange-600',
    image: '/images/primaryschool.jpeg',
  },
  {
    id: 2,
    title: 'Quran Competition',
    date: '2026-11-05',
    time: '09:00 AM - 01:00 PM',
    location: 'Mnara Main Auditorium',
    description: 'Students showcase their memorization, pronunciation, and beautiful recitation of the Quran before a panel of respected scholars.',
    category: 'Spiritual',
    url: 'https://www.mnaraschool.com/events',
    color: 'from-emerald-500 to-emerald-600',
    image: '/images/earlyyear2.jpeg',
  },
  {
    id: 3,
    title: 'Public Speaking Championship',
    date: '2026-11-20',
    time: '10:00 AM - 02:00 PM',
    location: 'Mnara Main Auditorium',
    description: 'Our learners speak with confidence and eloquence on global and ethical topics, presenting their ideas to a panel and audience.',
    category: 'Academic',
    url: 'https://www.mnaraschool.com/events',
    color: 'from-blue-500 to-blue-600',
    image: '/images/hero-3.jpg',
  },
  {
    id: 4,
    title: 'Hadeeth Competition',
    date: '2026-12-10',
    time: '09:00 AM - 12:30 PM',
    location: 'Mnara Main Auditorium',
    description: 'A spiritual gathering where students present their memorization and understanding of the Prophet\'s sayings (Hadeeth).',
    category: 'Spiritual',
    url: 'https://www.mnaraschool.com/events',
    color: 'from-purple-500 to-purple-600',
    image: '/images/earlyyear3.jpeg',
  },
  {
    id: 5,
    title: 'Fiqh Fair',
    date: '2027-02-15',
    time: '09:00 AM - 03:00 PM',
    location: 'Mnara Exhibition Hall',
    description: 'An interactive fair where students showcase scale models and projects exploring Islamic jurisprudence (Fiqh).',
    category: 'Islamic Studies',
    url: 'https://www.mnaraschool.com/events',
    color: 'from-pink-500 to-pink-600',
    image: '/images/hero-2.jpg',
  },
];

const pastEvents = [
  {
    id: 6,
    title: 'Islamic Fiqh Fair 2025',
    date: 'November 20, 2025',
    image: '/images/hero-2.jpg',
  },
  {
    id: 7,
    title: 'Annual Quran Memorization Contest',
    date: 'December 12, 2025',
    image: '/images/hero-1.jpg',
  },
  {
    id: 8,
    title: 'Leadership Mentorship Seminar',
    date: 'February 28, 2026',
    image: '/images/hero-3.jpg',
  },
];

export default function EventsPage() {
  const eventJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: upcomingEvents[0].title,
    description: upcomingEvents[0].description,
    startDate: upcomingEvents[0].date,
    location: {
      '@type': 'Place',
      name: upcomingEvents[0].location,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Nairobi',
        addressCountry: 'KE',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'Mnara School',
      url: 'https://www.mnaraschool.com',
    },
  };

  return (
    <div className="bg-white">
      <Script id="event-jsonld" type="application/ld+json">
        {JSON.stringify(eventJsonLd)}
      </Script>

      <InnerPageHero
        title="School Events"
        image="/images/hero-1.jpg"
        breadcrumbs={[{ label: 'Events' }]}
      />

      <SectionWrapper id="upcoming-events" bg="white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-text-dark">
              Upcoming <span className="text-primary">Events</span>
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Stay up-to-date with the latest activities, competitions, and gatherings at Mnara School.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-off-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col group relative"
                itemScope
                itemType="https://schema.org/Event"
              >
                <meta itemProp="name" content={event.title} />
                <meta itemProp="startDate" content={event.date} />
                <meta itemProp="description" content={event.description} />
                
                {/* Image Header */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-900">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${event.color}`} />
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <div className="inline-block px-3 py-1 bg-primary/5 rounded-full text-xs font-bold uppercase tracking-wider text-primary shadow-sm mb-4 w-max border border-gray-100">
                    {event.category}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-text-dark mb-4 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-3 mb-6 flex-1 text-sm text-text-muted font-medium">
                    <div className="flex items-center gap-3">
                      <Calendar size={18} className="text-primary" /> {new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock size={18} className="text-primary" /> {event.time}
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin size={18} className="text-primary shrink-0" />
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location + ', Nairobi, Kenya')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary underline underline-offset-2 transition-colors"
                      >
                        {event.location}
                      </a>
                    </div>
                  </div>

                  <p className="text-text-muted leading-relaxed mb-4 text-sm">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="past-events" bg="offwhite">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-gray-200 pb-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-black text-text-dark">
                Past Highlights
              </h2>
              <p className="text-text-muted text-lg">
                Memorable moments from our recent school events.
              </p>
            </div>
            <Link href="/multimedia" className="flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors">
              View Full Gallery <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="group relative h-72 rounded-3xl overflow-hidden shadow-md cursor-pointer"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url(${event.image})` }}
                  role="img"
                  aria-label={event.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform">
                  <div className="text-sm font-bold text-white/70 mb-2">{event.date}</div>
                  <h3 className="text-xl font-bold leading-tight">{event.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
