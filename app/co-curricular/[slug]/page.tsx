import type { Metadata } from "next";
import { activities } from "../../lib/data";
import ActivityDetailContent from "./ActivityDetailContent";

export function generateStaticParams() {
  return activities.map((activity) => ({
    slug: activity.href.split("/").pop(),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const activity = activities.find(a => a.href.endsWith(`/${slug}`));

  if (!activity) {
    return { title: "Activity Not Found" };
  }

  return {
    title: `${activity.title} — Co-Curricular`,
    description: (activity.longDescription || activity.description).slice(0, 160),
    openGraph: {
      title: `${activity.title} | Mnara School Co-Curricular`,
      description: (activity.longDescription || activity.description).slice(0, 160),
      images: [{ url: activity.image || "/images/hero-1.jpg", width: 1920, height: 1080 }],
    },
  };
}

export default function ActivityDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  return <ActivityDetailContent params={params} />;
}
