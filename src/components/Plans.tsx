import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, MessageCircle } from "lucide-react";

const plans = [
  {
    name: "Plano Semanal",
    description: "Perfeito para experimentar",
    price: "89",
    period: "semana",
    deliveries: "2 entregas",
    amount: "2 litros por entrega",
    features: [
      "4 litros de suco fresco por semana",
      "Entrega 2x na semana",
      "Flexibilidade para pausar",
      "Sem fidelidade"
    ],
    popular: false
  },
  {
    name: "Plano Mensal",
    description: "Mais economia, mais saúde",
    price: "299",
    period: "mês",
    deliveries: "8 entregas",
    amount: "2 litros por entrega",
    features: [
      "16 litros de suco fresco por mês",
      "Entrega 2x por semana",
      "Economia de 16%",
      "Suporte prioritário",
      "Brinde de boas-vindas"
    ],
    popular: true
  },
  {
    name: "Plano Família",
    description: "Para toda a família",
    price: "549",
    period: "mês",
    deliveries: "12 entregas",
    amount: "3 litros por entrega",
    features: [
      "36 litros de suco fresco por mês",
      "Entrega 3x por semana",
      "Economia de 25%",
      "Suporte prioritário VIP",
      "Kit família de brindes",
      "Receitas exclusivas"
    ],
    popular: false
  }
];

const Plans = () => {
  const handleWhatsApp = (planName: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de assinar o ${planName} do Suco Natural Tio Knupp`);
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
  };

  return (
    <section id="planos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Escolha seu <span className="text-gradient">plano ideal</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Todos os planos incluem suco 100% natural e entrega na sua casa
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in ${
                plan.popular ? 'border-2 border-primary shadow-xl scale-105' : 'border-none'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                  Mais Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-primary">R$ {plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  {plan.deliveries} • {plan.amount}
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.popular ? "hero" : "outline"}
                size="lg"
                className="w-full"
                onClick={() => handleWhatsApp(plan.name)}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Assinar agora
              </Button>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-muted-foreground">
            💚 Cancele quando quiser, sem taxas ou multas
          </p>
        </div>
      </div>
    </section>
  );
};

export default Plans;
