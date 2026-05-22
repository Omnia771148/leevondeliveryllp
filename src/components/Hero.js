import Link from "next/link";
import { siteConfig } from "@/config/site";
import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 via-white to-white">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-orange-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-red-100/50 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-3 py-1 text-xs font-semibold text-orange-700 shadow-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            Coming soon to Android
          </span>

          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl lg:leading-[1.15]">
            <span className="text-orange-600">{siteConfig.appName}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600">
            Order from up to {siteConfig.restaurantCount} trusted local restaurants
            in {siteConfig.city}. We are launching in one city first — built for
            Kurnool families, students, and professionals who want fast, reliable
            food delivery.
          </p>

          <div className="mt-8">
            <Link
              href="/#how-it-works"
              className="inline-flex items-center justify-center rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-700"
            >
              See how it works
            </Link>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-orange-100 pt-8">
            <div>
              <dt className="text-2xl font-bold text-zinc-900">
                {siteConfig.restaurantCount}+
              </dt>
              <dd className="text-xs text-zinc-500 sm:text-sm">Local restaurants</dd>
            </div>
            <div>
              <dt className="text-2xl font-bold text-zinc-900">1</dt>
              <dd className="text-xs text-zinc-500 sm:text-sm">Launch city: Kurnool</dd>
            </div>
            <div>
              <dt className="text-2xl font-bold text-zinc-900">Fast</dt>
              <dd className="text-xs text-zinc-500 sm:text-sm">Local delivery</dd>
            </div>
          </dl>
        </div>

        <div className="flex justify-center lg:justify-end">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
