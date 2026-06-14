import ButtonLink from "@/components/ui/ButtonLink";
import Image from "next/image";

export default function BriefAboutAnn() {
  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.82fr_1fr]">
        <div className="relative min-h-80 overflow-hidden rounded-lg border border-line bg-clay">
          <Image
            src="/images/fotobase.png"
            alt="Imagen editorial provisional de Ann C. Kigal"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 492px, 100vw"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent">
            Sobre Ann
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-ink">
            Presentación pendiente
          </h2>
          <p className="mt-5 text-base leading-8 text-muted">
            Bio breve provisional: quién es, qué escribe, qué temas atraviesan
            su obra y por qué el lector debería seguir leyendo.
          </p>
          <ButtonLink className="mt-7 w-fit" href="/about" variant="sage">
            Leer biografía
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
