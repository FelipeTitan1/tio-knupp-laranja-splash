import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona a assinatura?",
    answer: "Você escolhe o plano ideal, fazemos as entregas programadas na sua casa e você recebe suco fresco sempre que precisar. Pode pausar ou cancelar a qualquer momento, sem burocracias."
  },
  {
    question: "O suco realmente é natural?",
    answer: "Sim! Nosso suco é 100% natural, feito apenas com laranjas frescas selecionadas. Não adicionamos água, açúcar, conservantes ou qualquer outro ingrediente artificial."
  },
  {
    question: "Qual é a validade do suco?",
    answer: "Nosso suco é 100% natural, sem conservantes nem aditivos. Após a entrega, recomendamos manter refrigerado entre 0 °C e 5 °C. Nessa condição, ele mantém o sabor e os nutrientes por até 3 dias. Para o sabor mais fresco (como se tivesse sido espremido na hora), o ideal é consumir em até 24 horas. 💡 Dica: se quiser armazenar por mais tempo, pode congelar o suco — ele preserva o sabor e os nutrientes por até 30 dias no freezer."
  },
  {
    question: "Como é feita a entrega?",
    answer: "Entregamos em embalagens térmicas que mantêm o suco fresquinho. Você escolhe os dias e horários mais convenientes para receber suas entregas."
  },
  {
    question: "Posso pausar minha assinatura?",
    answer: "Claro! Você tem total flexibilidade. Pode pausar por até 30 dias ou cancelar quando quiser, sem taxas ou multas."
  },
  {
    question: "Qual a região de entrega?",
    answer: "Atualmente entregamos em toda Brasília. Entre em contato pelo WhatsApp para confirmar se atendemos sua região."
  }
];

const FAQ = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Perguntas <span className="text-gradient">frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Tire suas dúvidas sobre nosso suco e assinatura
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s', willChange: 'transform, opacity' }}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="gpu-accelerate">
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
