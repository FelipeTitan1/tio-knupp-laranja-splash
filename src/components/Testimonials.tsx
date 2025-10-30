import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marina",
    role: "Assinante Plus",
    text: "Perfeito para minha rotina corrida! O sabor é natural de verdade.",
    rating: 5
  },
  {
    name: "Fernando",
    role: "Gerente de Hotel",
    text: "Uso nos cafés da manhã do hotel. Padrão excelente.",
    rating: 5
  },
  {
    name: "Carla",
    role: "Assinante Premium",
    text: "Minha família adora! As crianças pedem todo dia. É saúde garantida.",
    rating: 5
  },
  {
    name: "Roberto",
    role: "Assinante Padrão",
    text: "Comecei a tomar para melhorar minha imunidade. Melhor decisão!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Quem ama saúde, <span className="text-gradient">ama Tio Knupp</span> ⭐
          </h2>
          <p className="text-xl text-muted-foreground">
            Depoimentos reais de quem já faz parte da família Tio Knupp
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
