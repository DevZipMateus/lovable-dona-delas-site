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
    
    return () => window.removeEventListener('resize', calculateHeight);
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
    </div>
  );
};

export default Vitrine;
