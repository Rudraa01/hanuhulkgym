import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const legendItems = [
  { color: "bg-emerald-400", label: "Strength" },
  { color: "bg-sky-400", label: "Conditioning" },
  { color: "bg-amber-400", label: "Performance" },
];

const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

const scheduleData = [
  {
    time: "6:00 AM",
    classes: [
      {
        day: 0,
        name: "Strength Club",
        coach: "Coach Alex",
        type: "Strength",
        color: "bg-emerald-400",
      },
      null,
      {
        day: 2,
        name: "Fat Burn HIIT",
        coach: "Coach Maya",
        type: "Conditioning",
        color: "bg-sky-400",
      },
      null,
      {
        day: 4,
        name: "Athlete Camp",
        coach: "Coach Ryan",
        type: "Performance",
        color: "bg-amber-400",
      },
    ],
  },
  {
    time: "7:30 AM",
    classes: [
      null,
      {
        day: 1,
        name: "Fat Burn HIIT",
        coach: "Coach Maya",
        type: "Conditioning",
        color: "bg-sky-400",
      },
      null,
      {
        day: 3,
        name: "Strength Club",
        coach: "Coach Alex",
        type: "Strength",
        color: "bg-emerald-400",
      },
      null,
    ],
  },
  {
    time: "9:00 AM",
    classes: [
      {
        day: 0,
        name: "Performance Mobility",
        coach: "Coach Ryan",
        type: "Performance",
        color: "bg-amber-400",
      },
      null,
      {
        day: 2,
        name: "Strength Club",
        coach: "Coach Alex",
        type: "Strength",
        color: "bg-emerald-400",
      },
      null,
      null,
    ],
  },
  {
    time: "5:30 PM",
    classes: [
      {
        day: 0,
        name: "Fat Burn HIIT",
        coach: "Coach Maya",
        type: "Conditioning",
        color: "bg-sky-400",
      },
      {
        day: 1,
        name: "Strength Club",
        coach: "Coach Alex",
        type: "Strength",
        color: "bg-emerald-400",
      },
      null,
      {
        day: 3,
        name: "Athlete Camp",
        coach: "Coach Ryan",
        type: "Performance",
        color: "bg-amber-400",
      },
      null,
    ],
  },
  {
    time: "7:00 PM",
    classes: [
      null,
      null,
      {
        day: 2,
        name: "Strength Club",
        coach: "Coach Alex",
        type: "Strength",
        color: "bg-emerald-400",
      },
      null,
      {
        day: 4,
        name: "Fat Burn HIIT",
        coach: "Coach Maya",
        type: "Conditioning",
        color: "bg-sky-400",
      },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export const ScheduleSection: React.FC = () => {
  return (
    <motion.section
      id="schedule"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.25 }}
      className="w-full border-t border-slate-800/60 bg-[#020617] px-6 md:px-10 lg:px-15 py-16 md:py-24"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* HEADER AREA */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          {/* Left: Text */}
          <div>
            {/* Label */}
            <div className="text-[12px] font-semibold tracking-[0.24em] uppercase text-emerald-400 mb-3">
              Schedule
            </div>

            {/* Heading */}
            <h2 className="text-[26px] sm:text-[30px] md:text-[36px] font-extrabold tracking-tight text-slate-50 max-w-xl">
              See what's happening this week.
            </h2>

            {/* Subheading */}
            <p className="mt-3 text-[15px] md:text-[16px] text-slate-400 max-w-xl leading-relaxed">
              Pick a class time that fits your routine. Strength, conditioning,
              and performance sessions run all day—just show up ready to work.
            </p>
          </div>

          {/* Right: Mini Legend */}
          <div className="flex flex-wrap gap-3 md:justify-end">
            {legendItems.map((item, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/70 text-[11px] text-slate-300"
              >
                <div className={`w-2 h-2 rounded-full ${item.color}`} />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* VIEW TOGGLE ROW */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between flex-wrap gap-4 mt-2">
          {/* Left: Info Text */}
          <div className="text-[12px] sm:text-[13px] text-slate-400">
            Classes updated in real-time. Book at the front desk or via app.
          </div>

          {/* Right: Toggle */}
          <div className="inline-flex items-center rounded-full bg-slate-900/80 border border-slate-700/70 p-1 text-[12px] font-medium text-slate-300">
            <button className="px-4 py-1.5 rounded-full text-slate-400 hover:text-slate-100 transition-colors cursor-pointer">
              Today
            </button>
            <button className="px-4 py-1.5 rounded-full bg-emerald-500 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.4)] cursor-pointer">
              This week
            </button>
          </div>
        </div>

        {/* WEEKLY SCHEDULE GRID */}
        <div className="overflow-x-auto pb-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 rounded-3xl border border-slate-800/80 bg-[rgba(15,23,42,0.98)] px-4 md:px-6 py-5 md:py-6 min-w-[720px]"
          >
          {/* Days Header Row */}
          <div className="grid grid-cols-[90px,repeat(5,1fr)] gap-x-3 md:gap-x-4 text-[11px] md:text-[12px] uppercase tracking-[0.16em] text-slate-400 mb-4">
            <div>Time</div>
            {days.map((day) => (
              <div key={day} className="text-center">
                {day}
              </div>
            ))}
          </div>

          {/* Time Slot Rows */}
          <div className="flex flex-col gap-3">
            {scheduleData.map((slot, index) => (
              <motion.div
                key={index}
                variants={rowVariants}
                className="grid grid-cols-[90px,repeat(5,1fr)] gap-x-3 md:gap-x-4 items-stretch"
              >
                {/* Time Label */}
                <div className="flex items-center text-[12px] text-slate-500">
                  {slot.time}
                </div>

                {/* Day Cells */}
                {slot.classes.map((classItem, dayIndex) => (
                  <div
                    key={dayIndex}
                    className="relative min-h-[60px] md:min-h-[64px] rounded-2xl bg-slate-900/60 border border-slate-800/90 flex items-center justify-center text-center text-[11px] md:text-[12px] text-slate-300 px-1"
                  >
                    {classItem && (
                      <div className="inline-flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-xl bg-slate-950/90 border border-slate-600/80">
                        {/* Class Name */}
                        <div className="text-[11px] md:text-[12px] font-semibold text-slate-50">
                          {classItem.name}
                        </div>

                        {/* Coach */}
                        <div className="text-[10px] text-slate-400">
                          {classItem.coach}
                        </div>

                        {/* Type with Dot */}
                        <div className="flex items-center gap-1">
                          <div
                            className={`w-2 h-2 rounded-full ${classItem.color}`}
                          />
                          <span className="text-[10px] text-slate-400">
                            {classItem.type}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
          </motion.div>
        </div>

        {/* FOOTER ROW */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[11px] sm:text-[12px]">
          {/* Left: Info Text */}
          <div className="text-slate-400">
            Spots are limited for each class. Please arrive 10 minutes early to
            secure your place.
          </div>

          {/* Right: CTA */}
          <a
            href="#"
            className="text-emerald-400 font-semibold tracking-[0.14em] uppercase inline-flex items-center gap-1 cursor-pointer hover:text-emerald-300 hover:translate-x-[2px] transition-all duration-200 self-start md:self-auto"
          >
            View full schedule
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </motion.section>
  );
};
