import { motion } from "framer-motion";

const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };

const milestones = [
  {
    year: "2012",
    title: "Established",
    description: "Established as Battery Recovery Services.",
    color: "bg-violet-400",
    ring: "ring-violet-400/20",
  },
  {
    year: "2013",
    title: "Imported Technology",
    description: "Imported Regeneration Technology from France to serve efficiently.",
    color: "bg-sky-400",
    ring: "ring-sky-400/20",
  },
  {
    year: "2016",
    title: "In-House Innovation",
    description: "In-house Innovation Center successfully manufactured Regeneration Machine.",
    color: "bg-amber-400",
    ring: "ring-amber-400/20",
  },
  {
    year: "2018",
    title: "5,000+ Batteries",
    description: "Started servicing clients with in-house machine. 5,000+ batteries regenerated.",
    color: "bg-emerald-400",
    ring: "ring-emerald-400/20",
  },
  {
    year: "2020",
    title: "Multi-City Operations",
    description: "Multi-city state operations started.",
    color: "bg-rose-400",
    ring: "ring-rose-400/20",
  },
  {
    year: "2022",
    title: "10,000+ Milestone",
    description: "Achieved milestone of 10,000+ battery regeneration.",
    color: "bg-orange-400",
    ring: "ring-orange-400/20",
  },
  {
    year: "2025",
    title: "400+ Centers",
    description: "More than 400+ Regeneration Centers. 50,000+ batteries regenerated across India.",
    color: "bg-primary",
    ring: "ring-primary/20",
  },
];

export const JourneySection = () => (
  <section id="journey" className="py-[15vh] px-8 md:px-16 bg-background">
    <div className="max-w-[1400px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={transition}
        className="text-center mb-16"
      >
        <span className="font-mono text-xs tracking-[0.2em] text-primary">
          02 / MILESTONES
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-[-0.04em] mt-6 leading-[1.05] uppercase">
          Journey So Far
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Horizontal line (desktop) / Vertical line (mobile) */}
        <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-border" />
        <div className="md:hidden absolute top-0 bottom-0 left-5 w-px bg-border" />

        <div className="grid grid-cols-1 md:grid-cols-7 gap-8 md:gap-4">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: i * 0.08 }}
              className="relative flex md:flex-col items-start md:items-center gap-6 md:gap-0"
            >
              {/* Dot */}
              <div className={`relative z-10 w-10 h-10 md:w-8 md:h-8 rounded-full ${m.color} ring-4 ${m.ring} ring-offset-2 ring-offset-background flex items-center justify-center flex-shrink-0`}>
                <div className="w-2 h-2 bg-background rounded-full" />
              </div>

              {/* Content */}
              <div className="md:mt-6 md:text-center">
                <div className="font-display text-2xl md:text-xl font-bold text-primary">
                  {m.year}
                </div>
                <div className="font-display text-sm font-bold mt-1 text-foreground">
                  {m.title}
                </div>
                <p className="text-foreground/50 text-xs leading-relaxed mt-2 max-w-[160px]">
                  {m.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
