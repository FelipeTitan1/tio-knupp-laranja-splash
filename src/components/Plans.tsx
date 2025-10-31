import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, MessageCircle } from "lucide-react";

const plans = [
  {
    name: "🥤 Padrão",
    description: "Ideal para começar",
    price: "96",
    period: "mês",
    quantity: "16 sucos (300 ml)",
    delivery: "4 por semana",
    features: [
      "16 sucos de 300ml por mês",
      "4 entregas por semana",
      "Entrega gratuita em Brasília - DF",
      "Sem contrato de fidelidade"
    ],
    popular: false,
    paymentLink: "https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=b1569b099c184088a5c721e82dcf5260"
  },
  {
    name: "🍹 Plus",
    description: "Mais economia, mais saúde",
    price: "188",
    period: "mês",
    quantity: "32 sucos (300 ml)",
    delivery: "8 por semana",
    features: [
      "32 sucos de 300ml por mês",
      "8 entregas por semana",
      "Entrega gratuita em Brasília - DF",
      "Economia de 2%",
      "Suporte prioritário"
    ],
    popular: true,
    paymentLink: "https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=711aaf388b4246dcb577b5d5b8839dec"
  },
  {
    name: "🍊 Premium",
    description: "Para toda a família",
    price: "370",
    period: "mês",
    quantity: "64 sucos (300 ml)",
    delivery: "16 por semana",
    features: [
      "64 sucos de 300ml por mês",
      "16 entregas por semana",
      "Entrega gratuita em Brasília - DF",
      "Economia de 3%",
      "Suporte prioritário VIP",
      "Brinde especial"
    ],
    popular: false,
    paymentLink: "https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=76e3bb5271f249f1baf174b3714b5465"
  }
];

const Plans = () => {
  return (
    <section id="planos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Escolha seu plano <span className="text-gradient">Tio Knupp</span> 🍹
          </h2>
          <p className="text-xl text-muted-foreground mb-2">
            Assine e receba sucos frescos todas as semanas
          </p>
          <p className="text-lg text-muted-foreground">
            Prontos para beber e cheios de energia natural
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
                <div className="mb-3">
                  <span className="text-5xl font-bold text-primary">R$ {plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-semibold text-foreground">
                    {plan.quantity}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {plan.delivery}
                  </div>
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
              
              <a 
                href={plan.paymentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full"
              >
                <Button 
                  variant={plan.popular ? "hero" : "outline"}
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <span>
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Assinar agora
                  </span>
                </Button>
              </a>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 space-y-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <div className="flex items-center gap-2 text-secondary">
              🟢 Entrega gratuita em Brasília - DF
            </div>
          </div>
          <p className="text-muted-foreground">
            💚 Cancele quando quiser, sem taxas ou multas
          </p>
        </div>
      </div>
    </section>
  );
};

export default Plans;
