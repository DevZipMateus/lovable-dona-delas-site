import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-secondary rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-primary rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo central */}
          <div className="mb-8">
            <img 
              src="/logo.jpg" 
              alt="Ateliê Dona Delas" 
              className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full shadow-elegant"
            />
          </div>

          {/* H1 - Nome da empresa */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Ateliê Dona Delas
          </h1>

          {/* H2 - Descrição da empresa */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 leading-relaxed">
            Unimos carinho, criatividade e dedicação para transformar o estilo dos pets em algo único e cheio de personalidade
          </h2>

          {/* Destaques */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-soft">
              <Heart className="w-5 h-5 text-secondary" />
              <span className="text-sm font-medium text-card-foreground">Feito com amor</span>
            </div>
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-soft">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-card-foreground">Qualidade premium</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={() => window.open('https://wa.me/5531993125919', '_blank')}
              className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-6 text-lg transition-smooth shadow-soft hover:shadow-elegant"
            >
              Faça seu pedido
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById('servicos');
                if (element) {
                  const headerHeight = 80;
                  const elementPosition = element.offsetTop - headerHeight;
                  window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className="bg-background/10 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary px-8 py-6 text-lg transition-smooth backdrop-blur-sm"
            >
              Conheça nossos produtos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;