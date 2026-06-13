import BriefAboutAnn from "@/components/BriefAboutAnn";
import ExtrasSection from "@/components/ExtrasSection";
import Hero from "@/components/Hero";
import HomeFeatureLinks from "@/components/HomeFeatureLinks";
import IntroSection from "@/components/IntroSection";
import SocialProof from "@/components/SocialProof";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <BriefAboutAnn />
      <HomeFeatureLinks />
      <SocialProof />
      <ExtrasSection />
    </>
  );
}
