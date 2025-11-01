import qualityProcess from "@/assets/quality-process.jpg";

const Quality = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1 animate-fade-in gpu-accelerate" style={{ willChange: 'transform, opacity' }}>
              <img
                src={qualityProcess}
                srcSet={qualityProcess}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 552px"
                alt="Processo artesanal de preparo do suco com laranjas frescas"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                width="1600"
                height="900"
                loading="lazy"
                decoding="async"
              />
            </div>
            
            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6 animate-fade-in" style={{ animationDelay: '0.2s', willChange: 'transform, opacity' }}>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Qualidade que você sente no{" "}
                <span className="text-gradient">primeiro gole</span> 🌿
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cada suco Tio Knupp é produzido com <strong className="text-foreground">laranjas selecionadas</strong>, 
                prensadas a frio e congeladas imediatamente para preservar o sabor, a cor e os nutrientes — 
                como se tivesse sido espremido na hora.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🍊</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Laranjas Premium</h3>
                    <p className="text-muted-foreground">Selecionamos apenas as melhores frutas, no ponto ideal de maturação.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="text-2xl">❄️</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Prensagem a Frio</h3>
                    <p className="text-muted-foreground">Processo que mantém todos os nutrientes e o sabor natural intactos.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="text-2xl">⚡</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Congelamento Imediato</h3>
                    <p className="text-muted-foreground">Preservamos o frescor logo após a extração para você ter a melhor experiência.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
