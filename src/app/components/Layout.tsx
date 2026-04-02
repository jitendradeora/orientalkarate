import { Outlet } from "react-router";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { FloatingCTA } from "./FloatingCTA";
import { ChatAssistant } from "./ChatAssistant";
import { ScrollToTop } from "./ScrollToTop";
import { StayUpdatedCTA } from "./StayUpdatedCTA";
import { StartYourJourneySection } from "./StartYourJourneySection";

export function Layout() {
  return (
    <div className="min-h-screen bg-black text-white">
      <ScrollToTop />
      <Navigation />
      <main>
        <Outlet />
      </main>
      <StartYourJourneySection />
      <StayUpdatedCTA />
      <Footer />
      <FloatingCTA />
      <ChatAssistant />
    </div>
  );
}
