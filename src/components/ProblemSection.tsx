import { motion } from "framer-motion";
import { ArrowDown, AlertTriangle, Phone, Search, RefreshCw } from "lucide-react";

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
  { icon: RefreshCw, label: "Replace Battery", accent: true },
];

export const ProblemSection = () => (
  <section className="py-[15vh] px-8 md:px-16 max-w-[1400px] mx-auto">
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
        <h3 className="font-display text-lg font-bold mb-1">
          Deep Cycle Lead-Acid Battery Life Cycle
        </h3>
        <p className="text-foreground/50 text-sm mb-8">Capacity vs. Cycles</p>

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
            <svg
              viewBox="0 0 300 160"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="curveGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.02" />
                </linearGradient>
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
              {/* Curve: rise then decline */}
              <path
                d="M 0 140 C 30 80, 60 15, 75 10 L 195 10 C 220 15, 260 60, 300 150"
                fill="url(#curveGrad)"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        {/* Phase labels */}
        <div className="ml-10 flex">
          {phases.map((p, i) => (
            <div key={i} className="text-center" style={{ width: p.width }}>
              <div className="text-xs font-mono text-primary font-bold">{p.label}</div>
              <div className="text-[10px] text-muted-foreground mt-0.5">
                {p.cycles} cycles
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right: Traditional Solution Flow */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ ...transition, delay: 0.2 }}
        className="flex flex-col items-center justify-center gap-0"
      >
        <h3 className="font-display text-lg font-bold mb-8 self-start">
          Traditional Solution
        </h3>

        {traditionalSteps.map((step, i) => (
          <div key={i} className="flex flex-col items-center w-full max-w-xs">
            <div
              className={`w-full py-4 px-6 text-center font-display font-bold text-sm tracking-wide border-2 transition-colors ${
                step.accent
                  ? "border-amber-500/60 bg-amber-500/10 text-amber-400"
                  : "border-primary/40 bg-primary/5 text-foreground"
              }`}
            >
              <step.icon className="w-4 h-4 inline-block mr-2 -mt-0.5" />
              {step.label}
            </div>
            {i < traditionalSteps.length - 1 && (
              <ArrowDown className="w-5 h-5 text-muted-foreground my-3" />
            )}
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);
