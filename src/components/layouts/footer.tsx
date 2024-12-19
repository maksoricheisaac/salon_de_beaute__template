/* eslint-disable react/no-unescaped-entities */
"use client"
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Footer = () => {
  return (
    <footer className=" pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <style jsx global>
              {`
              @import url('https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap');
              `}
            </style>
            <h3 className="text-xl font-semibold text-primary mb-4 " style={{ fontFamily: 'Alex Brush, cursive' }}>
              Kam's Beauty
            </h3>
            <p className="text-gray-600 mb-4">
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
                  <span>+242 06 657 65 59</span>
                  <span>+242 06 925 55 23</span>
                  <span>+242 06 516 89 75</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail size={18} />
                <span>contact@kamsbeauty.cg</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin size={18} />
                <span>123 Rue Ampère, Bacongo, Brazzaville, République du Congo</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Kam's Beauty. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

