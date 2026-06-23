import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[0.8fr_1px_1fr] lg:py-20">
        <ContactDetails />
        <div className="hidden bg-line md:block" />
        <ContactForm />
      </div>
    </section>
  );
}
