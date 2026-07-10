import type { Metadata } from "next";
import ContactDetails from "@/components/contact/ContactDetails";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta con Ann C. Kigal para consultas, colaboraciones, corrección de manuscritos o encargos de ilustración.",
};

export default function ContactPage() {
  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <ContactDetails />
      </div>
    </section>
  );
}
