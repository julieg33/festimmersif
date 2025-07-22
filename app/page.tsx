'use client';

import Link from 'next/link';
import { useState, useEffect } from "react";
import { Ticket, Music, PartyPopper, Sprout, Shell, Biohazard, Menu, X, Instagram, Facebook } from "lucide-react";
import { motion } from 'framer-motion';

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

          {/* Logo */}
          <Link href="/" className="group pl-2 sm:pl-6">
            <div className="cursor-pointer">
              <h1 className="text-lg sm:text-xl group-hover:text-gray-300">IMMERSIF EVENT</h1>
              <p className="text-xs sm:text-sm text-gray-400 leading-none group-hover:text-gray-500">22–23 août 2025</p>
            </div>
          </Link>

          {/* Burger menu pour tel */}
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
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-5xl md:text-6xl text-white font-turret extra-bold absolute top-[22%] sm:top-[36%]">
            Fest'immersif
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }} className='absolute top-[30%] text-white text-3xl font-syne sm:top-[42%]' >l'écho sauvage
          </motion.p>
        </div>
        {/* Dégradé */}
        <div className="absolute w-full h-32 sm:h-full bottom-0 bg-gradient-to-b from-transparent via-transparent via-50% to-[#1f1818] sm:via-80% sm:to-[#1f1818] to-100%"></div>
      </div>
      {/* Fin template */}


      <section className="bg-[#1f1818] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center w-full">
          <div className="w-full md:w-5/6 text-white text-center">

            <div className="flex items-center justify-center mb-4">
              <Sprout className="w-8 h-8 text-[#9ec37b] mr-4" />
              <h2 className="text-4xl font-bebasNeue text-white">Bienvenue chez vous </h2>
              <Sprout className="w-8 h-8 text-[#9ec37b] ml-4" />
            </div>

            <p className="text-lg py-2 font-quantico leading-relaxed">
              Là où la nature et la fête ne font qu’un.
            </p>
            <p className="text-lg py-0 font-quantico leading-relaxed">
              Fest’Immersif arrive les 22 & 23 août 2025 pour une première édition sauvage et vibrante, où les pulsations électroniques résonnent au cœur d’un monde en reconquête. Ici, la nature reprend ses droits sur les ruines d’un passé technologique, et tu es invité.e à plonger dans deux nuits de transe et de liberté.
            </p>
            <p className="text-lg py-2 font-quantico leading-relaxed">
              Perdu.e au milieu d’un spot brut et vivant en plein territoire girondin, venez célébrer l’énergie de la scène locale : DJs, artistes et intervenants s’unissent pour façonner un univers sensoriel et engagé. Fest.Immersif, c’est un hommage à la culture de la musique électronique, une échappée hors du quotidien, une parenthèse où la musique et la nature fusionnent en un battement unique. </p>

            <Link href="/billetterie">
              <p className="text-2xl text-[#9ec37b] py-4 font-bebasNeue leading-relaxed  hover:underline">
                Rejoins nous, prends ton billet !
              </p>
            </Link>
          </div>
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
            <div className="w-64 sm:w-80 h-[24rem] sm:h-[30rem] overflow-hidden rounded-t-full">
              <img src="/img_hp_1.jpg" alt="Décoration immersive" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </section>





      {/* Scènes */}
      <section className="bg-[#1f1818] text-white pt-20 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bebasNeue mb-8 text-white">Deux scènes, deux atmosphères, une seule immersion totale !</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Scène Spirale */}
            <div className="bg-[#24311e] p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <Shell className="w-6 h-6 text-[#9ec37b] mr-4" />
                <h4 className="text-xl font-audiowide text-[#9ec37b]">Scène Spirale</h4> {/* Couleur modifiée */}
                <Shell className="w-6 h-6 text-[#9ec37b] ml-4" />
              </div>
              <p className="text-lg font-quantico leading-relaxed pt-3 text-center text-white">
                La technologie n'est plus, tout comme le monde tel que nous l'avons connu. Les vestiges de l'avidité des Hommes, disparaissent peu à peu, rongés par le temps, et la végétation…
              </p>
              <p className="text-lg font-quantico leading-relaxed pt-3 text-center text-white">
                Dans cet ancien laboratoire, témoin des dérives scientifiques ayant causé la perte de la civilisation humaine, vous trouverez une programmation éclectique influencée par la fête libre d'ici et d'ailleurs, d'aujourd'hui et de demain
              </p>
              <p className="text-lg font-bold font-quantico leading-relaxed text-center text-white pt-3">
                Dub - Bass Music - Hybrid Tekno - Mental Tekno - Tekno - Tribe
              </p>
            </div>

            {/* Scène Fractale */}
            <div className="bg-[#24311e] p-6 rounded-lg shadow-lg">
              <div className="flex justify-center items-center mb-4">
                <Biohazard className="w-6 h-6 text-[#9ec37b] mr-4" />
                <h4 className="text-xl font-audiowide text-[#9ec37b]">Scène Fractale</h4> {/* Couleur modifiée */}
                <Biohazard className="w-6 h-6 text-[#9ec37b] ml-4" />
              </div>
              <p className="text-lg font-quantico pt-3 leading-relaxed text-white">
                À la lisière de l’ancien monde, la nature s’infiltre, grignote les structures métalliques et fait vibrer l’air au rythme des mélodies hypnotiques. Ici, les racines s’emmêlent aux câbles, la fête devient un rituel et la musique une transe collective.</p>

              <p className="text-lg font-quantico pt-3 leading-relaxed text-white">
                Les totems eux, veillent, témoins silencieux d’une métamorphose en marche</p>
              <p className="text-lg font-bold font-quantico pt-3 leading-relaxed text-white">
                Downtempo - Dark Techno - Psytechno - Prog Trance - Goa - Full On - DarkPsy
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-[#1f1818] text-white py-6 px-6">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bebasNeue mb-8">Hormis la musique, il se passe quoi ?!</h3>
          <p className="text-lg font-quantico mb-8 leading-relaxed">
            Fest’Immersif ne se limite pas à la nuit
          </p>
        </div>

        {/* section avec images */}
        <div className="relative w-full">
          {/* Activité 1 */}
          <div className="relative w-full h-[600px] mb-16 overflow-hidden rounded-lg">
            <img
              src="/img_hp_2.jpg"
              alt="Explorations nature & randonnées mystiques"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
              <div className="text-5xl mb-4">🌿</div>
              <h4 className="text-3xl font-bebasNeue mb-4 text-white">Activités</h4>
              <p className="text-xl font-quantico text-white leading-relaxed">
                Jeux en bois, slackline, initiations, jeux en équipe...
              </p>
            </div>
          </div>

          {/* Activité 2 */}
          <div className="relative w-full h-[600px] mb-16 overflow-hidden rounded-lg">
            <img
              src="/img_hp_3.jpg"
              alt="Performances et installations artistiques"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-25"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
              <div className="text-5xl mb-4">🔥</div>
              <h4 className="text-3xl font-bebasNeue mb-4 text-white">Performances et installations artistiques</h4>
              <p className="text-xl font-quantico leading-relaxed text-white">
                Cirque, danse, déambulations...
              </p>
            </div>
          </div>

          {/* Activité 3 */}
          <div className="relative w-full h-[600px] mb-16 overflow-hidden rounded-lg">
            <img
              src="/img_hp_4.jpg"
              alt="Ateliers bien-être & expérimentations sensorielles"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
              <div className="text-5xl mb-4">🖼️</div>
              <h4 className="text-3xl font-bebasNeue mb-4 text-white">Stands</h4>
              <p className="text-xl font-quantico leading-relaxed text-white">
                Tatouage, maquillage, foodtruck, artisanats, fripe...
              </p>
            </div>
          </div>
        </div>
      </section>




      {/* Redirection */}
      <section className="bg-[#1f1818]  text-white py-0 pb-20 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* Programmation */}
          <div className="flex flex-col items-center bg-[#24311e] p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Music size={50} className="text-[#9ec37b] mb-6 transform hover:rotate-12 transition-transform duration-300" />
            <p className="mb-6 font-quantico text-lg text-white leading-relaxed">
              Des artistes soigneusements choisi.e.s, entre rythmes psychédéliques et basses vibrantes
            </p>

            <Link href="/programmation">
              <button className="bg-[#5c4444] text-white px-6 py-3 rounded-full hover:bg-[#1f1818] transition-colors duration-200 font-audiowide text-lg">
                Programmation
              </button>
            </Link>
          </div>
          {/* Précédentes éditions */}
          <div className="flex flex-col items-center bg-[#24311e] p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <PartyPopper size={50} className="text-[#9ec37b] mb-6 transform hover:rotate-12 transition-transform duration-300" />
            <p className="mb-6 font-quantico text-lg text-white leading-relaxed">
              Revis en images nos derniers événements et plonge au cœur de notre univers.</p>
            <Link href="/derniers_evenements">
              <button className="bg-[#5c4444] text-white px-6 py-3 rounded-full hover:bg-[#1f1818] transition-colors duration-200 font-audiowide text-lg">
                Précédents évènements
              </button>
            </Link>
          </div>
          {/* Billetterie */}
          <div className="flex flex-col items-center bg-[#24311e] p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Ticket size={50} className="text-[#9ec37b] mb-6 transform hover:rotate-12 transition-transform duration-300" />
            <p className="mb-6 font-quantico text-lg text-white leading-relaxed">
              Réserve ta place dès maintenant et prépare-toi à une expérience des plus immersives.</p>
            <Link href="/billetterie">
              <button className="bg-[#5c4444] text-white px-6 py-3 rounded-full hover:bg-[#1f1818] transition-colors duration-200 font-audiowide text-lg">
                Billetterie
              </button>
            </Link>
          </div>


        </div>
      </section>

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
