'use client';  // Assure-toi que cette ligne est présente si tu utilises des hooks React

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 w-full p-5 transition-all bg-black bg-opacity-80 z-50`}>
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">IMMERSIF EVENT</h1>
          <ul className="flex space-x-4">
            <li><Link href="/festival" className="hover:text-gray-300">Festival</Link></li>
            <li><Link href="/derniers_evenements" className="hover:text-gray-300">Derniers évènements</Link></li>
            <li><Link href="/artistes" className="hover:text-gray-300">Artistes</Link></li>
            <li><Link href="/prestataires" className="hover:text-gray-300">Prestataires</Link></li>
            <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center"> 
        <div className="relative z-10">
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-4xl md:text-6xl font-bold">
            welcome to festimmersif 
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="mt-4 text-lg">
           - en cours de construction -
          </motion.p>

        </div>
      </section>

  

      {/* Footer */}
      <footer className="py-10 bg-black text-center text-gray-400">
        <p>&copy; 2025 Immersif event - Tous droits réservés.</p>
      </footer>
    </div>
  );
}
