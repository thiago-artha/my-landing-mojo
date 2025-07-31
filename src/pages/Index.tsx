import { Hero } from "@/components/Hero";
import { Diferenciais } from "@/components/Diferenciais";
import { Servicos } from "@/components/Servicos";
import { Processo } from "@/components/Processo";
import { Contato } from "@/components/Contato";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Diferenciais />
      <Servicos />
      <Processo />
      <Contato />
      <Footer />
    </div>
  );
};

export default Index;
