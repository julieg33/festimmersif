'use client';

import Link from 'next/link';
import { useState } from "react";
import { Ticket, Music, PartyPopper, Sprout, Shell, Biohazard, Menu, X, Instagram, Facebook } from "lucide-react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
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
          <div className="md:hidden pr-4">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
          <ul className={`md:flex space-x-4 pr-4 hidden`}>
            <li><Link href="/billetterie" className="hover:text-gray-300">Billetterie</Link></li>
            <li><Link href="/programmation" className="hover:text-gray-300">Programmation</Link></li>
            <li><Link href="/village" className="hover:text-gray-300">Village</Link></li>
            <li><Link href="/info" className="hover:text-gray-300">Infos pratiques</Link></li>
            <li><Link href="/derniers_evenements" className="hover:text-gray-300">Derniers évènements</Link></li>
            <li><Link href="/prestataires" className="hover:text-gray-300">Prestataires</Link></li>
          </ul>
        </div>
        <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-black bg-opacity-90 p-4 absolute top-16 w-full left-0`}>
          <ul className="flex flex-col space-y-2 text-center">
            <li><Link href="/billetterie" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>Billetterie</Link></li>
            <li><Link href="/derniers_evenements" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>Derniers évènements</Link></li>
            <li><Link href="/artistes" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>Artistes</Link></li>
            <li><Link href="/prestataires" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>Prestataires</Link></li>
            <li><Link href="/info" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>Infos pratiques</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative w-full">
        <img src="/fond_immersif.png" alt="Programmation" className="w-full h-auto object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl text-white font-bebasNeue" style={{ position: 'absolute', top: '33%' }}>
            Fest'immersif
          </h1>
          <p className="font-quantico" style={{ position: 'absolute', top: '39%' }}>Quand la nature reprend ses droits</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#192622] flex flex-col items-center justify-end p-4 text-white"
          style={{ background: "linear-gradient(to bottom, transparent 80%, transparent 65%, #192622 100%)" }}></div>
      </div>

      {/* Introduction */}
      <section className="bg-[#192622] text-white  pb-20 flex items-center justify-center ">
        <div className="container mx-auto flex justify-center items-center w-full">
          <div className="w-5/6 text-center">
            <div className="flex items-center justify-center mb-4">
              <Sprout className="w-8 h-8 text-[#6ca671] mr-4" />
              <h2 className="text-4xl font-bebasNeue">Bienvenue dans une expérience hors du temps</h2>
              <Sprout className="w-8 h-8 text-[#6ca671] ml-4" />
            </div>

            <p className="text-lg py-6 font-quantico leading-relaxed">
              Où la nature et la fête ne font qu’un. Fest’Immersif revient en force pour une édition explosive,
              fusionnant les battements électroniques avec le frisson d’un monde où la nature reprend ses droits
              sur l’industrialisation. Préparez-vous à vivre deux nuits de pure extase sonore, sur un spot secret
              et sauvage, ancré en plein cœur du territoire girondin.
            </p>
            <p className="text-lg py-6 font-quantico leading-relaxed">
              Célébrons ensemble la richesse de la scène locale, où chaque DJ, artiste et intervenant contribue à façonner une expérience unique. Fest’Immersif est un hommage à la culture underground girondine, une bulle hors du temps où la nature et la musique fusionnent pour créer un monde à part.
              Prêt.e à lâcher prise et à plonger dans cet univers où la nature reprend ses droits ?
            </p>
            <p className="text-2xl text-[#6ca671] py-4 font-bebasNeue leading-relaxed">
              Rejoignez-nous et laissez-vous happer par la spirale de Immersif Event !
            </p>
          </div>
          <div className="w-1/3 flex justify-end ml-auto">
            <div className="w-80 h-[30rem] overflow-hidden rounded-t-full">
              <img src="/img_hp_1.jpg" alt="Décoration immersive" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Scènes */}
      <section className="bg-[#192622] text-white pt-20 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bebasNeue mb-8">Deux scènes, deux atmosphères, une seule immersion totale !</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Scène Spirale */}
            <div className="bg-[#1f3d46] p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <Shell className="w-6 h-6 text-[#6ca671] mr-4" />
                <h4 className="text-xl font-semibold text-[#6ca671]">La Scène Spirale</h4> {/* Couleur modifiée */}
                <Shell className="w-6 h-6 text-[#6ca671] ml-4" />
              </div>
              <p className="text-lg font-quantico leading-relaxed text-center">
                Plongez dans une transe hypnotique, guidée par des DJ’s de niche et des artistes locaux passionnés.
                Un tourbillon de sons envoûtants vous attend, prêt à vous faire perdre la notion du temps.
              </p>
            </div>

            {/* Scène Fractale */}
            <div className="bg-[#1f3d46] p-6 rounded-lg shadow-lg">
              <div className="flex justify-center items-center mb-4">
                <Biohazard className="w-6 h-6 text-[#6ca671] mr-4" />
                <h4 className="text-xl font-semibold text-[#6ca671]">La Scène Fractale</h4> {/* Couleur modifiée */}
                <Biohazard className="w-6 h-6 text-[#6ca671] ml-4" />
              </div>
              <p className="text-lg font-quantico leading-relaxed">
                Un sanctuaire dédié aux basses percutantes et aux kicks acérés. L’univers tekno se déchaîne ici,
                dans un décor où le chaos industriel laisse place à une énergie brute et organique.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Nouvelle section : Aventure immersive */}
      <section className="bg-[#192622] text-white py-16 px-6">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bebasNeue mb-8">Bien plus qu’un festival, une aventure immersive !</h3>
          <p className="text-lg font-quantico mb-8 leading-relaxed">
            Fest’Immersif ne se limite pas à la nuit. Pour les plus téméraires, la journée sera rythmée par des activités inédites :
          </p>
        </div>

        {/* Activités section avec images */}
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
              <h4 className="text-3xl font-bebasNeue mb-4">Explorations nature & randonnées mystiques</h4>
              <p className="text-xl font-quantico leading-relaxed">
                Découvrez la force sauvage du lieu qui nous accueille, une immersion totale dans la nature.
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
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
              <div className="text-5xl mb-4">🔥</div>
              <h4 className="text-3xl font-bebasNeue mb-4">Performances et installations artistiques</h4>
              <p className="text-xl font-quantico leading-relaxed">
                La nature reprend ses droits, et l’art en est le messager à travers des installations captivantes.
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
              <div className="text-5xl mb-4">🌿</div>
              <h4 className="text-3xl font-bebasNeue mb-4">Ateliers bien-être & expérimentations sensorielles</h4>
              <p className="text-xl font-quantico leading-relaxed">
                Reconnectez-vous à votre essence entre deux sets de musique transcendante.
              </p>
            </div>
          </div>
        </div>
      </section>




      {/* Sections redirection */}
      <section className="bg-[#192622]  text-white py-0 pb-20">
        <h3 className="text-4xl font-bebasNeue mb-12 text-center text-gradient bg-clip-text">
          Vous êtes prêts pour une aventure hors du commun ?
        </h3>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* Programmation */}
          <div className="flex flex-col items-center bg-[#1f3d46] p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Music size={50} className="text-[#6ca671] mb-6 transform hover:rotate-12 transition-transform duration-300" />
            <p className="mb-6 font-quantico text-lg leading-relaxed">Nous avons sélectionné les meilleurs artistes pour te faire vibrer au rythme d’une nature sauvage et d’une ambiance envoûtante.</p>
            <Link href="/artistes">
              <button className="bg-[#6ca671] text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors duration-200 font-quantico text-lg">
                Programmation
              </button>
            </Link>
          </div>

          {/* Billetterie */}
          <div className="flex flex-col items-center bg-[#1f3d46] p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Ticket size={50} className="text-[#6ca671] mb-6 transform hover:rotate-12 transition-transform duration-300" />
            <p className="mb-6 font-quantico text-lg leading-relaxed">Réserve ta place dès maintenant et prépare-toi à vivre une immersion sonore et visuelle inédite.</p>
            <Link href="/billetterie">
              <button className="bg-[#6ca671] text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors duration-200 font-quantico text-lg">
                Billetterie
              </button>
            </Link>
          </div>

          {/* Précédentes éditions */}
          <div className="flex flex-col items-center bg-[#1f3d46] p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <PartyPopper size={50} className="text-[#6ca671] mb-6 transform hover:rotate-12 transition-transform duration-300" />
            <p className="mb-6 font-quantico text-lg leading-relaxed">Revivez les moments magiques des précédentes éditions et plongez dans l’univers unique que nous avons créé.</p>
            <Link href="/derniers_evenements">
              <button className="bg-[#6ca671] text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors duration-200 font-quantico text-lg">
                Précédentes éditions
              </button>
            </Link>
          </div>
        </div>
      </section>

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
