import ButtonLink from "@/components/ui/ButtonLink";
import Image from "next/image";

const secondaryLinks = [
  {
    title: "Servicios de corrección y edición",
    text: "Acompañamiento para manuscritos que necesitan pulir estilo, estructura y coherencia narrativa.",
    action: "Leer servicios",
    href: "/services",
  },
  {
    title: "Ilustración",
    text: "Encargos visuales, personajes y piezas gráficas para proyectos narrativos.",
    action: "Encargar ilustración",
    href: "/contact",
  },
];

export default function HomeFeatureLinks() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl  px-6 py-20">
        <article className="grid overflow-hidden rounded-xl  bg-clay text-paper lg:grid-cols-[1fr_0.48fr]">
          <div className="p-8 sm:p-10">

            <h2 className="mt-4 max-w-2xl text-3xl font-semibold text-paper sm:text-4xl">
              Último libro publicado
            </h2>
            <p className="mt-5 max-w-2xl text-justify text-base leading-8 text-paper">
              Dos legados de furia abre las puertas de Ídreka, una tierra
              dividida donde la magia ha renacido y la guerra amenaza con
              revelar antiguos secretos.
            </p>
            <ButtonLink
              className="mt-7"
              href="/projects/idreka/dos-legados-de-furia"
              variant="light"
            >
              Ver libro
            </ButtonLink>
          </div>

          <div className="flex items-center justify-center  p-4 ">
            <div className="relative aspect-[2/3] w-full max-w-52 overflow-hidden rounded-xl  bg-ink shadow-md">
              <Image
                src="/images/DLDF.jpg"
                alt="Portada de Dos legados de furia, de Ann C. Kigal"
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 256px, 70vw"
              />
            </div>
          </div>
        </article>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {secondaryLinks.map((item) => (
            <article
              className="flex h-full flex-col rounded-xl border border-line bg-paper p-6 text-ink"
              key={item.title}
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  
                  <h3 className="mt-3 text-2xl font-semibold text-ink">
                    {item.title}
                  </h3>
                </div>
              </div>
              <p className="mb-6 mt-4 text-justify text-sm leading-7 text-muted">{item.text}</p>
              <ButtonLink className="mt-auto w-fit px-5" href={item.href} variant="sage">
                {item.action}
              </ButtonLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
