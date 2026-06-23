import ButtonLink from "@/components/ui/ButtonLink";

export default function NewsletterCallout() {
  return (
    <section className="bg-clay text-paper">
      <div className="mx-auto grid max-w-5xl gap-8 px-6 py-16 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-paper">
            Newsletter
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold text-paper">
            Recibe novedades y cartas de Ann
          </h2>
          <p className="mt-4 max-w-2xl text-justify text-base leading-8 text-paper">
            Una pequeña puerta a nuevos libros, procesos creativos, lecturas,
            ilustraciones y noticias antes de que lleguen a la web.
          </p>
        </div>

        <ButtonLink className="w-fit" href="/newsletter" variant="light">
          Suscribirme
        </ButtonLink>
      </div>
    </section>
  );
}
