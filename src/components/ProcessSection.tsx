import { motion } from "framer-motion";
import { Battery, ClipboardCheck, Cpu, BarChart3, Zap } from "lucide-react";

const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };

const steps = [
  {
    icon: Battery,
    title: "Battery Intake",
    description: "Weak/drained battery brought to SUN-C center.",
    color: "bg-red-400",
  },
  {
    icon: ClipboardCheck,
    title: "Pre-Testing",
    description: "Experts conduct thorough battery pre-testing & assessment.",
    color: "bg-amber-400",
  },
  {
    icon: Cpu,
    title: "Regeneration",
    description:
      "Regeneration on SUN-C Regenerator using controlled current pulse technology.",
    color: "bg-emerald-400",
  },
  {
    icon: BarChart3,
    title: "Post Analysis",
    description: "Post regeneration analysis & quality certification.",
    color: "bg-sky-400",
  },
  {
    icon: Zap,
    title: "Ready to Dispatch",
    description: "Battery ready to dispatch & re-use with up to 1-year warranty.",
    color: "bg-primary",
  },
];

export const ProcessSection = () => (
  <section id="process" className="py-[15vh] px-8 md:px-16 max-w-[1400px] mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={transition}
      className="mb-16"
    >
      <span className="font-mono text-xs tracking-[0.2em] text-primary">
        09 / THE PROCESS
      </span>
      <h2 className="font-display text-4xl md:text-5xl font-bold tracking-[-0.04em] mt-6 leading-[1.05] uppercase">
        The Process
      </h2>
    </motion.div>

    {/* Process Timeline */}
    <div className="relative">
      {/* Horizontal connector line base (desktop) */}
      <div className="hidden md:block absolute top-14 left-[10%] right-[10%] h-0.5 bg-border/50" />
      
      {/* Animated horizontal connector line (desktop) */}
      <motion.div 
        className="hidden md:block absolute top-14 left-[10%] h-0.5 bg-primary origin-left z-0"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
        style={{ right: "10%" }}
      />

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ ...transition, delay: i * 0.2 }}
            className="flex flex-col items-center text-center group"
          >
            {/* Circle icon */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 w-28 h-28 rounded-full border-2 border-border bg-background flex items-center justify-center group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] transition-all duration-500 cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-full ${step.color}/15 flex items-center justify-center group-hover:${step.color}/30 transition-colors duration-500`}>
                <step.icon className={`w-7 h-7 text-foreground group-hover:text-primary transition-colors duration-300`} />
              </div>
            </motion.div>

            {/* Arrow indicator */}
            <motion.div 
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
              className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[10px] border-l-transparent border-r-transparent border-t-primary mt-3 opacity-80 group-hover:opacity-100 transition-opacity" 
            />

            {/* Title */}
            <h3 className="font-display text-sm font-bold mt-4 uppercase tracking-wide group-hover:text-primary transition-colors duration-300">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-foreground/50 text-xs leading-relaxed mt-2 max-w-[160px]">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
