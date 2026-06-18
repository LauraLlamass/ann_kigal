const services = ["Strategy", "Design", "Development"];

export default function ServicesPage() {
  return (
    <section className="mx-auto min-h-[70vh] w-full max-w-5xl px-6 py-20">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
        Services
      </p>
      <h1 className="mt-4 text-4xl font-semibold text-ink sm:text-5xl">
        Services
      </h1>
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {services.map((service) => (
          <article
            className="rounded-xl border border-line bg-paper p-6"
            key={service}
          >
            <h2 className="text-xl font-medium text-ink">{service}</h2>
            <p className="mt-3 text-muted">
              Focused support to move your project from idea to polished
              experience.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
