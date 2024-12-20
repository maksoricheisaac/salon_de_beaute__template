/* eslint-disable react/no-unescaped-entities */
"use client"
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logo from "@/public/logo.png"
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className=" pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center flex-col">
            <Image  src={logo} width={100} height={100} alt="Logo" />
            <p className="text-gray-600 mb-4 text-center">
              Votre salon de beauté complet : coiffure, onglerie, make-up et vente de produits cosmétiques.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-salon-dark mb-4">
              Horaires d'ouverture
            </h3>
            <div className="flex items-start space-x-2 text-gray-600">
              <Clock className="mt-1" size={18} />
              <div>
                <p>Lundi - Samedi : 9h00 - 19h00</p>
                <p>Dimanche : Fermé</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-salon-dark mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone size={18} />
                <div className="flex flex-col">
                  <span>01 23 45 67 89</span>
                  <span>01 23 45 67 89</span>
                  <span>01 23 45 67 89</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail size={18} />
                <span>contact@sb.cg</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin size={18} />
                <span>123 Rue de la Beauté, Paris</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} SB. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

