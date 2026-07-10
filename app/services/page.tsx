import type { Metadata } from "next";
import EditingService from "@/components/services/EditingService";
import IllustrationService from "@/components/services/IllustrationService";
import ServicesCallout from "@/components/services/ServicesCallout";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios personalizados de corrección y edición de manuscritos e ilustración para proyectos narrativos.",
};

export default function ServicesPage() {
  return (
    <>
      <EditingService />
      <IllustrationService />
      <ServicesCallout />
    </>
  );
}
