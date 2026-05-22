import Link from "next/link";
import { siteConfig } from "@/config/site";

const navLinks = [
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#restaurants", label: "Restaurants" },
  { href: "/#about", label: "About" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-orange-100/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-600 text-lg font-bold text-white shadow-md shadow-orange-200"
            aria-hidden="true"
          >
            L
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-bold tracking-tight text-zinc-900">
              {siteConfig.brandName}
            </span>
            <span className="text-xs text-zinc-500">{siteConfig.tagline}</span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-6 text-sm font-medium text-zinc-600 md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-orange-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={siteConfig.emailHref}
          className="rounded-full bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-700"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
