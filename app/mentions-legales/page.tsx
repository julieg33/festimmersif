'use client';

import React from 'react';

import { useState, useEffect } from "react";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, Facebook, X, Menu } from "lucide-react";

export default function Prestataires() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="relative min-h-screen bg-black text-white">
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
            <li><Link href="/prestataires" className="hover:text-gray-300">Prestataires</Link></li>
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
            <Link href="/prestataires" className="block hover:text-gray-300" onClick={() => setMenuOpen(false)}>Prestataires</Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative w-full pt-20 sm:pt-24">
        <img src="/fond_immersif.png" alt="Programmation" className="w-full h-screen object-cover object-center" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}  className="text-5xl md:text-6xl text-white font-bebasNeue" style={{ position: 'absolute', top: '32%' }}>
        Mentions légales 
          </motion.h1>
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}  className="text-5xl md:text-6xl text-white font-bebasNeue" style={{ position: 'absolute', top: '38%' }}>
          &
          </motion.h1>
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}  className="text-5xl md:text-6xl text-white font-bebasNeue" style={{ position: 'absolute', top: '44%' }}>
          Politique de confidentialité
          </motion.h1>
     
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-70% to-[#192622] to-100%"></div>
      </div>
      {/* Fin template */}





      {/* Content Section */}
      <section className="bg-[#192622] text-white py-16 px-4 sm:px-6 lg:px-8">
  <div className="container mx-auto flex flex-col items-center w-full">
    <div className="w-full md:w-5/6 text-left">
      <div className="flex items-center justify-center mb-10">
        <h2 className="text-4xl font-bebasNeue text-center">Mentions légales</h2>
      </div>

      <div className="text-lg font-quantico leading-relaxed space-y-6">
        <div>
          <h3 className="text-2xl text-[#6ca671] font-bebasNeue mb-2">Éditeur du site</h3>
          <p>
            Ce site est édité par l’association IMMERSIF EVENT, régie par la loi du 1er juillet 1901.
            <br />
            <strong>Nom de l’association :</strong> IMMERSIF EVENT
            <br />
            <strong>Adresse :</strong> 236 ROUTE DU GRAND BOS 33750 NERIGEAN
            <br />
            <strong>Email :</strong> immersifevent@gmail.com
            <br />
            <strong>Numéro SIRET :</strong> 92394553900016
            <br />
            <strong>Numéro RNA :</strong> W335007609
          </p>
        </div>

        <div>
          <h3 className="text-2xl text-[#6ca671] font-bebasNeue mb-2">Hébergeur du site</h3>
          <p>
            Le site est hébergé par :
            <br />
            <strong>Vercel Inc.</strong>
            <br />
            Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
            <br />
            Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#6ca671] hover:text-green-700">https://vercel.com</a>
            <br />
            Téléphone : (559) 288-7060
          </p>
        </div>

        <div>
          <h3 className="text-2xl text-[#6ca671] font-bebasNeue mb-2">Propriété intellectuelle</h3>
          <p>
            Tous les contenus présents sur le site (textes, images, logos, vidéos, sons…) sont la propriété de l’association IMMERSIF EVENT, sauf mention contraire. Toute reproduction, distribution, modification, adaptation ou publication, même partielle, est strictement interdite sans autorisation écrite préalable.
          </p>
        </div>

        <div>
          <h3 className="text-2xl text-[#6ca671] font-bebasNeue mb-2">Données personnelles</h3>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD), l’association IMMERSIF EVENT s’engage à ce que la collecte et le traitement des données personnelles effectués sur le présent site soient limités au strict nécessaire.
            <br /><br />
            Les données collectées (formulaire de contact, inscription newsletter, billetterie) sont utilisées uniquement à des fins d’information, de communication ou d’organisation en lien avec le festival.
            <br /><br />
            Vous disposez d’un droit d’accès, de rectification, de suppression ou de portabilité de vos données personnelles.
          </p>
        </div>

        <div>
          <h3 className="text-2xl text-[#6ca671] font-bebasNeue mb-2">Cookies</h3>
          <p>
            Le site peut utiliser des cookies à des fins statistiques, de navigation ou de services tiers (réseaux sociaux, billetterie, etc.).
            <br /><br />
            Lors de votre première visite, un bandeau vous informe de la présence de cookies et vous invite à les accepter ou les refuser. Vous pouvez à tout moment modifier vos préférences via votre navigateur.
          </p>
        </div>

        
      </div>
    </div>
  </div>
</section>




      {/* Footer */}
      <footer className="py-6 sm:py-8 px-6 bg-[#192622] text-gray-400">
  <div className="flex items-center justify-center space-x-8">
    <Link href="https://www.facebook.com/profile.php?id=100089358905510" target="_blank" rel="noopener noreferrer" className="text-[#6ca671] hover:text-green-700">
      <Facebook className="w-6 h-6 sm:w-7 sm:h-7" />
    </Link>

    <div className="flex flex-col items-center space-y-2">
      <p className="text-xs sm:text-sm text-center font-quantico text-[#6ca671]">&copy; 2025 Immersif event - Tous droits réservés.</p>
      <Link href="/mentions-legales" className="text-xs text-center sm:text-sm font-quantico text-[#6ca671] hover:text-green-700">
        Mentions légales & politique de confidentialité
      </Link>
    </div>

    <Link href="https://www.instagram.com/immersif.event/" target="_blank" rel="noopener noreferrer" className="text-[#6ca671] hover:text-green-700">
      <Instagram className="w-6 h-6 sm:w-7 sm:h-7" />
    </Link>
  </div>
</footer>
    </div>
  );
}
