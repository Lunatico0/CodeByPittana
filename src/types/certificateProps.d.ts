export interface CertificateProps {
  id: string;
  title: string;
  issuer?: string;
  date: string;
  image: string;
  link: string;
  description: string;
  category?: "Backend" | "Frontend" | "Language" | "Other";
  skills?: string[];
}
