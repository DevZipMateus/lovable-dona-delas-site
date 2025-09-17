import { Heart, Instagram, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src="/logo.jpg" alt="Ateliê Dona Delas" className="h-12 w-12 rounded-full shadow-soft" />
                <div>
                  <h3 className="text-xl font-bold">Ateliê Dona Delas</h3>
                </div>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed">
                Acessórios únicos para pets, feitos com carinho, criatividade e dedicação.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contato</h4>
              <div className="space-y-3">
                <a 
                  href="https://wa.me/5531993125919"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  <Phone className="w-4 h-4" />
                  (31) 99312-5919
                </a>
                <a 
                  href="mailto:ateliedonadelas@gmail.com"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  <Mail className="w-4 h-4" />
                  ateliedonadelas@gmail.com
                </a>
                <a 
                  href="https://www.instagram.com/ateliedonadelas?igsh=MTV0MHQzNGF3em1tMg==&utm_source=ig_contact_invite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  <Instagram className="w-4 h-4" />
                  @ateliedonadelas
                </a>
              </div>
            </div>

            {/* Business Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Informações</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>Rua Domingos de Oliveira, 360 - Loja 03</p>
                <p>Bairro São Geraldo, Florestal - MG</p>
                <p>CNPJ: 61.061.204/0001-27</p>
              </div>
              <div className="space-y-1 text-primary-foreground/80">
                <p className="font-medium">Horário:</p>
                <p>Seg-Qui: 07:00 às 17:00</p>
                <p>Sex: 07:00 às 16:00</p>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-primary-foreground/80 text-sm">
                © {new Date().getFullYear()} Ateliê Dona Delas. Todos os direitos reservados.
              </p>
              <div className="flex items-center gap-2 text-primary-foreground/80 text-sm">
                <span>Feito com</span>
                <Heart className="w-4 h-4 text-secondary" />
                <span>para pets especiais</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;