/* eslint-disable react/no-unescaped-entities */
"use client"

import { Scissors, Brush, Sparkles, Palette, Gem, Star } from "lucide-react";


import { HomeHero } from "@/src/components/layouts/home-hero";
import { Navbar } from "@/src/components/layouts/navbar";
import { Footer } from "@/src/components/layouts/footer";
import { ServiceCard } from "@/src/components/layouts/service-card";
import { WhyChooseUs } from "@/src/components/layouts/why-choose-us";
import { Gallery } from "@/src/components/layouts/gallery";
import { Team } from "@/src/components/layouts/team";
import { Testimonials } from "@/src/components/layouts/testimonials";
import Image from "next/image";
import { motion } from 'framer-motion';

export default function Home(){
  const services = [
    {
      icon: Scissors,
      title: "Coiffure",
      description: "Des coupes et coiffures personnalisées par nos experts stylistes.",
      category: "Coiffure",
      price: "À partir de 21,000 FCFA",
    },
    {
      icon: Gem,
      title: "Onglerie",
      description: "Manucure et pédicure professionnelles pour des ongles parfaits.",
      category: "Onglerie",
      price: "À partir de 13,500 FCFA",
    },
    {
      icon: Brush,
      title: "Make-up",
      description: "Maquillage professionnel pour toutes vos occasions spéciales.",
      category: "Make-up",
      price: "À partir de 15,000 FCFA",
    },
    {
      icon: Palette,
      title: "Produits Cosmétiques",
      description: "Une sélection de produits de beauté haut de gamme.",
      category: "Cosmétiques",
      price: "Variable",
    },
    {
      icon: Sparkles,
      title: "Soins",
      description: "Des soins personnalisés pour sublimer votre beauté naturelle.",
      category: "Soins",
      price: "À partir de 10,500 FCFA",
    },
    {
      icon: Star,
      title: "Divers",
      description: "Services divers pour répondre à tous vos besoins de beauté.",
      category: "Divers",
      price: "Variable",
    },
    {
      icon: Scissors,
      title: "Extensions de Cheveux",
      description: "Extensions de cheveux de haute qualité pour un look volumineux.",
      category: "Extensions",
      price: "À partir de 30,000 FCFA",
    },
    {
      icon: Brush,
      title: "Coloration",
      description: "Coloration professionnelle pour un style unique.",
      category: "Coloration",
      price: "À partir de 27,000 FCFA",
    },
    {
      icon: Gem,
      title: "Soin du Visage",
      description: "Soin du visage pour une peau éclatante et revitalisée.",
      category: "Soin du Visage",
      price: "À partir de 18,000 FCFA",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <HomeHero />
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap');
      `}</style>

      <section className="py-20 px-5 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-900">
                Bienvenue à Logo
              </h2>
              <p className="text-lg text-gray-600" style={{ fontFamily: 'Alex Brush, cursive' }}>
                Découvrez un espace où l'élégance rencontre l'expertise. Notre salon de coiffure est bien plus qu'un simple lieu de beauté - c'est un sanctuaire où votre style personnel prend vie.
              </p>
              <p className="text-lg text-gray-600">
                Avec une équipe de professionnels passionnés et des services sur mesure, nous nous engageons à créer une expérience unique qui met en valeur votre beauté naturelle.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <Image
                src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Notre salon"
                className="rounded-lg shadow-xl"
                width={450}
                height={450}
              />
              <div className="absolute -bottom-6 -right-6  p-4 rounded-lg shadow-lg">
                <p className="text-2xl font-bold text-primary">10+</p>
                <p className="text-gray-600">Années d'expérience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-5 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez notre gamme complète de services de beauté professionnels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <Gallery />
      <Team />
      <Testimonials />
      <Footer />
    </div>
  );
};

