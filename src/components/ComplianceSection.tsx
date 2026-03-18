import { motion } from "framer-motion";
import { ShieldCheck, FileText, FlaskConical, BarChart3, GraduationCap } from "lucide-react";

const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };

const pillars = [
  {
    num: "01",
    icon: ShieldCheck,
    title: "Safety",
    description:
      "Ensure all battery regeneration processes meet safety standards.",
    color: "text-rose-400",
    bg: "bg-rose-400/10",
  },
  {
    num: "02",
    icon: FileText,
    title: "Documentation",
    description:
      "Maintain proper documentation for all regulatory compliance checks.",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
  {
    num: "03",
    icon: FlaskConical,
    title: "Testing",
    description:
      "Conduct regular testing to comply with environmental regulations.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    num: "04",
    icon: BarChart3,
    title: "Reporting",
    description:
      "Implement a system for timely reporting of compliance to authorities.",
    color: "text-sky-400",
    bg: "bg-sky-400/10",
  },
  {
    num: "05",
    icon: GraduationCap,
    title: "Training",
    description:
      "Provide ongoing training for staff on compliance requirements.",
    color: "text-violet-400",
    bg: "bg-violet-400/10",
  },
];

export const ComplianceSection = () => (
  <section className="py-[15vh] px-8 md:px-16 max-w-[1400px] mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={transition}
      className="text-center mb-16"
    >
      <span className="font-mono text-xs tracking-[0.2em] text-primary">
        11 / COMPLIANCE
      </span>
      <h2 className="font-display text-4xl md:text-5xl font-bold tracking-[-0.04em] mt-6 leading-[1.05]">
        Regulation and Compliance Requirements
      </h2>
      <p className="text-foreground/70 leading-relaxed text-lg mt-6 max-w-2xl mx-auto">
        We adhere to the highest standards of safety, environmental compliance,
        and operational excellence. Certified ISO 9001:2015, ISO 14001:2015 &
        ZED Bronze (Zero Defect Zero Effect). Compliant with Battery Waste
        Management Rules 2022, Ministry of Environment, Forest and Climate Change.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0">
      {pillars.map((pillar, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: i * 0.08 }}
          className="group border-t lg:border-t-0 lg:border-l border-border first:border-l-0 first:border-t-0 p-6 md:p-8 hover:bg-muted transition-colors duration-500 cursor-default text-center"
        >
          <div className={`w-10 h-10 rounded-full ${pillar.bg} flex items-center justify-center mx-auto`}>
            <span className={`font-mono text-xs font-bold ${pillar.color}`}>{pillar.num}</span>
          </div>

          <pillar.icon className={`w-6 h-6 ${pillar.color} mx-auto mt-5 group-hover:scale-110 transition-transform duration-300`} />

          <h3 className="font-display text-lg font-bold mt-4 group-hover:text-primary transition-colors duration-500">
            {pillar.title}
          </h3>

          <p className="text-foreground/60 text-sm leading-relaxed mt-3">
            {pillar.description}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);
