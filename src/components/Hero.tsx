export default function Hero() {
  return (
    <section className="bg-paper">
      <div className="mx-auto grid min-h-[78vh] w-full max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-[1fr_0.82fr] lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
            Escritora
          </p>
          <h1 className="mt-5 text-5xl font-semibold leading-[1.02] text-text sm:text-6xl lg:text-7xl">
            Ann C. Kigal
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
            Frase breve pendiente para presentar la voz, el genero y el mundo
            literario de Ann C. Kigal.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="inline-flex min-h-11 items-center justify-center border border-accent bg-accent px-5 text-sm font-semibold text-paper transition hover:bg-accent-strong"
              href="/books"
            >
              Ver libros
            </a>
            <a
              className="inline-flex min-h-11 items-center justify-center border border-line px-5 text-sm font-semibold text-text transition hover:border-accent hover:text-accent"
              href="/about"
            >
              Sobre la autora
            </a>
          </div>
        </div>

        <div className="relative min-h-[360px] overflow-hidden border border-line bg-parchment lg:min-h-[520px]">
          <div className="absolute left-10 top-10 max-w-48 text-sm leading-6 text-muted">
            Imagen de ann
          </div>
        </div>
      </div>
    </section>
  );
}
