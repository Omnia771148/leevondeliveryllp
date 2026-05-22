import "./globals.css";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: {
    default: siteConfig.appName,
    template: `%s | ${siteConfig.appName}`,
  },
  description: `${siteConfig.appName} — order from up to ${siteConfig.restaurantCount} local restaurants in ${siteConfig.city}. Android app coming soon.`,
  keywords: [
    "Leevon Delivery Kurnool Food Delivery App",
    "Leevon Delivery",
    "food delivery Kurnool",
    "Kurnool restaurants",
    "LEEVON DELIVERY LLP",
  ],
  openGraph: {
    title: siteConfig.appName,
    description: `Order from up to ${siteConfig.restaurantCount} local restaurants in ${siteConfig.city}.`,
    url: `https://${siteConfig.domain}`,
    siteName: siteConfig.appName,
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white font-sans text-zinc-900 antialiased">
        {children}
      </body>
    </html>
  );
}
