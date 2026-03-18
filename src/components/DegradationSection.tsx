import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };

const issues = [
  {
    title: "Internal Resistance",
    description:
      "Increased internal resistance reduces efficiency and generates heat during operation.",
    color: "bg-yellow-400",
    colorHex: "#facc15",
    batteryLevel: 80, // Slight drop
    effect: "resistance",
  },
  {
    title: "Capacity Loss",
    description:
      "Battery stores less energy over time due to material degradation and side reactions.",
    color: "bg-red-500",
    colorHex: "#ef4444",
    batteryLevel: 40, // Big drop
    effect: "capacity",
  },
  {
    title: "Electrode Degradation",
    description:
      "Electrode material can degrade, leading to reduced charge cycles.",
    color: "bg-cyan-400",
    colorHex: "#22d3ee",
    batteryLevel: 50,
    effect: "electrode", // Glitch/pulse
  },
  {
    title: "Solid-Electrolyte Interface",
    description:
      "Formation of SEI decreases lithium-ion mobility and efficiency.",
    color: "bg-purple-400",
    colorHex: "#c084fc",
    batteryLevel: 60,
    effect: "sei", // Fog/overlay
  },
  {
    title: "Temperature Effects",
    description:
      "Extreme temperatures can accelerate degradation of battery components.",
    color: "bg-orange-500",
    colorHex: "#f97316", // Orange/red glow
    batteryLevel: 50,
    effect: "temperature", // Heat waves
  },
];

export const DegradationSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isHovering) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % issues.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovering]);

  const activeIssue = issues[activeIndex];

  return (
    <section className="py-[15vh] px-4 sm:px-8 md:px-16 bg-muted overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs tracking-[0.2em] text-primary">
            06 / CHALLENGES
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-[-0.04em] mt-6 leading-[1.05]">
            Common Battery Degradation Issues
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left animated battery diagram area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.1 }}
            className="flex col-span-12 md:col-span-4 justify-center items-center md:sticky md:top-[20vh] mb-8 md:mb-0"
          >
            <div className="relative w-48 h-64 md:w-72 md:h-96 rounded-[2rem] flex items-center justify-center overflow-hidden">
              
              {/* Background ambient glow based on active issue */}
              <motion.div 
                className="absolute inset-0 opacity-20 blur-2xl"
                animate={{ 
                  backgroundColor: activeIssue.colorHex,
                  opacity: activeIssue.effect === "capacity" ? 0 : 0.2
                }}
                transition={{ duration: 1 }}
              />

              {/* Battery Container */}
              <div className="relative w-36 h-80 border-4 border-foreground/80 rounded-lg p-2 flex flex-col justify-end z-10 transition-colors duration-500" 
                style={{ 
                  borderColor: activeIssue.effect === "temperature" ? "#f472b6" : 
                               activeIssue.effect === "electrode" ? "#a3e635" : 
                               "rgba(255, 255, 255, 0.8)" 
                }}
              >
                {/* Battery Terminal */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-3 bg-foreground/80 rounded-t-sm" 
                  style={{ 
                    backgroundColor: activeIssue.effect === "temperature" ? "#f472b6" : 
                                     activeIssue.effect === "electrode" ? "#a3e635" : 
                                     "rgba(255, 255, 255, 0.8)" 
                  }}
                />

                {/* Soft Pulsing Glow (Internal Resistance) */}
                <AnimatePresence>
                  {activeIssue.effect === "resistance" && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0.3, 0.8, 0.3] }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -inset-10 bg-[#facc15]/30 blur-2xl rounded-full z-[-1]"
                    />
                  )}
                </AnimatePresence>

                {/* SEI Fog/Overlay and Sluggish Particles */}
                <AnimatePresence>
                  {activeIssue.effect === "sei" && (
                    <>
                      {/* Fog */}
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-gradient-to-t from-purple-500/50 via-purple-400/30 to-transparent blur-md mix-blend-screen overflow-hidden z-10"
                      >
                        <motion.div
                          className="absolute inset-0 w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"
                          animate={{
                            x: ["-10%", "0%", "-10%"],
                            y: ["0%", "-10%", "0%"],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{
                            duration: 12, // Very slow fog pulse
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>
                      
                      {/* Sluggish Ions */}
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-2 z-20"
                      >
                        {[...Array(12)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 rounded-full"
                            style={{ backgroundColor: activeIssue.colorHex }}
                            animate={{
                              x: [Math.random() * 80, Math.random() * 80 + (Math.random() > 0.5 ? 20 : -20), Math.random() * 80],
                              y: [Math.random() * 200, Math.random() * 200 + (Math.random() > 0.5 ? 30 : -30), Math.random() * 200],
                              opacity: [0.3, 0.7, 0.3],
                              scale: [1, 0.8, 1]
                            }}
                            transition={{
                              duration: 8 + Math.random() * 5, // Very slow, sluggish movement
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: Math.random() * 5,
                            }}
                          />
                        ))}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>

                {/* Deep Overheating Glow (Temperature) */}
                <AnimatePresence>
                  {activeIssue.effect === "temperature" && (
                     <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.3, 0.7, 0.3] }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -inset-8 bg-[#ef4444]/40 blur-3xl rounded-[3rem] z-[-1]"
                      />
                  )}
                </AnimatePresence>

                {/* Battery Heat Waves (Temperature) */}
                <AnimatePresence>
                  {activeIssue.effect === "temperature" && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute -top-24 left-0 right-0 h-24 flex justify-center gap-4 overflow-hidden"
                    >
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-2 bg-[#f44336]/70 rounded-full blur-[2px]"
                          animate={{
                            y: [40, -90],
                            opacity: [0, 0.9, 0],
                            height: ["25px", "60px"],
                            x: [0, Math.sin(i * 30) * 15, 0] // wiggle effect
                          }}
                          transition={{
                            duration: 1.2 + Math.random() * 0.4,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeOut"
                          }}
                        />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Battery Fill Level Segmented */}
                <div className="w-full h-full relative z-0 flex flex-col justify-end gap-1">
                  {[...Array(4)].map((_, i) => {
                    // Calculate if this segment should be filled
                    const segmentValue = (4 - i) * 25; // 100, 75, 50, 25
                    const isFilled = activeIssue.batteryLevel >= segmentValue;
                    
                    return (
                      <motion.div
                        key={i}
                        className="w-full rounded-sm"
                        initial={false}
                        animate={{ 
                          height: "25%",
                          backgroundColor: isFilled ? activeIssue.colorHex : "rgba(255, 255, 255, 0.05)",
                          opacity: isFilled 
                            ? (activeIssue.effect === "electrode" ? [1, 0.3, 0.8, 0.2, 1] : 1) 
                            : 1,
                          x: isFilled && activeIssue.effect === "electrode" ? [0, -2, 2, -1, 0] : 0, // structural glitch
                        }}
                        transition={{ 
                          duration: 0.8, 
                          type: "spring",
                          opacity: {
                            repeat: activeIssue.effect === "electrode" ? Infinity : 0,
                            duration: 0.15 + Math.random() * 0.3,
                            repeatType: "reverse"
                          },
                          x: {
                            repeat: activeIssue.effect === "electrode" ? Infinity : 0,
                            duration: 0.1 + Math.random() * 0.2,
                            repeatType: "mirror"
                          }
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side: Issues list */}
          <div 
            className="col-span-12 md:col-span-8 space-y-4"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {issues.map((issue, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.08 }}
                onClick={() => setActiveIndex(i)}
                onMouseEnter={() => setActiveIndex(i)}
                className={`group cursor-pointer flex items-start gap-5 border border-border/50 rounded-2xl p-6 transition-all duration-500 ${
                  activeIndex === i ? "bg-background shadow-lg scale-[1.02] border-primary/30" : "hover:bg-background/40"
                }`}
              >
                <motion.div 
                  className={`w-5 h-5 rounded-full flex-shrink-0 mt-1`} 
                  animate={{ 
                    backgroundColor: activeIndex === i ? issue.colorHex : "transparent",
                    borderColor: issue.colorHex,
                    borderWidth: activeIndex === i ? 0 : 2
                  }}
                  transition={{ duration: 0.3 }}
                />
                <div>
                  <h3 
                    className="font-display text-lg md:text-xl font-bold transition-colors duration-300"
                    style={{ color: activeIndex === i ? issue.colorHex : "inherit" }}
                  >
                    {issue.title}
                  </h3>
                  <p className="text-foreground/60 leading-relaxed mt-2 text-sm md:text-base">
                    {issue.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
