import Camp from "@/components/Camp";
import Features from "@/components/Features";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="space-y-2 pb-8">
      <Hero />
      <Camp />
      <Guide />
      <Features />
    </main>
  )
}
