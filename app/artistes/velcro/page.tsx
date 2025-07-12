'use client';

import React from 'react';

import { useState, useEffect } from "react";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, Facebook, X, Menu } from "lucide-react";

export default function Velcro() {
  const artiste = {
    nom: "Velcro",
    image: "/velcro.jpg", // à remplacer

    soundcloud: "https://on.soundcloud.com/Bz9Hweq54V5oqEt8Rv",
    instagram: "https://www.instagram.com/velcro.sound?utm_source=ig_web_button_share_sheet&igsh=MXg0Z2Npc3RpcGV3Nw==",

  };
  const [menuOpen, setMenuOpen] = useState(false);
  return (
<div className="flex flex-col min-h-screen bg-[#1f1818] text-white">
      {/* Début template */}
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full p-4 sm:p-5 bg-black bg-opacity-80 z-50 font-orbitron">
        <div className="flex items-center w-full">
          {/* Logo totalement à gauche */}
          <Link href="/" className="group pl-2 sm:pl-6">
            <div className="cursor-pointer">
              <h1 className="text-lg sm:text-xl group-hover:text-gray-300">IMMERSIF EVENT</h1>
              <p className="text-xs sm:text-sm text-gray-400 leading-none group-hover:text-gray-500">22–23 août 2025</p>
            </div>
          </Link>

          {/* Burger menu (mobile only) */}
          <div className="ml-auto md:hidden pr-4">
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Menu Desktop */}
          <ul className="hidden md:flex space-x-4 ml-auto pr-4 sm:pr-6 text-sm sm:text-base">
            <li><Link href="/billetterie" className="hover:text-gray-300">Billetterie</Link></li>
            <li><Link href="/programmation" className="hover:text-gray-300">Programmation</Link></li>
            <li><Link href="/village" className="hover:text-gray-300">Village</Link></li>
            <li><Link href="/info" className="hover:text-gray-300">Infos pratiques</Link></li>
            <li><Link href="/derniers_evenements" className="hover:text-gray-300">Derniers évènements</Link></li>
          </ul>
        </div>

        {/* Menu Mobile */}
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

<main className="flex-grow pt-20 sm:pt-24 lg:pt-28">
  <section className="bg-[#1f1818] text-white py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-4 sm:px-6 lg:px-8">
    {/* Photo à gauche */}
    <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
      <div className="w-64 sm:w-80 aspect-square overflow-hidden rounded-xl shadow-md">
        <img
          src={artiste.image}
          alt={`Photo de ${artiste.nom}`}
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* Texte à droite */}
    <div className="w-full lg:w-2/3 text-center lg:text-left">
      <h1 className="text-5xl text-[#9ec37b] font-bebasNeue mb-6">{artiste.nom}</h1>

         <p className="text-lg font-quantico leading-relaxed mb-6">
Incarnant parfaitement l’esprit groovy de la Tribe tout en insufflant une atmosphère planante et surnaturelle, la musique de Velcro s’impose comme un objet sonore hybride dont les vibrations submergent le corps tout entier. Dans un univers aux styles trop souvent cloisonnés, il semble quant-à-lui évoluer tel un électron libre, au gré des influences.

   </p>
            <p className="text-lg font-quantico leading-relaxed mb-6">
C’est à l’âge de 13 ans que l’artiste français fait ses premiers pas sur un logiciel MAO et développe une sensibilité toute particulière pour les sonorités acid, avant même d’en connaître le terme. Particulièrement marqué par l’omniprésence et la variabilité de ce son au sein du paysage électronique, et notamment en free party, cette sensibilité devient progressivement la force de ses productions.

   </p>
            <p className="text-lg font-quantico leading-relaxed mb-6">
Entre leads chamaniques, lignes de basses profondes et percussions tribales, Velcro parvient à développer une dynamique à la fois impressionnante et brillamment minimaliste dans chacune de ses créations, où les sonorités acid agissent comme fil conducteur permettant de connecter chaque pièce de son histoire. Car c’est bien de cela qu’il s’agit : une histoire sonore profondément immersive et palpitante.

   </p>


      {/* Réseaux sociaux */}
      <div className="flex justify-center lg:justify-start gap-4 mt-6">
        <a
          href={artiste.soundcloud}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/soundcloud_logo.png"
            alt="SoundCloud"
            className="w-16 h-auto hover:opacity-90 transition-opacity"
          />
        </a>
        <Link
          href={artiste.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#6ca671]"
        >
          <Instagram className="w-12 h-12 hover:opacity-90 transition-opacity" />
        </Link>
      </div>
    </div>
  </div>
</section>


  </main>




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
