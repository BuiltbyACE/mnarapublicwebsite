import type { Metadata } from 'next';
import InnerPageHero from '../components/ui/InnerPageHero';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how Mnara School collects, uses, and protects your personal data in accordance with the Kenya Data Protection Act 2019.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.mnaraschool.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      <InnerPageHero
        title="Privacy Policy"
        image="/images/hero-2.jpg"
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="prose prose-lg max-w-none text-text-muted leading-relaxed space-y-10">

          <p className="text-sm text-text-muted">Last updated: June 2026</p>

          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-text-dark">1. Introduction</h2>
            <p>
              Mnara School (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting the personal
              information of parents, guardians, prospective students, and visitors to our website. This
              Privacy Policy explains how we collect, use, store, and protect your information in
              accordance with the <strong>Kenya Data Protection Act 2019</strong> and applicable regulations.
            </p>
            <p>
              By using our website or submitting an enquiry, you agree to the practices described in this
              Policy.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-text-dark">2. Information We Collect</h2>
            <p>We may collect the following categories of personal data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact information:</strong> name, email address, and phone number provided via our contact or admissions forms.</li>
              <li><strong>Child information:</strong> a child&apos;s name, age, and grade level when provided as part of an admissions enquiry.</li>
              <li><strong>Website usage data:</strong> pages visited, browser type, and IP address collected automatically through server logs.</li>
            </ul>
            <p>We do not collect sensitive personal data (health records, financial data) through this website.</p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-text-dark">3. How We Use Your Information</h2>
            <p>We use the information you provide solely for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responding to your enquiries and providing requested information about our school.</li>
              <li>Processing admissions applications and communicating admission decisions.</li>
              <li>Sending school news, event announcements, and newsletters where you have opted in.</li>
              <li>Improving the usability and content of our website.</li>
            </ul>
            <p>We will never sell, rent, or trade your personal data to third parties for marketing purposes.</p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-text-dark">4. Disclosure of Information</h2>
            <p>We may share your data only in the following limited circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service providers:</strong> trusted third-party services (e.g. our contact form provider, Formspree) that process data strictly on our behalf under data processing agreements.</li>
              <li><strong>Legal obligation:</strong> when required by law, court order, or a regulatory authority in Kenya.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-text-dark">5. Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary to fulfil the purpose for which it was
              collected. Enquiry data is retained for up to 24 months. If an enrolment proceeds, data is
              retained for the duration of the student&apos;s time at the school and as required by Kenyan
              education records law thereafter.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-text-dark">6. Your Rights</h2>
            <p>Under the Kenya Data Protection Act 2019, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate or incomplete data.</li>
              <li>Request deletion of your data where it is no longer required.</li>
              <li>Object to or restrict processing of your data.</li>
              <li>Withdraw consent at any time where processing is based on consent.</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at{' '}
              <a href="mailto:info@mnara.co.ke" className="text-primary hover:underline font-medium">
                info@mnara.co.ke
              </a>.
              We will respond within 21 days.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-text-dark">7. Security</h2>
            <p>
              We implement appropriate technical and organisational measures to protect your personal data
              against unauthorised access, alteration, disclosure, or destruction. Our website uses HTTPS
              encryption for all data transmitted.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-text-dark">8. Children&apos;s Privacy</h2>
            <p>
              Our website is not directed at children under 18. We collect children&apos;s information only as
              provided by a parent or guardian during the admissions process, and only for that purpose.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-text-dark">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. When we do, we will update the &quot;Last
              updated&quot; date at the top of this page. We encourage you to review this page occasionally.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-text-dark">10. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <address className="not-italic space-y-1 text-text-muted">
              <p><strong className="text-text-dark">Mnara School</strong></p>
              <p>Kileleshwa, off Nyeri Road, Nairobi, Kenya</p>
              <p>
                Email:{' '}
                <a href="mailto:info@mnara.co.ke" className="text-primary hover:underline">
                  info@mnara.co.ke
                </a>
              </p>
              <p>
                Phone:{' '}
                <a href="tel:+254713801024" className="text-primary hover:underline">
                  +254 713 801 024
                </a>
              </p>
            </address>
          </div>

        </div>
      </section>
    </div>
  );
}
