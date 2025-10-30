import { Heart } from "lucide-react";
const Footer = () => {
  return <footer className="bg-muted/50 py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">Tio Knupp</h3>
            <p className="text-muted-foreground mb-4">
              Suco natural de laranja 100% fresco, direto da natureza para sua casa.
            </p>
            <p className="text-sm text-muted-foreground">
              📍 Ceilândia | @tioknupp
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>WhatsApp: (61) 9 81149615</p>
              <p>Email: contato@tioknupp.com.br</p>
              <p>Horário: Seg-Sex, 8h-18h</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Valores</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>🍊 100% natural</p>
              <p>🚫 Sem conservantes</p>
              <p>💛 Produzido com amor</p>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-border">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Feito com <Heart className="h-4 w-4 fill-primary text-primary" /> por Tio Knupp • 2025
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;