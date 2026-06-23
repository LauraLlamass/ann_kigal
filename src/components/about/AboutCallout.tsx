import ButtonLink from "@/components/ui/ButtonLink";
import Image from "next/image";


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
              Espacio reservado para destacar la obra más reciente, su
              atmósfera y el tipo de lector al que invita.
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
            <div className="relative aspect-[2/3] w-full max-w-52 overflow-hidden rounded-xl bg-ink shadow-md">
              <Image
                src="/images/DLDF.jpg"
                alt="Imagen provisional para el libro destacado"
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 256px, 70vw"
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
