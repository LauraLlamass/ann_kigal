export default function IdrekaMap() {
  return (
    <section className="border-y border-line bg-clay text-paper" id="mapa">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[0.42fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-paper">
            Mapa de Idreka
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-paper sm:text-5xl">
            Regiones por descubrir
          </h2>
          <p className="mt-5 text-base leading-8 text-paper">
            Aqui encajara el mapa interactivo. La idea: al pinchar una region,
            se abre un panel con su historia, clima, reino, conflictos y
            conexiones con la saga.
          </p>
        </div>

        <div className="rounded-xl border border-line bg-paper p-6 text-ink">
          <div className="grid min-h-80 place-items-center rounded-xl border border-line bg-parchment p-6 text-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                Espacio reservado
              </p>
              <p className="mt-3 text-2xl font-semibold text-ink">
                Mapa interactivo de Idreka
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
