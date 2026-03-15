import Navigation from "@/components/Navigation";
import HeroTray from "@/components/HeroTray";
import WorkSection from "@/components/WorkSection";
import OthersSection from "@/components/OthersSection";
import ContactSection from "@/components/ContactSection";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();

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
          {t("footer.designedBy")} <a className="hover:text-white transition-colors" href="https://www.linkedin.com/in/carmencaballeromedina/">Carmen Caballero Medina</a> {t("footer.and")} {t("footer.developedBy")} <a className="hover:text-white transition-colors" href="https://imcasero.dev">@imcasero.dev</a>
        </p>
      </footer>
    </div>
  );
};

export default Index;
