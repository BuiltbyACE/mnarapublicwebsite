import type { Metadata } from 'next';
import InnerPageHero from '../components/ui/InnerPageHero';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions governing use of the Mnara School website.',
  robots: { index: true, follow: true },
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-white">
      <InnerPageHero
        title="Terms of Service"
        image="/images/hero-1.jpg"
        breadcrumbs={[{ label: 'Terms of Service' }]}
      />

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="prose prose-lg max-w-none text-text-muted leading-relaxed space-y-10">

          <p className="text-sm text-text-muted">Last updated: June 2026</p>

          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-text-dark">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Mnara School website at{' '}
              <strong>www.mnaraschool.com</strong> (the &quot;Site&quot;), you agree to be bound by these
              Terms of Service. If you do not agree with any part of these terms, please do not use
              our Site.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-text-dark">2. Use of the Site</h2>
            <p>
              This Site is provided for informational purposes about Mnara School — its programmes,
              admissions, events, and community. You agree to use it only for lawful purposes and in a
              manner that does not infringe the rights of others.
            </p>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Attempt to gain unauthorised access to any part of the Site or its servers.</li>
              <li>Transmit any harmful, offensive, or disruptive content.</li>
              <li>Use automated tools to scrape or extract content from the Site.</li>
              <li>Misrepresent your identity or affiliation with Mnara School.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-text-dark">3. Intellectual Property</h2>
            <p>
              All content on this Site — including text, photographs, graphics, logos, and design — is the
              intellectual property of Mnara School or its licensors and is protected under Kenyan and
              international copyright law.
            </p>
            <p>
              You may not reproduce, distribute, modify, or republish any content from this Site without
              prior written permission from Mnara School.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-text-dark">4. Accuracy of Information</h2>
            <p>
              We strive to keep the information on this Site accurate and up to date. However, we make no
              warranties, express or implied, regarding the completeness, accuracy, or suitability of the
              content. Fee structures, curriculum details, and event dates are subject to change without
              notice. Please contact us directly for the most current information.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-text-dark">5. Third-Party Links</h2>
            <p>
              Our Site may contain links to third-party websites for convenience. These links do not
              constitute an endorsement of those sites. Mnara School has no control over the content or
              privacy practices of external sites and accepts no responsibility for them.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-text-dark">6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Mnara School shall not be liable for any indirect,
              incidental, or consequential damages arising from your use of this Site or reliance on its
              content. Our total liability for any direct damages shall not exceed KES 5,000.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-text-dark">7. Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of the
              Republic of Kenya. Any disputes arising shall be subject to the exclusive jurisdiction of
              the courts of Nairobi, Kenya.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-text-dark">8. Changes to These Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Updates will be posted on this page
              with a revised &quot;Last updated&quot; date. Continued use of the Site after changes constitutes
              your acceptance of the revised Terms.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-text-dark">9. Contact</h2>
            <p>For any questions regarding these Terms, please contact us:</p>
            <address className="not-italic space-y-1 text-text-muted">
              <p><strong className="text-text-dark">Mnara School</strong></p>
              <p>Kileleshwa, off Nyeri Road, Nairobi, Kenya</p>
              <p>
                Email:{' '}
                <a href="mailto:info@mnara.co.ke" className="text-primary hover:underline">
                  info@mnara.co.ke
                </a>
              </p>
            </address>
          </div>

        </div>
      </section>
    </div>
  );
}
