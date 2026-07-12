import SectionWrapper from './SectionWrapper';
import SectionHeader from './ui/SectionHeader';
import CardIcon from './ui/CardIcon';
import { activities } from '../lib/data';

export default function CoCurricular() {
  return (
    <SectionWrapper id="co-curricular" bg="offwhite">
      <SectionHeader label="Co-Curricular" title="Beyond the Classroom" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {activities.map(({ title, description, icon, href, color }) => (
          <CardIcon
            key={title}
            icon={icon}
            title={title}
            description={description}
            href={href}
            color={color.replace('from-', 'text-').split(' ')[0]} // simple hack to extract primary color from gradient
            className="h-full"
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
