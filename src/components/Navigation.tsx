import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const navItems = [
  { key: "nav.home", href: "#home" },
  { key: "nav.work", href: "#work" },
  { key: "nav.others", href: "#others" },
  { key: "nav.contact", href: "#contact" },
];

const Navigation = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 bg-background/80 backdrop-blur-sm"
    >
      <div className="nav-link font-bold tracking-widest">C.</div>
      <div className="flex gap-8">
        {navItems.map((item) => {
          const sectionId = item.href.slice(1);
          const isActive = activeSection === sectionId;
          
          return (
            <a key={item.key} href={item.href} className="nav-link relative py-1">
              <span className="transition-colors duration-300">
                {t(item.key)}
              </span>
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#e4f101]"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              )}
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default Navigation;
