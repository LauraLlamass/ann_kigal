import ButtonLink from "@/components/ui/ButtonLink";

export default function NewsletterCallout() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-lg border border-line bg-paper p-8 md:grid md:grid-cols-[1fr_auto] md:items-end md:gap-10">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent">
              Newsletter
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-ink">
              Recibe novedades y cartas de Ann
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
              Una pequeña puerta a nuevos libros, procesos creativos, lecturas,
              ilustraciones y noticias antes de que lleguen a la web.
            </p>
          </div>

          <ButtonLink
            className="mt-7 w-fit md:mt-0"
            href="/newsletter"
            variant="sage"
          >
            Suscribirme
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
