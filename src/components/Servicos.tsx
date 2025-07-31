import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Anchor, Calculator, FileText, MapPin, Users } from "lucide-react";

const servicos = [
  {
    icon: Anchor,
    title: "Freight Forwarding Internacional",
    description: "Gestão completa da logística marítima para suas importações, com as melhores rotas e prazos.",
    features: ["Consolidação de cargas", "Documentação completa", "Seguro de transporte"]
  },
  {
    icon: Calculator,
    title: "Cotações Competitivas",
    description: "Orçamentos transparentes e detalhados, com as melhores tarifas do mercado internacional.",
    features: ["Preços em tempo real", "Múltiplas opções", "Sem taxas ocultas"]
  },
  {
    icon: FileText,
    title: "Documentação Completa",
    description: "Cuidamos de toda a burocracia e documentação necessária para suas importações.",
    features: ["Licenças de importação", "Certificados", "Desembaraço aduaneiro"]
  },
  {
    icon: MapPin,
    title: "Rastreamento 100% Digital",
    description: "Acompanhe sua carga em tempo real, desde a origem até o destino final.",
    features: ["Portal online", "Alertas automáticos", "Relatórios detalhados"]
  },
  {
    icon: Users,
    title: "Consultoria em Comércio Exterior",
    description: "Orientação especializada para otimizar seus processos de importação e reduzir custos.",
    features: ["Análise de viabilidade", "Classificação fiscal", "Estratégias logísticas"]
  }
];

export const Servicos = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Nossos Serviços
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Soluções completas para sua importação
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos um portfólio completo de serviços para tornar suas importações mais eficientes e seguras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicos.map((servico, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-primary transition-all duration-300 hover:scale-105 bg-card border-border/50 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                  <servico.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {servico.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {servico.description}
                </p>
                
                <div className="space-y-2">
                  {servico.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};