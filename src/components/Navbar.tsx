"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/projects", label: "Proyectos" },
  { href: "/services", label: "Servicios" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/about", label: "Sobre mí" },
  { href: "/contact", label: "Contacto" },
];

function isActiveLink(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink text-paper">
      <nav className="w-full px-6" aria-label="Principal">
        <div className="flex min-h-16 items-center justify-between gap-6">
          <Link
            className="text-lg font-semibold tracking-wide text-paper no-underline"
            href="/"
            onClick={() => setIsMenuOpen(false)}
          >
            Ann C. Kigal
          </Link>

          <button
            aria-expanded={isMenuOpen}
            aria-controls="main-menu"
            className="inline-flex min-h-10 items-center justify-center rounded-xl bg-paper px-4 text-sm font-semibold text-ink shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-parchment hover:shadow-md active:translate-y-0 md:hidden"
            onClick={() => setIsMenuOpen((current) => !current)}
            type="button"
          >
            Menú
          </button>

          <div className="hidden items-center justify-end gap-2 text-sm font-medium md:flex">
            {links.map((link) => {
              const isActive = isActiveLink(pathname, link.href);

              return (
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className={
                    isActive
                      ? "rounded-xl bg-parchment px-4 py-2 text-ink no-underline shadow-sm"
                      : "rounded-xl bg-paper px-4 py-2 text-ink no-underline shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-parchment hover:text-ink hover:shadow-md active:translate-y-0"
                  }
                  href={link.href}
                  key={link.href}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div
          className={
            isMenuOpen
              ? "grid border-t border-line py-4 md:hidden"
              : "hidden md:hidden"
          }
          id="main-menu"
        >
          <div className="grid gap-2 text-sm font-medium">
            {links.map((link) => {
              const isActive = isActiveLink(pathname, link.href);

              return (
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className={
                    isActive
                      ? "rounded-xl bg-parchment px-4 py-3 text-ink no-underline shadow-sm"
                      : "rounded-xl bg-paper px-4 py-3 text-ink no-underline shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-parchment hover:text-ink hover:shadow-md active:translate-y-0"
                  }
                  href={link.href}
                  key={link.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
