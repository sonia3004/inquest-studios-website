import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inquest-Studios | Développement & Hébergement Web",
  description: "Inquest-Studios - Développement et hébergement web",
  // other metadata
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
