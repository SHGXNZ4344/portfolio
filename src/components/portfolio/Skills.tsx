import { motion } from "framer-motion";

const GROUPS: { name: string; items: { label: string; level: number }[] }[] = [
  {
    name: "Frontend",
    items: [
      { label: "React", level: 92 },
      { label: "TypeScript", level: 85 },
      { label: "Tailwind", level: 90 },
    ],
  },
  {
    name: "Animation",
    items: [
      { label: "Framer Motion", level: 88 },
      { label: "GSAP", level: 70 },
      { label: "CSS Motion", level: 82 },
    ],
  },
  {
    name: "AI / ML",
    items: [
      { label: "Python", level: 80 },
      { label: "PyTorch", level: 65 },
      { label: "LLM APIs", level: 78 },
    ],
  },
  {
    name: "Tools",
    items: [
      { label: "Git", level: 88 },
      { label: "Figma", level: 75 },
      { label: "Vite", level: 85 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-[0.25em] text-primary/80">Toolbox</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Skills & stack</h2>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {GROUPS.map((g, gi) => (
            <motion.div
              key={g.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: gi * 0.06 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/70">{g.name}</h3>
              <ul className="mt-4 space-y-4">
                {g.items.map((s) => (
                  <li key={s.label}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="text-foreground/90">{s.label}</span>
                      <span className="text-xs text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
