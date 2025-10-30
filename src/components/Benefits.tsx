import { Citrus, Ban, Truck, DollarSign, Sun } from "lucide-react";
import { Card } from "@/components/ui/card";
import kitchenBottles from "@/assets/kitchen-bottles.jpg";

const benefits = [
  {
    icon: Citrus,
    emoji: "🍊",
    title: "100% Natural",
    description: "Feito apenas com frutas frescas. Zero misturas, zero artifícios.",
    color: "text-primary"
  },
  {
    icon: Ban,
    emoji: "🚫",
    title: "Sem Conservantes nem Aditivos",
    description: "Puro sabor da laranja, sem nada além do que a natureza oferece.",
    color: "text-destructive"
  },
  {
    icon: Truck,
    emoji: "🚚",
    title: "Entrega Semanal Garantida",
    description: "Frescor sem esforço direto na sua casa, toda semana.",
    color: "text-secondary"
  },
  {
    icon: DollarSign,
    emoji: "💰",
    title: "Planos Acessíveis",
    description: "Sem contrato de fidelidade. Flexibilidade total para você.",
    color: "text-accent"
  },
  {
    icon: Sun,
    emoji: "🌞",
    title: "Saúde e Praticidade",
    description: "Perfeito para quem busca uma vida mais saudável sem complicação.",
    color: "text-primary"
  }
];

const Benefits = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Por que o <span className="text-gradient">Tio Knupp</span> é diferente?
          </h2>
          <p className="text-xl text-muted-foreground">
            Compromisso com a sua saúde e sabor incomparável
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none bg-card animate-fade-in text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4">
                {benefit.emoji}
              </div>
              <h3 className="text-lg font-bold mb-3">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>
        
        {/* Image Section */}
        <div className="max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <img
            src={kitchenBottles}
            alt="Garrafas de suco natural em bancada de cozinha iluminada"
            className="rounded-2xl shadow-2xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
