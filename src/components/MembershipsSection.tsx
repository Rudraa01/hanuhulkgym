import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, RefreshCcw, Smile } from "lucide-react";

const membershipTiers = [
  {
    id: 1,
    name: "Basic Lift",
    tagline: "For beginners & casual lifters.",
    price: "₹1499",
    yearlyHint: "or save with yearly billing",
    meta: ["Gym floor access", "Locker room", "Towel service"],
    features: [
      "Full gym access during staffed hours",
      "Access to strength & cardio zones",
      "Intro onboarding walkthrough",
    ],
    ctaText: "Start Basic",
    ctaStyle: "secondary",
  },
  {
    id: 2,
    name: "Core Plus",
    tagline: "For serious progress and structure.",
    price: "₹2499",
    yearlyHint: "or save with yearly billing",
    meta: ["Gym + classes", "Coaching check-ins", "Priority booking"],
    features: [
      "24/7 gym access",
      "Unlimited group classes (HIIT, strength, conditioning)",
      "Monthly progress check-in with a coach",
    ],
    ctaText: "Join Core Plus",
    ctaStyle: "primary",
    featured: true,
    badge: "Most Popular",
  },
  {
    id: 3,
    name: "Elite Unlimited",
    tagline: "For athletes and all-in grinders.",
    price: "₹3499",
    yearlyHint: "or save with yearly billing",
    meta: ["All access", "1:1 sessions", "Performance tracking"],
    features: [
      "24/7 gym access + all classes",
      "Weekly 1:1 coaching session",
      "Custom training plan & nutrition guidance",
      "Priority support and booking",
    ],
    ctaText: "Go Elite",
    ctaStyle: "secondary",
  },
];

const reassuranceItems = [
  { icon: ShieldCheck, text: "Secure payments" },
  { icon: RefreshCcw, text: "Easy plan changes" },
  { icon: Smile, text: "First visit free trial" },
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

export const MembershipsSection: React.FC = () => {
  return (
    <motion.section
      id="memberships"
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
            Memberships
          </div>

          {/* Main Heading */}
          <h2 className="text-[26px] sm:text-[30px] md:text-[36px] font-extrabold tracking-tight text-slate-50 text-center max-w-2xl mx-auto">
            Choose a membership that matches your grind.
          </h2>

          {/* Subheading */}
          <p className="mt-3 text-[15px] md:text-[16px] text-slate-400 max-w-2xl mx-auto text-center leading-relaxed">
            Flexible options for beginners, lifers, and everyone in between.
            Switch plans or cancel anytime—your only commitment is to show up.
          </p>

          {/* Toggle Row */}
          <div className="mt-6 flex items-center justify-center gap-4 text-[13px]">
            <span className="text-slate-400">Billed monthly</span>
            
            {/* Toggle Pill (Decorative UI) */}
            <div className="relative inline-flex items-center w-16 h-8 rounded-full bg-slate-800 border border-slate-600/80 cursor-pointer">
              <div className="absolute left-1 w-6 h-6 rounded-full bg-slate-200 shadow transition-transform" />
            </div>
            
            <span className="text-emerald-400 font-medium">
              Billed yearly • 2 months free
            </span>
          </div>
        </div>

        {/* PRICING GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 md:mt-10 grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {membershipTiers.map((tier) => (
            <motion.div
              key={tier.id}
              variants={cardVariants}
              whileHover={{
                y: -6,
                scale: 1.01,
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={`relative flex flex-col rounded-3xl border px-6 py-7 md:px-7 md:py-8 shadow-[0_18px_40px_rgba(15,23,42,0.75)] hover:border-emerald-500 hover:shadow-[0_24px_60px_rgba(15,23,42,0.95)] transition-all duration-200 ${
                tier.featured
                  ? "border-emerald-500 bg-[linear-gradient(135deg,rgba(16,185,129,0.12),transparent)] md:-translate-y-3"
                  : "border-slate-700/70 bg-gradient-to-b from-slate-900/80 to-slate-950"
              }`}
            >
              {/* Decorative Glow */}
              <div className="pointer-events-none absolute -top-10 right-[-40px] w-40 h-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.45),transparent)] opacity-70 z-0" />

              {/* Featured Badge */}
              {tier.featured && (
                <div className="absolute top-4 left-6 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500 text-[11px] font-semibold tracking-[0.16em] uppercase text-emerald-300">
                  {tier.badge}
                </div>
              )}

              {/* Content Wrapper */}
              <div className={`flex flex-col gap-4 h-full relative z-10 ${tier.featured ? 'pt-8' : ''}`}>
                {/* 1. Tier Name + Tagline */}
                <div>
                  <h3 className="text-[18px] md:text-[20px] font-semibold tracking-tight text-slate-50">
                    {tier.name}
                  </h3>
                  <p className="text-[13px] text-slate-400">{tier.tagline}</p>
                </div>

                {/* 2. Price Area */}
                <div>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-[28px] font-extrabold text-slate-50">
                      {tier.price}
                    </span>
                    <span className="text-[13px] text-slate-400">/ month</span>
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {tier.yearlyHint}
                  </div>
                </div>

                {/* 3. Quick Meta Row */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {tier.meta.map((item, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/70 text-[11px] uppercase tracking-[0.16em] text-slate-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* 4. Feature List */}
                <div className="mt-4 flex flex-col gap-2 mb-5">
                  {tier.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-[2px] h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-[13px] text-slate-200 leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* 5. CTA Button */}
                <button
                  className={`mt-auto w-full rounded-full text-[13px] font-semibold tracking-[0.16em] uppercase py-3 transition-all duration-200 ease-out ${
                    tier.ctaStyle === "primary"
                      ? "bg-emerald-500 text-slate-950 hover:bg-emerald-400 hover:shadow-[0_18px_40px_rgba(16,185,129,0.5)] hover:-translate-y-[2px]"
                      : "bg-slate-900 border border-slate-600/80 text-slate-100 hover:border-emerald-500 hover:text-emerald-300 hover:-translate-y-[1px]"
                  }`}
                >
                  {tier.ctaText}
                </button>

                {/* 6. Disclaimer */}
                <div className="mt-3 text-[11px] text-slate-500 text-center">
                  No contracts. Cancel anytime.
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* REASSURANCE ICON STRIP */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-[12px] text-slate-400">
          {reassuranceItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800/80"
              >
                <IconComponent size={16} className="text-emerald-400" />
                <span>{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};
