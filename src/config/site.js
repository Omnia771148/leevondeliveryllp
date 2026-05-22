/**
 * Update these values to match your Google Play Console developer profile
 * and D-U-N-S / rental agreement exactly before submitting for verification.
 */
export const siteConfig = {
  legalName: "LEEVON DELIVERY LLP",
  appName: "Leevon Delivery Kurnool Food Delivery App",
  brandName: "Leevon Delivery",
  tagline: "Kurnool Food Delivery App",
  domain: "leevondelivery.in",
  city: "Kurnool",
  state: "Andhra Pradesh",
  postalCode: "518002",
  country: "India",
  restaurantCount: 50,
  launchCities: 1,

  // Physical address — must match D-U-N-S and rental agreement line-for-line
  address: {
    line1: "Plot No 81/314 Sharada Nagar",
    line2: "Ward No 81 KNL-camp-B",
    city: "Kurnool",
    state: "Andhra Pradesh",
    postalCode: "518002",
    country: "India",
  },

  // Must match Google Play Console developer support contact exactly
  phone: "+91 72076 10235",
  phoneHref: "tel:+917207610235",
  email: "support@leevondelivery.in",
  emailHref: "mailto:support@leevondelivery.in",

  year: new Date().getFullYear(),
};

export function getFullAddress() {
  const { address } = siteConfig;
  return `${address.line1}, ${address.line2}, ${address.city}, ${address.state} ${address.postalCode}, ${address.country}`;
}
