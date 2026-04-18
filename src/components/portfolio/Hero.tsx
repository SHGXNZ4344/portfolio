import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAME = "Shubham Rohilla";
const TAGLINE = "Software Engineer · AI/ML Specialist";
const INTRO =
  "I build scalable web apps and AI-driven systems — from automation workflows to ML-powered interfaces. Currently pursuing B.E. in CSE (AI & ML) at Chandigarh University.";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center px-4 pt-28">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="glass-strong relative w-full max-w-4xl rounded-3xl p-8 sm:p-12 md:p-16"
      >
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-muted-foreground"
        >
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Open to opportunities
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          <span className="text-gradient">{NAME}</span>
        </motion.h1>

        <motion.p variants={item} className="mt-4 text-lg text-foreground/80 sm:text-xl">
          {TAGLINE}
        </motion.p>

        <motion.p variants={item} className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {INTRO}
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
          <Button asChild size="lg" className="glow-primary rounded-full bg-gradient-to-r from-primary to-primary/80">
            <a href="#work">View Work</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full border-white/20 bg-white/5 hover:bg-white/10">
            <a href="#contact">Get in touch</a>
          </Button>
        </motion.div>
      </motion.div>

      <motion.a
        href="#work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
        aria-label="Scroll to work"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.a>
    </section>
  );
}
