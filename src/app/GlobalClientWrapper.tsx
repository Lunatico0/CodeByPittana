'use client';

import Background from '@ui/Background';
import Footer from '@components/Footer/Footer';
import Navbar from '@components/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';
import { CVModalProvider } from '@context/CVModalContext';
import { ReactNode } from 'react';

interface GlobalClientWrapperProps {
  children: ReactNode;
}

export default function GlobalClientWrapper({ children }: GlobalClientWrapperProps) {
  return (
    <CVModalProvider>
      <LayoutFrame>
        {children}
      </LayoutFrame>
      <ToastConfig />
    </CVModalProvider>
  );
}

function LayoutFrame({ children }: { children: ReactNode }) {
  return (
    <>
      <Background />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

function ToastConfig() {
  return (
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
          iconTheme: { primary: '#9E99FF', secondary: '#E8E8E8' },
        },
        error: {
          iconTheme: { primary: '#DC2626', secondary: '#E8E8E8' },
        },
      }}
    />
  );
}
