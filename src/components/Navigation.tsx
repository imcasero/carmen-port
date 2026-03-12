import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Others", href: "#others" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 bg-background/80 backdrop-blur-sm"
    >
      <div className="nav-link font-bold tracking-widest">C.</div>
      <div className="flex gap-8">
        {navItems.map((item) => (
          <a key={item.label} href={item.href} className="nav-link">
            {item.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navigation;
