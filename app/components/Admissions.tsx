import Link from 'next/link';
import SectionWrapper from './SectionWrapper';
import SectionHeader from './ui/SectionHeader';
import { admissionSteps, admissionReasons } from '../lib/data';

export default function Admissions() {
  return (
    <SectionWrapper id="admissions">
      <SectionHeader 
        label="Admissions" 
        title="Join Our Community" 
        description="We welcome new learners who are ready to grow, discover, and thrive." 
      />

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Process */}
        <div>
          <h3 className="font-heading font-bold text-xl text-text-dark mb-8">
            Admissions Process
          </h3>
          <div className="space-y-6">
            {admissionSteps.map(({ number, title, description, icon: Icon }) => (
              <div key={number} className="flex gap-5 group">
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                    <Icon
                      size={24}
                      className="text-primary group-hover:text-white transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <span className="text-primary font-heading font-bold text-sm">
                    Step {number}
                  </span>
                  <h4 className="font-heading font-bold text-lg text-text-dark">
                    {title}
                  </h4>
                  <p className="text-text-muted text-sm">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose */}
        <div>
          <h3 className="font-heading font-bold text-xl text-text-dark mb-8">
            Why Families Choose Mnara
          </h3>

          <div className="bg-off-white rounded-2xl p-8 border border-gray-100">
            <ul className="space-y-4">
              {admissionReasons.map(({ text, icon: Icon }) => (
                <li key={text} className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-primary" />
                  </span>
                  <span className="text-text-dark font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 bg-primary/5 rounded-2xl p-6 border border-primary/10">
            <h4 className="font-heading font-bold text-text-dark mb-2">
              Fee Structure
            </h4>
            <p className="text-text-muted text-sm mb-4">
              Available upon request from the admissions office.
            </p>
            <h4 className="font-heading font-bold text-text-dark mb-2">
              Book a School Tour
            </h4>
            <p className="text-text-muted text-sm">
              Experience Mnara School firsthand at any of our three campuses.
            </p>
          </div>

          <div className="mt-6">
            <Link href="/contact" className="btn-primary">
              Apply Today
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
