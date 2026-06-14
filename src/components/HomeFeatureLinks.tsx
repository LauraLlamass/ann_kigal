import ButtonLink from "@/components/ui/ButtonLink";

const featureLinks = [
  {
    title: "Último libro publicado",
    text: "Espacio reservado para destacar la obra más reciente, su atmósfera y el tipo de lector al que invita.",
    action: "Ver libro",
    href: "/books",
    featured: true,
  },
  
  {
    title: "Servicios de corrección y edición",
    text: "Acompañamiento para manuscritos que necesitan pulir estilo, estructura y coherencia narrativa.",
    action: "Leer servicios",
    href: "/services",
  },
  {
    title: "Ilustración",
    text: "Encargos visuales, personajes y piezas gráficas para proyectos narrativos.",
    action: "Encargar ilustración",
    href: "/contact",
  },
];

export default function HomeFeatureLinks() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-5 md:grid-cols-2">
          {featureLinks.map((item) => (
            <article
              className={
                item.featured
                  ? "min-h-72 rounded-lg border border-line bg-clay p-8 text-paper md:col-span-2"
                  : "min-h-64 rounded-lg border border-line bg-paper p-7 text-ink"
              }
              key={item.title}
            >
              <p
                className={
                  item.featured
                    ? "text-sm font-medium uppercase tracking-[0.2em] text-sage"
                    : "text-sm font-medium uppercase tracking-[0.2em] text-accent"
                }
              >
                {item.featured ? "Obra destacada" : "Explorar"}
              </p>
              <h3
                className={
                  item.featured
                    ? "mt-4 text-3xl font-semibold text-paper"
                    : "mt-4 text-xl font-semibold text-ink"
                }
              >
                {item.title}
              </h3>
              <p
                className={
                  item.featured
                    ? "mt-4 max-w-2xl text-base leading-8 text-paper"
                    : "mt-4 min-h-24 text-sm leading-7 text-muted"
                }
              >
                {item.text}
              </p>
              <ButtonLink
                className="mt-6 px-5"
                href={item.href}
                variant={item.featured ? "light" : "sage"}
              >
                {item.action}
              </ButtonLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
