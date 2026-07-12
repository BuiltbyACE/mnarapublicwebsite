import Link from 'next/link';
import SectionWrapper from './SectionWrapper';
import SectionHeader from './ui/SectionHeader';
import CardIcon from './ui/CardIcon';
import { valueProps } from '../lib/data';

export default function AboutValues() {
  return (
    <SectionWrapper id="about" bg="offwhite">
      <SectionHeader label="About Us" title="Our Core Values" />

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

      <div className="text-center mt-10">
        <Link href="/about" className="btn-outline-primary">
          Learn More
        </Link>
      </div>
    </SectionWrapper>
  );
}
