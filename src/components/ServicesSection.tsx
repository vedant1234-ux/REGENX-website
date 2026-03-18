import { motion } from "framer-motion";
import { Battery, Wrench, ShieldCheck, Zap } from "lucide-react";

const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };

const services = [
  {
    icon: Battery,
    title: "Diagnostic Testing & Analysis",
    description:
      "We inspect and analyze each battery's health, capacity, and sulfation level for accurate regeneration results.",
  },
  {
    icon: Wrench,
    title: "Regeneration & Optimization",
    description:
      "Using RegeneraX Regenerator, we restore lost capacity and improve charge efficiency through controlled current pulsation.",
  },
  {
    icon: ShieldCheck,
    title: "Validation & Quality Assurance",
    description:
      "Every regenerated battery is tested and certified to deliver reliable performance with Upto 2 year warranty.",
  },
  {
    icon: Zap,
    title: "RegeneraX Regenerator",
    description:
      "Our proprietary in-house regeneration hardware uses advanced pulsation technology to reverse sulfation and restore up to 90% battery capacity.",
  },
];

export const ServicesSection = () => (
  <section id="services" className="py-[20vh] px-8 md:px-16 max-w-[1400px] mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={transition}
    >
      <span className="font-mono text-xs tracking-[0.2em] text-primary">07 / SERVICES</span>
      <h2 className="font-display text-4xl md:text-5xl font-bold tracking-[-0.04em] mt-6 max-w-2xl leading-[1.05]">
        Comprehensive Solutions for Modern Energy Systems
      </h2>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mt-16">
      {services.map((service, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: i * 0.1 }}
          className="group border-t border-border p-8 md:p-10 hover:bg-muted transition-colors duration-500 cursor-default"
        >
          <service.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-500" />
          <h3 className="font-display text-xl font-bold mt-6 group-hover:text-primary transition-colors duration-500">
            {service.title}
          </h3>
          <p className="text-foreground/60 leading-relaxed mt-3">
            {service.description}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);
