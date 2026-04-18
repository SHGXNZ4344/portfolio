import { motion } from "framer-motion";
import { Wrench } from "lucide-react";

const ITEMS = [
  "Realtime motion-capture portfolio mode",
  "Voice-controlled portfolio navigator",
  "AI-generated case study pages",
];

export function WorkInProgress() {
  return (
    <section className="px-4 pb-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="glass flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-primary/15 text-primary">
              <Wrench className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-semibold">Work in progress</p>
              <p className="text-xs text-muted-foreground">Things I'm cooking right now</p>
            </div>
          </div>
          <ul className="flex flex-wrap gap-2">
            {ITEMS.map((t) => (
              <li
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-foreground/80"
              >
                {t}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
