import { motion } from "framer-motion";
import { Copy, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const EMAIL = "hello@your-domain.dev";
const SOCIALS = [
  { label: "GitHub", href: "#", Icon: Github },
  { label: "LinkedIn", href: "#", Icon: Linkedin },
  { label: "X", href: "#", Icon: Twitter },
];

export function Contact() {
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      toast.success("Email copied to clipboard");
    } catch {
      toast.error("Couldn't copy. Try selecting it manually.");
    }
  };

  return (
    <section id="contact" className="px-4 py-28">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="glass-strong rounded-3xl p-8 text-center sm:p-14"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-primary/80">Contact</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
            Let's <span className="text-gradient">build something</span> together.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Got a project, a wild idea, or just want to say hi? My inbox is open.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="glow-primary rounded-full bg-gradient-to-r from-primary to-primary/80">
              <a href={`mailto:${EMAIL}`}>
                <Mail /> {EMAIL}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={copyEmail}
              className="rounded-full border-white/20 bg-white/5 hover:bg-white/10"
            >
              <Copy /> Copy email
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-foreground/80 transition-colors hover:bg-white/10 hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
