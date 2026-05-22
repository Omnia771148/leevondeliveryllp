/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "frame-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; connect-src 'self' https: wss:; img-src 'self' data: blob: https:; style-src 'self' 'unsafe-inline'; font-src 'self' data: https:;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
