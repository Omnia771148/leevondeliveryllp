import Link from "next/link";
import { siteConfig, getFullAddress } from "@/config/site";

export default function Footer() {
  const fullAddress = getFullAddress();

  return (
    <footer className="border-t border-zinc-200 bg-zinc-900 text-zinc-300">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-white">{siteConfig.legalName}</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              {siteConfig.appName} connects customers in {siteConfig.city} with
              trusted local restaurants for fast, reliable food delivery.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
              Registered Office
            </h2>
            <address className="mt-3 not-italic text-sm leading-relaxed text-zinc-300">
              <strong className="block text-white">{siteConfig.legalName}</strong>
              {siteConfig.address.line1}
              <br />
              {siteConfig.address.line2}
              <br />
              {siteConfig.address.city}, {siteConfig.address.state}{" "}
              {siteConfig.address.postalCode}
              <br />
              {siteConfig.address.country}
            </address>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
              Developer Support
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <span className="text-zinc-500">Phone: </span>
                <a
                  href={siteConfig.phoneHref}
                  className="text-orange-400 hover:text-orange-300"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <span className="text-zinc-500">Email: </span>
                <a
                  href={siteConfig.emailHref}
                  className="text-orange-400 hover:text-orange-300"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-zinc-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-zinc-500">
            &copy; {siteConfig.year} {siteConfig.legalName}. All rights reserved.
          </p>
          <nav className="flex flex-wrap gap-4 text-sm" aria-label="Legal links">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
            <a href={siteConfig.emailHref} className="hover:text-white">
              Contact
            </a>
          </nav>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-zinc-600">
          {siteConfig.legalName} &mdash; {fullAddress}
        </p>
      </div>
    </footer>
  );
}
