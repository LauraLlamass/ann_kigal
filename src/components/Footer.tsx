const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/annkigal/", icon: "/icons/instagram.svg" },
  { label: "TikTok", href: "https://www.tiktok.com/@annkigal?lang=es-419", icon: "/icons/tiktok.svg" },
  { label: "Gmail", href: "mailto:annckigal@gmail.com", icon: "/icons/gmail.svg" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-6 px-6 py-5 text-sm md:grid-cols-[1fr_auto]">
        <p className="text-center leading-6 md:text-left">
          &copy; 2026 Ann C. Kigal
        </p>

        <div className="flex items-center justify-center gap-3 md:justify-self-end">
          {socialLinks.map((link) => (
            <a
              aria-label={link.label}
              className="flex size-9 items-center justify-center rounded-xl bg-paper shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-parchment hover:shadow-md active:translate-y-0"
              href={link.href}
              key={link.label}
            >
              <img src={link.icon} alt="" className="size-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
