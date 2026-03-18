import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };

export const RegeneraxSaysSection = () => (
  <section className="py-[12vh] px-4 sm:px-8 md:px-16 border-t border-b border-border">
    <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={transition}
      >
        <span className="font-mono text-xs tracking-[0.2em] text-primary block mb-4">
          04 / REGENERAX SAYS
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-[-0.02em] leading-[1.1]">
          DO NOT REPLACE —
        </h2>
        <h2 className="font-display text-4xl md:text-6xl font-bold tracking-[-0.02em] leading-[1.1] text-primary mt-1">
          REGENERATE!
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ ...transition, delay: 0.2 }}
        className="flex items-center gap-4"
      >
        <Trophy className="w-16 h-16 md:w-20 md:h-20 text-foreground" />
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
      </motion.div>
    </div>
  </section>
);
