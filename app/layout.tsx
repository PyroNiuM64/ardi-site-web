import type { Metadata } from "next";
import { Chewy, Quicksand } from "next/font/google";
import "./globals.css";
import FloatingCTA from "@/components/FloatingCTA";
import { Analytics } from "@vercel/analytics/next";

const chewy = Chewy({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400"],
});

const quicksand = Quicksand({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ardi — Le Mouton Multifonction | La Poche Basque",
  description: "Ardi, le couteau suisse textile basque. Sac pliable, anti-stress, désodorisant naturel, bouillote de poche — fabriqué en laine du Pays Basque.",
  icons: {
    icon: "/Logo_sobre.png",
    apple: "/Logo_sobre.png",
    shortcut: "/Logo_sobre.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${chewy.variable} ${quicksand.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" style={{ fontFamily: "var(--font-nunito), sans-serif" }}>
        {children}
        <FloatingCTA />
        <Analytics />
      </body>
    </html>
  );
}
