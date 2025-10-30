import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import orangePattern from "@/assets/orange-pattern.jpg";

const FinalCTA = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Gostaria de assinar o Suco Natural Tio Knupp", "_blank");
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-background via-accent/5 to-background">
      <div className="absolute inset-0 opacity-5">
        <img 
          src={orangePattern} 
          alt="Padrão de laranjas" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Assine agora e receba direto no{" "}
            <span className="text-gradient">WhatsApp</span>! 📲
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Transforme sua rotina com o sabor da laranja natural — entregue toda semana, com praticidade e frescor que você merece.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={handleWhatsApp}
              className="group text-lg px-12 h-14"
            >
              <MessageCircle className="mr-2 h-6 w-6 group-hover:rotate-12 transition-transform" />
              Falar no WhatsApp e escolher meu plano
            </Button>
          </div>
          
          <div className="pt-8 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              ✓ Entrega grátis
            </div>
            <div className="flex items-center gap-2">
              ✓ Cancele quando quiser
            </div>
            <div className="flex items-center gap-2">
              ✓ Sem fidelidade
            </div>
            <div className="flex items-center gap-2">
              ✓ Suporte via WhatsApp
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
