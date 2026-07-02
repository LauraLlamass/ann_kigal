import ButtonLink from "@/components/ui/ButtonLink";

export default function ServicesCallout() {
  return (
    <section className="bg-sage text-paper">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 py-16 text-center lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-paper">
          Cada proyecto necesita una mirada distinta
        </p>
        <h2 className="mt-4 text-4xl font-semibold text-paper sm:text-5xl">
          ¿Tienes un manuscrito o una idea que quieras convertir en imagen?
        </h2>
        <ButtonLink className="mt-8" href="/contact" variant="light">
          Hablemos de tu proyecto
        </ButtonLink>
      </div>
    </section>
  );
}
