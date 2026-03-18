import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };

export const VisionSection = () => (
  <section className="py-[15vh] px-4 sm:px-8 md:px-16 max-w-[1400px] mx-auto">
    <div className="grid grid-cols-12 gap-6 md:gap-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={transition}
        className="col-span-12 md:col-span-6"
      >
        <span className="font-mono text-xs tracking-[0.2em] text-primary">
          03 / PURPOSE
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-[-0.04em] mt-6 leading-[1.05]">
          Vision &amp; Mission
        </h2>

        <p className="text-foreground/70 leading-relaxed text-lg mt-8">
          To transform energy storage through advanced battery regeneration
          technology, working toward a future where every battery is
          regenerated before the end of its lifecycle. Prioritizing
          eco-friendly approaches, we aim to catalyze a circular economy in
          the battery industry.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ ...transition, delay: 0.2 }}
        className="col-span-12 md:col-span-5 md:col-start-8 flex flex-col gap-6"
      >
        {/* Vision Card */}
        <div className="border border-border p-8 hover:bg-muted transition-colors duration-500 group">
          <Eye className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
          <h3 className="font-display text-xl font-bold mt-5 group-hover:text-primary transition-colors">
            Our Vision
          </h3>
          <p className="text-foreground/60 text-sm leading-relaxed mt-3">
            A future where every battery is regenerated before the end of
            its lifecycle — universal adoption of regeneration technology
            as the global standard.
          </p>
        </div>

        {/* Mission Card */}
        <div className="border border-border p-8 hover:bg-muted transition-colors duration-500 group">
          <Target className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
          <h3 className="font-display text-xl font-bold mt-5 group-hover:text-primary transition-colors">
            Our Mission
          </h3>
          <p className="text-foreground/60 text-sm leading-relaxed mt-3">
            Transform energy storage through advanced battery regeneration
            technology, reducing waste, saving energy, and building the
            future of sustainable power.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);
