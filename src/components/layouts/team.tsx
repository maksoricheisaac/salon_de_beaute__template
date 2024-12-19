"use client"
import { motion } from "framer-motion";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/src/components/ui/hover-card";
import { Instagram, Facebook, Phone } from "lucide-react";
import Image from "next/image";

export const Team = () => {
  const team = [
    {
      name: "Kam Beauty",
      role: "Fondatrice & Styliste Senior",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      bio: "Experte en coiffure avec plus de 15 ans d'expérience",
      specialties: ["Coiffure", "Management"],
      social: {
        instagram: "#",
        facebook: "#",
        phone: "+242 06 657 65 59"
      }
    },
    {
      name: "Sarah M.",
      role: "Experte Onglerie",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      bio: "Spécialiste en manucure et pédicure de luxe",
      specialties: ["Manucure", "Pédicure", "Nail Art"],
      social: {
        instagram: "#",
        facebook: "#",
        phone: "+242 06 925 55 23"
      }
    },
    {
      name: "Marie K.",
      role: "Make-up Artist",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      bio: "Artiste maquillage professionnelle",
      specialties: ["Maquillage", "Soins du visage"],
      social: {
        instagram: "#",
        facebook: "#",
        phone: "+242 06 516 89 75"
      }
    }
  ];

  return (
    <section className="py-16 px-5 bg-gradient-to-b from-salon-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-salon-dark mb-12">
          Notre Équipe
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <HoverCard>
                <HoverCardTrigger>
                  <div className="relative overflow-hidden rounded-xl bg-white shadow-xl transition-all duration-300 group-hover:shadow-2xl">
                    <div className="aspect-square overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={100}
                        height={100}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                    <div className="relative z-10 -mt-16 bg-white/90 backdrop-blur-sm p-6 transition-transform duration-300">
                      <h3 className="text-xl font-semibold text-salon-dark mb-1">
                        {member.name}
                      </h3>
                      <p className="text-salon-primary font-medium">{member.role}</p>
                      <div className="mt-4 flex space-x-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <a href={member.social.instagram} className="text-gray-600 hover:text-salon-primary">
                          <Instagram className="h-5 w-5" />
                        </a>
                        <a href={member.social.facebook} className="text-gray-600 hover:text-salon-primary">
                          <Facebook className="h-5 w-5" />
                        </a>
                        <a href={`tel:${member.social.phone}`} className="text-gray-600 hover:text-salon-primary">
                          <Phone className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="hidden md:block w-80 bg-white/95 backdrop-blur-sm p-6">
                  <div className="space-y-4">
                    <p className="text-sm text-gray-600">{member.bio}</p>
                    <div>
                      <h4 className="text-sm font-semibold text-salon-dark mb-2">Spécialités:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center rounded-full bg-salon-primary/10 px-3 py-1 text-xs font-medium text-salon-primary"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

