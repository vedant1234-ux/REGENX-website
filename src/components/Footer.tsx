import { RegeneraxLogo } from "./RegeneraxLogo";

export const Footer = () => (
  <footer className="border-t border-border py-12 px-4 sm:px-8 md:px-16">
    <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
      <div className="flex items-center gap-4">
        <RegeneraxLogo className="h-16 w-16 object-contain shrink-0" />
        <div>
          <span className="font-display font-bold text-sm tracking-tight text-foreground block">
            RegeneraX GREEN ENERGY SOLUTIONS PVT LTD
          </span>
          <span className="font-mono text-[10px] text-primary tracking-wider">
            Extend Your Battery Life 2X
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-8">
        {["Home", "About Us", "Products", "Services", "Contact", "Privacy Policy", "Terms & Conditions"].map((item) => (
          <a
            key={item}
            href={`#${item === "Home" ? "" : item.toLowerCase().replace(" ", "-")}`}
            className="font-mono text-xs tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors"
          >
            {item.toUpperCase()}
          </a>
        ))}
      </div>

      <div className="text-right">
        <div className="font-mono text-xs text-muted-foreground/50 tracking-wider">
          © 2026 RegeneraX. ALL RIGHTS RESERVED.
        </div>
        <div className="font-mono text-[10px] text-muted-foreground/40 mt-1">
          www.regenerax.com
        </div>
      </div>
    </div>
  </footer>
);
