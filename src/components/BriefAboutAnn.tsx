export default function BriefAboutAnn() {
  return (
    <section className="bg-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[0.82fr_1fr]">
        <div className="min-h-80 border border-line bg-parchment" />
        <div className="flex flex-col justify-center">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent">
            Sobre Ann
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-text">
            Presentacion pendiente
          </h2>
          <p className="mt-5 text-base leading-8 text-muted">
            Aqui ira una bio breve: quien es, que escribe, que temas atraviesan
            su obra y por que el lector deberia seguir leyendo.
          </p>
          <a
            className="mt-7 inline-flex min-h-11 w-fit items-center border border-accent px-5 text-sm font-semibold text-accent transition hover:bg-accent hover:text-paper"
            href="/about"
          >
            Leer biografia
          </a>
        </div>
      </div>
    </section>
  );
}
