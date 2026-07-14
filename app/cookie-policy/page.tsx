import type { Metadata } from 'next';
import InnerPageHero from '../components/ui/InnerPageHero';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'How Mnara School uses cookies on its website and how you can manage your preferences.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.mnaraschool.com/cookie-policy",
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="bg-white">
      <InnerPageHero
        title="Cookie Policy"
        image="/images/hero-3.jpg"
        breadcrumbs={[{ label: 'Cookie Policy' }]}
      />

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="prose prose-lg max-w-none text-text-muted leading-relaxed space-y-10">

          <p className="text-sm text-text-muted">Last updated: June 2026</p>

          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-text-dark">What Are Cookies?</h2>
            <p>
              Cookies are small text files placed on your device when you visit a website. They allow the
              site to remember your preferences and understand how you interact with its pages.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-text-dark">Cookies We Use</h2>
            <p>The Mnara School website uses a minimal set of cookies:</p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-gray-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-off-white">
                    <th className="text-left p-4 font-heading font-bold text-text-dark border-b border-gray-200">Category</th>
                    <th className="text-left p-4 font-heading font-bold text-text-dark border-b border-gray-200">Purpose</th>
                    <th className="text-left p-4 font-heading font-bold text-text-dark border-b border-gray-200">Required?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-medium text-text-dark">Essential</td>
                    <td className="p-4">Basic site functionality, security, and navigation.</td>
                    <td className="p-4 text-green-700 font-medium">Yes</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-medium text-text-dark">Fonts</td>
                    <td className="p-4">
                      Our fonts (Montserrat, Open Sans) are <strong>self-hosted</strong> — no external
                      font requests are made to Google or any third party.
                    </td>
                    <td className="p-4 text-green-700 font-medium">Yes</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-text-dark">Analytics</td>
                    <td className="p-4">We do not currently use analytics cookies or third-party tracking tools.</td>
                    <td className="p-4 text-text-muted">No</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              We do <strong>not</strong> use advertising, profiling, or third-party tracking cookies.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-text-dark">Managing Cookies</h2>
            <p>
              You can control and delete cookies through your browser settings. Note that disabling
              essential cookies may affect the functionality of the Site.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data
              </li>
              <li>
                <strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data
              </li>
              <li>
                <strong>Safari:</strong> Preferences → Privacy → Manage Website Data
              </li>
              <li>
                <strong>Edge:</strong> Settings → Cookies and site permissions
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-text-dark">Changes to This Policy</h2>
            <p>
              We may update this Cookie Policy to reflect changes in our practices or for operational,
              legal, or regulatory reasons. The &quot;Last updated&quot; date will be revised accordingly.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-text-dark">Contact</h2>
            <p>For questions about cookies or this Policy:</p>
            <address className="not-italic space-y-1 text-text-muted">
              <p><strong className="text-text-dark">Mnara School</strong></p>
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
