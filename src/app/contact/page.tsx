import ContactSection from "@sections/Contact/ContactSection";
import { Suspense } from "react";
import Loading from "@ui/Loading";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Suspense fallback={<Loading />}>
        <ContactSection />
      </Suspense>
    </main>
  );
}
