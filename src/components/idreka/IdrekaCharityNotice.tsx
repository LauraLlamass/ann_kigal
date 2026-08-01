export default function IdrekaCharityNotice() {
  return (
    <aside className="w-full" aria-label="Compromiso solidario">
      <div className="rounded-xl border border-sage bg-parchment px-6 py-7 text-center shadow-sm sm:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
          Una saga con propósito
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
          Todas las ganancias se destinan a Oprea Life
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-ink sm:text-base">
          Con cada compra de un libro de la saga Ídreka colaboras con esta
          asociación y apoyas su labor.
        </p>
        <a
          className="mt-5 inline-flex min-h-11 items-center justify-center rounded-xl bg-copper px-6 text-sm font-semibold text-paper no-underline shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-clay hover:shadow-md active:translate-y-0"
          href="https://www.oprealife.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Conocer Operation Realife
          <span className="ml-2" aria-hidden="true">
            ↗
          </span>
        </a>
      </div>
    </aside>
  );
}
