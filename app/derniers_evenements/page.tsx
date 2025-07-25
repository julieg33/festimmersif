'use client';
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, Facebook, X, Menu } from "lucide-react";

const images1 = [
  '/d-e-1.1.jpg',
  '/d-e-1.2.jpg',
  '/d-e-1.3.jpg',
  '/d-e-1.4.jpg',
  '/d-e-1.5.jpg',
  '/d-e-1.6.jpg',
  '/d-e-1.7.jpg',
  '/d-e-1.8.jpg',
  '/d-e-1.9.jpg',
  '/d-e-1.10.jpg',
  '/d-e-1.11.jpg',
  '/d-e-1.12.jpg',
  '/d-e-1.13.jpg',
  '/d-e-1.14.jpg',
  '/d-e-1.15.jpg',
  '/d-e-1.16.jpg'
];

const images0 = [
  '/d-e-0.1.jpg',
  '/d-e-0.2.jpg',
  '/d-e-0.3.jpg',
  '/d-e-0.4.jpg',
  '/d-e-0.5.jpg',
  '/d-e-0.6.jpg',
  '/d-e-0.7.jpg'
];

export default function Home() {
  const [currentImageIndex1, setCurrentImageIndex1] = useState(0);
  const [currentImageIndex2, setCurrentImageIndex2] = useState(0);


  const nextImage0 = () => {
    setCurrentImageIndex1((prevIndex) => (prevIndex + 1) % images0.length);
  };

  const prevImage0 = () => {
    setCurrentImageIndex1((prevIndex) => (prevIndex - 1 + images0.length) % images0.length);
  };

  const nextImage1 = () => {
    setCurrentImageIndex2((prevIndex) => (prevIndex + 1) % images1.length);
  };

  const prevImage1 = () => {
    setCurrentImageIndex2((prevIndex) => (prevIndex - 1 + images1.length) % images1.length);
  };

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

      {/* Hero Section */}
      <div className="relative w-full pt-20 sm:pt-24">
        {/* Image Desktop */}
        <img
          src="/fond_immersif.png"
          alt="Programmation"
          className="hidden sm:block w-full h-screen object-cover object-center"
        />

        {/* Image Mobile */}
        <img
          src="/fond_immersif_mobile.png"
          alt="Programmation mobile"
          className="block sm:hidden w-full h-auto object-cover object-center"
        />

        {/* Fond noir + titre */}

        <div className="absolute inset-0 bg-black/50 flex items-start justify-center pt-[35%] sm:pt-[19%]">
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-5xl md:text-6xl text-white font-turret text-center px-4">
            Derniers évènements
          </motion.h1>

        </div>

        {/* Dégradé */}
        <div className="absolute w-full h-32 sm:h-full bottom-0 bg-gradient-to-b from-transparent via-transparent via-50% to-[#1f1818] sm:via-70% sm:to-[#1f1818] to-100%"></div>

      </div>
      {/* Fin template */}











      <div className="flex items-center bg-[#1f1818] justify-end pt-16 px-4 flex-col md:flex-row">
        {/* Texte à gauche du carrousel */}
        <div className="text-white w-full md:w-3/4 text-center md:text-right mt-8 md:mt-0 md:mr-8 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold text-[#6ca671] mb-4 font-orbitron">Open air Immersif</h2>
          <p className="mb-4 font-quantico">Dans un décor où une nature luxuriante refait surface parmi les vestiges d'une civilisation passée, Immersif Event a offert une expérience hors du temps lors de cet open air en août 2023. Entre jeux, explorations et musique psychédélique, les participants plongent dans une utopie tribale où rythmes acides et mécaniques relient les deux époques. Guidés par des artistes locaux et une scénographie soignée, les participants ont vibré ensemble de midi à minuit.</p>
          <Link href="https://www.instagram.com/p/CzrJ7DroQdY/" className="text-[#6ca671] hover:text-[#bfeb96] font-quantico">
            Aftermovie Open Air Immersif
          </Link>
        </div>

        {/* Carrousel à droite */}
        <div className="relative w-full md:w-1/4 h-full ">
          <div className="overflow-hidden rounded-lg ">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentImageIndex2 * 100}%)` }}
            >
              {images1.map((image, index) => (
                <div key={index} className="flex-shrink-0 w-full">
                  <img src={image} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
          {/* Contrôles Carrousel 2 */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 text-white cursor-pointer bg-black bg-opacity-50 rounded-full" onClick={prevImage1}>
            <span className="text-2xl">❮</span>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 text-white cursor-pointer bg-black bg-opacity-50 rounded-full" onClick={nextImage1}>
            <span className="text-2xl">❯</span>
          </div>
        </div>
      </div>



      {/* Carrousel 2 + Texte à droite */}
      <div className="flex items-center justify-start px-4 flex-col-reverse bg-[#1f1818] md:flex-row">
        {/* Carrousel */}
        <div className="relative w-full md:w-1/4 h-[300px] min-w-[300px] flex-shrink-0">
          <div className="overflow-hidden rounded-lg h-full">
            <div
              className="flex transition-transform duration-500 h-full"
              style={{ transform: `translateX(-${currentImageIndex1 * 100}%)` }}
            >
              {images0.map((image, index) => (
                <div key={index} className="flex-shrink-0 w-full h-full">
                  <img src={image} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
          {/* Contrôles Carrousel 1 */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 text-white cursor-pointer bg-black bg-opacity-50 rounded-full" onClick={prevImage0}>
            <span className="text-2xl">❮</span>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 text-white cursor-pointer bg-black bg-opacity-50 rounded-full" onClick={nextImage0}>
            <span className="text-2xl">❯</span>
          </div>
        </div>

        {/* Texte à droite du carrousel */}
        <div className="text-white w-full md:w-3/4 text-center md:text-left mt-8 md:mt-0 md:ml-8 mb-8 md:mb-0">

          <h2 className="text-2xl text-[#6ca671] font-bold mb-4 font-orbitron">Immersif #1</h2>
          <p className="mb-4 font-quantico">Le premier évènement d'Immersif Event a transporté les participants au cœur du terroir girondin pour une rave champêtre mémorable. Dans une "Secret Place" à 45 minutes de Bordeaux, les participants ont vibré au son de lives variés, allant de la techno à l'acid en passant par le dub. L'expérience immersive était renforcée par des jeux, des expositions et une prestation lumineuse concoctée par Sensibilité Son et Lumière. Avec une billetterie confidentielle accessible uniquement par bouche à oreille, cette soirée exclusive a posé les bases de ce à quoi Immersif Event aspire pour l’ambiance de ses futurs évènements.</p>
          <Link href="https://www.instagram.com/reel/CpLM5YYoG_j/" className="text-[#6ca671] hover:text-[#bfeb96] font-quantico">
            Aftermovie Immersif #1
          </Link>
        </div>
      </div>

      {/* Carrousel 2 + Texte à gauche */}







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
