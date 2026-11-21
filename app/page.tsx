import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Solutions from "@/components/Solutions";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <div className="mid-band">
          <About />
          <Services />
          <Industries />
          <Solutions />
        </div>
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
