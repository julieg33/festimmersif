'use client';
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from 'react';
import Link from 'next/link';
import { Instagram, Facebook } from "lucide-react";

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


  return (
    <div className="relative min-h-screen bg-[#0d1412] text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full p-5 transition-all bg-black bg-opacity-80 z-50 font-orbitron">
        <div className="w-full flex justify-between items-center">
          <Link href="/" className="pl-4 group">
            <div className="cursor-pointer">
              <h1 className="text-xl group-hover:text-gray-300">IMMERSIF EVENT</h1>
              <p className="text-sm text-gray-400 leading-none group-hover:text-gray-500">22–23 août 2025</p>
            </div>
          </Link>
          <ul className={`md:flex space-x-4 pr-4 hidden`}>
            <li><Link href="/billetterie" className="hover:text-gray-300">Billetterie</Link></li>
            <li><Link href="/programmation" className="hover:text-gray-300">Programmation</Link></li>
            <li><Link href="/village" className="hover:text-gray-300">Village</Link></li>
            <li><Link href="/info" className="hover:text-gray-300">Infos pratiques</Link></li>
            <li><Link href="/derniers_evenements" className="hover:text-gray-300">Derniers évènements</Link></li>
            <li><Link href="/prestataires" className="hover:text-gray-300">Prestataires</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative w-full ">
        <img src="/fond_immersif.jpg" alt="Programmation" className="w-full h-auto object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1
            className="text-5xl md:text-6xl text-white font-bebasNeue"
            style={{ position: 'absolute', top: '24.5%' }}
          >
            Derniers évènements
          </h1>
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d1412] flex flex-col items-center justify-end p-4 text-white"
          style={{ background: "linear-gradient(to bottom, transparent 80%, transparent 65%, #0d1412 100%)" }}
        ></div>
      </div>




      {/* Carrousel 1 + Texte à droite */}
      <div className="flex items-center bg-[#0d1412] justify-start px-4">
        {/* Carrousel */}
        <div className="relative w-1/4 h-[300px] min-w-[300px] flex-shrink-0">
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
        <div className="ml-8 text-white">
          <h2 className="text-2xl font-bold mb-4 font-orbitron">Immersif #1</h2>
          <p className="mb-4  font-quantico">Le premier évènement d'Immersif Event a transporté les participants au cœur du terroir girondin pour une rave champêtre mémorable. Dans une "Secret Place" à 45 minutes de Bordeaux, les participants ont vibré au son de lives et DJ sets variés, allant de la techno à l'acid en passant par le dub. L’expérience immersive était renforcée par des jeux, des expositions et une prestation lumineuse hors pair. Avec une billetterie confidentielle accessible uniquement par bouche à oreille, cette soirée exclusive a posé les bases d’une nouvelle ère pour les événements underground en Gironde.</p>
          <Link href="https://www.instagram.com/reel/CpLM5YYoG_j/" className="text-blue-500 hover:text-blue-300  font-quantico">
            Aftermovie Immersif #1
          </Link>
        </div>
      </div>







      {/* Carrousel 2 + Texte à gauche */}
      <div className="flex items-center bg-[#0d1412] justify-end mt-16 px-4">
        {/* Texte à gauche du carrousel */}
        <div className="mr-8 text-white w-3/4 text-right">
          <h2 className="text-2xl font-bold mb-4 font-orbitron">Open air Immersif</h2>
          <p className="mb-4 font-quantico">Dans un décor où la nature avait repris ses droits sur les vestiges d’une civilisation passée, Immersif Event a offert une expérience hors du temps. Entre jeux, explorations et musique psychédélique, les participants ont plongé dans une utopie tribale où rythmes acides et mécaniques liaient les époques. Guidés par des artistes envoûtants et une scénographie soignée, les festivaliers ont vibré ensemble jusqu’à minuit. Avec un cadre bienveillant et une ambiance immersive, cet événement a marqué les esprits comme une célébration authentique de la fête et du partage.</p>
          <Link href="https://www.instagram.com/p/CzrJ7DroQdY/" className="text-blue-500 hover:text-blue-300  font-quantico">
            Aftermovie Open Air Immersif
          </Link>
        </div>

        {/* Carrousel à droite */}
        <div className="relative w-1/4 h-full">
          <div className="overflow-hidden rounded-lg">
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



      {/* Footer */}
      <footer className="p-5 bg-[#192622] text-gray-400">
        <div className="flex items-center justify-center space-x-4">
          {/* Logo Facebook */}
          <Link
            href="https://www.facebook.com/profile.php?id=100089358905510"
            className="text-[#6ca671] hover:text-green-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="w-6 h-6" />
          </Link>

          {/* Texte centré */}
          <p className="text-sm text-[#6ca671] text-center font-quantico">&copy; 2025 Immersif event - Tous droits réservés.</p>

          {/* Logo Instagram */}
          <Link
            href="https://www.instagram.com/immersif.event/"
            className="text-[#6ca671] hover:text-green-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-6 h-6" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
