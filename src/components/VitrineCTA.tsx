import { Button } from "@/components/ui/button";
import { ShoppingBag, Clock, Package, CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";

const VitrineCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-secondary/10 via-accent/5 to-primary/10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Explore Nossa Vitrine Online
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubra centenas de produtos exclusivos para seu pet. Compre diretamente da nossa vitrine digital com preços especiais!
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-elegant transition-smooth text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                Catálogo Completo
              </h3>
              <p className="text-sm text-muted-foreground">
                Todos os nossos produtos em um só lugar
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-elegant transition-smooth text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                <Clock className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                Disponível 24/7
              </h3>
              <p className="text-sm text-muted-foreground">
                Faça seus pedidos a qualquer hora
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-elegant transition-smooth text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <Package className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                Envio Rápido
              </h3>
              <p className="text-sm text-muted-foreground">
                Entrega ágil para todo Brasil
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-elegant transition-smooth text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <CreditCard className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                Preços Especiais
              </h3>
              <p className="text-sm text-muted-foreground">
                Ofertas exclusivas para atacado
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/vitrine')}
              className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 md:px-12 py-6 md:py-8 text-lg md:text-xl transition-smooth shadow-elegant hover:scale-105"
            >
              <ShoppingBag className="w-6 h-6 mr-2" />
              Acessar Vitrine Agora
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              💎 Acesso instantâneo • Sem cadastro necessário
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VitrineCTA;
