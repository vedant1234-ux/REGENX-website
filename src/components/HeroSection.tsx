import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };

const stats = [
  { value: "50,000+", label: "Batteries Regenerated" },
  { value: "400+", label: "Centers Across India" },
  { value: "300,000+", label: "Tons CO₂ Reduced" },
];

export const HeroSection = () => (
  <section className="relative min-h-svh flex flex-col justify-end overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    <div className="absolute inset-0 bg-background/60" />

    <div className="relative z-10 p-4 sm:p-8 md:p-16 pt-32 md:pt-16">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={transition}
        className="font-mono text-[9px] xs:text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-8 md:mb-12"
      >
        RegeneraX / INDIA'S PIONEER IN BATTERY REGENERATION SINCE 2012
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, delay: 0.15 }}
        className="font-display text-[clamp(2.5rem,10vw,5rem)] sm:text-7xl md:text-[8vw] lg:text-[6vw] font-bold leading-[1] sm:leading-[0.9] tracking-[-0.04em] uppercase max-w-5xl"
      >
        Battery{" "}
        <span className="text-primary">Regeneration</span>
        <br />
        That Delivers.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, delay: 0.3 }}
        className="mt-12 grid grid-cols-12 gap-6 border-t border-border pt-8"
      >
        <p className="col-span-12 md:col-span-5 text-lg text-foreground/80 leading-relaxed">
          Battery regeneration that extends battery life 2–3× and cuts operating
          costs by up to 70%. India's pioneer since 2012 — ISO 9001:2015 & ISO 14001:2015 certified.
        </p>
        <div className="col-span-12 md:col-start-9 md:col-span-4 flex items-end">
          <a
            href="#contact"
            className="w-full h-14 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 uppercase tracking-[0.15em] text-sm font-bold flex items-center justify-center"
          >
            Regenerate Your Old Battery
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, delay: 0.45 }}
        className="mt-12 flex flex-wrap gap-12 md:gap-20"
      >
        {stats.map((s, i) => (
          <div key={i}>
            <div className="font-display text-3xl md:text-4xl font-bold text-primary">{s.value}</div>
            <div className="font-mono text-xs tracking-[0.1em] text-muted-foreground mt-1">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);
