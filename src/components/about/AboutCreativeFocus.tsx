const focusItems = [
  {
    title: "Escritura",
    text: "Historias de fantasia y emocion, con personajes marcados por decisiones, legados y mundos que se expanden poco a poco.",
  },
  {
    title: "Edicion",
    text: "Cuidado por la estructura, el ritmo y la coherencia interna de cada proyecto, desde la primera idea hasta una version mas pulida.",
  },
  {
    title: "Ilustracion",
    text: "Imagenes, referencias visuales y detalles graficos que acompanan el tono de los libros y ayudan a dar forma al universo.",
  },
];

export default function AboutCreativeFocus() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl  py-10">
        
        <div className="mt-5 grid gap-6 md:grid-cols-3">
          {focusItems.map((item) => (
            <article
              className="rounded-lg border border-line bg-paper p-6 shadow-sm"
              key={item.title}
            >
              <h3 className="text-2xl font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-ink">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
