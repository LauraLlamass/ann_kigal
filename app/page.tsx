import BriefAboutAnn from "@/components/BriefAboutAnn";
import Hero from "@/components/Hero";
import HomeFeatureLinks from "@/components/HomeFeatureLinks";
import NewsletterCallout from "@/components/NewsletterCallout";
import SocialProof from "@/components/SocialProof";

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
