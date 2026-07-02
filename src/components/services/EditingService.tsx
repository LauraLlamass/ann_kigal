import ButtonLink from "@/components/ui/ButtonLink";

const editingIncludes = [
  "Ortografía, gramática y puntuación",
  "Claridad, estilo y fluidez del texto",
  "Coherencia y continuidad del manuscrito",
  "Observaciones adaptadas a cada proyecto",
];

export default function EditingService() {
  return (
    <section className="border-y border-line bg-paper text-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1fr_0.82fr] lg:gap-16 lg:py-20">
        <div>
  
          <h2 className="mt-3 text-4xl font-semibold text-ink sm:text-5xl">
            Corrección y edición de manuscritos
          </h2>
          <p className="mt-6 text-justify text-base leading-8 text-muted">
            Una mirada atenta para pulir tu texto sin borrar aquello que lo
            hace tuyo. La revisión se adapta a las necesidades del manuscrito y
            puede trabajar los siguientes aspectos:
          </p>
          <ul className="mt-6 grid gap-3 text-sm leading-6 text-ink sm:grid-cols-2">
            {editingIncludes.map((item) => (
              <li className="flex gap-3" key={item}>
                <span aria-hidden="true" className="text-copper">
                  ✦
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
          <ButtonLink className="mt-8" href="/contact" variant="sage">
            Consultar mi manuscrito
          </ButtonLink>
        </div>

        <aside className="rounded-xl bg-clay p-7 text-paper shadow-md sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-paper">
            Tarifa orientativa
          </p>
          <div className="mt-7 border-b border-paper/30 pb-6">
            <p className="font-serif text-5xl font-semibold text-paper">30 €</p>
            <p className="mt-2 text-sm leading-6 text-paper">
              por cada 100 páginas en formato A4
            </p>
          </div>
          <div className="py-6">
            <p className="font-serif text-5xl font-semibold text-paper">15 €</p>
            <p className="mt-2 text-sm leading-6 text-paper">
              por cada 100 páginas en formato A5, si el texto ya está adaptado
              a las dimensiones del libro
            </p>
          </div>
          <p className="rounded-lg bg-paper/10 p-4 text-xs leading-6 text-paper">
            El precio definitivo se confirma después de revisar una muestra y
            puede variar según la extensión, el estado del texto y el tipo de
            intervención que necesite.
          </p>
        </aside>
      </div>
    </section>
  );
}
