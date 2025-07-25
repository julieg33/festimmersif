'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { useState, useEffect } from "react";
import { Instagram, Facebook, Menu, X } from "lucide-react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, } from "recharts";

//Pour le diagramme 
const data = [
  { name: "Frais de fonctionnement", value: 11 },
  { name: "Communication", value: 2 },
  { name: "Prestation", value: 5 },
  { name: "Exploitation", value: 23 },
  { name: "Scénographie", value: 4 },
  { name: "Artistes", value: 10 },
  { name: "Technique", value: 45 },
];
const COLORS = ["#7b808a", "#c0ad96", "#6BBF7B", "#5A9B69"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Début template */}
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full p-4 sm:p-5 bg-black bg-opacity-80 z-50 font-orbitron">
        <div className="flex items-center w-full">
          {/* Logo  */}
          <Link href="/" className="group pl-2 sm:pl-6">
            <div className="cursor-pointer">
              <h1 className="text-lg sm:text-xl group-hover:text-gray-300">IMMERSIF EVENT</h1>
              <p className="text-xs sm:text-sm text-gray-400 leading-none group-hover:text-gray-500">22–23 août 2025</p>
            </div>
          </Link>

          {/* Burger menu tel */}
          <div className="ml-auto md:hidden pr-4">
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Menu pc */}
          <ul className="hidden md:flex space-x-4 ml-auto pr-4 sm:pr-6 text-sm sm:text-base">
            <li><Link href="/billetterie" className="hover:text-gray-300">Billetterie</Link></li>
            <li><Link href="/programmation" className="hover:text-gray-300">Programmation</Link></li>
            <li><Link href="/village" className="hover:text-gray-300">Village</Link></li>
            <li><Link href="/info" className="hover:text-gray-300">Infos pratiques</Link></li>
            <li><Link href="/derniers_evenements" className="hover:text-gray-300">Derniers évènements</Link></li>
          </ul>
        </div>

        {/* Menu tel */}
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
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-5xl md:text-6xl text-white font-turret absolute top-[22%] sm:top-[36%]">
            Billetterie
          </motion.h1>

        </div>

        {/* Dégradé */}
        <div className="absolute w-full h-32 sm:h-full bottom-0 bg-gradient-to-b from-transparent via-transparent via-50% to-[#1f1818] sm:via-70% sm:to-[#1f1818] to-100%"></div>

      </div>
      {/* Fin template */}




      <div className="bg-[#1f1818] w-full flex justify-center px-4 sm:px-8  pb-5">
        <div className="w-full max-w-5xl">
          <iframe
            id="haWidget"
            scrolling="auto"
            src="https://www.helloasso.com/associations/immersif-event/evenements/fest-immersif-le-22-et-23-aout-2025-a-blasimon/widget"
            className="w-full h-[1000px] rounded-lg"
            style={{ border: "none" }}
          ></iframe>
        </div>
      </div>



      <div className="bg-[#1f1818] flex flex-col lg:flex-row items-start lg:items-center px-6 sm:px-12 py-12 gap-10">
        <div className="w-full lg:w-1/2 text-center lg:text-right mx-auto">
          <h2 className="text-2xl text-[#9ec37b] sm:text-3xl text-center font-audiowide mb-4">Comment est réparti le coût de ton billet ? </h2>

          <p className="text-base sm:text-lg text-center font-quantico leading-relaxed">
            Immersif Event est une association à but non lucratif, et entièrement portée par des benevoles.
          </p>
          <p className="text-base sm:text-lg text-center font-quantico leading-relaxed">
            Dans une volonté de transparence totale, on te présente comment est réparti le coût de ton billet, par pôles, afin de mieux comprendre les charges d'un événement comme le notre.
          </p>
        </div>

        <div className="w-full lg:w-1/3 h-96">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                outerRadius={isMobile ? 80 : 120}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
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
