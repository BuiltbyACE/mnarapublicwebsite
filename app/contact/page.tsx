import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Mnara School in Kileleshwa, Nairobi. Call +254 713 801 024 or email info@mnara.sc.ke to book a school tour or ask about admissions.",
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
      "Get in touch with Mnara School. Visit our Kileleshwa campus or send us a message.",
    images: [{ url: "https://mnara.sc.ke/images/hero-3.jpg", width: 1920, height: 1080, alt: "Contact Mnara School" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Mnara School",
    description:
      "Get in touch with Mnara School. Visit our Kileleshwa campus or send us a message.",
    images: ["https://mnara.sc.ke/images/hero-3.jpg"],
  },
  alternates: {
    canonical: "https://mnara.sc.ke/contact/",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
