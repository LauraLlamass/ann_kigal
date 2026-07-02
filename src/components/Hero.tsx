import ButtonLink from "@/components/ui/ButtonLink";
import Image from "next/image";

const categories = [
  "Libros",
  "Newsletter",
  "Corrección y edición",
  "Ilustración",
];

export default function Hero() {
  return (
    <section className="bg-paper">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-10 lg:min-h-[690px] lg:grid-cols-[1fr_0.78fr] lg:gap-14 lg:py-12">
        <div className="max-w-2xl">

          <h1 className="mt-4 text-5xl font-semibold leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
            Ann C. Kigal
          </h1>
          <p className="mt-5 max-w-lg text-justify text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Te doy la bienvenida a mi espacio. Soy Ann C. Kigal, escritora,
            filóloga e ilustradora valenciana. Descubre aquí mi obra, mis
            proyectos y mi universo literario.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink href="/projects/idreka" variant="sage">
              Entrar a Ídreka
            </ButtonLink>
          </div>

          <div className="mt-7 flex max-w-xl flex-wrap gap-2 border-y border-line py-3">
            {categories.map((category) => (
              <span
                className="rounded-full bg-parchment px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted"
                key={category}
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden rounded-xl border border-line bg-clay lg:min-h-[580px]">
          <Image
            src="/images/fotobase.png"
            alt="Imagen editorial provisional de Ann C. Kigal"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 430px, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
