import "@styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Background from '@ui/Background';
import Footer from "@components/Footer/Footer";
import Navbar from "@components/Navbar/Navbar";
import type { Metadata } from "next";
import { Toaster } from 'react-hot-toast';

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
    <html lang="es"
      className={josefinSans.variable}
    >
      <body className={`relative mx-auto bg-bgDark overflow-x-hidde text-text font-josefin`} suppressHydrationWarning={true}>
        <Background />
        <Navbar />
        <main className="flex flex-col gap-6 min-h-[calc(100dvh-142px)] md:min-h-[calc(100dvh-166px)] max-w-7xl mx-auto px-2 py-4 md:py-6
        [&>*]:p-4 [&>*]:md:p-6 [&>*]:rounded-2xl [&>*]:bg-secondary/30 [&>*]:backdrop-blur-xs">
          {children}
        </main>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#1A1A1A',
              color: '#E8E8E8',
              padding: '12px 20px',
              borderRadius: '8px',
              border: '1px solid #1C1C2130',
              boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
            },

            success: {
              iconTheme: {
                primary: '#9E99FF',
                secondary: '#E8E8E8',
              },
            },
            error: {
              iconTheme: {
                primary: '#DC2626',
                secondary: '#E8E8E8',
              },
            },
          }}
        />
        <Footer />
      </body>
    </html>
  );
}
