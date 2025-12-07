import { GymHeroText } from "./GymHeroText";
import { GymHeroMedia } from "./GymHeroMedia";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="w-full min-h-[calc(100vh-80px)] mt-20 bg-[#020617] relative overflow-hidden"
    >
      {/* Main Content Container */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-15 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-8 md:gap-12 lg:gap-[72px]">
          {/* LEFT: Hero text content */}
          <div className="order-2 lg:order-1">
            <GymHeroText />
          </div>

          {/* RIGHT: Hero image / stats card */}
          <div className="relative order-1 lg:order-2">
            <GymHeroMedia />
          </div>
        </div>
      </div>

      {/* DECORATIVE ELEMENTS */}
      
      {/* Diagonal Grid Lines (Top Left) */}
      <div
        className="pointer-events-none absolute -left-10 top-[10%] opacity-[0.12] w-[220px] h-[220px]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.15) 0px,
            rgba(255, 255, 255, 0.15) 1px,
            transparent 1px,
            transparent 12px
          ),
          repeating-linear-gradient(
            -45deg,
            rgba(255, 255, 255, 0.15) 0px,
            rgba(255, 255, 255, 0.15) 1px,
            transparent 1px,
            transparent 12px
          )`,
        }}
      />

      {/* Neon Circle Glow (Right Behind Content) */}
      <div
        className="pointer-events-none absolute right-[4%] top-[18%] w-[360px] h-[360px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle at center, rgba(34, 197, 94, 0.55), transparent)',
        }}
      />

      {/* Bottom Accent Bar */}
      <div className="absolute bottom-[8%] left-6 md:left-10 lg:left-[60px] w-16 md:w-24 h-[3px] bg-[#22C55E]" />
    </section>
  );
};
