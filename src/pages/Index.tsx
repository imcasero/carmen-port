import Navigation from "@/components/Navigation";
import HeroTray from "@/components/HeroTray";
import WorkSection from "@/components/WorkSection";
import OthersSection from "@/components/OthersSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <HeroTray />
      <WorkSection />
      <OthersSection />
      <ContactSection />

      {/* Footer */}
      <footer className="py-8 text-center">
        <p className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
          © 2024 Carmen — Diseñado con ♡
        </p>
      </footer>
    </div>
  );
};

export default Index;
