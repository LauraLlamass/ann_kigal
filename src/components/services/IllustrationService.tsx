import ButtonLink from "@/components/ui/ButtonLink";
import Image from "next/image";

const illustrationIncludes = [
  "Diseño y retrato de personajes",
  "Ilustración de escenas",
  "Piezas para proyectos narrativos",
  "Encargos personalizados",
];

const illustrationSamples = [
  {
    src: "/images/peliroja.JPG",
    alt: "Ilustración de una mujer pelirroja con vestido blanco",
    position: "object-top",
  },
  {
    src: "/images/piano.JPG",
    alt: "Ilustración de dos mujeres junto a un piano",
    position: "object-center",
  },
  {
    src: "/images/niña.JPG",
    alt: "Diseño ilustrado de una joven con rasgos de zorro",
    position: "object-top",
  },
  {
    src: "/images/rhoen.jpeg",
    alt: "Retrato ilustrado de un personaje frente a un jardín",
    position: "object-center",
  },
  {
    src: "/images/rubia.jpg",
    alt: "Ilustración de una joven rubia haciéndose una fotografía",
    position: "object-top",
  },
  {
    src: "/images/pareja.JPG",
    alt: "Ilustración de dos mujeres abrazadas",
    position: "object-center",
  },
  {
    src: "/images/estupido-raiyel.PNG",
    alt: "Diseño ilustrado de un personaje de cabello oscuro",
    position: "object-contain",
  },
];

export default function IllustrationService() {
  return (
    <section className="bg-clay text-paper">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1fr] lg:gap-16">
          <div>

            <h2 className="mt-3 text-4xl font-semibold text-paper sm:text-5xl">
              Ilustración
            </h2>
            <p className="mt-6 text-justify text-base leading-8 text-paper">
              Personajes, escenas y piezas visuales creadas para dar forma a
              mundos narrativos y acompañar la identidad de cada proyecto.
            </p>
          </div>

          <div>
            <ul className="grid gap-3 text-sm leading-6 text-paper sm:grid-cols-2">
              {illustrationIncludes.map((item) => (
                <li className="flex gap-3" key={item}>
                  <span aria-hidden="true" className="text-parchment">
                    ✦
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-7 text-sm leading-7 text-paper">
              Cada ilustración se presupuesta de forma personalizada según su
              complejidad, acabado y uso final.
            </p>
            <ButtonLink className="mt-8" href="/contact" variant="light">
              Solicitar una ilustración
            </ButtonLink>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {illustrationSamples.map((sample) => (
            <figure
              className="relative aspect-[4/5] overflow-hidden rounded-xl border border-paper/30 bg-paper"
              key={sample.src}
            >
              <Image
                src={sample.src}
                alt={sample.alt}
                fill
                className={
                  sample.position === "object-contain"
                    ? "object-contain"
                    : `object-cover ${sample.position}`
                }
                sizes="(min-width: 1024px) 270px, (min-width: 640px) 33vw, 50vw"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
