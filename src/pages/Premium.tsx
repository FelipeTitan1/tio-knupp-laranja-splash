import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Plans from "@/components/Plans";
import Quality from "@/components/Quality";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Premium = () => {
  return (
    <main className="min-h-screen premium-theme">
      <style>{`
        .premium-theme {
          --primary: 25 95% 35%;
          --primary-foreground: 0 0% 100%;
          --secondary: 45 100% 50%;
          --secondary-foreground: 25 95% 20%;
          --accent: 45 100% 50%;
          --accent-foreground: 25 95% 20%;
          --background: 0 0% 100%;
          --foreground: 25 95% 20%;
          --muted: 25 30% 96%;
          --muted-foreground: 25 15% 45%;
          --card: 0 0% 100%;
          --card-foreground: 25 95% 20%;
          --border: 25 25% 90%;
          --gradient-hero: linear-gradient(135deg, hsl(25 95% 35%), hsl(45 100% 50%));
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

export default Premium;
