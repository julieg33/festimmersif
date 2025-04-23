import type { Metadata } from "next";
import { Poppins, Merriweather, Geist_Mono, Orbitron, Audiowide, Quantico, Saira_Stencil_One, Bebas_Neue } from "next/font/google";
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
// Importation des polices avec variables CSS
const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700"], // Ajoute les poids que tu veux
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
  title: "Fest'Immersif",
  description: "Festival by IMMERSIF EVENT",
  icons: {
    icon: "/logo_immersif.png", // ou /favicon.png, etc.
  }
};

export default async function RootLayout({
  children
}: Readonly<{ children: React.ReactNode 
}>) {
  return (
    <html lang="fr">
      <body
        className={`${poppins.variable} ${merriweather.variable} ${geistMono.variable} ${orbitron.variable} ${quantico.variable} ${audiowide.variable} ${sairaStencil.variable} ${bebasNeue.variable} antialiased`}
      >
           
        {children}
       
      </body>
      
    </html>
  );
}
