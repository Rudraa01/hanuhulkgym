import { motion } from "framer-motion";
import { Dumbbell, Flame, Activity, CheckCircle2, ArrowRight } from "lucide-react";
import { useState } from "react";

const filterCategories = ["All", "Strength", "Fat Loss", "Performance"];

const programs = [
  {
    id: 1,
    icon: Dumbbell,
    title: "Strength & Muscle",
    difficulty: "Intermediate",
    description:
      "Progressive strength blocks focused on compound lifts, hypertrophy, and building a strong, aesthetic physique.",
    duration: "8-week plan",
    frequency: "4 days/week",
    highlights: [
      "Compound strength focus",
      "Progressive overload tracking",
      "Accessory work for weak points",
    ],
    price: "₹2499",
  },
  {
    id: 2,
    icon: Flame,
    title: "Fat Loss Conditioning",
    difficulty: "All Levels",
    description:
      "High-intensity circuits and metabolic training to burn fat, improve conditioning, and boost overall endurance.",
    duration: "6-week plan",
    frequency: "3–4 days/week",
    highlights: [
      "HIIT & circuit training",
      "Heart-rate based intensity",
      "Low-impact options available",
    ],
    price: "₹1999",
  },
  {
    id: 3,
    icon: Activity,
    title: "Athlete Performance",
    difficulty: "Advanced",
    description:
      "Power, speed, agility, and mobility training built for athletes who want to perform at their peak.",
    duration: "12-week plan",
    frequency: "4–5 days/week",
    highlights: [
      "Speed & agility drills",
      "Plyometric power work",
      "Mobility & recovery sessions",
    ],
    price: "₹2999",
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

export const ProgramsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <motion.section
      id="programs"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.25 }}
      className="w-full border-t border-slate-800/60 bg-[#020617] px-6 md:px-10 lg:px-15 py-16 md:py-24"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* HEADING AREA */}
        <div>
          {/* Small Label */}
          <div className="text-[12px] font-semibold tracking-[0.24em] uppercase text-emerald-400 mb-3">
            Programs
          </div>

          {/* Main Heading */}
          <h2 className="text-[26px] sm:text-[30px] md:text-[36px] font-extrabold text-slate-50 tracking-[-0.04em] max-w-xl">
            Find the program that fits your goals.
          </h2>

          {/* Subheading */}
          <p className="mt-3 text-[15px] md:text-[16px] text-slate-400 max-w-2xl leading-relaxed">
            Whether you're here to build strength, torch body fat, or level up
            your athletic performance, choose from structured programs designed
            by our expert coaches.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-3 mt-6">
            {filterCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-[0.14em] uppercase transition-all duration-200 ${
                  activeFilter === category
                    ? "bg-emerald-500 text-slate-950 border border-emerald-500"
                    : "border border-slate-600/70 text-slate-300 hover:border-slate-500"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* PROGRAMS GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {programs.map((program) => {
            const IconComponent = program.icon;
            return (
              <motion.div
                key={program.id}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  scale: 1.01,
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="relative flex flex-col h-full rounded-3xl bg-gradient-to-b from-slate-900/70 to-slate-950 border border-slate-700/60 px-6 py-6 md:px-7 md:py-7 overflow-hidden shadow-[0_18px_40px_rgba(15,23,42,0.75)] hover:border-emerald-500 hover:shadow-[0_24px_60px_rgba(15,23,42,0.95)] transition-all duration-200"
              >
                {/* Decorative Gradient Glow */}
                <div className="pointer-events-none absolute -top-6 right-0 w-32 h-32 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.40),transparent)] opacity-60 z-0" />

                {/* Content wrapper with z-10 */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Top Row: Icon + Difficulty Badge */}
                  <div className="flex items-center justify-between mb-5">
                    {/* Icon Container */}
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-slate-900 border border-slate-600/70">
                      <IconComponent size={22} className="text-emerald-400" />
                    </div>

                    {/* Difficulty Badge */}
                    <div className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-[0.14em] uppercase bg-slate-900/80 border border-slate-600/70 text-slate-300">
                      {program.difficulty}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mt-1 mb-2 text-[18px] md:text-[20px] font-semibold text-slate-50 tracking-tight">
                    {program.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[14px] text-slate-400 leading-relaxed mb-4">
                    {program.description}
                  </p>

                  {/* Meta Info (Duration + Frequency) */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <div className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/60 text-[12px] uppercase tracking-[0.16em] text-slate-400">
                      {program.duration}
                    </div>
                    <div className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/60 text-[12px] uppercase tracking-[0.16em] text-slate-400">
                      {program.frequency}
                    </div>
                  </div>

                  {/* Highlights List */}
                  <div className="flex flex-col gap-1.5 mb-6">
                    {program.highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2 text-[13px] text-slate-300"
                      >
                        <CheckCircle2
                          size={15}
                          className="text-emerald-500 mt-0.5 flex-shrink-0"
                        />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Row: Price + CTA Link */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-700/70">
                    {/* Price */}
                    <div>
                      <div className="text-[18px] font-bold text-slate-50">
                        {program.price}
                      </div>
                      <div className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                        per month
                      </div>
                    </div>

                    {/* CTA Link */}
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 text-[12px] font-semibold tracking-[0.14em] uppercase text-emerald-400 hover:text-emerald-300 hover:translate-x-[2px] transition-all duration-200"
                    >
                      View details
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};
