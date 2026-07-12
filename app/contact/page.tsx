import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Mnara School. Visit us in Kileleshwa, Nairobi. Call +254 713 801 024 or email info@mnara.co.ke.",
  openGraph: {
    title: "Contact Us | Mnara School",
    description:
      "Get in touch with Mnara School. Visit our Nairobi campuses or send us a message.",
    images: [{ url: "/images/hero-3.jpg", width: 1920, height: 1080 }],
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
