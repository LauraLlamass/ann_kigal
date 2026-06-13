const featureLinks = [
  {
    title: "Libro destacado",
    text: "Texto pendiente sobre la obra principal o el proximo lanzamiento.",
    href: "/books",
  },
  {
    title: "Lecturas y ensayos",
    text: "Texto pendiente sobre articulos, notas o piezas breves.",
    href: "/newsletter",
  },
  {
    title: "Eventos",
    text: "Texto pendiente sobre presentaciones, firmas o encuentros.",
    href: "/contact",
  },
];

export default function HomeFeatureLinks() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-5 md:grid-cols-3">
          {featureLinks.map((item) => (
            <article
              className="border border-line bg-parchment p-6"
              key={item.title}
            >
              <h3 className="text-lg font-semibold text-text">{item.title}</h3>
              <p className="mt-4 min-h-24 text-sm leading-7 text-muted">
                {item.text}
              </p>
              <a
                className="mt-6 inline-flex text-sm font-semibold text-accent transition hover:text-accent-strong"
                href={item.href}
              >
                Ver mas
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
