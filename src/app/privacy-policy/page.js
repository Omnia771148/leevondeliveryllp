import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig, getFullAddress } from "@/config/site";

export const metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.legalName} and the ${siteConfig.appName}.`,
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "22 May 2026";
  const fullAddress = getFullAddress();

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-sm font-medium text-orange-600 hover:text-orange-700"
        >
          &larr; Back to home
        </Link>

        <article className="prose-policy mt-8">
          <h1 className="text-3xl font-bold text-zinc-900">Privacy Policy</h1>
          <p className="mt-2 text-sm text-zinc-500">Last updated: {lastUpdated}</p>

          <p className="mt-6 text-zinc-600 leading-relaxed">
            This Privacy Policy describes how <strong>{siteConfig.legalName}</strong>{" "}
            (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses,
            stores, and protects personal information when you visit{" "}
            <strong>{siteConfig.domain}</strong> or use the {siteConfig.appName}{" "}
            mobile application for Android (the &quot;App&quot;). By using our
            website or App, you agree to this policy.
          </p>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-zinc-900">1. Who we are</h2>
            <p className="mt-3 text-zinc-600 leading-relaxed">
              {siteConfig.legalName} operates a food delivery marketplace in{" "}
              {siteConfig.city}, {siteConfig.state}, India. Registered office:{" "}
              {fullAddress}.
            </p>
            <p className="mt-3 text-zinc-600 leading-relaxed">
              Data protection contact:{" "}
              <a href={siteConfig.emailHref} className="text-orange-600 hover:underline">
                {siteConfig.email}
              </a>{" "}
              | Phone:{" "}
              <a href={siteConfig.phoneHref} className="text-orange-600 hover:underline">
                {siteConfig.phone}
              </a>
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-zinc-900">
              2. Information we collect
            </h2>
            <p className="mt-3 text-zinc-600 leading-relaxed">
              We collect only what is needed to provide food delivery services:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-600">
              <li>
                <strong>Account & identity:</strong> Name, mobile phone number,
                email address, and profile details you provide during registration.
              </li>
              <li>
                <strong>Location data:</strong> GPS and address information to show
                nearby restaurants, calculate delivery fees, assign delivery partners,
                and provide live order tracking. You may deny location permission, but
                core delivery features may not work.
              </li>
              <li>
                <strong>Order & payment information:</strong> Order history, cart
                items, delivery instructions, transaction references, and payment
                method tokens processed through PCI-compliant payment partners (we do
                not store full card numbers on our servers).
              </li>
              <li>
                <strong>Communications:</strong> Messages with customer support,
                ratings, reviews, and feedback you submit.
              </li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-zinc-900">
              3. How we use your information
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-600">
              <li>Process and deliver food orders in Kurnool</li>
              <li>Authenticate your account and prevent fraud</li>
              <li>Send order status, SMS, and push notifications</li>
              <li>Process payments and issue refunds where applicable</li>
              <li>Improve app performance, safety, and customer support</li>
              <li>Comply with Indian law, tax, and regulatory requirements</li>
              <li>Send marketing only with your consent; you may opt out anytime</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-zinc-900">
              4. How we share information
            </h2>
            <p className="mt-3 text-zinc-600 leading-relaxed">
              We do not sell your personal data. We may share limited data with:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-600">
              <li>Restaurant partners (order details needed to prepare food)</li>
              <li>Delivery partners (name, address, phone for pickup and delivery)</li>
              <li>Payment gateways and banks (transaction processing)</li>
              <li>Cloud hosting, analytics, and SMS providers under contract</li>
              <li>Law enforcement when required by valid legal process</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-zinc-900">5. Data security</h2>
            <p className="mt-3 text-zinc-600 leading-relaxed">
              We use industry-standard safeguards including HTTPS encryption in
              transit, access controls, secure server infrastructure, and regular
              monitoring. No method of transmission over the internet is 100% secure;
              we continuously work to protect your information.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-zinc-900">6. Data retention</h2>
            <p className="mt-3 text-zinc-600 leading-relaxed">
              We retain personal data only as long as needed for the purposes above,
              including legal, accounting, and dispute resolution requirements.
              Inactive accounts may be anonymized or deleted after a reasonable
              period.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-zinc-900">7. Your rights</h2>
            <p className="mt-3 text-zinc-600 leading-relaxed">
              Under applicable Indian data protection norms, you may request access,
              correction, deletion, or withdrawal of consent by emailing{" "}
              <a href={siteConfig.emailHref} className="text-orange-600 hover:underline">
                {siteConfig.email}
              </a>
              . We will respond within a reasonable timeframe.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-zinc-900">8. Children</h2>
            <p className="mt-3 text-zinc-600 leading-relaxed">
              Our services are not directed to children under 18. We do not knowingly
              collect data from minors. Contact us if you believe a child has provided
              personal information.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-zinc-900">9. Changes</h2>
            <p className="mt-3 text-zinc-600 leading-relaxed">
              We may update this Privacy Policy. Material changes will be posted on
              this page with a revised date. Continued use of the App after changes
              constitutes acceptance.
            </p>
          </section>

          <section className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
            <h2 className="text-xl font-bold text-zinc-900">10. Contact us</h2>
            <p className="mt-3 text-zinc-600 leading-relaxed">
              <strong>{siteConfig.legalName}</strong>
              <br />
              {fullAddress}
              <br />
              Email:{" "}
              <a href={siteConfig.emailHref} className="text-orange-600 hover:underline">
                {siteConfig.email}
              </a>
              <br />
              Phone:{" "}
              <a href={siteConfig.phoneHref} className="text-orange-600 hover:underline">
                {siteConfig.phone}
              </a>
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
