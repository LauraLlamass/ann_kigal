import ButtonLink from "@/components/ui/ButtonLink";
import Image from "next/image";

export default function IdrekaHero() {
  return (
    <section className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-[1fr_0.42fr] lg:py-20">
      <div>
  
        <h1 className="mt-4 text-5xl font-semibold leading-[1.02] text-ink sm:text-6xl">
          Idreka
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
          Portal de la saga: libros, regiones, personajes, magia y piezas del
          mundo que rodea a Dos legados de furia.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/projects/idreka/dos-legados-de-furia" variant="sage">
            Leer Libro I
          </ButtonLink>
          <ButtonLink href="#mapa">Explorar mapa</ButtonLink>
        </div>
      </div>

      <div className="flex justify-center rounded-xl border border-line bg-clay p-6">
        <div className="relative aspect-[2/3] w-full max-w-56 overflow-hidden rounded-xl border border-line bg-ink shadow-md">
          <Image
            src="/images/DLDF.jpg"
            alt="Portada de Dos legados de furia"
            fill
            priority
            className="object-contain"
            sizes="224px"
          />
        </div>
      </div>
    </section>
  );
}
