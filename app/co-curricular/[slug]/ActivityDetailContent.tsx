import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Search, Calendar, Users, Star } from 'lucide-react';
import InnerPageHero from '../../components/ui/InnerPageHero';
import SectionWrapper from '../../components/SectionWrapper';
import { activities } from '../../lib/data';

export default async function ActivityDetailContent({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const activity = activities.find(a => a.href.endsWith(`/${slug}`));

  if (!activity) {
    return (
      <div className="min-h-screen bg-off-white flex flex-col items-center justify-center p-6 text-center">
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-8 text-primary">
          <Search size={48} />
        </div>
        <h1 className="text-4xl font-heading font-black text-text-dark mb-4">Activity Not Found</h1>
        <p className="text-text-muted text-lg max-w-md mb-10 leading-relaxed">
          We couldn&apos;t find the activity you&apos;re looking for. It may have been moved or renamed.
        </p>
        <Link href="/co-curricular" className="btn-primary">
          Back to All Activities
        </Link>
      </div>
    );
  }

  const IconComponent = activity.icon;

  return (
    <div className="bg-white">
      <InnerPageHero
        title={activity.title}
        image={activity.image || '/images/hero-1.jpg'}
        breadcrumbs={[
          { label: 'Co-Curricular', href: '/co-curricular' },
          { label: activity.title }
        ]}
      />

      <SectionWrapper id="details" bg="white">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          <div className="flex-1 space-y-10">
            <div className="space-y-6">
              <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${activity.color} rounded-full text-white font-bold text-xs uppercase tracking-widest shadow-md`}>
                <IconComponent size={16} />
                Specialized Program
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-black text-text-dark leading-tight">
                {activity.description}
              </h2>
              <div className="h-1.5 w-24 bg-primary rounded-full" />
            </div>

            <p className="text-xl text-text-muted leading-relaxed">
              {activity.longDescription}
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              {activity.features?.map((feature, index) => (
                <div key={index} className="flex bg-off-white p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow group">
                  <CheckCircle2 className="text-primary shrink-0 mr-4 group-hover:scale-110 transition-transform" />
                  <span className="text-text-dark font-bold text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-[400px] space-y-8 sticky top-28">
            <div className="bg-secondary rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Calendar className="text-gold" /> Quick Info
              </h3>
              
              <ul className="space-y-6">
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Users size={20} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-white/50 uppercase font-bold tracking-widest">Eligibility</div>
                    <div className="font-semibold">All Year Groups</div>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Calendar size={20} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-white/50 uppercase font-bold tracking-widest">Schedule</div>
                    <div className="font-semibold">After School Hours</div>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Star size={20} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-white/50 uppercase font-bold tracking-widest">Instructors</div>
                    <div className="font-semibold">Qualified Specialists</div>
                  </div>
                </li>
              </ul>

              <div className="mt-10">
                <Link href="/contact" className="btn-secondary w-full justify-center !border-gold !text-gold hover:!bg-gold hover:!text-secondary">
                  Register Interest
                </Link>
              </div>
            </div>

            <Link href="/co-curricular" className="flex items-center gap-2 text-text-muted hover:text-primary font-bold transition-colors pl-4">
              <ArrowLeft size={18} /> Back to all activities
            </Link>
          </div>
        </div>
      </SectionWrapper>

      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto h-[400px] relative rounded-[3rem] overflow-hidden shadow-2xl">
          <Image
            src={activity.image || '/images/hero-1.jpg'}
            alt={activity.title}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
          <div className="absolute bottom-12 left-12 right-12 text-white">
            <h3 className="text-3xl font-black mb-2">Empowering Excellence</h3>
            <p className="text-white/70 max-w-xl">Every child has a unique gift. Our mission is to provide the platform where those gifts can flourish.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
