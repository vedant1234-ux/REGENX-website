import { motion } from "framer-motion";

const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };

const metrics = [
  { value: "50K+", label: "Batteries Regenerated" },
  { value: "400+", label: "Centers Across India" },
  { value: "300K+", label: "Tons CO₂ Reduced" },
  { value: "13+", label: "Years Experience" },
];

export const StatsSection = () => (
  <section className="py-[15vh] px-8 md:px-16 bg-muted">
    <div className="max-w-[1400px] mx-auto">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-xs tracking-[0.2em] text-primary"
      >
        12 / IMPACT
      </motion.span>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-12">
        {metrics.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...transition, delay: i * 0.1 }}
            className="border-t border-border pt-6"
          >
            <div className="font-display text-5xl md:text-6xl font-bold text-primary tracking-[-0.04em]">
              {m.value}
            </div>
            <div className="font-mono text-xs tracking-[0.1em] text-muted-foreground mt-3 uppercase">
              {m.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
