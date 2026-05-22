import { siteConfig } from "@/config/site";

const steps = [
  {
    step: "01",
    title: "Browse local restaurants",
    description: `Choose from up to ${siteConfig.restaurantCount} partner restaurants across ${siteConfig.city} — from biryani and meals to snacks and sweets.`,
  },
  {
    step: "02",
    title: "Order with transparent pricing",
    description:
      "See item prices, delivery fee, and taxes before you pay. No surprises at checkout — what you see is what you pay.",
  },
  {
    step: "03",
    title: "Track live delivery",
    description:
      "Follow your order from kitchen to doorstep with real-time status updates and delivery partner contact when the app launches.",
  },
  {
    step: "04",
    title: "Support local business",
    description:
      "Every order helps Kurnool restaurants grow sustainably. We focus on one city first so service quality stays high.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-600">
            How it works
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Food delivery designed for {siteConfig.city}
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            {siteConfig.legalName} operates a hyperlocal marketplace: customers order
            through our Android app, restaurants prepare food, and verified delivery
            partners complete the last mile.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <li
              key={item.step}
              className="rounded-2xl border border-zinc-100 bg-zinc-50/80 p-6 transition hover:border-orange-200 hover:shadow-md"
            >
              <span className="text-3xl font-black text-orange-200">{item.step}</span>
              <h3 className="mt-4 text-lg font-bold text-zinc-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
