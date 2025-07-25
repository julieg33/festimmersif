'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, Tent, MapPin, Instagram, Facebook, Menu, X, CircleAlert } from "lucide-react";
import { motion } from 'framer-motion';
export default function Info() {
  const [menuOpen, setMenuOpen] = useState(false);




  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Début template */}
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full p-4 sm:p-5 bg-black bg-opacity-80 z-50 font-orbitron">
        <div className="flex items-center w-full">

          <Link href="/" className="group pl-2 sm:pl-6">
            <div className="cursor-pointer">
              <h1 className="text-lg sm:text-xl group-hover:text-gray-300">IMMERSIF EVENT</h1>
              <p className="text-xs sm:text-sm text-gray-400 leading-none group-hover:text-gray-500">22–23 août 2025</p>
            </div>
          </Link>


          <div className="ml-auto md:hidden pr-4">
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>


          <ul className="hidden md:flex space-x-4 ml-auto pr-4 sm:pr-6 text-sm sm:text-base">
            <li><Link href="/billetterie" className="hover:text-gray-300">Billetterie</Link></li>
            <li><Link href="/programmation" className="hover:text-gray-300">Programmation</Link></li>
            <li><Link href="/village" className="hover:text-gray-300">Village</Link></li>
            <li><Link href="/info" className="hover:text-gray-300">Infos pratiques</Link></li>
            <li><Link href="/derniers_evenements" className="hover:text-gray-300">Derniers évènements</Link></li>
          </ul>
        </div>


        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black bg-opacity-80 text-white px-6 py-4 space-y-3 shadow-md z-40">
            <Link href="/billetterie" className="block hover:text-gray-300" onClick={() => setMenuOpen(false)}>Billetterie</Link>
            <Link href="/programmation" className="block hover:text-gray-300" onClick={() => setMenuOpen(false)}>Programmation</Link>
            <Link href="/village" className="block hover:text-gray-300" onClick={() => setMenuOpen(false)}>Village</Link>
            <Link href="/info" className="block hover:text-gray-300" onClick={() => setMenuOpen(false)}>Infos pratiques</Link>
            <Link href="/derniers_evenements" className="block hover:text-gray-300" onClick={() => setMenuOpen(false)}>Derniers évènements</Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative w-full pt-20 sm:pt-24">

        <img
          src="/fond_immersif.png"
          alt="Programmation"
          className="hidden sm:block w-full h-screen object-cover object-center"
        />


        <img
          src="/fond_immersif_mobile.png"
          alt="Programmation mobile"
          className="block sm:hidden w-full h-auto object-cover object-center"
        />


        <div className="absolute inset-0 bg-black/50 flex items-start justify-center pt-[35%] sm:pt-[19%]">
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-5xl md:text-6xl text-white font-turret text-center px-4">
            Informations pratiques
          </motion.h1>

        </div>

        <div className="absolute w-full h-32 sm:h-full bottom-0 bg-gradient-to-b from-transparent via-transparent via-50% to-[#1f1818] sm:via-70% sm:to-[#1f1818] to-100%"></div>

      </div>
      {/* Fin template */}


      <section className="bg-[#1f1818] text-white py-12 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">

            <div className="bg-[#24311e] p-5 sm:p-6 rounded-lg shadow-lg hover:scale-[1.02] transition-transform flex flex-col justify-center min-h-[300px]">
              <div className="flex justify-center mb-4">
                <Calendar size={36} className="text-[#9ec37b]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bebasNeue mb-4">Dates et horaires</h3>
              <p className="text-base sm:text-lg font-quantico mb-2">
                <strong>Vendredi 22 août 2025</strong> : Ouverture du site 10:00.
              </p>
              <p className="text-base sm:text-lg font-quantico">
                <strong>Dimanche 24 août 2025</strong> : Fermeture du site (camping) 18:00.
              </p>
            </div>


            <div className="bg-[#24311e] p-5 sm:p-6 rounded-lg shadow-lg hover:scale-[1.02] transition-transform  flex flex-col justify-center min-h-[300px]">
              <div className="flex justify-center mb-4">
                <MapPin size={36} className="text-[#9ec37b]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bebasNeue mb-4">Localisation</h3>
              <p className="text-base sm:text-lg font-quantico mb-2">
                À Blasimon, en Gironde.
              </p>
              <ul className="list-disc list-inside text-base sm:text-lg font-quantico text-left">
                <li>De Marmande : 45 min (40 km).</li>
                <li>De Bordeaux : 45 min (60 km).</li>
                <li>De Bergerac : 1h (60 km).</li>
                <li>De Mont-de-Marsan : 1h45 (120 km).</li>
                <li>De Angoulême : 2h (135 km).</li>
                <li>De Bayonne : 2h (160 km).</li>
                <li>De Toulouse : 2h30 (210 km).</li>
              </ul>
            </div>


            <div className="bg-[#24311e] p-5 sm:p-6 rounded-lg shadow-lg hover:scale-[1.02] transition-transform  flex flex-col justify-center min-h-[300px]">
              <div className="flex justify-center mb-4">
                <Tent size={36} className="text-[#9ec37b]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bebasNeue mb-4">Camping</h3>
              <p className="text-base sm:text-lg font-quantico">
                Inclus dans le prix du billet.
              </p>
              <p className="text-base sm:text-lg font-quantico mt-1">
                Espace camping disponible dans le site.
              </p>
              <p className="text-base sm:text-lg font-quantico mt-1">
                Parking véhicules aménagés disponible.
              </p>
              <p className="text-base sm:text-lg font-quantico mt-1">
                Zone camping chill isolée sur place.
              </p>
            </div>
          </div>


          <div className="bg-[#24311e] mt-10 p-5 sm:p-6 rounded-lg shadow-lg hover:scale-[1.01] transition-transform  flex flex-col justify-center min-h-[300px]">
            <div className="flex justify-center mb-4">
              <CircleAlert size={36} className="text-[#9ec37b]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bebasNeue mb-4">Consignes importantes</h3>
            <ul className="list-disc list-inside text-base sm:text-lg font-quantico text-left sm:text-center sm:px-12">
              <li>Boissons personnelles : autorisées.</li>
              <li>Objets interdits : armes, contenant en verre, fumigène, réchaud, bombe de graffiti, soundboks.</li>
              <li>Animaux interdits.</li>
              <li>Mineurs autorisés le samedi accompagnés d'un responsable légal.</li>
              <li><strong>Tenue excentrique conseillée.</strong></li>
            </ul>
          </div>

          <p className="text-xl sm:text-2xl font-bebasNeue mt-10 px-4">
            Rejoignez-nous pour deux nuits inoubliables à Blasimon !
          </p>
        </div>
      </section>

      {/* Google Map */}
      <div className="bg-[#1f1818] w-full flex flex-col items-center px-4 py-10">
        <div className="w-full max-w-6xl aspect-video">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.636526565931!2d-0.1003565!3d44.7617881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54d8a4b5e2f231%3A0x4b53a3ffebd22a2d!2sBlasimon%2C%20France!5e0!3m2!1sen!2sfr!4v1700000000000"
            className="w-full h-full rounded-lg"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="mt-4 text-center italic text-sm text-gray-300">
          <p className="text-lg py-0 font-quantico leading-relaxed">
            Localisation approximative – l’adresse exacte sera communiquée avant le festival.
          </p>
        </div>
      </div>

      <div className="bg-[#1f1818] w-full flex justify-center px-4 pb-16">
        <img
          src="/affiche.png"
          alt="Plan du festival"
          className="w-full max-w-2xl h-auto rounded-lg shadow-lg"
        />
      </div>


      {/* Footer */}
      <footer className="py-6 sm:py-8 px-6 bg-[#1f1818] text-gray-400">
        <div className="flex items-center justify-center space-x-8">
          <Link href="https://www.facebook.com/profile.php?id=100089358905510" target="_blank" rel="noopener noreferrer" className="text-[#9ec37b] hover:text-[#bfeb96]">
            <Facebook className="w-6 h-6 sm:w-7 sm:h-7" />
          </Link>

          <div className="flex flex-col items-center space-y-2">
            <p className="text-xs sm:text-sm text-center font-quantico text-[#9ec37b]">&copy; 2025 Immersif event - Tous droits réservés.</p>
            <Link href="/mentions-legales" className="text-xs text-center sm:text-sm font-quantico text-[#9ec37b] hover:text-[#bfeb96]">
              Mentions légales & politique de confidentialité
            </Link>
            <p className="text-xs sm:text-sm text-center font-quantico text-[#9ec37b]">Crédits photos : Nicolas Nourrit visuals - Lauguinandie</p>
          </div>

          <Link href="https://www.instagram.com/immersif.event/" target="_blank" rel="noopener noreferrer" className="text-[#9ec37b] hover:text-[#bfeb96]">
            <Instagram className="w-6 h-6 sm:w-7 sm:h-7" />
          </Link>
        </div>
      </footer>



    </div>
  );
}
