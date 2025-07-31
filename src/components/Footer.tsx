import { Anchor, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center mr-3">
                <Anchor className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold">Artha Shipping</h3>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-md">
              Meaningful partnerships in global trade. Transformamos a complexidade do comércio internacional 
              em soluções simples e eficientes para o crescimento do seu negócio.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navegação</h4>
            <ul className="space-y-3">
              <li>
                <a href="#sobre" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#processo" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Como Trabalhamos
                </a>
              </li>
              <li>
                <a href="#contato" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">Mogi das Cruzes - SP</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">(11) XXXX-XXXX</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">contato@arthashipping.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Artha Shipping. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};