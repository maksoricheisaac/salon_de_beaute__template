import { Button } from "@/src/components/ui/button";
import Link from "next/link";


export const HomeHero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30" />
      </div>

      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
            Redécouvrez votre beauté avec nos coiffures sur-mesure
          </h1>
          <p className="text-xl text-white/90 mb-8 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            Laissez nos experts sublimer votre beauté naturelle avec des soins personnalisés
            et des coiffures adaptées à votre style.
          </p>
          <div className="space-x-4 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg mb-2"
            >
              <Link href="/appointment">Prendre rendez-vous</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white px-8 py-6 text-lg mb-2"
            >
              <Link href="/services">Nos services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
