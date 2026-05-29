import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Features from "../components/Features";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Header />
      <Hero />
      <Services />
      <About />
      <Features />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;