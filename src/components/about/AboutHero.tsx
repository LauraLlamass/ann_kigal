import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1fr_0.72fr] md:items-center lg:py-20">
        <div>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold text-ink sm:text-5xl lg:text-6xl">
            Ann C. Kigal
          </h1>
          <div className="mt-6 max-w-2xl space-y-5 text-justify text-lg leading-8 text-muted">
            <p>
              Ann C. Kigal es una <strong>escritora, ilustradora y filóloga
              valenciana</strong>. En su trabajo conviven la creación literaria,
              la construcción de mundos de fantasía y el desarrollo visual de
              sus personajes.
            </p>
            <p>
              Es autora de <strong>Dos legados de furia</strong>, la primera
              entrega de la saga <strong>Los segundos marcados</strong>, y
              actualmente trabaja en la escritura del segundo libro. Su universo
              narrativo se expande también a través de mapas, retratos y otras
              piezas ilustradas.
            </p>
            <p>
              Ganadora del <strong>premio del Jurado Joven</strong> en los Premios
              Juveniles de Literatura Breve de Mislata, también acompaña a otras
              autoras jóvenes como <strong>correctora y editora</strong> de sus
              manuscritos.
            </p>
          </div>
        </div>

        <div className="relative min-h-80 overflow-hidden rounded-xl border border-line bg-clay md:min-h-[28rem]">
          <Image
            src="/images/foto_ann.JPG"
            alt="Retrato editorial de Ann C. Kigal"
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
