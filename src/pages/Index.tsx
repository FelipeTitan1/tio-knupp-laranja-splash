import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Plans from "@/components/Plans";
import Quality from "@/components/Quality";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Benefits />
      <Plans />
      <Quality />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
