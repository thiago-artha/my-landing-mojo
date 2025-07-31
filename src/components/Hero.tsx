import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-artha-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-lg rotate-45 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border border-white/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8 border border-white/20">
            <span className="mr-2">⚓</span>
            30 anos de experiência combinada
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Conectamos seu negócio
            <span className="block text-accent"> ao mundo</span>
            <span className="block text-3xl lg:text-5xl font-light opacity-90">
              com transparência e propósito
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Especialistas em importação marítima que transformam a complexidade do comércio exterior 
            em soluções simples e eficientes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 text-lg font-semibold shadow-accent group transition-all duration-300 hover:scale-105"
            >
              Solicitar Cotação Gratuita
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm group transition-all duration-300"
            >
              <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Falar com Especialista
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-accent mb-1">30+</div>
              <div className="text-sm opacity-80">Anos de Experiência</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-accent mb-1">100%</div>
              <div className="text-sm opacity-80">Transparência</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-accent mb-1">24/7</div>
              <div className="text-sm opacity-80">Rastreamento</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};