import Header from "@/components/Header";
import { useEffect, useState } from "react";

const Vitrine = () => {
  const [iframeHeight, setIframeHeight] = useState(0);

  useEffect(() => {
    const calculateHeight = () => {
      // 100vh - 80px (header) - 63px (badge inferior)
      const height = window.innerHeight - 80 - 63;
      setIframeHeight(height);
    };

    calculateHeight();
    window.addEventListener('resize', calculateHeight);
    
    // Travar scroll da página
    document.body.style.overflow = 'hidden';
    
    // Carregar o script do badge MonteSite
    const script = document.createElement('script');
    script.src = 'https://vaabpicspdbolvutnscp.supabase.co/functions/v1/get-footer-iframe';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      window.removeEventListener('resize', calculateHeight);
      // Restaurar scroll quando sair da página
      document.body.style.overflow = 'auto';
      // Limpar o script quando o componente desmontar
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Header />
      <main className="flex-1 w-full" style={{ height: `${iframeHeight}px` }}>
        <iframe 
          src="https://biancaastropetmgcombr.egestor.com.br/vitrine/" 
          style={{ width: '100%', height: '100%', border: 'none' }}
          title="Demonstração de Vitrine"
        />
      </main>
      {/* Rodapé MonteSite - Atualização Automática */}
      <div id="montesite-footer-badge"></div>
    </div>
  );
};

export default Vitrine;
