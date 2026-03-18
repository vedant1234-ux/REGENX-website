import { motion } from "framer-motion";
import { ArrowRight, Zap, BatteryCharging } from "lucide-react";

const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };

export const TechnologySection = () => (
  <section className="py-[12vh] px-4 sm:px-8 md:px-16 bg-muted">
    <div className="max-w-[1400px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={transition}
        className="mb-16"
      >
        <span className="font-mono text-xs tracking-[0.2em] text-primary">
          08 / INNOVATION
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-[-0.04em] mt-6 leading-[1.05]">
          The Technology
        </h2>
        <p className="text-foreground/70 leading-relaxed text-lg mt-4 max-w-2xl">
          Controlled Current Pulses — our proprietary method that reverses
          sulfation and restores battery chemistry to near-original performance.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {/* Left: Regeneration Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.1 }}
          className="space-y-10"
        >
          {/* Hard to Soft transformation */}
          <div className="border border-border p-8">
            <h3 className="font-mono text-xs tracking-[0.15em] text-muted-foreground mb-6">
              REGENERATION PROCESS
            </h3>
            <div className="flex items-center gap-6">
              <div className="flex-1 text-center">
                <div className="w-full aspect-square rounded-lg bg-gradient-to-br from-red-500/20 to-orange-500/10 border border-border flex items-center justify-center">
                  <div className="space-y-1">
                    <div className="flex gap-1 justify-center">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-red-400/60 rotate-45" />
                      ))}
                    </div>
                    <div className="flex gap-1 justify-center">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-red-400/40 rotate-45" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-xs font-mono text-muted-foreground mt-3 uppercase tracking-wider">
                  Hard Crystals of Sulphate
                </p>
              </div>

              <ArrowRight className="w-8 h-8 text-primary flex-shrink-0" />

              <div className="flex-1 text-center">
                <div className="w-full aspect-square rounded-lg bg-gradient-to-br from-emerald-500/20 to-green-500/10 border border-border flex items-center justify-center">
                  <div className="space-y-1">
                    <div className="flex gap-1 justify-center">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-emerald-400/60 rounded-full" />
                      ))}
                    </div>
                    <div className="flex gap-1 justify-center">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-emerald-400/40 rounded-full" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-xs font-mono text-muted-foreground mt-3 uppercase tracking-wider">
                  Soft Conductive Form
                </p>
              </div>
            </div>
          </div>

          {/* Chemical Structure Change */}
          <div className="border border-border p-8">
            <h3 className="font-mono text-xs tracking-[0.15em] text-muted-foreground mb-6">
              CHANGE OF CHEMICAL STRUCTURE
            </h3>
            <div className="flex items-center gap-6">
              <div className="flex-1">
                <div className="grid grid-cols-4 gap-1.5 p-4 bg-background/50 rounded">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-slate-500/40 rounded-full" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground text-center mt-2">Before</p>
              </div>

              <ArrowRight className="w-6 h-6 text-amber-400 flex-shrink-0" />

              <div className="flex-1">
                <div className="grid grid-cols-4 gap-1.5 p-4 bg-background/50 rounded">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-sky-400/50 rounded-full" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground text-center mt-2">After</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Productivity Chart + Result */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.2 }}
          className="flex flex-col justify-between"
        >
          {/* Productivity Growth Chart */}
          <div className="border border-border p-8 flex-1">
            <h3 className="font-mono text-xs tracking-[0.15em] text-muted-foreground mb-2">
              BATTERY PRODUCTIVITY GROWTH
            </h3>
            <div className="flex gap-4 text-[10px] font-mono text-muted-foreground mb-6">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-300/40" /> Normal Life
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400/60" /> RegeneraX RGX
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-600" /> RegeneraX Boost
              </span>
            </div>

            <div className="relative h-44 overflow-x-auto overflow-y-hidden">
              <div className="min-w-[400px] h-full">
              <svg viewBox="0 0 300 140" className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="area1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.02" />
                  </linearGradient>
                  <linearGradient id="area2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.05" />
                  </linearGradient>
                  <linearGradient id="area3" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0891b2" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#0891b2" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                {/* Grid */}
                {[0, 35, 70, 105, 140].map((y) => (
                  <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="hsl(var(--border))" strokeWidth="0.5" />
                ))}
                {/* Normal Life area */}
                <path d="M 0 120 L 60 115 L 120 110 L 180 100 L 240 85 L 300 70 L 300 140 L 0 140 Z" fill="url(#area1)" />
                {/* RegeneraX RGX area */}
                <path d="M 0 130 L 60 120 L 120 100 L 180 80 L 240 55 L 300 35 L 300 140 L 0 140 Z" fill="url(#area2)" />
                {/* RegeneraX Boost area */}
                <path d="M 0 135 L 60 128 L 120 115 L 180 95 L 240 70 L 300 15 L 300 140 L 0 140 Z" fill="url(#area3)" />
              </svg>
            </div>
          </div>

          <div className="flex justify-between text-[10px] font-mono text-muted-foreground mt-2">
            <span>2020</span><span>2022</span><span>2024</span><span>2026</span><span>2028</span>
          </div>
        </div>

          {/* Bottom result banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.35 }}
            className="mt-6 flex items-center justify-center gap-6 p-6 border border-border"
          >
            <div className="flex items-center gap-2 text-amber-400">
              <BatteryCharging className="w-5 h-5" />
              <span className="font-display font-bold text-sm">Weak Battery Backup</span>
            </div>

            <ArrowRight className="w-5 h-5 text-primary" />

            <div className="flex items-center gap-2 text-primary">
              <Zap className="w-5 h-5" />
              <span className="font-display font-bold text-sm">Higher Battery Productivity</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);
