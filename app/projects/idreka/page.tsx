import IdrekaDoors from "@/components/idreka/IdrekaDoors";
import IdrekaHero from "@/components/idreka/IdrekaHero";
import IdrekaMap from "@/components/idreka/IdrekaMap";

export default function IdrekaPage() {
  return (
    <div className="bg-paper text-ink">
      <IdrekaHero />
      <IdrekaMap />
      <IdrekaDoors />
    </div>
  );
}
