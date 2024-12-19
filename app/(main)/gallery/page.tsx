"use client"
import { Footer } from "@/src/components/layouts/footer";
import { Navbar } from "@/src/components/layouts/navbar";
import PageHero from "@/src/components/layouts/page-hero";
import { Button } from "@/src/components/ui/button";
import { motion } from "framer-motion";

import { Instagram } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Gallery(){
const [selectedCategory, setSelectedCategory] = useState("all"); // État pour la catégorie sélectionnée
  const categories = [
    { id: "all", name: "Tous" },
    { id: "cuts", name: "Coupes" },
    { id: "color", name: "Colorations" },
    { id: "styling", name: "Coiffures" },
    { id: "wedding", name: "Mariages" },
  ];

  const images = [
    {
      url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      title: "Coupe Moderne",
      category: "cuts",
      description: "Une coupe tendance qui met en valeur les traits du visage"
    },
    {
      url: "https://imgs.search.brave.com/ZZ2wLw8IBijp6rgJRFZczJrnFV9dQKpK5mjf4lDN0c8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibGFx/dWUuZnIvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjIvMDMvYnV0/dGVyZmx5LWxvY2tz/LndlYnA",
      title: "Coloration Vibrante",
      category: "color",
      description: "Des couleurs éclatantes pour un look unique"
    },
    {
      url: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      title: "Coiffure de Mariage",
      category: "wedding",
      description: "Une coiffure élégante pour votre grand jour"
    },
    {
      url: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      title: "Soins Capillaires",
      category: "styling",
      description: "Des soins professionnels pour des cheveux sains"
    },
    {
      url: "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      title: "Brushing",
      category: "styling",
      description: "Un brushing parfait pour une finition impeccable"
    },
    {
      url: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      title: "Tresses",
      category: "styling",
      description: "Des tresses sophistiquées pour tous les styles"
    },
    // {
    //   url: "https://images.unsplash.com/photo-1560869713-da86a9ec0744?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    //   title: "Coupe Homme",
    //   category: "cuts",
    //   description: "Des coupes modernes pour hommes"
    // },
    // {
    //   url: "https://images.unsplash.com/photo-1522337094846-8a818d7aad7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    //   title: "Balayage",
    //   category: "color",
    //   description: "Un balayage naturel et lumineux"
    // },
  ];

  const filteredImages = selectedCategory === "all" 
    ? images 
    : images.filter(image => image.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero 
        title="Notre Galerie" 
        subtitle="Découvrez nos plus belles réalisations et laissez-vous inspirer"
        backgroundImage="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
      
      <section className="py-16 px-5 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Bienvenue dans notre galerie</h2>
          <p className="mb-8 text-center">
            Explorez notre collection de coiffures et de styles. Chaque image représente notre passion pour la beauté et le soin des cheveux. Que vous cherchiez une inspiration pour votre prochaine coupe ou simplement à admirer notre travail, vous êtes au bon endroit.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant="outline"
                className={`hover:bg-primary hover:text-white transition-colors ${selectedCategory === category.id ? 'bg-primary text-white' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg shadow-lg bg-white"
              >
                <div className="relative h-80">
                  <Image
                    src={image.url}
                    alt={image.title}
                    width={250}
                    height={250}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                      <p className="text-sm text-white/90">{image.description}</p>
                      <p className="text-xs text-white/70">Découvrez ce style unique qui met en valeur votre personnalité.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button className="bg-salon-primary hover:bg-salon-primary/90">
              <Instagram className="w-5 h-5 mr-2" />
              Suivez-nous sur Instagram
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

