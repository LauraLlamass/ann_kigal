const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/annkigal/",
    icon: "/icons/instagram.svg",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@annkigal?lang=es-419",
    icon: "/icons/tiktok.svg",
  },
];

const contactEmail = "annckigal@gmail.com";
const contactHref = `mailto:${contactEmail}`;

export default function ContactDetails() {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-ink sm:text-5xl">
        Quieres conectar?
      </h1>
      <div className="mt-7 max-w-md space-y-5 text-base leading-8 text-ink">
        <p>
          Envia una consulta, una propuesta o una idea que quieras contar con
          calma.
        </p>
        <p>
          Si tienes un proyecto creativo, una colaboracion o una pregunta sobre
          la obra de Ann, este es un buen lugar para empezar.
        </p>
      </div>

      <div className="mt-8 grid max-w-md gap-4 text-sm">
        <div className="w-full rounded-xl bg-clay p-6 text-paper shadow-sm">
          <p className="font-semibold uppercase tracking-[0.18em] text-paper">
            Email
          </p>
          <a
            className="mt-4 flex max-w-full items-center gap-3 text-sm font-medium text-paper no-underline transition hover:text-parchment"
            href={contactHref}
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-paper">
              <img src="/icons/gmail.svg" alt="" className="size-5" />
            </span>
            <span className="break-all">{contactEmail}</span>
          </a>
        </div>

        <div className="w-full rounded-xl bg-clay p-6 text-paper shadow-sm">
          <p className="font-semibold uppercase tracking-[0.18em] text-paper">
            Social
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                className="flex items-center gap-3 text-sm font-medium text-paper no-underline transition hover:text-parchment"
                href={link.href}
                key={link.label}
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-paper">
                  <img src={link.icon} alt="" className="size-5" />
                </span>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
