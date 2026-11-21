import type { Metadata, Viewport } from "next";
import "lenis/dist/lenis.css";
import "./globals.css";
import { inter, poppins } from "./fonts";
import SmoothScroll from "@/components/SmoothScroll";
import AnimationPauser from "@/components/AnimationPauser";

export const metadata: Metadata = {
  title: "Ikonnect Talentum Arrow | AI, Data, Automation & Computer Vision",
  description:
    "Ikonnect Talentum Arrow Pvt. Ltd. builds AI-powered solutions and high-quality AI training data services that transform businesses, automate processes and bring intelligence to every frame.",
};

export const viewport: Viewport = {
  themeColor: "#061528",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
        <AnimationPauser />
      </body>
    </html>
  );
}
