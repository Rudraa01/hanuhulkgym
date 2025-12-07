import { motion } from "framer-motion";
import { TrendingDown, Dumbbell, Flame, UserCheck } from "lucide-react";

const transformations = [
  {
    id: 1,
    name: "Sarah Mitchell",
    beforeImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
    afterImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    stats: ["12 Weeks", "–8 kg fat", "+3 kg muscle"],
    testimonial:
      "I finally understood how to stay consistent. My coach kept me accountable every week and the results speak for themselves.",
    coach: "Coach Alex",
    badges: [
      { icon: TrendingDown, text: "Fat Loss", color: "text-emerald-400" },
      { icon: Dumbbell, text: "Strength +25%", color: "text-emerald-400" },
    ],
  },
  {
    id: 2,
    name: "Marcus Thompson",
    beforeImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    afterImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    stats: ["16 Weeks", "–12 kg fat", "+5 kg muscle"],
    testimonial:
      "The combination of strength training and proper nutrition changed everything. I'm stronger and leaner than I've been in years.",
    coach: "Coach Maya",
    badges: [
      { icon: TrendingDown, text: "Fat Loss", color: "text-emerald-400" },
      { icon: Flame, text: "16 Weeks", color: "text-amber-400" },
    ],
  },
  {
    id: 3,
    name: "Jessica Chen",
    beforeImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    afterImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
    stats: ["10 Weeks", "–6 kg fat", "+2 kg muscle"],
    testimonial:
      "Best decision I ever made. The coaches here actually care about your progress and push you to be better every single day.",
    coach: "Coach Ryan",
    badges: [
      { icon: Dumbbell, text: "Strength +30%", color: "text-emerald-400" },
      { icon: Flame, text: "Consistent", color: "text-amber-400" },
    ],
  },
  {
    id: 4,
    name: "David Rodriguez",
    beforeImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    afterImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    stats: ["20 Weeks", "–15 kg fat", "+6 kg muscle"],
    testimonial:
      "Started from zero gym experience. Now I'm lifting heavier than I ever imagined and feeling incredible. Worth every rep.",
    coach: "Coach Alex",
    badges: [
      { icon: TrendingDown, text: "Fat Loss", color: "text-emerald-400" },
      { icon: Dumbbell, text: "Strength +40%", color: "text-emerald-400" },
      { icon: Flame, text: "20 Weeks", color: "text-amber-400" },
    ],
  },
  {
    id: 5,
    name: "Emily Parker",
    beforeImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    afterImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
    stats: ["14 Weeks", "–9 kg fat", "+4 kg muscle"],
    testimonial:
      "The community here is unmatched. Everyone supports each other and the energy is electric. I've never felt this strong.",
    coach: "Coach Maya",
    badges: [
      { icon: TrendingDown, text: "Fat Loss", color: "text-emerald-400" },
      { icon: Flame, text: "Dedicated", color: "text-amber-400" },
    ],
  },
  {
    id: 6,
    name: "James Wilson",
    beforeImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    afterImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    stats: ["18 Weeks", "–11 kg fat", "+7 kg muscle"],
    testimonial:
      "Totally transformed my relationship with fitness. The structured programs and expert coaching made all the difference.",
    coach: "Coach Ryan",
    badges: [
      { icon: Dumbbell, text: "Strength +35%", color: "text-emerald-400" },
      { icon: Flame, text: "18 Weeks", color: "text-amber-400" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const TransformationsSection: React.FC = () => {
  return (
    <motion.section
      id="transformations"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.25 }}
      className="w-full border-t border-slate-800/60 bg-gradient-to-b from-[#020617] via-[#020617] to-[#020617] px-6 md:px-10 lg:px-15 py-16 md:py-24"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* HEADER AREA */}
        <div>
          {/* Label */}
          <div className="text-[12px] font-semibold tracking-[0.24em] uppercase text-emerald-400 mb-3 text-center">
            Transformations
          </div>

          {/* Heading */}
          <h2 className="text-[26px] sm:text-[30px] md:text-[36px] font-extrabold tracking-tight text-slate-50 text-center max-w-xl mx-auto">
            Real people. Real results.
          </h2>

          {/* Subheading */}
          <p className="text-[15px] md:text-[16px] text-slate-400 text-center max-w-2xl mx-auto leading-relaxed mt-3">
            Check out some of the incredible transformations from our HANU HULK GYM
            community. Consistency, coaching, and unbreakable discipline — this
            is what progress looks like.
          </p>
        </div>

        {/* RESULT GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {transformations.map((transformation) => (
            <motion.div
              key={transformation.id}
              variants={cardVariants}
              whileHover={{
                y: -6,
                scale: 1.01,
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative flex flex-col rounded-3xl border border-slate-800/70 bg-gradient-to-b from-slate-900/70 to-slate-950 overflow-hidden hover:border-emerald-500 hover:shadow-[0_24px_60px_rgba(15,23,42,0.95)] transition-all duration-200"
            >
              {/* Decorative Glow */}
              <div className="pointer-events-none absolute -top-10 right-[-30px] w-36 h-36 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.45),transparent)] opacity-70 z-0" />

              {/* BEFORE/AFTER IMAGE AREA */}
              <div className="relative w-full h-[260px] overflow-hidden">
                {/* Before Image (Left) */}
                <div className="absolute left-0 top-0 w-1/2 h-full">
                  <img
                    src={transformation.beforeImage}
                    alt={`${transformation.name} before`}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-r from-transparent via-slate-950/70 to-slate-950" />
                </div>

                {/* After Image (Right) */}
                <div className="absolute right-0 top-0 w-1/2 h-full">
                  <img
                    src={transformation.afterImage}
                    alt={`${transformation.name} after`}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Dark Gradient Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Before Label */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-300 border border-slate-700/70">
                  Before
                </div>

                {/* After Label */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-950/80 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-300 border border-slate-700/70">
                  After
                </div>
              </div>

              {/* BODY CONTENT */}
              <div className="px-6 py-5 flex flex-col gap-4 relative z-10">
                {/* Client Name + Stats Row */}
                <div>
                  <h3 className="text-[17px] md:text-[19px] font-semibold tracking-tight text-slate-50 mb-2">
                    {transformation.name}
                  </h3>

                  {/* Stats Pills */}
                  <div className="flex gap-2 flex-wrap">
                    {transformation.stats.map((stat, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/70 text-[11px] text-slate-300 uppercase tracking-[0.14em]"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <p className="text-[13px] text-slate-300 leading-relaxed">
                  "{transformation.testimonial}"
                </p>

                {/* Coach Tag */}
                <div className="flex items-center gap-1 mt-2 text-[12px] text-slate-400">
                  <UserCheck size={14} />
                  <span>{transformation.coach}</span>
                </div>

                {/* Bottom Row - Badges */}
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-800/70">
                  {transformation.badges.map((badge, index) => {
                    const IconComponent = badge.icon;
                    return (
                      <div
                        key={index}
                        className={`inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.16em] ${badge.color}`}
                      >
                        <IconComponent size={14} />
                        <span>{badge.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
