/* eslint-disable react/no-unescaped-entities */
"use client"


import { Footer } from "@/src/components/layouts/footer";
import { Navbar } from "@/src/components/layouts/navbar";
import PageHero from "@/src/components/layouts/page-hero";
import { Team } from "@/src/components/layouts/team";
import { motion } from "framer-motion";
import { Award, Clock, Heart, Sparkles } from "lucide-react";
import Image from "next/image";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "Notre passion pour la coiffure se reflète dans chaque service que nous offrons."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque coupe, chaque couleur, chaque style."
    },
    {
      icon: Clock,
      title: "Expérience",
      description: "Plus de 10 ans d'expérience dans la création de looks uniques."
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Toujours à la pointe des dernières tendances et techniques."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero 
        title="À Propos de Nous" 
        subtitle="Découvrez l'histoire et les valeurs qui font de SB un salon unique"
        backgroundImage="https://img.freepik.com/photos-premium/sentez-vous-detendu-belle-mere-fille-mode-se-sentant-detendue-passer-journee-dans-salon-beaute_259150-36181.jpg?semt=ais_hybrid"
      />
      
      <section className="py-16 bg-white px-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Notre Histoire
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  Depuis notre création, SB s'est engagé à offrir des services de coiffure exceptionnels dans une atmosphère chaleureuse et accueillante. Notre salon est né d'une passion pour la beauté et d'un désir de créer un espace où chaque client se sent spécial.
                </p>
                <p className="mb-4">
                  Notre équipe de professionnels qualifiés combine expertise technique et créativité pour vous offrir des résultats qui dépassent vos attentes. Nous croyons que chaque client est unique, c'est pourquoi nous personnalisons nos services pour répondre à vos besoins spécifiques.
                </p>
                <p>
                  Au fil des années, nous avons bâti une réputation d'excellence et de service personnalisé qui fait notre fierté. Notre engagement envers la qualité et la satisfaction client reste au cœur de tout ce que nous faisons.
                </p>
              </div>
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
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-2xl font-bold text-primary">10+</p>
                <p className="text-gray-600">Années d'expérience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-5 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nos Valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Team />
      <Footer />
    </div>
  );
};

export default About;