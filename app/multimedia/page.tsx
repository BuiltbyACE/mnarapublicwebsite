import type { Metadata } from "next";
import MultimediaContent from "./MultimediaContent";

export const metadata: Metadata = {
  title: "Multimedia Gallery",
  description:
    "Explore Mnara School's photo gallery of campus life, academic achievements, and school events. See what everyday learning looks like at Mnara, Nairobi.",
  keywords: [
    "Mnara School gallery",
    "school photos Nairobi",
    "Mnara School campus life",
    "school events photos Kenya",
  ],
  openGraph: {
    title: "Multimedia Gallery | Mnara School",
    description:
      "Photos and campus moments — experience life at Mnara School Nairobi.",
    images: [{ url: "https://mnara.sc.ke/images/hero-3.jpg", width: 1920, height: 1080, alt: "Mnara School Multimedia Gallery" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Multimedia Gallery | Mnara School",
    description:
      "Photos and campus moments — experience life at Mnara School Nairobi.",
    images: ["https://mnara.sc.ke/images/hero-3.jpg"],
  },
  alternates: {
    canonical: "https://mnara.sc.ke/multimedia/",
  },
};

export default function MultimediaPage() {
  return <MultimediaContent />;
}
