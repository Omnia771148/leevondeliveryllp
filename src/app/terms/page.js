import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig, getFullAddress } from "@/config/site";

export const metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${siteConfig.appName} operated by ${siteConfig.legalName}.`,
};

export default function TermsPage() {
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

        <article className="mt-8">
          <h1 className="text-3xl font-bold text-zinc-900">Terms of Service</h1>
          <p className="mt-2 text-sm text-zinc-500">Last updated: 22 May 2026</p>

          <p className="mt-6 text-zinc-600 leading-relaxed">
            These Terms govern your use of the {siteConfig.appName} website and
            mobile application operated by <strong>{siteConfig.legalName}</strong>,
            registered at {fullAddress}.
          </p>

          <section className="mt-8 space-y-4 text-zinc-600 leading-relaxed">
            <p>
              <strong className="text-zinc-900">Service area:</strong> Delivery is
              available only within {siteConfig.city}, {siteConfig.state} during
              our launch phase.
            </p>
            <p>
              <strong className="text-zinc-900">Orders:</strong> Prices, availability,
              and preparation times are set by restaurant partners. We facilitate
              ordering and delivery but are not the food manufacturer.
            </p>
            <p>
              <strong className="text-zinc-900">Payments:</strong> You agree to pay
              the displayed order total including taxes and delivery fees. Refunds
              follow our customer support policy for valid order issues.
            </p>
            <p>
              <strong className="text-zinc-900">Acceptable use:</strong> You may not
              misuse the platform, submit false orders, or harass partners or staff.
            </p>
            <p>
              For questions contact{" "}
              <a href={siteConfig.emailHref} className="text-orange-600 hover:underline">
                {siteConfig.email}
              </a>{" "}
              or {siteConfig.phone}.
            </p>

            <p>
              <strong className="text-zinc-900">
                Account Termination and Deletion:
              </strong>{" "}
              You may request to delete your account at any time. However, deleting
              your account does not relieve you of the obligation to pay for any
              active or pending orders placed prior to the deletion request. Upon
              deletion, any accumulated promotional credits or wallet balances will
              be forfeited. {siteConfig.legalName} reserves the right to suspend or
              permanently terminate your account without notice if we suspect fraud,
              abuse of our delivery partners, or any violation of these Terms.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
