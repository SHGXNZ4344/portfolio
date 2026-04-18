import { motion } from "framer-motion";

const INITIALS = "SR";
const BIO_1 =
  "I'm Shubham — a Software Engineer specializing in Artificial Intelligence and Machine Learning. I enjoy turning real-world problems into efficient technical implementations, from AI automation workflows to scalable web apps.";
const BIO_2 =
  "Currently pursuing a Bachelor of Engineering in CSE (AI & ML Specialization) at Chandigarh University. Actively exploring advancements in generative AI, cloud systems, and intelligent automation.";

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
