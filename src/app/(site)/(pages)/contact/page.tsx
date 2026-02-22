import Contact from "@/components/Contact";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact | Inquest-Studios - Développement & Hébergement Web",
  description: "Contactez Inquest-Studios pour vos projets de développement et d'hébergement web.",
  // other metadata
};

const ContactPage = () => {
  return (
    <main>
      <Contact />
    </main>
  );
};

export default ContactPage;
