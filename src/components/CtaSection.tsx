import { motion } from "framer-motion";
import { Lightbulb, Leaf, Handshake, TrendingUp, DollarSign, Rocket } from "lucide-react";

const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };

const points = [
  {
    icon: Lightbulb,
    title: "Innovative Technology",
    description:
      "RegeneraX Technology significantly enhances battery life and performance.",
  },
  {
    icon: Leaf,
    title: "Sustainability Focus",
    description:
      "Promotes environmentally friendly method for battery regeneration and recycling.",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective Solution",
    description:
      "Regeneration process reduces costs compared to traditional battery disposal.",
  },
  {
    icon: Rocket,
    title: "Get Involved",
    description:
      "Join us in revolutionizing the battery industry through RegeneraX technology.",
  },
];

export const CtaSection = () => (
  <section className="py-[15vh] px-4 sm:px-8 md:px-16 max-w-[1400px] mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={transition}
      className="mb-16"
    >
      <span className="font-mono text-xs tracking-[0.2em] text-primary">
        13 / CONCLUSION
      </span>
      <h2 className="font-display text-4xl md:text-5xl font-bold tracking-[-0.04em] mt-6 leading-[1.05]">
        Conclusion and Call to Action
      </h2>
      <div className="flex flex-wrap gap-4 mt-8">
        <a
          href="#contact"
          className="h-14 px-8 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 uppercase tracking-[0.15em] text-sm font-bold flex items-center justify-center"
        >
          Regenerate Your Old Battery
        </a>
      </div>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
      {points.map((point, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: i * 0.08 }}
          className="group border-t border-border p-8 md:p-10 hover:bg-muted transition-colors duration-500 cursor-default"
        >
          <point.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-500" />
          <h3 className="font-display text-lg font-bold mt-6 group-hover:text-primary transition-colors duration-500">
            {point.title}
          </h3>
          <p className="text-foreground/60 leading-relaxed mt-3 text-sm">
            {point.description}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);
