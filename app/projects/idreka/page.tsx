import type { Metadata } from "next";
import IdrekaDoors from "@/components/idreka/IdrekaDoors";
import IdrekaHero from "@/components/idreka/IdrekaHero";
import IdrekaMap from "@/components/idreka/IdrekaMap";

export const metadata: Metadata = {
  title: "Ídreka",
  description:
    "Adéntrate en Ídreka, el mundo de fantasía de la saga Los segundos marcados: libros, regiones, personajes y magia.",
};

export default function IdrekaPage() {
  return (
    <div className="bg-paper text-ink">
      <IdrekaHero />
      <IdrekaMap />
      <IdrekaDoors />
    </div>
  );
}
