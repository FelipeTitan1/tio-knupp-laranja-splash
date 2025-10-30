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
    answer: "Como nosso suco é 100% natural e sem conservantes, recomendamos consumir em até 24 horas após a entrega para garantir o máximo de frescor e nutrientes. Por isso fazemos entregas frequentes!"
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
    answer: "Atualmente entregamos em toda a Grande São Paulo. Entre em contato pelo WhatsApp para confirmar se atendemos sua região."
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
        
        <div className="max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
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
