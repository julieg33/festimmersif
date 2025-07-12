import type { Metadata } from "next";
import { Poppins, Merriweather, Geist_Mono, Orbitron, Audiowide, Quantico, Saira_Stencil_One, Bebas_Neue, Turret_Road, Syne_Tactile } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const bebasNeue = Bebas_Neue({ 
  variable: "--font-bebasNeue", 
  subsets: ['latin'], 
  weight: ['400'] 
});

const sairaStencil = Saira_Stencil_One({ 
  variable: "--font-sairaStencil", 
  subsets: ['latin'], 
  weight: ['400'] 
});
const quantico = Quantico({ 
  variable: "--font-quantico", 
  subsets: ['latin'], 
  weight: ['400'] 
});
const turret = Turret_Road({ 
  variable: "--font-turret", 
  subsets: ['latin'], 
  weight: ['800'] 
});
// Importation des polices avec variables CSS
const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700"], // Ajoute les poids que tu veux
});


const syne = Syne_Tactile({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400"], // Ajoute les poids que tu veux
});

const audiowide = Audiowide({
  variable: "--font-audiowide",
  subsets: ["latin"],
  weight: ["400"], // Audiowide n'a qu'un seul poids
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"], // Poids 400 (normal) et 700 (bold)
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fest.Immersif",
  description: "Fest.Immersif - L\’Écho Sauvage. 22 & 23 août 2025 •📍Blasimon (33) 🌀 Tekno | Groove | Dub 💫 Psytrance | Psytechno",
  keywords: ["festival", "immersif", "musique", "électronique", "gironde", "techno"],
  icons: {
    icon: "/logo_immersif.png",
  }
};

export default async function RootLayout({
  children
}: Readonly<{ children: React.ReactNode 
}>) {
  return (
    <html lang="fr">
      <body
        className={`${poppins.variable} ${merriweather.variable} ${geistMono.variable} ${syne.variable} ${orbitron.variable} ${turret.variable} ${quantico.variable} ${audiowide.variable} ${sairaStencil.variable} ${bebasNeue.variable} antialiased`}
      >
           
        {children}
       
      </body>
      
    </html>
  );
}
