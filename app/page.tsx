import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Profile } from "@/components/Profile";
import { Skills } from "@/components/Skills";
import { Marquee } from "@/components/Marquee";
import { Experience } from "@/components/Experience";
import { References } from "@/components/References";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Hero />
      <Stats />
      <Profile />
      <Skills />
      <Marquee />
      <Experience />
      <References />
      <Footer />
    </main>
  );
}
