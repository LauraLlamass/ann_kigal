import Image from "next/image";

export default function IdrekaMap() {
  return (
    <section className="border-y border-line bg-clay text-paper" id="mapa">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[0.42fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-paper">
            Mapa de Ídreka
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-paper sm:text-5xl">
            Regiones por descubrir
          </h2>
          <p className="mt-5 text-justify text-base leading-8 text-paper">
            Recorre los reinos, templos, puertos y fronteras que dan forma al
            mundo de Ídreka y a los conflictos de la saga.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-line bg-paper p-3 shadow-md">
          <Image
            src="/images/mapa_idreka.jpg"
            alt="Mapa de Ídreka con sus reinos, regiones, templos, castillos, puertos y puestos de guardia"
            width={1920}
            height={1080}
            className="h-auto w-full rounded-lg"
            sizes="(min-width: 1024px) 680px, calc(100vw - 48px)"
          />
        </div>
      </div>
    </section>
  );
}
