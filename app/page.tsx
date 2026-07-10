import type { Metadata } from "next";
import BriefAboutAnn from "@/components/BriefAboutAnn";
import Hero from "@/components/Hero";
import HomeFeatureLinks from "@/components/HomeFeatureLinks";
import NewsletterCallout from "@/components/NewsletterCallout";
import SocialProof from "@/components/SocialProof";

export const metadata: Metadata = {
  title: {
    absolute: "Ann C. Kigal | Escritora e ilustradora",
  },
  description:
    "Descubre la obra, los proyectos literarios y los servicios de corrección, edición e ilustración de Ann C. Kigal.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <HomeFeatureLinks />
      <SocialProof />
      <BriefAboutAnn />
      <NewsletterCallout />
    </>
  );
}
