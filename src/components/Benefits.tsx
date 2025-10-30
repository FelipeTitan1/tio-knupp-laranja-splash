import { Leaf, Heart, Zap, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Apenas laranjas frescas e nada mais. Sem conservantes, corantes ou aditivos artificiais.",
    color: "text-secondary"
  },
  {
    icon: Heart,
    title: "Saúde em Primeiro Lugar",
    description: "Rico em vitamina C, antioxidantes e nutrientes essenciais para seu bem-estar.",
    color: "text-primary"
  },
  {
    icon: Zap,
    title: "Energia Natural",
    description: "Comece seu dia com energia de verdade, direto da natureza para você.",
    color: "text-accent"
  },
  {
    icon: Shield,
    title: "Qualidade Garantida",
    description: "Selecionamos as melhores laranjas e entregamos com todo cuidado na sua casa.",
    color: "text-primary"
  }
];

const Benefits = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Por que escolher o <span className="text-gradient">Tio Knupp</span>?
          </h2>
          <p className="text-xl text-muted-foreground">
            Compromisso com a sua saúde e sabor incomparável
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none bg-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${benefit.color} mb-4`}>
                <benefit.icon className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
