'use client';


import React, { useState } from "react";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Instagram, Facebook, LocateFixed, Menu, X, Info } from "lucide-react";

const artistes = [
  { id: 1, nom: 'Hugo', page: 'hugo', image: '/hugobrasse.jpeg', style: 'Selecta Roots', icon: 'locaux', jour: 'vendredi', scene: 'spirale' },
  { id: 2, nom: 'Charly Uzly & Django Elyjah Campbell', page: 'charlyuzlydjangoelyjahcampbell', image: '/charlyuzly&djangoelyjahcampbell.jpeg', style: 'UK Dub', icon: 'locaux', jour: 'vendredi', scene: 'spirale' },
  { id: 3, nom: 'Critikal sub & Thomas Anton', page: 'critikalsubthomasanton', image: '/critikalsubthomasanton.jpg', style: 'Dub', icon: 'locaux', jour: 'vendredi', scene: 'spirale' },
  { id: 4, nom: 'Roots Zombie', page: 'rootszombie', image: '/rootszombie.jpg', style: 'Dub to electro D', icon: 'locaux', jour: 'vendredi', scene: 'spirale' },
  { id: 5, nom: 'Piou', page: 'piou', image: '/piou.JPG', style: 'Mental Dub', jour: 'vendredi', scene: 'spirale' },
  { id: 6, nom: 'Totemïk Anïgua', page: 'totemikanigua', image: '/totemikanigua.jpg', style: 'Mental Tekno', jour: 'vendredi', scene: 'spirale' },
  { id: 7, nom: 'Keita', page: 'keita', image: '/keita.JPG', style: 'Mental Tribe', jour: 'vendredi', scene: 'spirale' },
  { id: 8, nom: 'Akou', page: 'akou', image: '/akou.jpg', style: 'Mental Tekno', jour: 'vendredi', scene: 'spirale' },
  { id: 9, nom: 'Flæmish Lion', page: 'flaemishlion', image: '/flaemishlion.jpg', style: 'Tribe Mental', jour: 'vendredi', scene: 'spirale' },
  { id: 10, nom: 'DR Paco', page: 'drpaco', icon: 'locaux', image: '/drpaco.png', style: 'Tribe Tekno', jour: 'vendredi', scene: 'spirale' },
  { id: 11, nom: 'GRE', page: 'gre', image: '/gre.jpg', style: 'Tribe Tekno Tribe Hybnotique', jour: 'vendredi', scene: 'spirale' },
  { id: 12, nom: 'Ministre des Souvenirs', page: 'ministredessouvenirs', image: '/ministredessouvenirs.jpg', style: 'Disco', icon: 'immersif', jour: 'vendredi', scene: 'fractale' },
  { id: 13, nom: 'Jacqueline', page: 'jacqueline', image: '/jacqueline.jpeg', style: 'Indie/groove', icon: 'locaux', jour: 'vendredi', scene: 'fractale' },
  { id: 14, nom: 'Jako', page: 'jako', image: '/jako.jpg', style: 'Minimale Psy', icon: 'immersif', jour: 'vendredi', scene: 'fractale' },
  { id: 15, nom: 'Stoat', page: 'stoat', image: '/stoat.jpg', icon: 'locaux', style: 'Psy Dark Groove', jour: 'vendredi', scene: 'fractale' },
  { id: 16, nom: 'Aim', page: 'aim', image: '/aim.jpg', style: 'Psytech', jour: 'vendredi', scene: 'fractale' },
  { id: 17, nom: '5XL', page: '5xl', image: '/5XL.jpg', style: 'Psytech to Bushprog', icon: 'immersif', jour: 'vendredi', scene: 'fractale' },
  { id: 18, nom: 'Melusine', page: 'melusine', image: '/melusine.jpg', style: 'Groovy Techno', jour: 'vendredi', scene: 'fractale' },
  { id: 19, nom: 'Deklicat', page: 'deklicat', image: '/deklicat.png', style: 'Techno Cinématique', jour: 'vendredi', scene: 'fractale' },
  { id: 20, nom: '6thfloor', page: '6thfloor', image: '/6thfloor.jpg', style: 'Acid Techno', jour: 'vendredi', scene: 'fractale' },
  { id: 21, nom: 'Tilda', page: 'tilda', image: '/tilda.jpg', style: 'Dark Psytech', jour: 'vendredi', scene: 'fractale' },
  { id: 22, nom: 'Johnny Void', page: 'johnnyvoid', image: '/johnnyvoid.jpg', style: 'Psytechno Indus', jour: 'vendredi', scene: 'fractale' },
  { id: 23, nom: 'Mimix', page: 'mimix', image: '/mimix.jpg', style: 'Tribal House', icon: 'immersif', jour: 'samedi', scene: 'spirale' },
  { id: 24, nom: 'Alaska', page: 'alaska', image: '/alaska.jpeg', icon: 'locaux', style: 'Bass House', jour: 'samedi', scene: 'spirale' },
  { id: 25, nom: 'Catharso', page: 'catharso', image: '/catharso.jpg', style: 'Bass House', jour: 'samedi', scene: 'spirale' },
  { id: 26, nom: 'Alempyre', page: 'alempyre', image: '/alempyre.jpg', style: 'Techno Groove', icon: 'immersif', jour: 'samedi', scene: 'spirale' },
  { id: 27, nom: 'Foussy', page: 'foussy', image: '/foussy.jpg', style: 'Live Tekno', icon: 'locaux', jour: 'samedi', scene: 'spirale' },
  { id: 28, nom: 'Oblivion', page: 'oblivion', image: '/oblivion.jpg', icon: 'locaux', style: 'Hybrid', jour: 'samedi', scene: 'spirale' },
  { id: 29, nom: 'Luche', page: 'luche', image: '/luche.jpg', style: 'Hybrid Tekno', jour: 'samedi', scene: 'spirale' },
  { id: 30, nom: 'Velcro', page: 'velcro', image: '/velcro.JPG', style: 'Tribe Mental', jour: 'samedi', scene: 'spirale' },
  { id: 31, nom: 'Dica', page: 'dica', image: '/dica.jpg', style: 'Acid Rave', jour: 'samedi', scene: 'spirale' },
  { id: 32, nom: 'Knäf', page: 'knaf', image: '/knaf.JPG', icon: 'locaux', style: 'Mentalcore', jour: 'samedi', scene: 'spirale' },
  { id: 33, nom: 'Cødeî', page: 'codei', image: '/codei.jpg', style: 'Early Tekno', icon: 'immersif', jour: 'samedi', scene: 'spirale' },
  { id: 34, nom: 'Jalaya', page: 'jalaya', image: '/jalaya.png', icon: 'locaux', style: 'Organic Psy chill + YOGA', jour: 'samedi', scene: 'fractale' },
  { id: 35, nom: 'Primabot', page: 'primabot', image: '/primabot.jpg', style: 'Psybass/Downtempo', jour: 'samedi', scene: 'fractale' },
  { id: 36, nom: 'Magavoïma', page: 'magavoima', image: '/magavoima.jpg', style: 'Ethnic Groove', icon: 'immersif', jour: 'samedi', scene: 'fractale' },
  { id: 37, nom: 'Eneris', page: 'eneris', image: '/eneris.jpg', style: 'Psyprog', icon: 'locaux', jour: 'samedi', scene: 'fractale' },
  { id: 38, nom: 'Polette de la nuit', page: 'polette', image: '/polette.jpg', style: 'Dirty Prog', icon: 'locaux', jour: 'samedi', scene: 'fractale' },
  { id: 39, nom: 'Clitorock', page: 'clitorock', image: '/clitorock.jpg', style: 'Psyprog', jour: 'samedi', scene: 'fractale' },
  { id: 40, nom: 'Kalki', page: 'kalki', image: '/kalki.jpg', style: 'Psyprog', jour: 'samedi', scene: 'fractale' },
  { id: 41, nom: 'L\'Art Cène & Atef Younsi', page: 'lartceneatefyounsi', image: '/lartceneatefyounsi.jpg', style: 'Mental Oriental', jour: 'samedi', scene: 'fractale' },
  { id: 42, nom: 'Z-Leaf', page: 'zleaf', image: '/z-leaf.jpg', icon: 'locaux', style: 'Full on', jour: 'samedi', scene: 'fractale' },
  { id: 43, nom: 'Dica & Antidot', page: 'dicaantidot', image: '/dica&antidot.jpg', style: 'Goa', jour: 'samedi', scene: 'fractale' },
  { id: 44, nom: 'Alyshka', page: 'alyshka', image: '/alyshka.jpg', style: 'Full on', jour: 'samedi', scene: 'fractale' },
  { id: 45, nom: 'Zeridium', page: 'zeridium', image: '/zeridium.jpg', style: 'Nighty Full on', jour: 'samedi', scene: 'fractale' },
  { id: 46, nom: 'Zeo', page: 'zeo', image: '/zeo.jpg', style: 'Dark Psy', jour: 'samedi', scene: 'fractale' },
  { id: 47, nom: 'Vent des Forets', page: 'ventdesforets', image: '/ventdesforets.jpg', style: 'Hypnothic Techno', jour: 'samedi', scene: 'fractale' },
  { id: 48, nom: 'Matilda Dona', page: 'matildadona', icon: 'locaux', image: '/matildadona.jpg', style: 'Dub', jour: 'vendredi', scene: 'spirale' }
];

interface Artiste {
  id: number;
  page: string;
  nom: string;
  icon?: string;
  image: string;
  jour: string;
  scene: string;
  style?: string;
}


function CarteArtiste({ artiste }: { artiste: Artiste }) {
  const [showInfo, setShowInfo] = React.useState(false);

  return (
    <div className="relative overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg group">
      <Link
        href={`/artistes/${encodeURIComponent(artiste.page)}`}
        className="absolute top-2 right-2 z-20 bg-black bg-opacity-50 rounded-full p-1 text-white"
      >
        <Info size={26} className="text-white" />
      </Link>



      <div className="w-full aspect-square">
        <img
          src={artiste.image}
          alt={artiste.nom}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/20 to-transparent flex flex-col items-center justify-end p-4 text-white pointer-events-none">
        <div className="flex items-center">
          {artiste.icon === 'immersif' && (
            <img
              src="/logo_immersif_transparent.png"
              alt="logo_immersif_event"
              className="w-7 h-4 mr-2"
            />
          )}
          {artiste.icon === 'locaux' && (
            <LocateFixed className="w-5 h-5 mr-2 text-white" />
          )}
          <h3 className="text-lg font-bold font-quantico">
            {artiste.nom}
          </h3>
        </div>
      </div>


      {showInfo && (
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center p-6 text-white z-30">
          <div className="flex items-center mb-2">
            {artiste.icon === 'immersif' && (
              <img
                src="/logo_immersif_transparent.png"
                alt="logo_immersif_event"
                className="w-7 h-4 mr-2"
              />
            )}
            {artiste.icon === 'locaux' && (
              <LocateFixed className="w-5 h-5 mr-2 text-white" />
            )}
            <h3 className="text-lg font-bold font-quantico">{artiste.nom}</h3>
          </div>



          <button
            onClick={() => setShowInfo(false)}
            className="mt-2 px-4 py-1 border border-white font-quantico rounded text-white text-sm"
          >
            Fermer
          </button>
        </div>
      )}
    </div>
  );

}


export default function Artistes() {

  const groupes = [
    { titre: 'Vendredi - Scène Spirale', jour: 'vendredi', scene: 'spirale' },
    { titre: 'Vendredi - Scène Fractale', jour: 'vendredi', scene: 'fractale' },
    { titre: 'Samedi - Scène Spirale', jour: 'samedi', scene: 'spirale' },
    { titre: 'Samedi - Scène Fractale', jour: 'samedi', scene: 'fractale' },
  ];

  const [filtre_localisation, setFiltreLoc] = useState('all');

  {/*} const [filtre_style, setFiltreStyle] = useState('all');*/ }

  const artistesFiltres = artistes.filter((artiste) => {
    const matchLoc = filtre_localisation === 'all' || artiste.icon === filtre_localisation;
    {/*const matchStyle = filtre_style === 'all'
      || artiste.style.toLowerCase().includes(filtre_style.toLowerCase());*/}
    return matchLoc; {/*&& matchStyle*/ }
  });


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
            Programmation
          </motion.h1>

        </div>


        <div className="absolute w-full h-32 sm:h-full bottom-0 bg-gradient-to-b from-transparent via-transparent via-50% to-[#1f1818] sm:via-70% sm:to-[#1f1818] to-100%"></div>

      </div>

      {/* Fin template */}



      <div className="w-full text-center bg-[#1f1818] py-4 px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-center mb-4">
          <h2 className="text-4xl text-[#9ec37b] font-bebasNeue">La programmation de Fest'Immersif</h2>
        </div>
        <p className="text-lg py-4 pb-6 font-quantico leading-relaxed max-w-4xl mx-auto">
          Fest’Immersif réunit une sélection d’artistes aux univers éclectiques, prêts à faire vibrer chaque recoin du festival. Entre la transe planante de la Scène Fractale et la tekno brute de la Scène Spirale, chaque set promet de t’embarquer dans une expérience sonore unique. Prépare-toi à explorer des paysages musicaux variés, portés par des talents émergents et confirmés !
        </p>



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
          {/*
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
          </select>*/}

        </div>

        <div className="flex flex-col items-center justify-center gap-4 text-white text-sm font-quantico mt-4 text-center">
          <div className="flex items-center space-x-2">
            <img
              src="/logo_immersif_transparent.png"
              alt="Logo Immersif"
              className="w-7 h-4"
            />
            <span>Artiste Immersif</span>
          </div>
          <div className="flex items-center space-x-2">
            <LocateFixed className="w-5 h-5 text-white" />
            <span>Artiste local</span>
          </div>
        </div>


      </div>



      {groupes.map(({ titre, jour, scene }) => {
        const groupeArtistes = artistesFiltres.filter(
          (artiste) => artiste.jour === jour && artiste.scene === scene
        );

        if (groupeArtistes.length === 0) return null;

        return (
          <div key={`${jour}-${scene}`} className="p-6 bg-[#1f1818]">
            <div className="my-8">
              <hr className="border-t-2 border-gray-300 mb-4" />
              <h2 className="text-4xl font-bebasNeue text-center tracking-wide mb-4 text-white">
                {titre}
              </h2>
              <hr className="border-t-2 border-gray-300 mt-4" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {groupeArtistes.map((artiste) => (
                <CarteArtiste key={artiste.id} artiste={artiste} />
              ))}

            </div>
          </div>
        );
      })}




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
