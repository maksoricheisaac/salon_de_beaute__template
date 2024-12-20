"use client"
import { Scissors, Palette, SparkleIcon, Crown } from "lucide-react";
import { motion } from "framer-motion";
import { Navbar } from "@/src/components/layouts/navbar";
import { Footer } from "@/src/components/layouts/footer";
import Image from "next/image";
import PageHero from "@/src/components/layouts/page-hero";

export default function Services(){
  const services = [
    {
      title: "Coupes & Coiffures",
      description: "Des coupes personnalisées adaptées à votre visage et votre style de vie.",
      price: "À partir de 21,000 FCFA",
      icon: Scissors,
      image: "https://imgs.search.brave.com/Jy8Joc5yuYJCv4L6FCV10MMvUZjSXI4HBfncFIzQLLQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2IwL2Q1/LzY4L2IwZDU2ODI4/OTNkZjU1YWQxNGZj/OGQ1ODE4MzkzYWVm/LmpwZw",
    },
    {
      title: "Colorations",
      description: "Une large gamme de colorations pour sublimer votre chevelure.",
      price: "À partir de 27,000 FCFA",
      icon: Palette,
      image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Soins Profonds",
      description: "Des soins sur-mesure pour des cheveux sains et brillants.",
      price: "À partir de 15,000 FCFA",
      icon: SparkleIcon,
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Coiffures de Mariage",
      description: "Des coiffures élégantes pour votre grand jour.",
      price: "Sur devis",
      icon: Crown,
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero 
        title="Nos Services" 
        subtitle="Découvrez les services offerts à SB"
        backgroundImage="https://media.gettyimages.com/id/1159483894/fr/photo/salon.jpg?s=612x612&w=0&k=20&c=3izcqgc-abXU8voRns45RuyY6cxM3ggiadVaeLHwpk4="
      />
      <div className="pt-16">
        <section className="py-16 px-5 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={250}
                      height={250}
                      className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 transform transition-transform duration-300 hover:rotate-12">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <p className="text-primary font-semibold animate-pulse">{service.price}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};
