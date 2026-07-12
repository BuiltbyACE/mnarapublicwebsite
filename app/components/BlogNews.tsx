import Link from 'next/link';
import SectionWrapper from './SectionWrapper';
import SectionHeader from './ui/SectionHeader';
import CardImage from './ui/CardImage';
import { blogPosts } from '../lib/data';

export default function BlogNews() {
  return (
    <SectionWrapper id="blog-news" bg="offwhite">
      <SectionHeader label="Blog & News" title="Latest Updates" />

      <div className="grid md:grid-cols-2 gap-8">
        {blogPosts.map(({ title, date, image, href }) => (
          <CardImage
            key={title}
            image={image}
            title={title}
            subtitle={date}
            href={href}
            className="h-80 shadow-sm border border-gray-100 hover:shadow-xl"
          />
        ))}
      </div>

      <div className="text-center mt-10">
        <Link href="/events" className="btn-outline-primary">
          More News
        </Link>
      </div>
    </SectionWrapper>
  );
}
