import "@styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import { seoConfig } from "@data/seoConfig";
import GlobalClientWrapper from "@/src/app/GlobalClientWrapper";
import type { Metadata, Viewport } from "next";
import JsonLdPerson from "@components/seo/JsonLdPerson";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-josefin-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.url),
  title: seoConfig.title,
  description: seoConfig.description,
  authors: [{ name: seoConfig.author }],
  openGraph: {
    type: "website",
    locale: seoConfig.locale,
    url: seoConfig.url,
    siteName: seoConfig.siteName,
    title: seoConfig.title,
    description: seoConfig.description,
    images: [
      {
        url: seoConfig.ogImage,
        width: 1200,
        height: 630,
        alt: seoConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.title,
    description: seoConfig.description,
    images: [seoConfig.ogImage],
  },
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: seoConfig.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1C1C21"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={josefinSans.variable} data-scroll-behavior="smooth">
      <body
        className="relative mx-auto bg-bgDark overflow-x-hidden text-text font-josefin"
        suppressHydrationWarning
      >
        <GlobalClientWrapper>
          <JsonLdPerson />
          <main
            className="flex flex-col gap-6 min-h-[calc(100dvh-142px)] md:min-h-[calc(100dvh-166px)]
                   max-w-7xl mx-auto px-2 py-4 md:py-6
                   [&>*]:p-4 [&>*]:md:p-6 [&>*]:rounded-2xl [&>*]:bg-secondary/30 [&>*]:backdrop-blur-xs"
          >
            {children}
          </main>
        </GlobalClientWrapper>
      </body>
    </html>
  );
}
