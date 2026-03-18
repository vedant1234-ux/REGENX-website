import { motion } from "framer-motion";

const clients = [
  "Bank of Maharashtra", "Cooper Corp", "Pune Mahanagarpalika", "Rieter",
  "Banks", "Manufacturing Companies", "SMEs", "Tower Companies",
  "Solar Stations", "Government Offices", "IT Companies", "Warehouses",
  "Corporate Offices", "Housing Societies", "Elevator Companies",
  "Data Centers", "Telecom", "Energy Generation",
];

export const PartnersBar = () => (
  <section className="py-16 border-t border-b border-border overflow-hidden">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="px-8 md:px-16 mb-8"
    >
      <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground">
        TRUSTED BY INDUSTRY LEADERS
      </span>
    </motion.div>
    <div className="relative overflow-hidden">
      <div className="flex animate-scroll-left gap-16 whitespace-nowrap">
        {[...clients, ...clients].map((name, i) => (
          <span
            key={i}
            className="text-sm tracking-[0.15em] text-muted-foreground/60 font-mono uppercase flex-shrink-0"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  </section>
);
