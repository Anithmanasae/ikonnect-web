import localFont from "next/font/local";

// Self-hosted through next/font: preloaded, inlined @font-face, and size-matched fallbacks
// so text doesn't jump when the web font arrives.
export const inter = localFont({
  src: "../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  weight: "100 900",
  style: "normal",
  display: "swap",
  variable: "--font-inter",
});

export const poppins = localFont({
  src: [
    { path: "../node_modules/@fontsource/poppins/files/poppins-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../node_modules/@fontsource/poppins/files/poppins-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../node_modules/@fontsource/poppins/files/poppins-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../node_modules/@fontsource/poppins/files/poppins-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-poppins",
});
