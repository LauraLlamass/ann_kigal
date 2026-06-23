import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkVariant = "accent" | "light" | "sage";

type ButtonLinkProps = {
  children: ReactNode;
  className?: string;
  href: string;
  variant?: ButtonLinkVariant;
};

const baseClassName =
  "inline-flex min-h-11 items-center justify-center rounded-xl px-6 text-sm font-semibold no-underline shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0";

const variantClassNames: Record<ButtonLinkVariant, string> = {
  accent: "bg-copper text-paper hover:bg-clay",
  light: "bg-paper text-clay hover:bg-parchment hover:text-ink",
  sage: "bg-sage text-paper hover:bg-parchment hover:text-ink",
};

export default function ButtonLink({
  children,
  className = "",
  href,
  variant = "accent",
}: ButtonLinkProps) {
  return (
    <Link
      className={`${baseClassName} ${variantClassNames[variant]} ${className}`.trim()}
      href={href}
    >
      {children}
    </Link>
  );
}
