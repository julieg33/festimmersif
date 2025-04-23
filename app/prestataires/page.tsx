'use client';

import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook } from "lucide-react";

export default function Prestataires() {
  return (
    <div className="relative min-h-screen bg-black text-white">
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
      <div className="relative w-full">
        <img src="/fond_immersif.jpg" alt="Programmation" className="w-full h-auto object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1
            className="text-5xl md:text-6xl text-white font-bebasNeue"
            style={{ position: 'absolute', top: '24.5%' }}
          >
            Prestataires
          </h1>
        </div>
        {/* Dégradé au-dessus du fond noir */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d1412] flex flex-col items-center justify-end p-4 text-white"
          style={{ background: "linear-gradient(to bottom, transparent 80%, transparent 65%, #0d1412 100%)" }}
        ></div>
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
