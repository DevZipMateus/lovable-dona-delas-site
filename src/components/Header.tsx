import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Se não estiver na página principal, navegar primeiro
    if (location.pathname !== '/') {
      navigate('/');
      // Esperar um momento para a página carregar antes de fazer scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerHeight = 80;
          const elementPosition = element.offsetTop - headerHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // Já está na página principal, fazer scroll direto
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-soft' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 md:space-x-3 cursor-pointer" onClick={() => navigate('/')}>
            <img src="/logo.jpg" alt="Ateliê Dona Delas" className="h-10 w-10 md:h-12 md:w-12 rounded-full shadow-soft" />
            <div>
              <h2 className="text-lg md:text-xl font-bold text-foreground">Ateliê Dona Delas</h2>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Serviços
            </button>
            <Link 
              to="/vitrine"
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Vitrine
            </Link>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Contato
            </button>
            <Button 
              onClick={() => window.open('https://wa.me/5531993125919', '_blank')}
              variant="default"
              className="bg-primary hover:bg-primary-dark text-primary-foreground transition-smooth flex items-center gap-2"
            >
              <img 
                src="/whatsapp-icon.webp" 
                alt="WhatsApp" 
                className="w-4 h-4 object-contain"
              />
              WhatsApp
            </Button>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border shadow-soft">
            <nav className="flex flex-col space-y-1 p-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left py-3 px-2 text-foreground hover:text-primary transition-smooth font-medium"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left py-3 px-2 text-foreground hover:text-primary transition-smooth font-medium"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-left py-3 px-2 text-foreground hover:text-primary transition-smooth font-medium"
              >
                Serviços
              </button>
              <Link 
                to="/vitrine"
                onClick={() => setIsMenuOpen(false)}
                className="text-left py-3 px-2 text-foreground hover:text-primary transition-smooth font-medium"
              >
                Vitrine
              </Link>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-left py-3 px-2 text-foreground hover:text-primary transition-smooth font-medium"
              >
                Contato
              </button>
               <Button 
                onClick={() => window.open('https://wa.me/5531993125919', '_blank')}
                variant="default"
                className="mt-4 bg-primary hover:bg-primary-dark text-primary-foreground transition-smooth flex items-center gap-2"
              >
                <img 
                  src="/whatsapp-icon.webp" 
                  alt="WhatsApp" 
                  className="w-4 h-4 object-contain"
                />
                WhatsApp
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;