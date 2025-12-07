import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import { useState } from "react";

const contactCards = [
  {
    icon: MapPin,
    title: "Visit Us",
    content: "HANU HULK GYM, Sector 21, Main Street, New City 110001",
  },
  {
    icon: Clock,
    title: "Hours",
    content: "Mon–Sat · 5:00 AM – 11:00 PM · Sunday open for select classes",
  },
  {
    icon: Phone,
    title: "Call / WhatsApp",
    content: "+91-98765-43210 · support@ironpulsefit.com",
  },
];

const socialIcons = [
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
  { icon: Youtube, label: "Youtube" },
];

const goals = ["Build muscle", "Lose fat", "Improve performance", "General fitness"];

const timeSlots = [
  "Early morning (5–8 AM)",
  "Late morning (8–12 PM)",
  "Afternoon (12–5 PM)",
  "Evening (5–9 PM)",
];

export const ContactSection: React.FC = () => {
  const [selectedGoal, setSelectedGoal] = useState("Build muscle");

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.25 }}
      className="w-full border-t border-slate-800/60 bg-[#020617] px-6 md:px-10 lg:px-15 py-16 md:py-24"
    >
      <div className="max-w-6xl mx-auto grid gap-10 lg:gap-14 grid-cols-1 lg:grid-cols-[1.1fr,1.2fr]">
        {/* LEFT COLUMN – CONTACT INFO & CTA */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Header Block */}
          <div>
            {/* Label */}
            <div className="text-[12px] font-semibold tracking-[0.24em] uppercase text-emerald-400 mb-3">
              Contact
            </div>

            {/* Heading */}
            <h2 className="text-[26px] sm:text-[30px] md:text-[36px] font-extrabold tracking-tight text-slate-50 max-w-xl">
              Ready to start? Let's talk.
            </h2>

            {/* Subheading */}
            <p className="mt-3 text-[15px] md:text-[16px] text-slate-400 max-w-xl leading-relaxed">
              Tell us a bit about your goals and schedule. We'll match you with
              the right program and coach, then set up your first session.
            </p>
          </div>

          {/* Contact Highlight Cards */}
          <div className="mt-6 flex flex-col gap-4">
            {contactCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-2xl bg-slate-900/70 border border-slate-800/80 px-4 py-3"
                >
                  <IconComponent className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-[13px] font-semibold uppercase tracking-[0.14em] text-slate-300">
                      {card.title}
                    </div>
                    <div className="text-[13px] text-slate-400 leading-relaxed">
                      {card.content}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Social Row */}
          <div className="mt-5">
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 flex-wrap justify-center lg:justify-start">
              <span className="text-[13px] text-slate-400">
                Follow us for updates:
              </span>
              <div className="flex items-center gap-3">
                {socialIcons.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <button
                      key={index}
                      aria-label={social.label}
                      className="w-9 h-9 rounded-full border border-slate-700/80 flex items-center justify-center text-slate-300 hover:bg-slate-900 hover:border-emerald-500 hover:text-emerald-400 transition-colors duration-200"
                    >
                      <IconComponent size={18} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mini Reassurance Line */}
            <div className="mt-3 text-[12px] text-slate-500">
              We usually reply within 12–24 hours.
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN – CONTACT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative w-full rounded-3xl border border-slate-800/80 bg-[rgba(15,23,42,0.98)] px-4 py-5 md:px-7 md:py-8 shadow-[0_20px_50px_rgba(15,23,42,0.9)]"
        >
          {/* Decorative Glow */}
          <div className="pointer-events-none absolute -top-10 right-[-20px] w-32 h-32 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.45),transparent)] opacity-70 z-0" />

          {/* Form Content */}
          <div className="relative z-10">
            {/* Form Heading */}
            <div className="text-[13px] font-semibold tracking-[0.16em] uppercase text-slate-300 mb-1">
              Book a free intro session
            </div>
            <div className="text-[12px] text-slate-400 mb-4">
              Fill out the form and we'll get back to you with available slots.
            </div>

            {/* Form */}
            <form className="flex flex-col gap-4">
              {/* 1. Full Name */}
              <div>
                <label className="block text-[12px] font-medium text-slate-300 mb-1">
                  Full name
                </label>
                <input
                  type="text"
                  placeholder="Rudra Vishwakarma"
                  className="w-full rounded-xl bg-slate-900/80 border border-slate-700/80 px-3 py-2.5 text-[13px] text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
                />
              </div>

              {/* 2. Email */}
              <div>
                <label className="block text-[12px] font-medium text-slate-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl bg-slate-900/80 border border-slate-700/80 px-3 py-2.5 text-[13px] text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
                />
              </div>

              {/* 3. Phone */}
              <div>
                <label className="block text-[12px] font-medium text-slate-300 mb-1">
                  Phone (optional but recommended)
                </label>
                <input
                  type="tel"
                  placeholder="+91-XXXXXXXXXX"
                  className="w-full rounded-xl bg-slate-900/80 border border-slate-700/80 px-3 py-2.5 text-[13px] text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
                />
              </div>

              {/* 4. Goal (Radio Pills) */}
              <div>
                <label className="block text-[12px] font-medium text-slate-300 mb-1">
                  What's your main goal?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
                  {goals.map((goal) => (
                    <div
                      key={goal}
                      onClick={() => setSelectedGoal(goal)}
                      className={`flex items-center gap-2 rounded-xl border px-3 py-2 cursor-pointer text-[12px] transition-all ${
                        selectedGoal === goal
                          ? "border-emerald-500 bg-emerald-500/10 text-emerald-300"
                          : "border-slate-700/80 bg-slate-900/60 text-slate-300 hover:border-slate-600"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          selectedGoal === goal
                            ? "border-emerald-500"
                            : "border-slate-600"
                        }`}
                      >
                        {selectedGoal === goal && (
                          <div className="w-2 h-2 rounded-full bg-emerald-500" />
                        )}
                      </div>
                      <span>{goal}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Preferred Time */}
              <div>
                <label className="block text-[12px] font-medium text-slate-300 mb-1">
                  Preferred time to train
                </label>
                <select className="w-full rounded-xl bg-slate-900/80 border border-slate-700/80 px-3 py-2.5 text-[13px] text-slate-100 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition">
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              {/* 6. Message */}
              <div>
                <label className="block text-[12px] font-medium text-slate-300 mb-1">
                  Tell us about your goals
                </label>
                <textarea
                  rows={4}
                  placeholder="Share your experience level, any injuries, and what you want to achieve."
                  className="w-full rounded-xl bg-slate-900/80 border border-slate-700/80 px-3 py-2.5 text-[13px] text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition resize-none"
                />
              </div>

              {/* 7. Consent Checkbox */}
              <div className="flex items-start gap-2 text-[11px] text-slate-400">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border border-slate-600/80 bg-slate-900/80 mt-0.5"
                />
                <span>
                  I agree to be contacted by HANU HULK GYM via phone or
                  email about programs and memberships.
                </span>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="mt-3 w-full rounded-full bg-emerald-500 text-slate-950 text-[13px] font-semibold tracking-[0.16em] uppercase py-3 hover:bg-emerald-400 hover:shadow-[0_18px_40px_rgba(16,185,129,0.5)] transition-all duration-200"
              >
                Send message
              </motion.button>

              {/* Footnote */}
              <div className="mt-2 text-[11px] text-slate-500 text-center">
                Your information is kept private and used only to help you get
                started.
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
