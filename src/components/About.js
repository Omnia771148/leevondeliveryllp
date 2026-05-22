import { siteConfig } from "@/config/site";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-600">
            About {siteConfig.legalName}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900">
            A Kurnool-first food delivery company
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-zinc-600">
            <p>
              <strong className="text-zinc-900">{siteConfig.legalName}</strong> is
              registered in India and building the {siteConfig.appName} Android
              application for residents of {siteConfig.city}, {siteConfig.state}.
              We connect hungry customers with neighbourhood restaurants through
              technology, logistics, and local operations teams.
            </p>
            <p>
              Unlike national aggregators that spread thin across hundreds of cities,
              we begin with {siteConfig.launchCities} launch city and up to{" "}
              {siteConfig.restaurantCount} restaurant partners so every delivery
              reflects local expectations — speed, value, and familiar flavours.
            </p>
            <p>
              {siteConfig.appName} connects customers, restaurants, and delivery
              partners across Kurnool. Restaurants retain control of their menus and
              pricing; customers receive dependable delivery; delivery partners earn
              per trip. The mobile app is currently in active development for Google
              Play release.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
