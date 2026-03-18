import { motion } from "framer-motion";
import { Phone, Mail, Globe, MapPin } from "lucide-react";

const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };

const contactInfo = [
  { icon: Phone, label: "PHONE / WHATSAPP", value: "+91 94252 46162" },
  { icon: Mail, label: "MAIL", value: "shelly.joseph29@regenerax.com" },
  { icon: Globe, label: "WEBSITE", value: "www.regenerax.com" },
  {
    icon: MapPin,
    label: "ADDRESS",
    value:
      "E A 125 IDA Scheme 94, Ring Road, Sector A Indore MP 452001",
  },
];

export const ContactSection = () => (
  <section id="contact" className="py-[15vh] px-4 sm:px-8 md:px-16 max-w-[1400px] mx-auto border-t border-border">
    <div className="grid grid-cols-12 gap-6 md:gap-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={transition}
        className="col-span-12 md:col-span-5"
      >
        <span className="font-mono text-xs tracking-[0.2em] text-primary">14 / CONTACT</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-[-0.04em] mt-6 leading-[1.05]">
          Thank You!
        </h2>
        <p className="font-display text-2xl font-bold text-foreground/80 mt-2">
          M A Joseph
        </p>
        <p className="font-mono text-xs tracking-[0.1em] text-primary uppercase">
          Energy Solutions Consultant
        </p>
        <p className="text-foreground/70 leading-relaxed text-lg mt-6">
          Ready to revolutionize your battery management? Get in touch with RegeneraX today.
        </p>

        <div className="mt-10 space-y-6">
          {contactInfo.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: 0.1 + i * 0.08 }}
              className="flex items-start gap-4 group"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <span className="font-mono text-xs tracking-[0.15em] text-foreground/40 block mb-1">
                  {item.label}
                </span>
                <span className="text-foreground/80 text-sm">{item.value}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.5 }}
          className="mt-12 border border-primary/30 p-6 text-center"
        >
          <p className="font-display text-lg font-bold text-primary">
            Extend Your Battery Life 2X
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ ...transition, delay: 0.15 }}
        className="col-span-12 md:col-span-5 md:col-start-8"
      >
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="font-mono text-xs tracking-[0.15em] text-foreground/40 block mb-2">NAME</label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-border pb-3 text-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label className="font-mono text-xs tracking-[0.15em] text-foreground/40 block mb-2">EMAIL</label>
            <input
              type="email"
              className="w-full bg-transparent border-b border-border pb-3 text-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label className="font-mono text-xs tracking-[0.15em] text-foreground/40 block mb-2">COMPANY</label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-border pb-3 text-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label className="font-mono text-xs tracking-[0.15em] text-foreground/40 block mb-2">MESSAGE</label>
            <textarea
              rows={4}
              className="w-full bg-transparent border-b border-border pb-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full h-14 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 uppercase tracking-[0.15em] text-sm font-bold mt-4"
          >
            Send Inquiry
          </button>
        </form>
      </motion.div>
    </div>
  </section>
);
