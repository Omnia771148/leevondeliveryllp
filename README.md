# Leevon Delivery Kurnool Food Delivery App — Official Website

Next.js marketing site for **LEEVON DELIVERY LLP**, built for Google Play organization verification and public launch in Kurnool.

## Before Google Play submission

Edit **`src/config/site.js`** and set these to match your registrations **exactly**:

1. **Physical address** — same text as D-U-N-S and rental agreement  
2. **Phone** — same as Play Console developer support phone  
3. **Email** — same as Play Console developer support email  

Wrong details are a common reason for Play Console rejection.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

- Home: `/`
- Privacy Policy: `/privacy-policy` (required for Play Store)

## Deploy (recommended: Vercel + GoDaddy domain)

### 1. Push to GitHub

Create a repository and push this project.

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and import your GitHub repo  
2. Framework preset: **Next.js**  
3. Deploy — you get a URL like `leevon.vercel.app`

### 3. Connect GoDaddy domain (`leevondelivery.in`)

In **Vercel** → Project → **Settings** → **Domains** → Add `leevondelivery.in` and `www.leevondelivery.in`.

In **GoDaddy** → DNS for your domain:

| Type  | Name | Value |
|-------|------|--------|
| A     | @    | `76.76.21.21` (Vercel — confirm in Vercel domain setup) |
| CNAME | www  | `cname.vercel-dns.com` |

DNS can take up to 48 hours. Vercel will issue HTTPS automatically.

### 4. Google Play Console

Use your live URLs:

- **Website:** `https://leevondelivery.in`  
- **Privacy policy:** `https://leevondelivery.in/privacy-policy`

Ensure footer legal name, address, phone, and email match Play Console entries.

## Build for production

```bash
npm run build
npm start
```

## Tech stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- JavaScript only
