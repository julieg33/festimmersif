'use client';


import { useState } from "react";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Instagram, Facebook, LocateFixed, Menu, X } from "lucide-react";

const artistes = [
  { id: 1, nom: 'Hugo brasse', image: '/hugobrasse.png', style: 'Selecta Roots', soundcloud: 'https://on.soundcloud.com/XyF2Hy1fXjZyAa329', jour: 'vendredi', scene: 'spirale' },
  { id: 2, nom: 'Charly Uzly & Paco', image: '/charlyuzly&paco.jpg', style: 'UK Dub', icon: 'locaux', jour: 'vendredi', scene: 'spirale' },
  { id: 3, nom: 'Critikal sub & Thomas Anton', image: '/critikalsubthomasanton.jpg', style: 'Dub', jour: 'vendredi', scene: 'spirale' },
  { id: 4, nom: 'Roots Zombie', image: '/rootszombie.jpg', style: 'Dub to electro D', jour: 'vendredi', scene: 'spirale' },
  { id: 5, nom: 'Piou', image: '/piou.jpg', style: 'Mental Dub', jour: 'vendredi', scene: 'spirale' },
  { id: 6, nom: 'Totemik Anigua', image: '/totemikanigua.jpg', style: 'Mental Tekno', jour: 'vendredi', scene: 'spirale' },
  { id: 7, nom: 'Keita', image: '/keita.jpg', style: 'Mental Tribe', jour: 'vendredi', scene: 'spirale' },
  { id: 8, nom: 'Akou', image: '/akou.jpg', style: 'Mental Tekno', jour: 'vendredi', scene: 'spirale' },
  { id: 9, nom: 'Flaemish Lion', image: '/flaemishlion.jpg', style: 'Tribe Mental', jour: 'vendredi', scene: 'spirale' },
  { id: 10, nom: 'DR Paco', image: '/drpaco.png', style: 'Tribe Tekno', jour: 'vendredi', scene: 'spirale' },
  { id: 11, nom: 'GRE', image: '/gre.jpg', style: 'Tribe Tekno Tribe Hybnotique', jour: 'vendredi', scene: 'spirale' },
  { id: 12, nom: 'Nico', image: '/nico.jpg', style: 'Disco', icon: 'immersif', jour: 'vendredi', scene: 'fractale' },
  { id: 13, nom: 'Jacqueline', image: '/jacqueline.jpeg', style: 'Indie/groove', icon: 'locaux', jour: 'vendredi', scene: 'fractale' },
  { id: 14, nom: 'Jako', image: '/jako.jpg', style: 'Minimale Psy', icon: 'immersif',jour: 'vendredi', scene: 'fractale' },
  { id: 15, nom: 'Stoat', image: '/stoat.jpg', style: 'Psy Dark Groove', jour: 'vendredi', scene: 'fractale' },
  { id: 16, nom: 'Aim', image: '/aim.jpg', style: 'Psytech', jour: 'vendredi', scene: 'fractale' },
  { id: 17, nom: '5XL', image: '/5xl.jpg', style: 'Psytech to Bushprog', icon: 'immersif', jour: 'vendredi', scene: 'fractale' },
  { id: 18, nom: 'Melusine', image: '/melusine.jpg', style: 'Groovy Techno', jour: 'vendredi', scene: 'fractale' },
  { id: 19, nom: 'Deklicat', image: '/deklicat.png', style: 'Techno Cinématique', jour: 'vendredi', scene: 'fractale' },
  { id: 20, nom: '6thfloor', image: '/6thfloor.jpg', style: 'Acid Techno', jour: 'vendredi', scene: 'fractale' },
  { id: 21, nom: 'Tilda', image: '/tilda.jpg', style: 'Dark Psytech', jour: 'vendredi', scene: 'fractale' },
  { id: 22, nom: 'Johnny Void', image: '/johnnyvoid.jpg', style: 'Psytechno Indus', jour: 'vendredi', scene: 'fractale' },
  { id: 23, nom: 'Mimix', image: '/mimix.jpg', style: 'Tribal House', icon: 'locaux', jour: 'samedi', scene: 'spirale' },
  { id: 24, nom: 'Alaska', image: '/alaska.jpeg', style: 'Bass House', jour: 'samedi', scene: 'spirale' },
  { id: 25, nom: 'Catharso', image: '/catharso.jpg', style: 'Bass House', jour: 'samedi', scene: 'spirale' },
  { id: 26, nom: 'Alempyre', image: '/alempyre.jpg', style: 'Techno Groove', icon: 'immersif', jour: 'samedi', scene: 'spirale' },
  { id: 27, nom: 'b2b2b2b elusive 23', image: '/b2b2b2belusive23.jpg', style: 'DNB', jour: 'samedi', scene: 'spirale' },
  { id: 28, nom: 'Foussy', image: '/foussy.jpg', style: 'Live Tekno', icon: 'locaux', jour: 'samedi', scene: 'spirale' },
  { id: 29, nom: 'Oblivion', image: '/oblivion.jpg', style: 'Hybrid', jour: 'samedi', scene: 'spirale' },
  { id: 30, nom: 'Luche', image: '/luche.jpg', style: 'Hybrid Tekno', jour: 'samedi', scene: 'spirale' },
  { id: 31, nom: 'Velcro', image: '/velcro.jpg', style: 'Tribe Mental', jour: 'samedi', scene: 'spirale' },
  { id: 32, nom: 'Dica', image: '/dica.jpg', style: 'Acid Rave', jour: 'samedi', scene: 'spirale' },
  { id: 33, nom: 'Knaf', image: '/knaf.jpg', style: 'Mentalcore', jour: 'samedi', scene: 'spirale' },
  { id: 34, nom: 'Codei', image: '/codei.jpg', style: 'Early Tekno', icon: 'immersif', jour: 'samedi', scene: 'spirale' },
  { id: 35, nom: 'Jalaya', image: '/jalaya.jpg', style: 'Organic Psy chill + YOGA', jour: 'samedi', scene: 'fractale' },
  { id: 36, nom: 'Primabot', image: '/primabot.jpg', style: 'Psybass/Downtempo', jour: 'samedi', scene: 'fractale' },
  { id: 37, nom: 'Magavoïma', image: '/magavoima.jpg', style: 'Ethnic Groove', jour: 'samedi', scene: 'fractale' },
  { id: 38, nom: 'Eneris', image: '/eneris.jpg', style: 'Psyprog', jour: 'samedi', scene: 'fractale' },
  { id: 39, nom: 'Polette de la nuit', image: '/polette.jpg', style: 'Dirty Prog', icon: 'locaux', jour: 'samedi', scene: 'fractale' },
  { id: 40, nom: 'Clitorock', image: '/clitorock.jpg', style: 'Psyprog', jour: 'samedi', scene: 'fractale' },
  { id: 41, nom: 'Kalki', image: '/kalki.jpg', style: 'Psyprog', jour: 'samedi', scene: 'fractale' },
  { id: 42, nom: 'Lart Cène & Atef Younsi', image: '/lartceneatefyounsi.jpg', style: 'Mental Oriental', jour: 'samedi', scene: 'fractale' },
  { id: 43, nom: 'Z-Leaf', image: '/z-leaf.jpg', style: 'Full on', jour: 'samedi', scene: 'fractale' },
  { id: 44, nom: 'Dica & Antidot', image: '/dica&antidot.jpg', style: 'Goa', jour: 'samedi', scene: 'fractale' },
  { id: 45, nom: 'Alyshka', image: '/alyshka.jpeg', style: 'Full on', jour: 'samedi', scene: 'fractale' },
  { id: 46, nom: 'Zeridium', image: '/zeridium.jpg', style: 'Nighty Full on', jour: 'samedi', scene: 'fractale' },
  { id: 47, nom: 'Zeo', image: '/zeo.jpg', style: 'Dark Psy', jour: 'samedi', scene: 'fractale' },
  { id: 48, nom: 'Vents des Forets', image: '/ventdesforets.jpg', style: 'Hypnothic Techno', jour: 'samedi', scene: 'fractale' }
];



export default function Artistes() {


  const groupes = [
    { titre: 'Vendredi - Scène Spirale', jour: 'vendredi', scene: 'spirale' },
    { titre: 'Vendredi - Scène Fractale', jour: 'vendredi', scene: 'fractale' },
    { titre: 'Samedi - Scène Spirale', jour: 'samedi', scene: 'spirale' },
    { titre: 'Samedi - Scène Fractale', jour: 'samedi', scene: 'fractale' },
  ];

  const [filtre_localisation, setFiltreLoc] = useState('all');

  const [filtre_style, setFiltreStyle] = useState('all');
  const artistesFiltres = artistes.filter((artiste) => {
    const matchLoc = filtre_localisation === 'all' || artiste.icon === filtre_localisation;
    const matchStyle = filtre_style === 'all'
      || artiste.style.toLowerCase().includes(filtre_style.toLowerCase());
    return matchLoc && matchStyle;
  });


  const [menuOpen, setMenuOpen] = useState(false);
  return (


    <div className="min-h-screen bg-gray-900 text-white">
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
        <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}  className="text-5xl md:text-6xl text-white font-bebasNeue" style={{ position: 'absolute', top: '36%' }}>
            Programmation
          </motion.h1>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-70% to-[#192622] to-100%"></div>
      </div>
      {/* Fin template */}

      <div className="w-full text-center bg-[#192622] px-4 sm:px-8">
        <div className="flex items-center justify-center mb-4">
          <h2 className="text-4xl font-bebasNeue">La programmation de Fest'Immersif</h2>
        </div>
        <p className="text-lg py-4 pb-6 font-quantico leading-relaxed max-w-4xl mx-auto">
          Fest'Immersif accueille des artistes variés et des DJ’s venus de différents horizons, chacun apportant son propre univers musical. De la transe envoûtante sur la Scène Fractale à la tekno percutante sur la Scène Spirale, chaque performance promet de vous embarquer dans une expérience sonore unique. Préparez-vous à vivre des sets puissants et à découvrir des talents qui feront vibrer l’atmosphère tout au long du festival.
        </p>


        {/* ✅ MENU FILTRE */}
        <div className="pb-8">
          <select
            value={filtre_localisation}
            onChange={(e) => setFiltreLoc(e.target.value)}
            className="bg-black text-white border border-gray-500 px-4 py-2 mr-4 rounded-md font-quantico w-full sm:w-auto mb-4"
          >
            <option value="all">Tous les artistes</option>
            <option value="immersif">Immersif</option>
            <option value="locaux">Locaux</option>
          </select>
          <select
            value={filtre_style}
            onChange={(e) => setFiltreStyle(e.target.value)}
            className="bg-black text-white border border-gray-500 px-4 py-2 mr-4 rounded-md font-quantico w-full sm:w-auto"
          >
            <option value="all">Tous les styles</option>
            <option value="Acid">Acid</option>
            <option value="Dub">Dub</option>
            <option value="Techno">Techno</option>
            <option value="Tekno">Tekno</option>
            <option value="Psy">Psy</option>
            <option value="House">House</option>
            <option value="Tribe">Tribe</option>
            <option value="Mental">Mental</option>
            <option value="Indie">Indie</option>
            <option value="Groove">Groove</option>
            <option value="Minimale">Minimale</option>
            <option value="Psy">Psy</option>
            <option value="Disco">Disco</option>
            <option value="DNB">DNB</option>
          </select>

        </div>
      </div>

      {/* ✅ CARTES ARTISTES FILTRÉES */}
      {groupes.map(({ titre, jour, scene }) => {
        const groupeArtistes = artistesFiltres.filter(
          (artiste) => artiste.jour === jour && artiste.scene === scene
        );

        if (groupeArtistes.length === 0) return null;

        return (
          <div key={`${jour}-${scene}`} className="p-6 bg-[#192622]">
            <div className="my-8">
              <hr className="border-t-2 border-gray-300 mb-4" />
              <h2 className="text-4xl font-bebasNeue text-center tracking-wide mb-4 text-white">
                {titre}
              </h2>
              <hr className="border-t-2 border-gray-300 mt-4" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {groupeArtistes.map((artiste) => (
                <a key={artiste.id} href={artiste.soundcloud} target="_blank" rel="noopener noreferrer" className="relative overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg group">
                  <div className="w-full aspect-square">
                    <img src={artiste.image} alt={artiste.nom} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/20 to-transparent flex flex-col items-center justify-end p-4 text-white">
                    <div className="flex items-center">
                      {artiste.icon === 'immersif' && (
                        <img src="/logo_immersif_transparent.png" alt="logo_immersif_event" className="w-7 h-4 mr-2" />
                      )}
                      {artiste.icon === 'locaux' && (
                        <LocateFixed className="w-5 h-5 mr-2 text-white" />
                      )}
                      <h3 className="text-lg font-bold">{artiste.nom}</h3>
                    </div>
                    <p className="text-sm">{artiste.style}</p>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all flex items-center justify-center">
                    <img src="/soundcloud_logo.png" alt="SoundCloud" className="w-17 h-16 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        );
      })}


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
