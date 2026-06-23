import ButtonLink from "@/components/ui/ButtonLink";

export default function IdrekaDoors() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">

      <h2 className="mt-3 text-4xl font-semibold text-ink sm:text-5xl">
        Primeras puertas del mundo
      </h2>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <article className="rounded-xl border border-line bg-paper p-6 text-ink">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
            Libro I
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-ink">
            Dos legados de furia
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted">
            La primera entrada a la saga, con sinopsis, personajes y detalles
            del tono narrativo.
          </p>
          <ButtonLink
            className="mt-6 w-fit px-5"
            href="/projects/idreka/dos-legados-de-furia"
            variant="sage"
          >
            Ver libro
          </ButtonLink>
        </article>

        <article className="rounded-xl border border-line bg-paper p-6 text-ink">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
            Atlas
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-ink">
            Regiones y reinos
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted">
            Bloque preparado para fichas de regiones, reinos, templos o
            territorios cuando el mapa este listo.
          </p>
        </article>
      </div>
    </section>
  );
}
