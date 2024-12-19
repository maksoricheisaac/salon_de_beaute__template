/* eslint-disable react/no-unescaped-entities */

import { Footer } from "@/src/components/layouts/footer";
import { Navbar } from "@/src/components/layouts/navbar";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact(){
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <section className="py-16 px-5 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Contactez-nous
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-pink-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Téléphone</h3>
                    <p className="text-gray-600">01 23 45 67 89</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-pink-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">contact@beautyhair.fr</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-pink-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Adresse</h3>
                    <p className="text-gray-600">123 Rue de la Beauté, Paris</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-pink-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Horaires d'ouverture</h3>
                    <p className="text-gray-600">Lundi - Samedi : 9h00 - 19h00</p>
                    <p className="text-gray-600">Dimanche : Fermé</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <iframe
                  title="Localisation du salon"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16285714.75828221!2d11.866362!3d-4.7691623!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a324311d07ee3%3A0x849b518f8b0b6e1c!2sBacongo%2C%20Brazzaville!5e0!3m2!1sen!2scg!4v1734433250998!5m2!1sen!2scg" 
                  className="w-full h-96 rounded-lg"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

