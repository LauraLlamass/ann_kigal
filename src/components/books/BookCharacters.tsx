import Image from "next/image";

const characters = [
  {
    name: "Personaje principal",
    role: "Voz narrativa",
    note: "Ilustracion reservada para mostrar presencia, gesto y atmosfera.",
  },
  {
    name: "Interes romantico",
    role: "Tension y conflicto",
    note: "Espacio para una ficha breve con detalles visuales del personaje.",
  },
  {
    name: "Aliado clave",
    role: "Lealtad incomoda",
    note: "Una pincelada del vinculo que sostiene parte de la trama.",
  },
];

export default function BookCharacters() {
  return (
    <section className="bg-clay text-paper">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sage">
              Personajes
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-paper sm:text-5xl">
              Rostros que habitan la historia
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-paper">
            Este tramo queda preparado para ilustraciones, fichas visuales o
            pequenos detalles de cada personaje importante.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {characters.map((character, index) => (
            <article
              className="overflow-hidden rounded-xl border border-line bg-paper text-ink"
              key={character.name}
            >
              <div className="relative min-h-72 bg-ink">
                <Image
                  src="/images/fotobase.png"
                  alt={`Ilustracion provisional de ${character.name}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                  style={{ objectPosition: `${45 + index * 12}% center` }}
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  {character.role}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-ink">
                  {character.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {character.note}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
