import type { Metadata } from "next";
import Image from "next/image";
import StandardPage from "../templates/StandardPage";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Mnara School — a values-driven learning community in Nairobi. Explore career opportunities and become part of our team shaping the future.",
  keywords: [
    "Mnara School careers",
    "teaching jobs Nairobi",
    "school vacancies Kenya",
    "work at Mnara School",
  ],
  openGraph: {
    title: "Careers | Mnara School Nairobi",
    description:
      "Join Mnara School and become part of a values-driven learning community nurturing young minds in Nairobi.",
    images: [{ url: "https://mnara.sc.ke/images/hero-1.jpg", width: 1920, height: 1080, alt: "Careers at Mnara School" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | Mnara School Nairobi",
    description:
      "Join Mnara School and become part of a values-driven learning community.",
    images: ["https://mnara.sc.ke/images/hero-1.jpg"],
  },
  alternates: {
    canonical: "https://mnara.sc.ke/careers/",
  },
};

export default function CareersPage() {
  return (
    <StandardPage
      title="Careers"
      image="/images/hero-2.jpg"
      breadcrumbs={[{ label: "Careers" }]}
    >
      {/* Introduction */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-dark mb-6">
          Join the Mnara{" "}
          <span className="text-primary">Community</span>
        </h2>
        <p className="text-text-muted text-lg leading-relaxed mb-4">
          At Mnara School, we are committed to nurturing faith, inspiring
          excellence, and shaping the future. We are always looking for
          passionate educators and professionals who share our vision.
        </p>
        <p className="text-text-muted text-base leading-relaxed">
          If you are dedicated to holistic education and want to make a
          meaningful impact, we encourage you to review our current openings
          below.
        </p>
      </div>

      {/* Recruitment Poster */}
      <div className="max-w-lg mx-auto">
        <a
          href="/images/mnaraschoolcarrer.png"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View full-size recruitment poster"
          className="block group"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 group-hover:shadow-2xl transition-shadow duration-300">
            <Image
              src="/images/mnaraschoolcarrer.png"
              alt="Mnara School recruitment poster — current job openings and vacancies"
              width={1200}
              height={1700}
              className="w-full h-auto"
              priority
            />
          </div>
        </a>
        <p className="text-center text-sm text-text-muted mt-4">
          Click the poster to view full size
        </p>
      </div>
    </StandardPage>
  );
}
