import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Sparkles, Star } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-12 md:py-16 lg:py-20 bg-card">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-card-foreground mb-4 md:mb-6">
              Sobre nós
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2 md:px-0">
              Anos de experiência e amor pelo que fazemos, transformando pets em verdadeiras estrelas
            </p>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
            {/* Text content */}
            <div className="space-y-6">
              <p className="text-lg text-card-foreground leading-relaxed">
                No <strong>Ateliê Dona Delas</strong>, somos uma fábrica e distribuidora especializada em acessórios para pets. 
                Produzimos com qualidade e cuidado desde laços, gravatas e bandanas até coleções especiais que encantam em cada detalhe.
              </p>
              
              <p className="text-lg text-card-foreground leading-relaxed">
                Nossa missão é valorizar cada pet, tornando-os ainda mais charmosos e estilosos, enquanto apoiamos 
                pet shops, lojistas e tutores apaixonados. Cada peça é feita pensando no conforto e na alegria dos pets, 
                porque acreditamos que eles merecem sempre o melhor.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8">
                <div className="flex items-start gap-3">
                  <div className="bg-accent/20 p-2 rounded-lg flex-shrink-0">
                    <Award className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1 text-sm md:text-base">Qualidade</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">Materiais premium e acabamento impecável</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-secondary/20 p-2 rounded-lg flex-shrink-0">
                    <Heart className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1 text-sm md:text-base">Carinho</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">Cada peça feita com amor e dedicação</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary/20 p-2 rounded-lg flex-shrink-0">
                    <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1 text-sm md:text-base">Criatividade</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">Designs únicos e exclusivos</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-accent/20 p-2 rounded-lg flex-shrink-0">
                    <Star className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1 text-sm md:text-base">Comprometimento</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">Dedicação total aos nossos clientes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image placeholder */}
            <div className="relative">
              <Card className="overflow-hidden shadow-elegant">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-accent flex items-center justify-center">
                    <div className="text-center text-accent-foreground">
                      <Sparkles className="w-16 h-16 mx-auto mb-4 opacity-60" />
                      <p className="text-lg font-medium">Imagem dos produtos</p>
                      <p className="text-sm opacity-80">Acessórios únicos para pets</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Stats or highlights */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <Card className="text-center p-4 md:p-6 shadow-soft hover:shadow-elegant transition-smooth">
              <CardContent className="p-0">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-1 md:mb-2">100%</div>
                <div className="text-xs md:text-sm text-muted-foreground">Feito à mão</div>
              </CardContent>
            </Card>

            <Card className="text-center p-4 md:p-6 shadow-soft hover:shadow-elegant transition-smooth">
              <CardContent className="p-0">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-secondary mb-1 md:mb-2">+1000</div>
                <div className="text-xs md:text-sm text-muted-foreground">Pets felizes</div>
              </CardContent>
            </Card>

            <Card className="text-center p-4 md:p-6 shadow-soft hover:shadow-elegant transition-smooth">
              <CardContent className="p-0">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-accent mb-1 md:mb-2">Premium</div>
                <div className="text-xs md:text-sm text-muted-foreground">Qualidade</div>
              </CardContent>
            </Card>

            <Card className="text-center p-4 md:p-6 shadow-soft hover:shadow-elegant transition-smooth">
              <CardContent className="p-0">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-1 md:mb-2">MG</div>
                <div className="text-xs md:text-sm text-muted-foreground">Florestal</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;