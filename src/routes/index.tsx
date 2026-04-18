import { createFileRoute } from "@tanstack/react-router";
import { Background } from "@/components/portfolio/Background";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { About } from "@/components/portfolio/About";
import { WorkInProgress } from "@/components/portfolio/WorkInProgress";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Your Name — Motion Developer & AI/ML Enthusiast" },
      {
        name: "description",
        content:
          "Portfolio of Your Name — a motion developer and AI/ML enthusiast crafting fluid, glass-like web experiences with React and Framer Motion.",
      },
      { property: "og:title", content: "Your Name — Motion Developer & AI/ML Enthusiast" },
      {
        property: "og:description",
        content: "Selected work in motion design, interactive UI, and applied AI.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen">
      <Background />
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <WorkInProgress />
      <Contact />
      <Footer />
    </main>
  );
}
