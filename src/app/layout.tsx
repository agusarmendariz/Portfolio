import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import DarkMode from "@/components/DarkMode";
import { Toaster } from 'sonner'



const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plex-sans", 
  display: "swap",
});


const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono", 
  display: "swap",
});
export const metadata: Metadata = {
  title: "Agustina Armendariz- Frontend Developer",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${plexSans.variable} ${plexMono.variable} antialiased`}

      >
      <DarkMode>
          {children}
          <Toaster position="bottom-right" theme="dark" closeButton />
       </DarkMode>
      </body>
    </html>
  );
}
