import type { Metadata } from "next";
import MultimediaContent from "./MultimediaContent";

export const metadata: Metadata = {
  title: "Multimedia Gallery",
  description:
    "Explore Mnara School's photo gallery, campus life, academic achievements, and special events. Experience life at Mnara in Nairobi.",
  openGraph: {
    title: "Multimedia Gallery | Mnara School",
    description:
      "Photos and campus moments — experience life at Mnara School Nairobi.",
    images: [{ url: "/images/hero-3.jpg", width: 1920, height: 1080 }],
  },
  alternates: {
    canonical: "https://www.mnaraschool.com/multimedia",
  },
};

export default function MultimediaPage() {
  return <MultimediaContent />;
}
