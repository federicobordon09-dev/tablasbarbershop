import FinalCTA from "@/components/sections/FinalCTA";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Services from "@/components/sections/Services";
import SocialProof from "@/components/sections/SocialProof";
import Visit from "@/components/sections/Visit";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <SocialProof />
      <Visit />
      <FinalCTA />
    </>
  );
}