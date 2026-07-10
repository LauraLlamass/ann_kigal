import type { Metadata } from "next";
import AboutCallout from "@/components/about/AboutCallout";
import AboutCreativeFocus from "@/components/about/AboutCreativeFocus";
import AboutHero from "@/components/about/AboutHero";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Conoce a Ann C. Kigal, escritora, ilustradora y filóloga valenciana, autora de Dos legados de furia.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutCreativeFocus />
      <AboutCallout />
    </>
  );
}
