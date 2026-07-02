import ButtonLink from "@/components/ui/ButtonLink";
import Image from "next/image";

const projects = [
  {
    title: "Los segundos marcados",
    eyebrow: "Saga de fantasía",
    text: "Universo narrativo de fantasía romántica donde vive Dos legados de furia, el primer libro de la saga.",
    href: "/projects/idreka",
    image: "/images/DLDF.jpg",
  },
];

export default function ProjectsList() {
  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:py-20">
        <div className="max-w-3xl">
          
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-paper text-ink"
              key={project.href}
            >
              <div className="flex justify-center border-b border-line bg-clay p-5">
                <div className="relative aspect-[2/3] w-full max-w-44 overflow-hidden rounded-xl border border-line bg-ink shadow-md">
                  <Image
                    src={project.image}
                    alt={`Portada de ${project.title}`}
                    fill
                    className="object-contain"
                    sizes="176px"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
                  {project.eyebrow}
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-ink">
                  {project.title}
                </h2>
                <p className="mt-3 text-justify text-sm leading-7 text-muted">
                  {project.text}
                </p>
                <ButtonLink
                  className="mt-6 w-fit px-5"
                  href={project.href}
                  variant="sage"
                >
                  Entrar a Ídreka
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
