import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const PROJECTS = [
  {
    title: "AI-Powered Traffic Flow Optimization",
    description:
      "Digital-twin based system that simulates real-world traffic and uses ML to predict congestion and improve flow.",
    tech: ["Python", "PyTorch", "Digital Twins", "Data Pipeline"],
    demo: "https://github.com/SHGXNZ4344/v0-ai-traffic-optimization",
    repo: "#",
    accent: "from-primary/40 to-accent/30",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing technical projects with a structured UI, live previews, and repo integration.",
    tech: ["React", "Framer Motion", "Tailwind"],
    demo: "https://shubham-rohilla.lovable.app/#top",
    repo: "#",
    accent: "from-accent/40 to-primary/30",
  },
  {
    title: "Task Tracker Application",
    description:
      "Task management system supporting creation, tracking, and prioritization, backed by SQL for efficient data handling.",
    tech: ["Python", "SQL", "Frontend"],
    demo: "https://charm-blink-greet.lovable.app",
    repo: "#",
    accent: "from-primary/30 to-accent/40",
  },
];

export function Projects() {
  return (
    <section id="work" className="px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Selected Work" title="Projects with motion" />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="glass group relative overflow-hidden rounded-2xl p-5 transition-shadow hover:shadow-[0_20px_60px_-20px_var(--primary)]"
            >
              <div
                className={`relative mb-5 aspect-[16/10] overflow-hidden rounded-xl bg-gradient-to-br ${p.accent} ring-1 ring-white/10`}
              >
                <div className="absolute inset-0 grid place-items-center text-xs uppercase tracking-widest text-white/60">
                  Preview
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent transition-opacity duration-300 group-hover:opacity-0" />
              </div>

              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{p.description}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-foreground/80"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex gap-2">
                <Button asChild size="sm" className="rounded-full bg-gradient-to-r from-primary to-primary/80">
                  <a href={p.demo} target="_blank" rel="noreferrer">
                    <ExternalLink /> Live
                  </a>
                </Button>
                <Button asChild size="sm" variant="outline" className="rounded-full border-white/15 bg-white/5">
                  <a href={p.repo} target="_blank" rel="noreferrer">
                    <Github /> Code
                  </a>
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      <span className="text-xs uppercase tracking-[0.25em] text-primary/80">{eyebrow}</span>
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
    </motion.div>
  );
}
