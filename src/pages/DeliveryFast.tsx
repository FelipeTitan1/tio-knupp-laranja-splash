import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Plans from "@/components/Plans";
import Quality from "@/components/Quality";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import VersionSelector from "@/components/VersionSelector";

const DeliveryFast = () => {
  return (
    <main className="min-h-screen delivery-theme">
      <style>{`
        .delivery-theme {
          --primary: 48 100% 50%;
          --primary-foreground: 25 95% 20%;
          --secondary: 84 75% 50%;
          --secondary-foreground: 25 95% 20%;
          --accent: 33 100% 55%;
          --accent-foreground: 25 95% 20%;
          --background: 48 100% 99%;
          --foreground: 25 95% 20%;
          --muted: 48 30% 96%;
          --muted-foreground: 25 15% 45%;
          --card: 0 0% 100%;
          --card-foreground: 25 95% 20%;
          --border: 48 25% 90%;
          --gradient-hero: linear-gradient(135deg, hsl(48 100% 50%), hsl(33 100% 55%));
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
      <VersionSelector />
    </main>
  );
};

export default DeliveryFast;
