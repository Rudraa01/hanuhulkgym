import { motion } from "framer-motion";

export const GymHeroMedia: React.FC = () => {
  return (
    <div className="relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[420px] h-[400px] sm:h-[460px] md:h-[520px] mx-auto lg:ml-auto lg:mr-0">
      {/* IMAGE CONTAINER WITH ROUNDED CORNERS */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: 40 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
        className="relative w-full h-full rounded-[32px] overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-500/60 shadow-[0_30px_80px_rgba(15,23,42,0.9)]"
      >
        {/* GREEN GLOW BACKGROUND */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(34,197,94,0.45),transparent)]" />

        {/* ATHLETE IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80"
          alt="Athlete training at HANU HULK GYM"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* OVERLAY STATS CARD (Floating Bottom Left) - OUTSIDE OVERFLOW */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, type: "spring", stiffness: 110 }}
        className="absolute bottom-[10%] left-2 sm:-left-[8%] w-[180px] sm:w-[220px] rounded-[18px] bg-[rgba(15,23,42,0.96)] border border-slate-400/60 shadow-[0_18px_40px_rgba(15,23,42,0.9)] z-30"
        style={{ padding: "12px 14px" }}
      >
        {/* Label */}
        <div className="text-[10px] sm:text-[11px] tracking-[0.12em] uppercase text-[#9CA3AF] mb-2">
          Today's Classes
        </div>

        {/* Main content row */}
        <div className="flex items-center justify-between mb-2">
          <div className="text-[22px] sm:text-[26px] font-extrabold text-[#F9FAFB]">6</div>
          <div className="flex flex-col items-end">
            <div className="text-[12px] text-[#E5E7EB]">Slots left:</div>
            <div className="text-[12px] font-bold text-[#22C55E]">12</div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full h-[6px] rounded-full bg-[rgba(31,41,55,0.9)]">
          <div className="w-[60%] h-full rounded-full bg-[#22C55E]" />
        </div>
      </motion.div>

      {/* CIRCULAR BADGE (Top Right) - OUTSIDE OVERFLOW */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 8 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.9, type: "spring", stiffness: 120 }}
        className="absolute top-[10%] right-2 sm:-right-[4%] w-20 sm:w-24 h-20 sm:h-24 rounded-full bg-[rgba(15,23,42,0.96)] border-2 border-[#22C55E] flex flex-col items-center justify-center z-30"
      >
        <div className="text-[10px] tracking-[0.16em] uppercase text-[#9CA3AF]">
          since
        </div>
        <div className="text-[20px] font-extrabold text-[#F9FAFB]">2016</div>
      </motion.div>
    </div>
  );
};
