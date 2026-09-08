import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig, getFullAddress } from "@/config/site";

export const metadata = {
  title: "Privacy Policy | " + siteConfig.appName,
  description: `Privacy Policy for ${siteConfig.legalName} and the ${siteConfig.appName}.`,
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "31st May 2026";
  const fullAddress = getFullAddress();

  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <article className="prose-policy mt-4">
          <h1 className="text-3xl font-bold text-zinc-900 sm:text-4xl">Privacy Policy</h1>
          <p className="mt-2 text-sm font-medium text-zinc-500">Last Updated: {lastUpdated}</p>

          <p className="mt-6 text-base leading-relaxed text-zinc-700">
            Your privacy is our core priority. This Policy outlines how our food delivery application collects, processes, and safeguards your personal data. We are committed to transparency and ensuring that your experience is secure and compliant with modern data protection regulations.
          </p>

          <div className="mt-6 rounded-xl border border-orange-200 bg-orange-50/70 p-4 text-orange-950">
            <p className="font-semibold text-orange-900">
              Our Quality Pledge: <span className="font-normal text-orange-800">We do not sell, rent, or trade your personal information with third-party marketers or advertisers under any circumstances.</span>
            </p>
          </div>

          {/* 1. Information We Collect */}
          <section className="mt-10">
            <h2 className="text-xl font-bold text-zinc-900 sm:text-2xl">1. Information We Collect</h2>
            <p className="mt-3 text-zinc-700 leading-relaxed">
              To facilitate seamless food discovery and delivery, we collect the following categories of data:
            </p>

            <div className="mt-6 overflow-x-auto rounded-xl border border-zinc-200 shadow-sm">
              <table className="min-w-full divide-y divide-zinc-200 text-left text-sm">
                <thead className="bg-zinc-100/80 text-zinc-900 font-semibold">
                  <tr>
                    <th scope="col" className="px-4 py-3 sm:px-6">Data Category</th>
                    <th scope="col" className="px-4 py-3 sm:px-6">Specific Data Points</th>
                    <th scope="col" className="px-4 py-3 sm:px-6">Business Need</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 bg-white text-zinc-700">
                  <tr className="hover:bg-zinc-50/50">
                    <td className="px-4 py-3.5 font-medium text-zinc-900 sm:px-6">Identity Profile</td>
                    <td className="px-4 py-3.5 sm:px-6">Full Name, Email Address, Contact Number, Date of Birth.</td>
                    <td className="px-4 py-3.5 sm:px-6">Account verification, profile personalization, and security validation.</td>
                  </tr>
                  <tr className="hover:bg-zinc-50/50">
                    <td className="px-4 py-3.5 font-medium text-zinc-900 sm:px-6">Precise Location</td>
                    <td className="px-4 py-3.5 sm:px-6">GPS Latitude/Longitude, Delivery Address (Flat No, Street, Landmark).</td>
                    <td className="px-4 py-3.5 sm:px-6">Verification of service area (Kurnool-only) and delivery distance computation.</td>
                  </tr>
                  <tr className="hover:bg-zinc-50/50">
                    <td className="px-4 py-3.5 font-medium text-zinc-900 sm:px-6">Device Access</td>
                    <td className="px-4 py-3.5 sm:px-6">Microphone Permission.</td>
                    <td className="px-4 py-3.5 sm:px-6">Enabling voice-assisted search features. Audio data is processed entirely locally on-device for speech-to-text conversion. Voice inputs are never recorded, stored, or transmitted to our servers or third parties.</td>
                  </tr>
                  <tr className="hover:bg-zinc-50/50">
                    <td className="px-4 py-3.5 font-medium text-zinc-900 sm:px-6">Transaction Logs</td>
                    <td className="px-4 py-3.5 sm:px-6">Payment Status, Transaction IDs (via Payment Gateway).</td>
                    <td className="px-4 py-3.5 sm:px-6">Processing orders and resolving payment disputes.</td>
                  </tr>
                  <tr className="hover:bg-zinc-50/50">
                    <td className="px-4 py-3.5 font-medium text-zinc-900 sm:px-6">User Interaction</td>
                    <td className="px-4 py-3.5 sm:px-6">Reviews, Feedback, Coins Balance, App Preferences.</td>
                    <td className="px-4 py-3.5 sm:px-6">Enhancing application quality and managing loyalty rewards.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-4 sm:p-5">
              <h3 className="font-semibold text-zinc-900">Child Safety and Family Protection Policy</h3>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                This application does not intentionally collect or target services at children under the age of 13. Your Date of Birth is used exclusively for account security validation, personalization, and birthday loyalty benefits, and is never shared with third parties.
              </p>
            </div>
          </section>

          {/* 2. How We Utilize Your Information */}
          <section className="mt-10">
            <h2 className="text-xl font-bold text-zinc-900 sm:text-2xl">2. How We Utilize Your Information</h2>
            <p className="mt-3 text-zinc-700 leading-relaxed">
              Your data is processed based on the necessity to perform our service contract with you:
            </p>
            <ul className="mt-4 list-disc space-y-2.5 pl-6 text-zinc-700">
              <li><strong>Authentication:</strong> Using secure SMS-based OTP verification for account security and password recovery.</li>
              <li><strong>Operational Logic:</strong> Validating your real-time location against our Kurnool service boundary to ensure order feasibility. Items containing egg or egg derivatives are categorized as Non-Vegetarian (Non-Veg) for all menu display and filtering purposes.</li>
              <li><strong>Dynamic Pricing:</strong> Calculating precise delivery fees based on road-distance between your location and the selected restaurant.</li>
              <li><strong>Payment Integrity:</strong> Using specialized verification secrets to authenticate secure digital payments.</li>
              <li><strong>Persistence:</strong> Storing temporary session data securely in device local storage to maintain your login state for up to 30 days.</li>
              <li><strong>Voice Search:</strong> Processing voice search inputs entirely locally on-device. Audio signals are converted to text locally, are never recorded or stored, and are never transmitted to our servers or third parties.</li>
            </ul>
          </section>

          {/* 3. Security & Cloud Management */}
          <section className="mt-10">
            <h2 className="text-xl font-bold text-zinc-900 sm:text-2xl">3. Security &amp; Cloud Management</h2>
            <ul className="mt-4 list-disc space-y-2.5 pl-6 text-zinc-700">
              <li><strong>Encrypted Storage:</strong> All user profiles and order histories are stored in dedicated cloud databases with disk-level encryption.</li>
              <li><strong>Transport Security:</strong> All data transmitted between your mobile device and our servers is secured using TLS (HTTPS) via SSL certificates.</li>
              <li><strong>Credential Hashing:</strong> Passwords and sensitive identifiers are hashed using strong cryptographic protocols (SHA-256) to prevent unauthorized access.</li>
              <li><strong>Isolated Payments:</strong> Financial data (card numbers, CVV) are handled entirely by our secure Payment Gateway provider and never cross our servers.</li>
              <li><strong>Data Protection Note:</strong> In compliance with Play Store requirements, we ensure that all personal and sensitive user data is handled with the highest level of encryption-at-rest and in-transit.</li>
            </ul>
          </section>

          {/* 4. Trusted Service Providers */}
          <section className="mt-10">
            <h2 className="text-xl font-bold text-zinc-900 sm:text-2xl">4. Trusted Service Providers</h2>
            <p className="mt-3 text-zinc-700 leading-relaxed">
              We collaborate with industry-standard third-party infrastructure providers to ensure app safety, security, and operational reliability:
            </p>
            <ul className="mt-4 list-disc space-y-2.5 pl-6 text-zinc-700">
              <li><strong>Authentication &amp; Security Services:</strong> To facilitate secure SMS delivery, account registration, and OTP verification.</li>
              <li><strong>Payment Processing Gateways:</strong> To process digital payments securely without storing sensitive financial data on our servers.</li>
              <li><strong>Geospatial &amp; Mapping Services:</strong> To verify service availability boundaries and calculate delivery routes.</li>
              <li><strong>Cloud Infrastructure &amp; Database Providers:</strong> To host the application database and user profile data securely with standard data encryption.</li>
            </ul>
          </section>

          {/* 5. Data Retention & User Rights */}
          <section className="mt-10">
            <h2 className="text-xl font-bold text-zinc-900 sm:text-2xl">5. Data Retention &amp; User Rights</h2>
            <ul className="mt-4 list-disc space-y-2.5 pl-6 text-zinc-700">
              <li><strong>Data Retention Policy:</strong> We retain your personal data (Name, Email, Phone, Date of Birth) only for as long as your account remains active. Upon requesting account deletion, this data is permanently erased from our production databases immediately. Transaction logs and order history are retained securely for a maximum period of 90 days after delivery for accounting, audit compliance, and dispute resolution purposes, after which they are automatically anonymized.</li>
              <li><strong>Policy Updates:</strong> We may update this Privacy Policy periodically to reflect changes in our practices or regulatory standards. We will notify you of any material changes by updating the policy on this page, and sending an in-app alert or email notification.</li>
            </ul>

            <div className="mt-6 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-zinc-900">You maintain full control over your personal data at all times:</h3>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-zinc-700">
                <li><strong>Right to Correction:</strong> Edit your phone, name, and addresses directly via your Profile.</li>
                <li><strong>Microphone Control:</strong> You can enable or disable voice search permissions any time via device settings.</li>
                <li><strong>Data Portability:</strong> You may request a summary of the data we maintain regarding your account.</li>
                <li><strong>Right to Deletion:</strong> You can request immediate account termination and data erasure via the &quot;Profile&quot; or &quot;Contact Us&quot; sections.</li>
              </ul>
            </div>
          </section>

          {/* 6. Privacy Contact Information */}
          <section className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
            <h2 className="text-xl font-bold text-zinc-900">6. Privacy Contact Information</h2>
            <p className="mt-3 text-zinc-700 leading-relaxed">
              For any privacy-related inquiries, data access requests, or to exercise your legal rights, please contact our dedicated privacy team:
            </p>
            <p className="mt-3 text-zinc-700 leading-relaxed">
              <strong>Email:</strong>{" "}
              <a href="mailto:support@leevondelivery.in" className="text-orange-600 hover:underline">
                support@leevondelivery.in
              </a>
              <br />
              <strong>Address:</strong> Kurnool City, Andhra Pradesh, India.
            </p>

            <blockquote className="mt-6 border-l-4 border-orange-500 pl-4 text-sm font-medium italic text-zinc-800">
              &quot;Our core commitment: Your data is never a product. We utilize the minimum information necessary to provide the maximum service quality.&quot;
            </blockquote>

            <p className="mt-6 text-xs text-zinc-500">
              © 2026 Food Delivery Application. Kurnool, Andhra Pradesh.
              <br />
              Operation Area: Kurnool Municipal Corporation
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
