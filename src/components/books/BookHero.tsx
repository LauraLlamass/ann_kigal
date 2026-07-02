import ButtonLink from "@/components/ui/ButtonLink";
import Image from "next/image";

export default function BookHero() {
  return (
    <section className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-16 lg:min-h-[680px] lg:grid-cols-[0.78fr_1fr] lg:py-20">
      <div className="relative mx-auto aspect-[2/3] w-full max-w-sm overflow-hidden rounded-xl border border-line bg-clay shadow-md lg:mx-0">
        <Image
          src="/images/DLDF.jpg"
          alt="Portada provisional del libro"
          fill
          priority
          className="object-contain p-3"
          sizes="(min-width: 1024px) 384px, 100vw"
        />

      </div>

      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-copper">
          Los segundos marcados · Libro I
        </p>
        <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-[0.98] text-ink sm:text-4xl lg:text-5xl">
          La magia ha renacido en una tierra dividida, y los segundos marcados deberán descubrir quién es el verdadero enemigo.        </h1>
        <blockquote className="mt-7 max-w-2xl border-l border-line pl-5 text-2xl font-medium italic leading-9 text-muted">
          "¿Qué puede hacerle la guerra a un lugar que nunca ha conocido la paz?"
        </blockquote>

        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/contact" variant="sage">
            Preguntar por el libro
          </ButtonLink>
          <ButtonLink href="/newsletter">Seguir novedades</ButtonLink>
        </div>
      </div>
    </section>
  );
}
