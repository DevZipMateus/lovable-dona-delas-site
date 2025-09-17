import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="lg"
        onClick={() => window.open('https://wa.me/5531993125919', '_blank')}
        className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-elegant rounded-full w-14 h-14 p-0 transition-smooth hover:scale-105"
        aria-label="Entrar em contato via WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default WhatsAppButton;