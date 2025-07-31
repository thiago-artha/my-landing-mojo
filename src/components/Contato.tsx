import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MessageCircle, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contato = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
    produto: "",
    paisOrigem: "",
    frequencia: "",
    mensagem: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Cotação solicitada com sucesso!",
      description: "Nossa equipe entrará em contato em até 2 horas úteis.",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-muted/20" id="contato">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Fale Conosco
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Pronto para transportar com mais eficiência?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Solicite sua cotação gratuita e descubra como podemos otimizar suas importações.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6 animate-slide-up">
            <Card className="bg-card border-border/50">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary flex items-center">
                  <Phone className="mr-3 h-5 w-5" />
                  Telefone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">(11) 98786-7508</p>
                <p className="text-sm text-muted-foreground mt-1">Horário comercial: 8h às 18h</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary flex items-center">
                  <Mail className="mr-3 h-5 w-5" />
                  E-mail
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">contato@arthashipping.com.br</p>
                <p className="text-sm text-muted-foreground mt-1">Resposta em até 2h úteis</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary flex items-center">
                  <MapPin className="mr-3 h-5 w-5" />
                  Localização
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Mogi das Cruzes - SP</p>
                <p className="text-sm text-muted-foreground mt-1">Atendimento em todo o Brasil</p>
              </CardContent>
            </Card>

            <Button className="w-full bg-green-600 hover:bg-green-700 text-white" size="lg">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp - Falar Agora
            </Button>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="bg-card border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">
                  Solicitar Cotação Gratuita
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome Completo *</Label>
                      <Input
                        id="nome"
                        value={formData.nome}
                        onChange={(e) => handleChange('nome', e.target.value)}
                        required
                        className="border-border/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="empresa">Empresa *</Label>
                      <Input
                        id="empresa"
                        value={formData.empresa}
                        onChange={(e) => handleChange('empresa', e.target.value)}
                        required
                        className="border-border/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        required
                        className="border-border/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telefone">Telefone *</Label>
                      <Input
                        id="telefone"
                        value={formData.telefone}
                        onChange={(e) => handleChange('telefone', e.target.value)}
                        required
                        className="border-border/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="produto">Produto a Importar *</Label>
                      <Input
                        id="produto"
                        value={formData.produto}
                        onChange={(e) => handleChange('produto', e.target.value)}
                        required
                        className="border-border/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="paisOrigem">País de Origem *</Label>
                      <Input
                        id="paisOrigem"
                        value={formData.paisOrigem}
                        onChange={(e) => handleChange('paisOrigem', e.target.value)}
                        required
                        className="border-border/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="frequencia">Frequência de Importação</Label>
                    <Select onValueChange={(value) => handleChange('frequencia', value)}>
                      <SelectTrigger className="border-border/50">
                        <SelectValue placeholder="Selecione a frequência" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="primeira-vez">Primeira importação</SelectItem>
                        <SelectItem value="mensal">Mensal</SelectItem>
                        <SelectItem value="trimestral">Trimestral</SelectItem>
                        <SelectItem value="semestral">Semestral</SelectItem>
                        <SelectItem value="anual">Anual</SelectItem>
                        <SelectItem value="conforme-demanda">Conforme demanda</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensagem">Mensagem/Observações</Label>
                    <Textarea
                      id="mensagem"
                      value={formData.mensagem}
                      onChange={(e) => handleChange('mensagem', e.target.value)}
                      className="border-border/50 min-h-[100px]"
                      placeholder="Conte-nos mais detalhes sobre sua necessidade..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-accent transition-all duration-300 hover:scale-105"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Receber Cotação
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    * Campos obrigatórios. Seus dados estão protegidos e não serão compartilhados.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};