import { motion } from "framer-motion";
import { Battery, Award } from "lucide-react";

const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };

export const ResultsSection = () => (
  <section className="py-[15vh] px-8 md:px-16 bg-muted">
    <div className="max-w-[1400px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={transition}
        className="text-center"
      >
        <span className="font-mono text-xs tracking-[0.2em] text-primary">
          12 / RESULTS
        </span>
        <h2 className="font-display text-4xl md:text-6xl font-bold tracking-[-0.04em] mt-6 leading-[1.05] uppercase">
          Results
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.1 }}
          className="col-span-12 md:col-span-8 md:col-start-3"
        >
          <p className="text-foreground/80 text-lg md:text-xl leading-relaxed text-center">
            SUN-C Battery specializes in the regeneration of lead-acid batteries,
            offering in-house technology and machines designed to extend battery life by 2–3× and
            cut operating costs by up to 70%.
          </p>
          <p className="text-foreground/80 text-lg md:text-xl leading-relaxed text-center mt-6">
            We have successfully regenerated over{" "}
            <span className="text-primary font-bold">50,000+ batteries</span> across
            400+ centers in India, reducing over 300,000 tons of CO₂ emissions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.25 }}
          className="col-span-12 flex justify-center gap-12 md:gap-20 mt-4"
        >
          <div className="text-center">
            <Battery className="w-8 h-8 text-primary mx-auto" />
            <div className="font-display text-4xl md:text-5xl font-bold text-primary mt-3">50K+</div>
            <div className="font-mono text-xs tracking-[0.1em] text-muted-foreground mt-2 uppercase">
              Batteries Regenerated
            </div>
          </div>
          <div className="text-center">
            <Award className="w-8 h-8 text-primary mx-auto" />
            <div className="font-display text-4xl md:text-5xl font-bold text-primary mt-3">400+</div>
            <div className="font-mono text-xs tracking-[0.1em] text-muted-foreground mt-2 uppercase">
              Centers Across India
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
