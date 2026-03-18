import { motion } from "framer-motion";
import { ArrowDown, AlertTriangle, Phone, Search, RefreshCw, Zap } from "lucide-react";

const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };

const phases = [
  { label: "Formatting", cycles: "20–50", width: "25%" },
  { label: "Peak", cycles: "100–200", width: "40%" },
  { label: "Decline", cycles: "200–400", width: "35%" },
];

const traditionalSteps = [
  { icon: AlertTriangle, label: "Weak Backup", accent: true },
  { icon: Phone, label: "Call Maintenance Team", accent: false },
  { icon: Search, label: "Team Checks Battery Health", accent: false },
  { icon: RefreshCw, label: "Replace Battery", accent: true, error: true },
];

const regeneraxSteps = [
  { icon: AlertTriangle, label: "Weak Backup", accent: true },
  { icon: Phone, label: "Call RegeneraX Team", accent: false },
  { icon: Search, label: "Expert Battery Diagnostic", accent: false },
  { icon: Zap, label: "REGENERATE NOT REPLACE", accent: true, primary: true },
];

export const ProblemSection = () => (
  <section className="py-[15vh] px-4 sm:px-8 md:px-16 max-w-[1400px] mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={transition}
      className="mb-16"
    >
      <span className="font-mono text-xs tracking-[0.2em] text-primary">
        07 / THE PROBLEM
      </span>
      <h2 className="font-display text-4xl md:text-5xl font-bold tracking-[-0.04em] mt-6 leading-[1.05] max-w-3xl">
        Problem &amp; Traditional Solution
      </h2>
      <p className="text-foreground/70 leading-relaxed text-lg mt-6 max-w-2xl">
        Typically, a battery is not considered for maintenance unless it fails to
        produce backup. This reactive approach leads to costly replacements and
        unnecessary waste.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
      {/* Left: Battery Life Cycle */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ ...transition, delay: 0.1 }}
        className="border border-border p-8 md:p-10"
      >
        <h3 className="font-display text-base sm:text-lg font-bold mb-1">
          Deep Cycle Lead-Acid Battery Life Cycle
        </h3>
        <p className="text-foreground/50 text-[10px] sm:text-sm mb-6 sm:mb-8">Capacity vs. Cycles</p>

        {/* Simplified chart representation */}
        <div className="relative h-48 mb-6">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-xs text-muted-foreground font-mono">
            <span>100%</span>
            <span>80%</span>
            <span>60%</span>
            <span>40%</span>
            <span>20%</span>
          </div>

          {/* Chart area */}
          <div className="ml-10 h-full relative">
            <motion.svg
              viewBox="0 0 300 160"
              className="w-full h-full overflow-visible"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <defs>
                <linearGradient id="curveGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.02" />
                </linearGradient>
                <clipPath id="chartClip">
                  <motion.rect
                    x="0"
                    y="0"
                    height="160"
                    variants={{
                      initial: { width: 0 },
                      animate: {
                        width: 300,
                        transition: {
                          duration: 2.5,
                          ease: [0.65, 0, 0.35, 1],
                          repeat: Infinity,
                          repeatType: "reverse",
                          repeatDelay: 0.5
                        }
                      }
                    }}
                  />
                </clipPath>
              </defs>
              {/* Grid lines */}
              <line x1="0" y1="0" x2="300" y2="0" stroke="hsl(var(--border))" strokeWidth="0.5" />
              <line x1="0" y1="40" x2="300" y2="40" stroke="hsl(var(--border))" strokeWidth="0.5" />
              <line x1="0" y1="80" x2="300" y2="80" stroke="hsl(var(--border))" strokeWidth="0.5" />
              <line x1="0" y1="120" x2="300" y2="120" stroke="hsl(var(--border))" strokeWidth="0.5" />
              <line x1="0" y1="160" x2="300" y2="160" stroke="hsl(var(--border))" strokeWidth="0.5" />
              {/* Vertical phase lines */}
              <line x1="75" y1="0" x2="75" y2="160" stroke="hsl(var(--border))" strokeWidth="0.5" strokeDasharray="4,4" />
              <line x1="195" y1="0" x2="195" y2="160" stroke="hsl(var(--border))" strokeWidth="0.5" strokeDasharray="4,4" />
              {/* Area Fill: Revealing via clipPath */}
              <path
                d="M 0 140 C 30 80, 60 15, 75 10 L 195 10 C 220 15, 260 60, 300 150 V 160 H 0 Z"
                fill="url(#curveGrad)"
                clipPath="url(#chartClip)"
                stroke="none"
              />

              {/* Curve Stroke: Drawing via pathLength */}
              <motion.path
                d="M 0 140 C 30 80, 60 15, 75 10 L 195 10 C 220 15, 260 60, 300 150"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                variants={{
                  initial: { pathLength: 0 },
                  animate: {
                    pathLength: 1,
                    transition: {
                      duration: 2.5,
                      ease: [0.65, 0, 0.35, 1],
                      repeat: Infinity,
                      repeatType: "reverse",
                      repeatDelay: 0.5
                    }
                  }
                }}
              />
            </motion.svg>
          </div>
        </div>

        {/* Phase labels */}
        <div className="ml-10 flex">
          {phases.map((p, i) => (
            <div key={i} className="text-center" style={{ width: p.width }}>
              <div className="text-[10px] sm:text-xs font-mono text-primary font-bold leading-none">{p.label}</div>
              <div className="text-[8px] sm:text-[10px] text-muted-foreground mt-0.5 whitespace-nowrap">
                {p.cycles} cycles
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right: Solution Flows */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ ...transition, delay: 0.2 }}
        className="grid grid-cols-1 gap-12 sm:gap-8 md:gap-4"
      >
        {/* Traditional */}
        <div className="flex flex-col items-center">
          <h3 className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground mb-6 uppercase">
            Traditional Solution
          </h3>
          <div className="flex flex-col items-center w-full">
            {traditionalSteps.map((step, i) => (
              <div key={i} className="flex flex-col items-center w-full">
                <div
                  className={`w-full py-4 px-4 text-center font-display font-bold text-[11px] leading-tight tracking-wide border-2 transition-colors ${
                    step.error
                      ? "border-red-500/40 bg-red-500/5 text-red-400"
                      : step.accent
                      ? "border-amber-500/40 bg-amber-500/5 text-amber-400"
                      : "border-border bg-background/50 text-foreground/60"
                  }`}
                >
                  <step.icon className="w-3.5 h-3.5 inline-block mr-2 -mt-0.5" />
                  {step.label}
                </div>
                {i < traditionalSteps.length - 1 && (
                  <ArrowDown className="w-4 h-4 text-muted-foreground/30 my-2" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RegeneraX */}
        <div className="flex flex-col items-center">
          <h3 className="font-mono text-[10px] tracking-[0.2em] text-primary mb-6 uppercase">
            RegeneraX Solution
          </h3>
          <div className="flex flex-col items-center w-full">
            {regeneraxSteps.map((step, i) => (
              <div key={i} className="flex flex-col items-center w-full">
                <div
                  className={`w-full py-4 px-4 text-center font-display font-bold text-[11px] leading-tight tracking-wide border-2 transition-all duration-300 ${
                    step.primary
                      ? "border-primary bg-primary text-primary-foreground shadow-[0_0_20px_rgba(34,197,94,0.3)] scale-105"
                      : step.accent
                      ? "border-amber-500/40 bg-amber-500/5 text-amber-400"
                      : "border-primary/30 bg-primary/5 text-foreground"
                  }`}
                >
                  <step.icon className="w-3.5 h-3.5 inline-block mr-2 -mt-0.5" />
                  {step.label}
                </div>
                {i < regeneraxSteps.length - 1 && (
                  <ArrowDown className="w-4 h-4 text-primary/30 my-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
