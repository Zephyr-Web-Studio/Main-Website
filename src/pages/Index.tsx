import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Features from "../components/Features";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Features />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;