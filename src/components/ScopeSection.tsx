import { motion } from "framer-motion";
import {
  Server, Forklift, Building, Radio, Sun, Wind,
  TrendingUp, Leaf, DollarSign,
} from "lucide-react";

const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };

const applications = [
  { icon: Server, label: "UPS Backup" },
  { icon: Forklift, label: "Industrial Forklift" },
  { icon: Building, label: "Lift Backup" },
  { icon: Radio, label: "Telecom Tower" },
  { icon: Sun, label: "Solar Battery" },
  { icon: Wind, label: "Wind Energy" },
];

const clients = [
  "Banks", "Co-operatives", "Institutes", "Government Offices",
  "IT Companies", "Manufacturing Companies", "SMEs", "Warehouses",
  "Corporate Offices", "Housing Societies", "Elevator Companies",
  "Tower Companies", "Solar Stations", "Energy Generation Cos",
];

const highlights = [
  {
    num: "01",
    icon: TrendingUp,
    title: "Market Growth",
    description: "Projected 15% CAGR in battery regeneration sector.",
    color: "text-violet-400",
    bg: "bg-violet-400/10",
  },
  {
    num: "02",
    icon: Leaf,
    title: "Environmental Impact",
    description: "300,000+ tons of CO₂ reduced through battery regeneration.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    num: "03",
    icon: DollarSign,
    title: "Cost Efficiency",
    description: "Saves businesses up to 70% on battery costs.",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
];

export const ScopeSection = () => (
  <section className="py-[12vh] px-8 md:px-16 bg-muted">
    <div className="max-w-[1400px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={transition}
        className="text-center mb-16"
      >
        <span className="font-mono text-xs tracking-[0.2em] text-primary">
          10 / APPLICATIONS
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-[-0.04em] mt-6 leading-[1.05] uppercase">
          Scope of Application
        </h2>
      </motion.div>

      {/* Application cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-16">
        {applications.map((app, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...transition, delay: i * 0.06 }}
            className="group flex flex-col items-center text-center p-6 border border-border hover:border-primary bg-background hover:bg-background/80 transition-all duration-500 cursor-default"
          >
            <app.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            <span className="font-display text-xs font-bold mt-4 uppercase tracking-wide group-hover:text-primary transition-colors duration-300">
              {app.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Potential Clients */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ ...transition, delay: 0.2 }}
        className="text-center mb-16"
      >
        <h3 className="font-display text-xl font-bold text-primary uppercase tracking-wide mb-8">
          Potential Clients
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {clients.map((client, i) => (
            <span
              key={i}
              className="px-4 py-2 border border-border text-xs font-mono tracking-wider text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors cursor-default"
            >
              {client}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ ...transition, delay: 0.3 }}
      >
        <h3 className="font-mono text-xs tracking-[0.2em] text-muted-foreground text-center mb-8">
          HIGHLIGHTS
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="border-t md:border-t-0 md:border-l border-border first:border-l-0 first:border-t-0 p-8 text-center hover:bg-background/30 transition-colors duration-500"
            >
              <div className={`w-8 h-8 rounded-full ${h.bg} flex items-center justify-center mx-auto`}>
                <span className={`font-mono text-xs font-bold ${h.color}`}>{h.num}</span>
              </div>
              <h.icon className={`w-5 h-5 ${h.color} mx-auto mt-3`} />
              <h4 className="font-display text-sm font-bold mt-3">{h.title}</h4>
              <p className="text-foreground/50 text-xs mt-2">{h.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
