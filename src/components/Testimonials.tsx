import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    location: "São Paulo, SP",
    text: "O melhor suco de laranja que já tomei! Fresco, saboroso e chega sempre na hora certa. Minha família adora!",
    rating: 5
  },
  {
    name: "João Santos",
    location: "Rio de Janeiro, RJ",
    text: "Comecei a tomar para melhorar minha saúde e não consigo mais ficar sem. É como ter uma laranjeira em casa!",
    rating: 5
  },
  {
    name: "Ana Paula",
    location: "Belo Horizonte, MG",
    text: "A praticidade de receber em casa o suco natural faz toda diferença na correria do dia a dia. Recomendo muito!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O que nossos clientes <span className="text-gradient">dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Histórias reais de quem transformou sua rotina com o Tio Knupp
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div>
                <div className="font-bold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.location}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
