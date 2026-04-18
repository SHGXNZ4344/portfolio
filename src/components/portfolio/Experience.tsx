import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const EXPERIENCE = [
  {
    role: "Freelancer — Frontend Developer",
    period: "2024",
    bullets: [
      "Built and deployed responsive web interfaces, improving usability and cross-device compatibility.",
      "Gathered client requirements and delivered tailored solutions within defined timelines.",
      "Reduced page load time by optimizing assets and implementing efficient UI rendering techniques.",
      "Integrated APIs to enable dynamic, data-driven user interfaces.",
    ],
  },
];

const EDUCATION = [
  {
    degree: "Bachelor of Engineering in CSE (AI & ML Specialization)",
    school: "Chandigarh University",
    period: "Expected 2026",
  },
];

export function Experience() {
  return (
    <section id="experience" className="px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-[0.25em] text-primary/80">Journey</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Experience & education</h2>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground/70">
              <Briefcase className="h-4 w-4 text-primary" /> Experience
            </div>
            <ul className="mt-5 space-y-6">
              {EXPERIENCE.map((e) => (
                <li key={e.role}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-base font-semibold">{e.role}</h3>
                    <span className="text-xs text-muted-foreground">{e.period}</span>
                  </div>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground marker:text-primary/60">
                    {e.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground/70">
              <GraduationCap className="h-4 w-4 text-primary" /> Education
            </div>
            <ul className="mt-5 space-y-5">
              {EDUCATION.map((ed) => (
                <li key={ed.degree}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-base font-semibold">{ed.degree}</h3>
                    <span className="text-xs text-muted-foreground">{ed.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{ed.school}</p>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-white/10 pt-5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/70">Additional</h4>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground marker:text-primary/60">
                <li>Developing AI-driven automation workflows and integrating ML models into applications.</li>
                <li>Strong focus on performance optimization and scalable system design.</li>
                <li>Exploring advancements in generative AI, cloud systems, and intelligent automation.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
