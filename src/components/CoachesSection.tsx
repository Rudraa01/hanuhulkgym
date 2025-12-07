import { motion } from "framer-motion";
import {
  Award,
  Users,
  Clock,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";

const coaches = [
  {
    id: 1,
    name: "Alex Carter",
    role: "Strength & Hypertrophy",
    specialty: "STRENGTH & MUSCLE",
    bio: "Powerlifter-turned-coach with a focus on heavy compound lifts, smart hypertrophy, and sustainable strength progress.",
    tags: ["#strength", "#powerlifting", "#musclegain"],
    experience: "8+ years coaching",
    clients: "300+ clients transformed",
    availability: "Mon–Sat · 6am–10pm",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&q=80",
    alt: "Strength coach spotting client",
  },
  {
    id: 2,
    name: "Maya Singh",
    role: "Fat Loss & Conditioning",
    specialty: "FAT LOSS",
    bio: "Conditioning specialist helping busy professionals drop body fat, keep muscle, and build unstoppable energy.",
    tags: ["#fatloss", "#conditioning", "#metcon"],
    experience: "6+ years coaching",
    clients: "250+ clients transformed",
    availability: "Mon–Fri · 7am–9pm",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=500&q=80",
    alt: "Conditioning coach training client",
  },
  {
    id: 3,
    name: "Ryan Lopez",
    role: "Performance & Mobility",
    specialty: "PERFORMANCE",
    bio: "Former athlete obsessed with movement quality, joint health, and performance that actually carries over to real life.",
    tags: ["#athletic", "#mobility", "#speed"],
    experience: "9+ years coaching",
    clients: "200+ clients transformed",
    availability: "Tue–Sun · 6am–8pm",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=500&q=80",
    alt: "Performance coach with athlete",
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

export const CoachesSection: React.FC = () => {
  return (
    <motion.section
      id="coaches"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.25 }}
      className="w-full border-t border-slate-800/60 bg-gradient-to-b from-[#020617] via-[#020617] to-[#020617] px-6 md:px-10 lg:px-15 py-16 md:py-24"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* HEADER AREA */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          {/* Left: Heading Block */}
          <div>
            {/* Small Label */}
            <div className="text-[12px] font-semibold tracking-[0.24em] uppercase text-emerald-400 mb-3">
              Coaches
            </div>

            {/* Main Heading */}
            <h2 className="text-[26px] sm:text-[30px] md:text-[36px] font-extrabold tracking-tight text-slate-50 max-w-2xl">
              Train with elite coaches who live this lifestyle.
            </h2>

            {/* Subheading */}
            <p className="mt-3 text-[15px] md:text-[16px] text-slate-400 max-w-2xl leading-relaxed">
              Our coaching team blends years of in-gym experience with real-world
              results. They're here to guide your form, your mindset, and your
              progress—rep after rep.
            </p>
          </div>

          {/* Right: Mini Stats */}
          <div className="hidden md:flex flex-col items-end gap-2 ml-auto">
            <div className="text-[13px] text-slate-400">
              <span className="text-emerald-400 font-semibold">20+</span> certifications held
            </div>
            <div className="text-[13px] text-slate-400">
              <span className="text-emerald-400 font-semibold">10,000+</span> coaching hours
            </div>
          </div>
        </div>

        {/* COACHES GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 md:mt-10 grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {coaches.map((coach) => (
            <motion.div
              key={coach.id}
              variants={cardVariants}
              whileHover={{
                y: -6,
                scale: 1.01,
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative flex flex-col rounded-3xl bg-gradient-to-b from-slate-900/80 to-slate-950 border border-slate-700/70 overflow-hidden shadow-[0_18px_40px_rgba(15,23,42,0.75)] hover:border-emerald-500 hover:shadow-[0_24px_60px_rgba(15,23,42,0.95)] transition-all duration-200"
            >
              {/* Decorative Gradient Glow */}
              <div className="pointer-events-none absolute -top-10 right-[-40px] w-40 h-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.45),transparent)] opacity-70 z-0" />

              {/* TOP IMAGE AREA */}
              <div className="relative w-full h-[210px] overflow-hidden">
                {/* Coach Image */}
                <img
                  src={coach.image}
                  alt={coach.alt}
                  className="w-full h-full object-cover"
                />

                {/* Dark Overlay Gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                {/* Specialty Pill */}
                <div className="absolute left-4 bottom-4 px-3 py-1 rounded-full text-[11px] font-semibold tracking-[0.16em] uppercase bg-slate-950/90 text-slate-100 border border-slate-600/80">
                  {coach.specialty}
                </div>
              </div>

              {/* COACH INFO BLOCK */}
              <div className="px-6 pt-5 pb-0 flex flex-col gap-3 relative z-10">
                {/* Name + Role */}
                <div>
                  <h3 className="text-[18px] md:text-[20px] font-semibold tracking-tight text-slate-50">
                    {coach.name}
                  </h3>
                  <div className="text-[13px] uppercase tracking-[0.16em] text-emerald-400">
                    {coach.role}
                  </div>
                </div>

                {/* Short Bio */}
                <p className="text-[13px] text-slate-300 leading-relaxed">
                  {coach.bio}
                </p>

                {/* Tags Row */}
                <div className="flex flex-wrap gap-2 mt-1">
                  {coach.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-full bg-slate-900/80 border border-slate-700/70 px-3 py-1 text-[11px] text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Experience + Clients Row */}
                <div className="flex items-center justify-between mt-4 mb-4">
                  {/* Experience */}
                  <div className="flex items-center gap-2 text-[12px] text-slate-300">
                    <Award size={16} className="text-emerald-400" />
                    <span>{coach.experience}</span>
                  </div>

                  {/* Clients */}
                  <div className="flex items-center gap-2 text-[12px] text-slate-300">
                    <Users size={16} className="text-emerald-400" />
                    <span>{coach.clients}</span>
                  </div>
                </div>
              </div>

              {/* BOTTOM ROW: Schedule & Socials */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-700/70 px-6 pb-3 mt-auto">
                {/* Availability */}
                <div className="flex items-center gap-2 text-[12px] text-slate-400">
                  <Clock size={16} />
                  <span>{coach.availability}</span>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 rounded-full border border-slate-600/70 flex items-center justify-center text-slate-300 hover:bg-slate-900 hover:border-emerald-500 hover:text-emerald-400 transition-colors duration-200">
                    <Instagram size={16} />
                  </button>
                  <button className="w-8 h-8 rounded-full border border-slate-600/70 flex items-center justify-center text-slate-300 hover:bg-slate-900 hover:border-emerald-500 hover:text-emerald-400 transition-colors duration-200">
                    <Linkedin size={16} />
                  </button>
                  <button className="w-8 h-8 rounded-full border border-slate-600/70 flex items-center justify-center text-slate-300 hover:bg-slate-900 hover:border-emerald-500 hover:text-emerald-400 transition-colors duration-200">
                    <MessageCircle size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
