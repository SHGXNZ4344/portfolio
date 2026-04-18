import { motion } from "framer-motion";

const INITIALS = "YN";
const BIO_1 =
  "I'm a developer who lives at the intersection of motion design and machine intelligence. I build interfaces that feel alive — not loud, just considered.";
const BIO_2 =
  "When I'm not shipping side projects, I'm reading papers, prototyping micro-interactions, or learning a new tool. Always curious, always iterating.";

export function About() {
  return (
    <section id="about" className="px-4 py-28">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="glass-strong rounded-3xl p-8 sm:p-12"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-primary/80">About</span>
          <div className="mt-6 flex flex-col gap-8 sm:flex-row sm:items-start">
            <div className="grid h-24 w-24 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-2xl font-bold text-primary-foreground shadow-lg">
              {INITIALS}
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">A quick hello</h2>
              <p className="text-foreground/85 leading-relaxed">{BIO_1}</p>
              <p className="text-muted-foreground leading-relaxed">{BIO_2}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
