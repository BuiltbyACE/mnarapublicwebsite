import type { Metadata } from "next";
import StandardPage from '../templates/StandardPage';

export const metadata: Metadata = {
  title: "Fee Structure",
  description:
    "View the current Mnara School fee structure for Early Years, Primary, and Secondary, and download the full fee schedule as a PDF for your reference.",
  alternates: {
    canonical: "https://mnara.sc.ke/fee-structure/",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function FeeStructurePage() {
  return (
    <StandardPage
      title="Fee Structure"
      image="/images/hero-1.jpg"
      breadcrumbs={[{ label: 'Admissions', href: '/admissions' }, { label: 'Fee Structure' }]}
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-text-muted text-sm mb-6 text-center">
          This is a view-only copy of our current fee structure. For questions or clarification, please{' '}
          <a href="/contact" className="text-primary hover:underline">contact us</a>.
        </p>
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-off-white">
          <iframe
            src="/mnara-school-fee-structure.pdf#toolbar=0&navpanes=0&scrollbar=0"
            title="Mnara School Fee Structure"
            className="w-full h-[80vh]"
          />
        </div>
      </div>
    </StandardPage>
  );
}
