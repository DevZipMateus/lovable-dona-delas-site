import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-card-foreground mb-6">
              Entre em contato
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Estamos prontos para atender você e seu pet com todo o carinho e dedicação
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-card-foreground mb-6">
                  Fale conosco
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Entre em contato através dos nossos canais e descubra como podemos transformar 
                  o visual do seu pet com nossos acessórios únicos.
                </p>
              </div>

              <div className="space-y-6">
                {/* WhatsApp */}
                <Card className="shadow-soft hover:shadow-elegant transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-xl">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-card-foreground mb-2">WhatsApp</h4>
                        <p className="text-muted-foreground mb-3">(31) 99312-5919</p>
                        <Button 
                          size="sm"
                          onClick={() => window.open('https://wa.me/5531993125919', '_blank')}
                          className="bg-primary hover:bg-primary-dark text-primary-foreground transition-smooth"
                        >
                          Enviar mensagem
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card className="shadow-soft hover:shadow-elegant transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-secondary/10 p-3 rounded-xl">
                        <Mail className="w-6 h-6 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-card-foreground mb-2">E-mail</h4>
                        <p className="text-muted-foreground mb-3">ateliedonadelas@gmail.com</p>
                        <Button 
                          size="sm"
                          variant="outline"
                          onClick={() => window.open('mailto:ateliedonadelas@gmail.com', '_blank')}
                          className="bg-background/50 border-secondary/30 text-card-foreground hover:bg-secondary/10 hover:border-secondary transition-smooth"
                        >
                          Enviar e-mail
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Instagram */}
                <Card className="shadow-soft hover:shadow-elegant transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent/10 p-3 rounded-xl">
                        <Instagram className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-card-foreground mb-2">Instagram</h4>
                        <p className="text-muted-foreground mb-3">@ateliedonadelas</p>
                        <Button 
                          size="sm"
                          variant="outline"
                          onClick={() => window.open('https://www.instagram.com/ateliedonadelas?igsh=MTV0MHQzNGF3em1tMg==&utm_source=ig_contact_invite', '_blank')}
                          className="bg-background/50 border-accent/30 text-card-foreground hover:bg-accent/10 hover:border-accent transition-smooth"
                        >
                          Seguir no Instagram
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Business Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-card-foreground mb-6">
                  Informações da empresa
                </h3>
              </div>

              <div className="space-y-6">
                {/* Address */}
                <Card className="shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-xl">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-card-foreground mb-2">Endereço</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Rua Domingos de Oliveira, 360 - Loja 03<br />
                          Bairro São Geraldo<br />
                          Florestal - MG
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Business Hours */}
                <Card className="shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-secondary/10 p-3 rounded-xl">
                        <Clock className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-card-foreground mb-2">Horário de funcionamento</h4>
                        <div className="space-y-1 text-muted-foreground">
                          <p>Segunda a quinta: 07:00 às 17:00</p>
                          <p>Sexta: 07:00 às 16:00</p>
                          <p>Sábado e domingo: Fechado</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* CNPJ */}
                <Card className="shadow-soft">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h4 className="font-semibold text-card-foreground mb-2">CNPJ</h4>
                      <p className="text-muted-foreground">61.061.204/0001-27</p>
                    </div>
                  </CardContent>
                </Card>

                {/* CTA */}
                <Card className="bg-gradient-primary text-primary-foreground shadow-elegant">
                  <CardContent className="p-6 text-center">
                    <h4 className="font-bold text-lg mb-2">Pronto para fazer seu pedido?</h4>
                    <p className="mb-4 opacity-90">
                      Entre em contato agora e deixe seu pet ainda mais estiloso!
                    </p>
                    <Button 
                      variant="secondary"
                      onClick={() => window.open('https://wa.me/5531993125919', '_blank')}
                      className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-smooth"
                    >
                      Fazer pedido no WhatsApp
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;