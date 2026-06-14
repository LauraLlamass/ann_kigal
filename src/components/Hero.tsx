import ButtonLink from "@/components/ui/ButtonLink";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-paper">
      <div className="mx-auto grid min-h-[78vh] w-full max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-[1fr_0.82fr] lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
            Escritora
          </p>
          <h1 className="mt-5 text-5xl font-semibold leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
            Ann C. Kigal
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
            Espacio provisional para presentar la obra, el tono y el universo
            creativo de Ann cuando estén definidos los textos finales.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/books" variant="sage">
              Descubrir libros
            </ButtonLink>
            <ButtonLink href="/about">Conocer a Ann</ButtonLink>
          </div>
        </div>

        <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-line bg-clay lg:min-h-[520px]">
          <Image
            src="/images/fotobase.png"
            alt="Imagen editorial provisional de Ann C. Kigal"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 448px, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
