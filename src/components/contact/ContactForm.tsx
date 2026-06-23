const inputClassName =
  "min-h-11 w-full rounded-xl border border-line bg-paper px-4 text-sm text-ink outline-none transition placeholder:text-ink/55 focus:border-copper";

const contactEmail = "annckigal@gmail.com";

export default function ContactForm() {
  return (
    <form
      action={`mailto:${contactEmail}?subject=Contacto desde la web`}
      className="grid content-start gap-4"
      encType="text/plain"
      method="post"
    >
      <p className="max-w-xl text-justify text-base leading-8 text-ink">
        Rellena el formulario y Ann respondera lo antes posible. Puedes incluir
        el contexto que necesites para que la conversacion empiece con buen pie.
      </p>

      <div className="mt-4 grid gap-4">
        <label className="sr-only" htmlFor="name">
          Nombre
        </label>
        <input
          className={inputClassName}
          id="name"
          name="name"
          placeholder="NOMBRE"
          required
          type="text"
        />

        <label className="sr-only" htmlFor="email">
          email
        </label>
        <input
          className={inputClassName}
          id="email"
          name="email"
          placeholder="EXAMPLE@GMAIL.COM"
          required
          type="email"
        />

        <label className="sr-only" htmlFor="subject">
          Asunto
        </label>
        <input
          className={inputClassName}
          id="subject"
          name="subject"
          placeholder="ASUNTO"
          type="text"
        />

        <label className="sr-only" htmlFor="message">
          Mensaje
        </label>
        <textarea
          className={`${inputClassName} min-h-40 resize-y py-4`}
          id="message"
          name="message"
          placeholder="MENSAJE"
          required
        />

        <button
          className="min-h-11 rounded-full bg-sage px-6 text-sm font-semibold uppercase tracking-[0.08em] text-paper shadow-sm transition hover:-translate-y-0.5 hover:bg-clay hover:shadow-md active:translate-y-0"
          type="submit"
        >
          Enviar desde mi correo
        </button>
      </div>
    </form>
  );
}
