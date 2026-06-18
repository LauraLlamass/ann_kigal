const bookDetails = [
  "Fantasía romántica",
  "Fantástica de acción y aventura",
  "Fantasía épica",
  "Magia antigua",
  "Slow burn",
  "Saga en desarrollo",
];

export default function BookDetails() {
  return (
    <section className="border-t border-line bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-copper">
          Dentro del libro
        </p>
        <h2 className="mt-3 text-4xl font-semibold text-ink sm:text-5xl">
          Tropos, tono y detalles
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {bookDetails.map((detail) => (
            <article
              className="rounded-xl border border-line bg-paper p-6 text-ink"
              key={detail}
            >
              <h3 className="text-2xl font-semibold text-ink">{detail}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
