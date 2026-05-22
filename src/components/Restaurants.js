import { siteConfig } from "@/config/site";

const highlights = [
  {
    title: "Up to 50 local partners",
    description:
      "We onboard quality restaurants, cloud kitchens, and popular eateries already trusted in Kurnool — not anonymous chains from other cities.",
  },
  {
    title: "One city, full focus",
    description:
      "We are starting in Kurnool only. Concentrating on a single city lets us optimize delivery times, support, and restaurant relationships.",
  },
  {
    title: "Honest menu pricing",
    description:
      "Partner restaurants list real menu prices. Customers see exactly what each dish costs before placing an order.",
  },
  {
    title: "Curated menu quality",
    description:
      "Partner onboarding includes hygiene checks, packaging standards, and consistent preparation times before going live on the app.",
  },
];

export default function Restaurants() {
  return (
    <section id="restaurants" className="bg-orange-50/60 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-600">
              Restaurant network
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Good local restaurants, up to {siteConfig.restaurantCount}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-zinc-600">
              {siteConfig.appName} is building a curated network of Kurnool&apos;s
              favourite food spots — from family restaurants and tiffin centres to
              biryani houses and evening snack stalls. Our launch partners are
              selected for reliability, taste, and community reputation.
            </p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm"
              >
                <h3 className="font-bold text-zinc-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
