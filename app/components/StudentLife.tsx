import { Trophy, PartyPopper, HandHeart } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import SectionHeader from './ui/SectionHeader';
import { mnaraValues, clubs, events, pastoral } from '../lib/data';

export default function StudentLife() {
  return (
    <SectionWrapper id="student-life">
      <SectionHeader
        label="Student Life"
        title="A Vibrant, Holistic School Experience"
        description="Mnara offers a rich student life that promotes creativity, teamwork, leadership, and self-expression."
      />

      {/* MNARA Acronym Section */}
      <div className="mb-20">
        <h3 className="font-heading font-bold text-lg text-text-dark text-center mb-8">
          Our culture is embodied in our name Mnara:
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {mnaraValues.map(({ letter, word, description, icon: Icon, color }) => (
            <div
              key={`${letter}-${word}`}
              className="group bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={22} />
                </div>
                <div className="flex flex-row items-center justify-center gap-4 mb-4 whitespace-nowrap">
                  <span className="mnara-letter inline-block">{letter}</span>
                  <span className="text-text-dark font-bold text-lg inline-block">{word}</span>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Three columns */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Clubs */}
        <div className="bg-off-white rounded-2xl p-8 border border-gray-100">
          <h3 className="font-heading font-bold text-lg text-text-dark mb-6 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Trophy size={16} className="text-primary" />
            </span>
            Clubs & Activities
          </h3>
          <ul className="space-y-3">
            {clubs.map(({ text, icon: Icon }) => (
              <li key={text} className="flex items-start gap-3">
                <Icon size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="text-text-muted text-sm">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Events */}
        <div className="bg-off-white rounded-2xl p-8 border border-gray-100">
          <h3 className="font-heading font-bold text-lg text-text-dark mb-6 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <PartyPopper size={16} className="text-primary" />
            </span>
            Annual Events & Traditions
          </h3>
          <ul className="space-y-3">
            {events.map(({ text, icon: Icon }) => (
              <li key={text} className="flex items-start gap-3">
                <Icon size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="text-text-muted text-sm">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pastoral */}
        <div className="bg-off-white rounded-2xl p-8 border border-gray-100">
          <h3 className="font-heading font-bold text-lg text-text-dark mb-6 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <HandHeart size={16} className="text-primary" />
            </span>
            Pastoral Care
          </h3>
          <p className="text-text-muted text-sm mb-4">
            Learners receive ongoing guidance and emotional support through:
          </p>
          <ul className="space-y-3">
            {pastoral.map(({ text, icon: Icon }) => (
              <li key={text} className="flex items-start gap-3">
                <Icon size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="text-text-muted text-sm">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
