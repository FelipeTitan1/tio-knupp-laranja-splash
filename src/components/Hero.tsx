import { Button } from "@/components/ui/button";
import heroJuice from "@/assets/hero-juice.jpg";
import { MessageCircle } from "lucide-react";

const Hero = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Gostaria de assinar o Suco Natural Tio Knupp", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                🍊 100% Natural
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Assine o sabor da{" "}
              <span className="text-gradient">laranja 100% natural</span> 🧃
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Descubra o verdadeiro sabor da laranja espremida na hora – entregue direto na sua casa!
            </p>
            
            <p className="text-lg text-foreground/80">
              Sem conservantes. Sem aditivos. Só fruta e frescor em cada gole.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={handleWhatsApp}
                className="group"
              >
                <MessageCircle className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Assinar agora pelo WhatsApp
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver planos
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Natural</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">0</div>
                <div className="text-sm text-muted-foreground">Conservantes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24h</div>
                <div className="text-sm text-muted-foreground">Frescor</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-3xl blur-3xl animate-float"></div>
            <img
              src={heroJuice}
              alt="Copo de suco natural de laranja com gomos frescos"
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover animate-float"
              style={{ animationDelay: '0.5s' }}
            />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
