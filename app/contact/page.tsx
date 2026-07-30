import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Mnara School. Visit us in Kileleshwa, Nairobi. Call +254 713 801 024 or email info@mnara.sc.ke. Book a school tour today.",
  keywords: [
    "contact Mnara School",
    "Mnara School Nairobi phone",
    "school tour Nairobi",
    "Mnara School email",
    "Kileleshwa school Kenya",
  ],
  openGraph: {
    title: "Contact Us | Mnara School",
    description:
      "Get in touch with Mnara School. Visit our Nairobi campuses or send us a message.",
    images: [{ url: "https://www.mnaraschool.com/images/hero-3.webp", width: 1920, height: 1080, alt: "Contact Mnara School" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Mnara School",
    description:
      "Get in touch with Mnara School. Visit our Nairobi campuses or send us a message.",
    images: ["https://www.mnaraschool.com/images/hero-3.webp"],
  },
  alternates: {
    canonical: "https://www.mnaraschool.com/contact/",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
