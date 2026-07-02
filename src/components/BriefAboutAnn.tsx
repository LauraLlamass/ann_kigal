import ButtonLink from "@/components/ui/ButtonLink";
import Image from "next/image";

export default function BriefAboutAnn() {
  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto grid max-w-5xl gap-8 px-6 py-16 lg:grid-cols-[0.42fr_1fr] lg:items-center">
        <div className="relative min-h-72 overflow-hidden rounded-xl border border-line bg-clay">
          <Image
            src="/images/fotobase.png"
            alt="Imagen editorial provisional de Ann C. Kigal"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 420px, 100vw"
          />
        </div>
        <div className="flex flex-col justify-center border-l border-line pl-6 lg:self-stretch">
         
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-muted">
            Autora · Correctora · Editora · Ilustradora
          </p>
          <p className="mt-5 max-w-2xl text-justify text-base leading-8 text-muted">
           Ann C. Kigal es una escritora, ilustradora y filóloga valenciana
          </p>
          <ButtonLink className="mt-7 w-fit" href="/about" variant="sage">
            Leer biografía
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
