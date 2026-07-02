import EditingService from "@/components/services/EditingService";
import IllustrationService from "@/components/services/IllustrationService";
import ServicesCallout from "@/components/services/ServicesCallout";

export default function ServicesPage() {
  return (
    <>
      <EditingService />
      <IllustrationService />
      <ServicesCallout />
    </>
  );
}
