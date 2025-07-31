import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Settings, Eye } from "lucide-react";

const diferenciais = [
  {
    icon: Eye,
    title: "Transparência Total",
    description: "Processos claros, custos reais, sem surpresas. Você acompanha cada etapa do seu processo de importação.",
    color: "text-accent"
  },
  {
    icon: Shield,
    title: "Experiência Comprovada",
    description: "30 anos combinados no mercado internacional. Nossa expertise é o seu diferencial competitivo.",
    color: "text-primary"
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Cada cliente é uma parceria única. Soluções customizadas para suas necessidades específicas.",
    color: "text-artha-blue-light"
  },
  {
    icon: Settings,
    title: "Soluções Adaptáveis",
    description: "Flexibilidade para suas necessidades específicas. Crescemos junto com o seu negócio.",
    color: "text-secondary"
  }
];

export const Diferenciais = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Por que escolher a Artha Shipping?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transformamos a complexidade do comércio internacional em parcerias significativas que impulsionam o crescimento do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {diferenciais.map((item, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-primary transition-all duration-300 hover:scale-105 border-border/50 bg-card/50 backdrop-blur-sm animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`h-8 w-8 ${item.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};