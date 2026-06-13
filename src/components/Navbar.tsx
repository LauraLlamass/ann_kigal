import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/books", label: "Books" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <nav className="mx-auto flex min-h-16 w-full max-w-6xl items-center justify-between gap-6 px-6">
        <Link className="text-lg font-semibold tracking-wide text-text" href="/">
          Ann C. Kigal
        </Link>

        <div className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-sm font-medium text-muted">
          {links.map((link) => (
            <Link
              className="transition hover:text-accent-strong"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
