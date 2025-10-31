import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Plans from "@/components/Plans";
import Quality from "@/components/Quality";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Ecological = () => {
  return (
    <main className="min-h-screen ecological-theme">
      <style>{`
        .ecological-theme {
          --primary: 142 71% 35%;
          --primary-foreground: 0 0% 100%;
          --secondary: 84 65% 45%;
          --secondary-foreground: 0 0% 100%;
          --accent: 142 71% 45%;
          --accent-foreground: 0 0% 100%;
          --background: 60 9% 98%;
          --foreground: 142 71% 15%;
          --muted: 142 20% 94%;
          --muted-foreground: 142 15% 40%;
          --card: 0 0% 100%;
          --card-foreground: 142 71% 15%;
          --border: 142 25% 88%;
          --gradient-hero: linear-gradient(135deg, hsl(142 71% 35%), hsl(84 65% 45%));
        }
      `}</style>
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

export default Ecological;
