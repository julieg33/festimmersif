'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, Tent, MapPin, Instagram, Facebook, Menu, X } from "lucide-react";

export default function Info() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-black text-white">
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
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0f1a1c] text-white px-6 py-4 space-y-3 shadow-md z-40">
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
      <img src="/fond_immersif.jpg" alt="Programmation" className="w-full h-screen object-cover object-center" />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-bebasNeue absolute top-[25%] text-center w-full px-4">
            Informations pratiques
          </h1>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#192622]"></div>
      </div>

      {/* Info Section */}
      <section className="bg-[#192622] text-white py-12 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bebasNeue mb-10">Fest'Immersif – Informations pratiques</h2>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Dates */}
            <div className="bg-[#1f3d46] p-5 sm:p-6 rounded-lg shadow-lg hover:scale-[1.02] transition-transform">
              <div className="flex justify-center mb-4">
                <Calendar size={36} className="text-[#FF6347]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bebasNeue mb-4">Dates et horaires</h3>
              <p className="text-base sm:text-lg font-quantico mb-2">
                <strong>Vendredi 22 août 2025</strong> : 12h00 à 05h00 (samedi).
              </p>
              <p className="text-base sm:text-lg font-quantico">
                <strong>Samedi 23 août 2025</strong> : 10h30 à 06h30 (dimanche).
              </p>
            </div>

            {/* Lieu */}
            <div className="bg-[#1f3d46] p-5 sm:p-6 rounded-lg shadow-lg hover:scale-[1.02] transition-transform">
              <div className="flex justify-center mb-4">
                <MapPin size={36} className="text-[#FFD700]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bebasNeue mb-4">Localisation</h3>
              <p className="text-base sm:text-lg font-quantico mb-2">
                À Blasimon, en Gironde, cœur de la nature.
              </p>
              <ul className="list-disc list-inside text-base sm:text-lg font-quantico text-left">
                <li>Depuis Bordeaux : 45 min (60 km).</li>
                <li>Depuis Toulouse : 2h (200 km).</li>
                <li>Depuis Bayonne : 2h (160 km).</li>
              </ul>
            </div>

            {/* Camping */}
            <div className="bg-[#1f3d46] p-5 sm:p-6 rounded-lg shadow-lg hover:scale-[1.02] transition-transform">
              <div className="flex justify-center mb-4">
                <Tent size={36} className="text-[#32CD32]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bebasNeue mb-4">Camping</h3>
              <p className="text-base sm:text-lg font-quantico">
                Espace camping disponible sur place.
              </p>
              <p className="text-base sm:text-lg font-quantico mt-2">
                Apportez votre tente, matelas et sac de couchage.
              </p>
            </div>
          </div>

          {/* Consignes */}
          <div className="bg-[#1f3d46] mt-10 p-5 sm:p-6 rounded-lg shadow-lg hover:scale-[1.01] transition-transform">
            <h3 className="text-xl sm:text-2xl font-bebasNeue mb-4">Consignes importantes</h3>
            <ul className="list-disc list-inside text-base sm:text-lg font-quantico text-left sm:text-center sm:px-12">
              <li><strong>Alcool personnel :</strong> autorisé.</li>
              <li><strong>Objets interdits :</strong> armes, verre, drogues, etc.</li>
              <li><strong>Mineurs :</strong> accompagnés d’un adulte.</li>
            </ul>
          </div>

          <p className="text-xl sm:text-2xl font-bebasNeue mt-10 px-4">
            Rejoignez-nous pour deux nuits inoubliables à Blasimon !
          </p>
        </div>
      </section>

      {/* Google Map */}
      <div className="bg-[#192622] w-full flex justify-center px-4 py-10">
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
      </div>

      {/* Footer */}
      <footer className="p-4 sm:p-6 bg-[#192622] text-gray-400 text-center">
        <div className="flex items-center justify-center space-x-6">
          <Link href="https://www.facebook.com/profile.php?id=100089358905510" target="_blank" rel="noopener noreferrer" className="text-[#6ca671] hover:text-green-700">
            <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
          <p className="text-xs sm:text-sm font-quantico text-[#6ca671]">&copy; 2025 Immersif event - Tous droits réservés.</p>
          <Link href="https://www.instagram.com/immersif.event/" target="_blank" rel="noopener noreferrer" className="text-[#6ca671] hover:text-green-700">
            <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
