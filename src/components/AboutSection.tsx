import { motion } from "framer-motion";
import { Battery, Building2, ShieldCheck, Clock, Target, Award } from "lucide-react";

const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };

const highlights = [
  { icon: Battery, text: "Restores up to 90% Battery Capacity" },
  { icon: Target, text: "Saves up to 70% on Costs" },
  { icon: Clock, text: "Extends Battery Life by 2–3×" },
  { icon: Award, text: "Upto 2 Year Warranty Provided" },
  { icon: Building2, text: "50,000+ Batteries Regenerated across 400+ Centers" },
  { icon: ShieldCheck, text: "ISO 9001:2015 & ISO 14001:2015 Certified" },
];

export const AboutSection = () => (
  <section id="about" className="py-[15vh] px-4 sm:px-8 md:px-16 max-w-[1400px] mx-auto overflow-hidden">
    <div className="grid grid-cols-12 gap-6 md:gap-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={transition}
        className="col-span-12 md:col-span-5"
      >
        <span className="font-mono text-xs tracking-[0.2em] text-primary">01 / ABOUT US</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-[-0.04em] mt-6 leading-[1.05]">
          India's Pioneer in Battery Regeneration
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ ...transition, delay: 0.15 }}
        className="col-span-12 md:col-span-6 md:col-start-7"
      >
        <p className="text-foreground/70 leading-relaxed text-lg">
          RegeneraX is driven by a passion for sustainable energy solutions. To transform energy
          storage through advanced battery regeneration technology, working toward a future where
          every battery is regenerated before the end of its lifecycle. With 13+ years of experience
          and 50,000+ batteries regenerated, we are India's most trusted battery regeneration company.
        </p>

        <div className="mt-10 space-y-5">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: 0.2 + i * 0.08 }}
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground/80 text-base">{item.text}</span>
            </motion.div>
          ))}
        </div>

        <a
          href="#journey"
          className="inline-flex items-center mt-10 text-primary font-mono text-sm tracking-[0.1em] hover:text-foreground transition-colors"
        >
          VIEW OUR JOURNEY →
        </a>
      </motion.div>
    </div>
  </section>
);
