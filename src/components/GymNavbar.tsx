import { motion } from "framer-motion";
import { PhoneCall, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Programs", href: "#programs" },
  { name: "Coaches", href: "#coaches" },
  { name: "Memberships", href: "#memberships" },
  { name: "Schedule", href: "#schedule" },
  { name: "Transformations", href: "#transformations" },
  { name: "Contact", href: "#contact" },
];

export const GymNavbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full h-20 px-6 md:px-10 lg:px-15 flex items-center justify-between z-50 bg-[rgba(10,10,15,0.96)] border-b border-white/[0.08] backdrop-blur-md"
    >
      {/* LEFT SIDE - Logo */}
      <div className="flex items-center gap-2 md:gap-3">
        <div className="w-1.5 h-5 md:h-[26px] rounded-full bg-[#22C55E]" />
        <div className="text-[18px] sm:text-[22px] md:text-[26px] font-extrabold tracking-[0.12em] md:tracking-[0.16em] uppercase text-[#F9FAFB]">
          HANU HULK GYM
        </div>
      </div>

      {/* CENTER - Navigation Links (Desktop only) */}
      <div className="hidden lg:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setActiveLink(link.name)}
            className="relative group"
          >
            <span
              className={`text-[14px] font-medium tracking-[0.08em] uppercase transition-all duration-200 ease-in-out ${
                activeLink === link.name
                  ? "text-[#22C55E]"
                  : "text-[#E5E7EB] hover:text-[#22C55E]"
              } group-hover:-translate-y-[1px] inline-block`}
            >
              {link.name}
            </span>
            {activeLink === link.name && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#22C55E]"
                initial={false}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </a>
        ))}
      </div>

      {/* RIGHT SIDE - CTA + Icon */}
      <div className="flex items-center gap-3 md:gap-4">
        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden w-10 h-10 rounded-full border border-slate-400/60 bg-transparent flex items-center justify-center transition-all duration-200 hover:bg-slate-400/[0.12] hover:border-[#22C55E]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X size={20} className="text-[#E5E7EB]" />
          ) : (
            <Menu size={20} className="text-[#E5E7EB]" />
          )}
        </button>
        {/* Phone Icon Button */}
        <button
          className="hidden sm:flex w-10 h-10 rounded-full border border-slate-400/60 bg-transparent items-center justify-center transition-all duration-200 hover:bg-slate-400/[0.12] hover:border-[#22C55E] group"
          aria-label="Contact us"
        >
          <PhoneCall
            size={18}
            className="text-[#E5E7EB] group-hover:text-[#22C55E] transition-colors duration-200"
          />
        </button>

        {/* Primary CTA Button */}
        <motion.button
          whileHover={{
            y: -1,
            scale: 1.02,
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-[#22C55E] text-[#020617] text-[12px] sm:text-[14px] font-bold tracking-[0.1em] uppercase transition-all duration-250 hover:bg-[#16A34A] hover:shadow-[0_12px_30px_rgba(34,197,94,0.35)]"
        >
          Join Now
        </motion.button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden absolute top-20 left-0 w-full bg-[rgba(10,10,15,0.98)] border-b border-white/[0.08] backdrop-blur-md"
        >
          <div className="flex flex-col gap-6 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.name);
                  setMobileMenuOpen(false);
                }}
                className={`text-[14px] font-medium tracking-[0.08em] uppercase transition-all duration-200 ${
                  activeLink === link.name
                    ? "text-[#22C55E]"
                    : "text-[#E5E7EB] hover:text-[#22C55E]"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};
