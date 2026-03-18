import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SuncLogo } from "./SuncLogo";

const navLinks = [
  { label: "HOME", href: "#" },
  { label: "ABOUT US", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "PROCESS", href: "#process" },
  { label: "BLOGS", href: "#blogs" },
  { label: "TESTIMONIALS", href: "#clients" },
  { label: "CONTACT", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-8 md:px-16 h-20">
        <a href="#" className="flex items-center gap-2 group">
          <SuncLogo className="h-16 w-16 object-contain transition-transform group-hover:scale-105" />
          <span className="font-display font-bold text-xl tracking-tight text-foreground transition-colors group-hover:text-primary">SUN-C</span>
        </a>

        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden lg:flex items-center h-[44px] px-7 border border-primary text-primary text-xs tracking-[0.15em] font-bold uppercase hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
        >
          Regenerate Now
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-background/95 backdrop-blur-md border-b border-border px-8 py-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-xs tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 flex items-center justify-center h-[44px] border border-primary text-primary text-xs tracking-[0.15em] font-bold uppercase hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            Regenerate Now
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};
