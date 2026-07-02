import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1fr_0.72fr] md:items-center lg:py-20">
        <div>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold text-ink sm:text-5xl lg:text-6xl">
            Ann C. Kigal
          </h1>
          <p className="mt-6 max-w-2xl text-justify text-lg leading-8 text-muted">
           Ann C. Kigal es una escritora, ilustradora y filóloga valenciana, ganadora del Premio Jurado Joven de los  Premios juveniles de literatura breve  ciudad de Mislata, que también trabaja como correctora y editora para otras voces femeninas jóvenes.
          </p>
        </div>

        <div className="relative min-h-80 overflow-hidden rounded-xl border border-line bg-clay md:min-h-[28rem]">
          <Image
            src="/images/fotobase.png"
            alt="Retrato editorial provisional de Ann C. Kigal"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 768px) 420px, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
