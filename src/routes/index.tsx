import { createFileRoute } from "@tanstack/react-router";
import { Background } from "@/components/portfolio/Background";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { WorkInProgress } from "@/components/portfolio/WorkInProgress";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Shubham Rohilla — Software Engineer · AI/ML Specialist" },
      {
        name: "description",
        content:
          "Portfolio of Shubham Rohilla — Software Engineer specializing in AI/ML, building scalable web apps, AI automation workflows, and ML-powered systems.",
      },
      { property: "og:title", content: "Shubham Rohilla — Software Engineer · AI/ML Specialist" },
      {
        property: "og:description",
        content: "Projects in AI/ML, automation, and frontend engineering by Shubham Rohilla.",
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
      <Experience />
      <About />
      <WorkInProgress />
      <Contact />
      <Footer />
    </main>
  );
}
