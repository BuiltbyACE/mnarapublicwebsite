import SectionWrapper from './SectionWrapper';
import SectionHeader from './ui/SectionHeader';
import CardImage from './ui/CardImage';
import { curricula } from '../lib/data';

export default function Curriculum() {
  return (
    <SectionWrapper id="curriculum" bg="offwhite">
      <SectionHeader label="Curriculum" title="Our Academic Pathways" />

      <div className="grid md:grid-cols-2 gap-8">
        {curricula.map(({ title, subtitle, description, href, image }) => (
          <CardImage
            key={title}
            image={image}
            title={title}
            subtitle={subtitle}
            description={description}
            href={href}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
