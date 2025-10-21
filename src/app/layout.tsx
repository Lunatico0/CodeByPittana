import "@styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Background from '@components/ui/Background';
import Footer from "@/src/components/Footer/Footer";
import Navbar from "@/src/components/Navbar/Navbar";
import type { Metadata } from "next";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-josefin-sans",
});

export const metadata: Metadata = {
  title: "Patricio Pittana | Fullstack Developer",
  description: "Portfolio de proyectos y contacto - doblep.dev",
  icons: {
    icon: '/favicon.svg',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={josefinSans.variable}>
      <body className={`relative mx-auto bg-bgDark overflow-x-hidde text-text font-josefin`}>
        <Background />
        <Navbar />
        <main className="flex flex-col gap-6 min-h-[calc(100dvh-142px)] md:min-h-[calc(100dvh-166px)] max-w-6xl mx-auto px-2 py-4 md:py-6
        [&>*]:p-3 [&>*]:md:p-6 [&>*]:rounded-2xl [&>*]:bg-secondary/30 [&>*]:backdrop-blur-xs">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
