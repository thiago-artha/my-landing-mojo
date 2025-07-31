import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Calculator, Cog, Package } from "lucide-react";

const etapas = [
  {
    number: "01",
    icon: Search,
    title: "Análise",
    description: "Entendemos sua necessidade",
    details: "Analisamos seu produto, origem, quantidade e frequência de importação para criar a melhor estratégia logística."
  },
  {
    number: "02", 
    icon: Calculator,
    title: "Cotação",
    description: "Apresentamos a melhor solução",
    details: "Desenvolvemos uma proposta transparente com todas as etapas, custos e prazos detalhados."
  },
  {
    number: "03",
    icon: Cog,
    title: "Execução", 
    description: "Cuidamos de todo o processo",
    details: "Gerenciamos toda a operação: documentação, embarque, transporte e desembaraço aduaneiro."
  },
  {
    number: "04",
    icon: Package,
    title: "Entrega",
    description: "Sua carga chega com segurança",
    details: "Acompanhamento completo até a entrega final, com relatórios detalhados de todo o processo."
  }
];

export const Processo = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Como Trabalhamos
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Processo simplificado em 4 etapas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transformamos a complexidade do comércio internacional em um processo simples e transparente.
          </p>
        </div>

        <div className="relative">
          {/* Process Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-artha-blue-light to-accent transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {etapas.map((etapa, index) => (
              <Card 
                key={index}
                className="group hover:shadow-primary transition-all duration-300 hover:scale-105 bg-card border-border/50 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 text-center relative">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      {etapa.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mt-8 mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted group-hover:bg-primary/10 transition-colors">
                      <etapa.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {etapa.title}
                  </h3>
                  
                  <p className="text-primary font-medium mb-4">
                    {etapa.description}
                  </p>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {etapa.details}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-artha-gradient rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Pronto para simplificar suas importações?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos tornar seu processo de importação mais eficiente e econômico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-accent">
                Iniciar Processo
              </button>
              <button className="border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold backdrop-blur-sm transition-all duration-300">
                Falar com Consultor
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};