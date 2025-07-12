'use client';
import { useState } from "react";
import { motion } from 'framer-motion';

import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, X, Menu } from "lucide-react";

export default function Village() {


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

        
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-5xl md:text-6xl text-white font-turret absolute top-[22%] sm:top-[36%]">
            Village
          </motion.h1>

        </div>

        
        <div className="absolute w-full h-32 sm:h-full bottom-0 bg-gradient-to-b from-transparent via-transparent via-50% to-[#1f1818] sm:via-70% sm:to-[#1f1818] to-100%"></div>

      </div>
      {/* Fin template */}



      <section className="bg-[#1f1818] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center w-full">
          
          <div className="w-full md:w-5/6 text-center">

            <div className="flex items-center justify-center mb-4">
              <h2 className="text-4xl text-[#9ec37b] font-bebasNeue">Le village de Fest'immersif</h2>
            </div>

            <p className="text-lg py-6 font-quantico leading-relaxed">
              Le Village, c’est le cœur vivant du festival en dehors des scènes. Un espace convivial, coloré et plein de vie où se croisent sourires, découvertes et bonnes vibes tout au long du week-end.

              Tu y trouveras de quoi te régaler avec une sélection variée de food trucks, prêts à combler toutes les envies. Côté style, des stands de vêtements, bijoux, accessoires et maquillage seront là pour te faire briller, avec des créateurs et artisans venus partager leur univers.

              Envie d’un souvenir un peu plus permanent ? Des artistes seront présents pour du tatouage sur place. Pour te détendre, te poser ou juste prendre une pause entre deux vibes, des coins chill seront aménagés avec soin. Et pour celles et ceux qui aiment s’amuser autrement, on prévoit aussi des jeux en libre accès et plein d'autres petites surprises à découvrir sur place.

              Le Village, c’est aussi un lieu d’échange, de rencontres, et de belles découvertes en dehors du son.  </p>

            <p className="text-2xl text-[#9ec37b] py-4 font-bebasNeue leading-relaxed">
              👉 Plus d’infos à venir très bientôt : la liste des stands, les animations, et les temps forts du village seront dévoilés au fur et à mesure... reste connecté.e !
            </p>
          </div>
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
            <div className="w-64 sm:w-80 h-[24rem] sm:h-[30rem] overflow-hidden rounded-t-full">
              <img src="/village.jpg" alt="Décoration immersive" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </section>


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
          </div>

          <Link href="https://www.instagram.com/immersif.event/" target="_blank" rel="noopener noreferrer" className="text-[#9ec37b] hover:text-[#bfeb96]">
            <Instagram className="w-6 h-6 sm:w-7 sm:h-7" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
