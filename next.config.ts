import type { NextConfig } from "next";

// STATIC_EXPORT=1 next build  -> plain static site in ./out (for any static host / Cloudflare)
// next build                   -> regular Next.js server build (Vercel, `next start`)
const isStatic = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  experimental: {
    // Inline the (small) stylesheet into the HTML so it doesn't block first paint.
    inlineCss: true,
  },
  ...(isStatic ? { output: "export" as const } : {}),
  images: {
    unoptimized: isStatic,
    qualities: [75, 90],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
