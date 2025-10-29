import ContactSection from "@sections/Contact/ContactSection";
import { Suspense } from 'react';

export default function ContactPage() {
  return (
    // Es buena práctica darle un fallback al Suspense
    <main className="flex min-h-screen flex-col items-center p-24">
      <Suspense fallback={<div>Cargando...</div>}>
        <ContactSection />
      </Suspense>
    </main>
  );
}
