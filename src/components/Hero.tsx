import { Button } from "@/components/ui/button";
import { Heart, Sparkles, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  
  return <section id="inicio" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: 'url(/hero-background.jpg)'
    }} />
      
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-secondary/70 to-accent/60"></div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-4 md:left-10 w-16 h-16 md:w-20 md:h-20 bg-accent rounded-full blur-xl"></div>
        <div className="absolute top-32 md:top-40 right-4 md:right-20 w-24 h-24 md:w-32 md:h-32 bg-secondary rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 md:w-24 md:h-24 bg-primary rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo central */}
          <div className="mb-6 md:mb-8">
            <img src="/logo.jpg" alt="Ateliê Dona Delas" className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 mx-auto rounded-full shadow-elegant" />
          </div>

          {/* H1 - Nome da empresa */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
            Ateliê Dona Delas
          </h1>

          {/* H2 - Descrição da empresa */}
          <h2 className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 leading-relaxed px-2 md:px-0 text-black lg:text-4xl">
            Unimos carinho, criatividade e dedicação para transformar o estilo dos pets em algo único e cheio de personalidade
          </h2>

          {/* Destaques */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-10 px-2">
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-3 py-2 md:px-4 md:py-2 shadow-soft">
              <Heart className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
              <span className="text-xs md:text-sm font-medium text-card-foreground">Feito com amor</span>
            </div>
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-3 py-2 md:px-4 md:py-2 shadow-soft">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-accent" />
              <span className="text-xs md:text-sm font-medium text-card-foreground">Qualidade premium</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4 sm:px-0">
            <Button size="lg" onClick={() => navigate('/vitrine')} className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-4 md:px-8 md:py-6 text-base md:text-lg transition-smooth shadow-soft hover:shadow-elegant flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              Ver Vitrine
            </Button>
            <Button size="lg" onClick={() => window.open('https://wa.me/5531993125919', '_blank')} className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-primary-foreground px-6 py-4 md:px-8 md:py-6 text-base md:text-lg transition-smooth shadow-soft hover:shadow-elegant">
              Faça seu pedido
            </Button>
            <Button size="lg" variant="outline" onClick={() => {
            const element = document.getElementById('servicos');
            if (element) {
              const headerHeight = 80;
              const elementPosition = element.offsetTop - headerHeight;
              window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
              });
            }
          }} className="w-full sm:w-auto bg-background/10 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary px-6 py-4 md:px-8 md:py-6 text-base md:text-lg transition-smooth backdrop-blur-sm">
              Conheça nossos produtos
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;