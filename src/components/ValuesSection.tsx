import { motion } from "framer-motion";
import { Handshake, ShieldCheck, Users, Lightbulb } from "lucide-react";

const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };

const values = [
  {
    icon: Handshake,
    title: "Integrity",
    description:
      "We are dedicated to maintaining transparency and ethical practices in all our operations.",
  },
  {
    icon: ShieldCheck,
    title: "Excellence",
    description:
      "RegeneraX environmental stewardship. We aim to transform battery management through innovative technology.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We prioritize understanding and meeting the unique needs of our customers, fostering long-lasting relationships based on trust and quality.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Our focus is on developing advanced battery technologies that enhance performance and sustainability.",
  },
];

export const ValuesSection = () => (
  <section id="values" className="py-[15vh] px-4 sm:px-8 md:px-16 max-w-[1400px] mx-auto">
    <div className="max-w-[1400px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={transition}
        className="mb-16"
      >
        <span className="font-mono text-xs tracking-[0.2em] text-primary">
          05 / VALUES
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-[-0.04em] mt-6 leading-[1.05]">
          Our Values
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
        {values.map((value, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...transition, delay: i * 0.1 }}
            className="group border-t lg:border-t-0 lg:border-l border-border first:border-l-0 first:border-t-0 p-8 md:p-10 hover:bg-background/50 transition-colors duration-500 cursor-default"
          >
            <value.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />

            <div className="mt-6 inline-block px-4 py-1.5 border border-primary/40 rounded-full">
              <span className="font-display text-sm font-bold text-primary">{value.title}</span>
            </div>

            <p className="text-foreground/60 text-sm leading-relaxed mt-5">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
