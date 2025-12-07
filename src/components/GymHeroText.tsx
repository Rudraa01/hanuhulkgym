import { motion } from "framer-motion";

const stats = [
  { number: "500+", label: "Active Members" },
  { number: "24/7", label: "Gym Access" },
  { number: "20+", label: "Expert Coaches" },
];

export const GymHeroText: React.FC = () => {
  return (
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
      {/* 1. PILL BADGE */}
      <motion.div
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="inline-flex items-center gap-2 md:gap-[10px] bg-[rgba(15,23,42,0.9)] border border-slate-400/70 rounded-full px-3 md:px-[18px] py-1.5 md:py-2 mb-4 md:mb-6"
      >
        <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#E5E7EB]">
          No Excuses. Just Results.
        </span>
        <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
      </motion.div>

      {/* 2. MAIN HEADLINE */}
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
        className="mb-4 md:mb-5"
      >
        <h1 className="text-[34px] sm:text-[42px] md:text-[48px] lg:text-[56px] font-extrabold leading-[1.05] text-[#F9FAFB] tracking-[-0.04em]">
          Build your
          <br />
          <span className="relative inline-block">
            strongest
            <span className="absolute -bottom-1 left-0 right-0 h-[6px] bg-[#22C55E] rounded-full" />
          </span>{" "}
          body.
        </h1>
      </motion.div>

      {/* 3. SUBHEADING */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        className="text-[14px] sm:text-[15px] md:text-base font-normal leading-[1.7] text-[#9CA3AF] max-w-full lg:max-w-[520px] mb-5 md:mb-7"
      >
        Train with elite coaches, science-backed programs, and a community that
        never lets you quit. Welcome to your new standard of fitness.
      </motion.p>

      {/* 4. STATS ROW */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}
        className="flex flex-row gap-4 sm:gap-6 md:gap-7 flex-wrap justify-center lg:justify-start mb-6 md:mb-8"
      >
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col">
            <div className="text-2xl font-extrabold text-[#F9FAFB]">
              {stat.number}
            </div>
            <div className="text-xs tracking-[0.14em] uppercase text-[#9CA3AF]">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* 5. CTA BUTTONS */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        className="flex flex-col sm:flex-row gap-3 flex-wrap items-center w-full sm:w-auto"
      >
        {/* Primary CTA */}
        <motion.button
          whileHover={{
            y: -2,
            scale: 1.02,
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="bg-[#22C55E] text-[#020617] border-none rounded-full px-6 sm:px-[30px] py-3 sm:py-[14px] text-[13px] sm:text-[15px] font-bold tracking-[0.12em] uppercase transition-all duration-250 hover:bg-[#16A34A] hover:shadow-[0_18px_40px_rgba(34,197,94,0.45)] w-full sm:w-auto"
        >
          Start Free Trial
        </motion.button>

        {/* Secondary CTA (Ghost) */}
        <motion.button
          whileHover={{
            y: -1,
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="bg-transparent text-[#E5E7EB] border border-slate-400/70 rounded-full px-5 sm:px-6 py-3 sm:py-[14px] text-[13px] sm:text-[14px] font-semibold transition-all duration-250 hover:bg-[rgba(15,23,42,0.9)] hover:border-[#22C55E] hover:text-[#F9FAFB] w-full sm:w-auto"
        >
          View Memberships
        </motion.button>
      </motion.div>
    </div>
  );
};
