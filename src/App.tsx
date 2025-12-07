import { GymNavbar } from "./components/GymNavbar";
import { HeroSection } from "./components/HeroSection";
import { ProgramsSection } from "./components/ProgramsSection";
import { CoachesSection } from "./components/CoachesSection";
import { MembershipsSection } from "./components/MembershipsSection";
import { ScheduleSection } from "./components/ScheduleSection";
import { TransformationsSection } from "./components/TransformationsSection";
import { ContactSection } from "./components/ContactSection";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <GymNavbar />
      
      {/* Main content */}
      <main>
        <HeroSection />

        <ProgramsSection />

        <CoachesSection />

        <MembershipsSection />

        <ScheduleSection />

        <TransformationsSection />

        <ContactSection />
      </main>
    </div>
  );
}

export default App;
