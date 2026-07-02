export default function BookSynopsis() {
  return (
    <section className="border-y border-line bg-clay text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[0.42fr_1fr] lg:py-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-parchment">
            Sinopsis
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-paper sm:text-5xl">
            Dos legados de furia
          </h2>
        </div>

        <div className="space-y-6 border-l border-paper/30 pl-6">
          <p className="text-justify text-lg leading-9 text-paper">
            Habían pasado años desde el día en que Ídreka se convirtió en una
            tierra corriente, cuando los primeros marcados fueron desterrados y
            el continente se dividió en cuatro reinos. Tras aquello, la calma
            habría regresado a sus hogares si el destierro no hubiera estado
            acompañado por una promesa de venganza.
          </p>

          <p className="text-justify text-lg leading-9 text-paper">
            El miedo a que regresaran estaba cerca de extinguirse cuando,
            doscientos treinta y tres años tras la División, la magia renació.
          </p>

          <p className="text-justify text-lg leading-9 text-paper">
            La noche en que las estrellas se dibujaron en el cielo teñidas de
            rojo, las madres dieron a luz a criaturas prodigiosas y los Templos
            vibraron con las voces de los doce Dioses anunciando que aquella era
            la salvación que se le brindaba a la humanidad para cuando la guerra
            llegase.
          </p>

          <p className="text-justify text-lg leading-9 text-paper">
            Pero no todos los enemigos de Ídreka cruzan el mar: otras amenazas
            crecen en ella desde que se dividió. Los segundos marcados tendrán
            que enfrentarlas sin dejar una pregunta por resolver ni un secreto
            por descubrir.
          </p>
        </div>
      </div>
    </section>
  );
}
