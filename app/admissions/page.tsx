import type { Metadata } from "next";
import StandardPage from '../templates/StandardPage';
import Accordion from '../components/ui/Accordion';

import Link from 'next/link';

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Join Mnara School — a nurturing community in Nairobi. Learn about our admissions process, requirements, fee structure, and how to book a school tour.",
  openGraph: {
    title: "Admissions | Mnara School",
    description:
      "Join our community. Learn about the admissions process, requirements, and how to book a tour.",
    images: [{ url: "/images/hero-1.jpg", width: 1920, height: 1080 }],
  },
  alternates: {
    canonical: "https://www.mnaraschool.com/admissions",
  },
};

export default function AdmissionsPage() {
  const requirements = [
    {
      title: 'Kindergarten Requirements',
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Copy of birth certificate or passport</li>
          <li>Two recent passport-size photographs</li>
          <li>Completed medical form and immunization records</li>
          <li>Previous school reports (if applicable)</li>
          <li>Registration fee payment slip</li>
        </ul>
      )
    },
    {
      title: 'Primary School Requirements',
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Copy of birth certificate or passport</li>
          <li>Two recent passport-size photographs</li>
          <li>Report cards for the last two academic years</li>
          <li>Leaving certificate from the previous school</li>
          <li>Completed medical form</li>
          <li>Registration fee payment slip</li>
        </ul>
      )
    },
    {
      title: 'International Students',
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Valid passport copy and student pass/dependent pass</li>
          <li>Translated report cards (if not in English)</li>
          <li>Recommendation letter from the previous school</li>
          <li>All standard requirements listed above</li>
        </ul>
      )
    }
  ];

  return (
    <StandardPage
      title="Admissions"
      image="/images/hero-1.jpg"
      breadcrumbs={[{ label: 'Admissions' }]}
    >
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Column: Requirements */}
        <div>
          <span className="section-label">Requirements</span>
          <h2 className="font-heading text-3xl font-bold text-text-dark mt-2 mb-6">
            What you need to apply
          </h2>
          <p className="text-text-muted mb-8">
            Our admissions process is designed to be transparent and straightforward. Please review the requirements below based on the entry level.
          </p>
          <Accordion items={requirements} />
        </div>

        {/* Right Column: Fees and Process */}
        <div>
          <div className="bg-off-white rounded-2xl p-8 border border-gray-100 shadow-sm mb-8">
            <h3 className="font-heading font-bold text-xl text-text-dark mb-4">
              Fee Structure
            </h3>
            <p className="text-text-muted text-sm mb-6">
              Our fees are structured to provide exceptional value for the quality of education and facilities offered. Fees vary by grade level and campus.
            </p>
            <Link href="/contact" className="btn-outline-primary w-full justify-center">
              Request Fee Structure
            </Link>
          </div>

          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
            <h3 className="font-heading font-bold text-xl text-text-dark mb-6 text-center">
              Ready to Join Us?
            </h3>
            <div className="space-y-4">
              <Link href="/contact" className="btn-primary w-full justify-center">
                Book an Assessment
              </Link>
              <p className="text-center text-xs text-text-muted mt-4">
                Not sure yet? <Link href="/contact" className="text-primary hover:underline">Book a school tour</Link> instead.
              </p>
            </div>
          </div>
        </div>
      </div>
    </StandardPage>
  );
}
