import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scissors, Palette, Crown, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Laços elegantes",
      description: "Laços delicados e sofisticados para deixar seu pet ainda mais charmoso. Diversos tamanhos, cores e estampas disponíveis.",
      features: ["Diversos tamanhos", "Cores variadas", "Acabamento premium", "Confortável"]
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Gravatas estilosas",
      description: "Gravatas clássicas e modernas para pets que adoram estar sempre bem vestidos. Perfeitas para ocasiões especiais.",
      features: ["Design clássico", "Fácil de usar", "Materiais nobres", "Ajuste perfeito"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Bandanas personalizadas",
      description: "Bandanas únicas com estampas exclusivas. Ideais para o dia a dia ou eventos especiais do seu pet.",
      features: ["Estampas exclusivas", "Tecidos macios", "Lavável", "Resistente"]
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Coleções especiais",
      description: "Coleções temáticas e sazonais que encantam pela originalidade e atenção aos detalhes.",
      features: ["Edição limitada", "Designs únicos", "Alta qualidade", "Exclusividade"]
    }
  ];

  return (
    <section id="servicos" className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Nossos serviços
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2 md:px-0">
              Fabricamos e distribuímos acessórios únicos para pets, com qualidade premium e designs exclusivos
            </p>
          </div>

          {/* Services grid */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-smooth shadow-soft bg-card border-border/50">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl md:text-2xl text-card-foreground">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-card-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant="outline"
                    className="w-full bg-background/50 border-primary/30 text-card-foreground hover:bg-primary/10 hover:border-primary transition-smooth flex items-center gap-2"
                    onClick={() => window.open('https://wa.me/5531993125919', '_blank')}
                  >
                    <img 
                      src="/whatsapp-icon.webp" 
                      alt="WhatsApp" 
                      className="w-4 h-4 object-contain"
                    />
                    Solicitar orçamento
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-primary text-primary-foreground shadow-elegant">
            <CardContent className="p-6 md:p-8 lg:p-12 text-center">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
                Pronto para deixar seu pet ainda mais estiloso?
              </h3>
              <p className="text-sm md:text-base lg:text-lg mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
                Entre em contato conosco e descubra como podemos transformar o visual do seu pet com nossos acessórios únicos e de alta qualidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Button 
                  size="lg"
                  variant="secondary"
                  onClick={() => window.open('https://wa.me/5531993125919', '_blank')}
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-6 py-4 md:px-8 md:py-6 text-base md:text-lg transition-smooth shadow-soft flex items-center gap-2"
                >
                  <img 
                    src="/whatsapp-icon.webp" 
                    alt="WhatsApp" 
                    className="w-5 h-5 object-contain"
                  />
                  Fazer pedido no WhatsApp
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => window.open('https://www.instagram.com/ateliedonadelas?igsh=MTV0MHQzNGF3em1tMg==&utm_source=ig_contact_invite', '_blank')}
                  className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover:border-primary-foreground px-6 py-4 md:px-8 md:py-6 text-base md:text-lg transition-smooth backdrop-blur-sm"
                >
                  Ver no Instagram
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;