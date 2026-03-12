import { motion } from "framer-motion";

const HeroTray = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center px-6 md:px-10 pt-16 pb-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full h-full tray-surface p-6 md:p-10"
      >
        {/* Magazine cutout name - center */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="flex flex-col items-center gap-1">
            <span className="magazine-cut text-6xl md:text-8xl lg:text-9xl tracking-tight rotate-[-2deg]">
              CARMEN
            </span>
            <span className="magazine-cut text-base md:text-xl rotate-[1deg] mt-2">
              graphic designer
            </span>
          </div>
        </div>

        {/* Camera - top left */}
        <motion.div
          className="absolute top-[8%] left-[6%] w-28 h-20 md:w-40 md:h-28 rounded-md bg-secondary/60 border border-muted-foreground/20 flex items-center justify-center"
          style={{ rotate: "-12deg" }}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-muted-foreground text-xs font-mono">📷 camera</span>
        </motion.div>

        {/* Kindle - top right area */}
        <motion.div
          className="absolute top-[6%] right-[12%] w-24 h-32 md:w-28 md:h-40 rounded bg-secondary/80 border border-muted-foreground/20 flex items-center justify-center"
          style={{ rotate: "6deg" }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <span className="text-muted-foreground text-xs font-mono text-center">📖 kindle</span>
        </motion.div>

        {/* Sunglasses - left middle */}
        <motion.div
          className="absolute top-[42%] left-[4%] w-28 h-12 md:w-36 md:h-16 rounded-full bg-secondary/50 border border-muted-foreground/20 flex items-center justify-center"
          style={{ rotate: "15deg" }}
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <span className="text-muted-foreground text-sm font-mono">🕶️</span>
        </motion.div>

        {/* Airpods - right middle */}
        <motion.div
          className="absolute top-[38%] right-[5%] w-20 h-20 md:w-24 md:h-24 rounded-xl bg-secondary/40 border border-muted-foreground/20 flex items-center justify-center"
          style={{ rotate: "-5deg" }}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        >
          <span className="text-muted-foreground text-sm font-mono">🎧</span>
        </motion.div>

        {/* Macbook - bottom left */}
        <motion.div
          className="absolute bottom-[8%] left-[5%] w-36 h-24 md:w-52 md:h-32 rounded-md bg-secondary/70 border border-muted-foreground/20 flex items-center justify-center"
          style={{ rotate: "4deg" }}
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        >
          <span className="text-muted-foreground text-xs font-mono">💻 macbook</span>
        </motion.div>

        {/* Scrapbook - top center-right */}
        <motion.div
          className="absolute top-[10%] right-[38%] w-28 h-20 md:w-36 md:h-26 rounded bg-secondary/60 border border-muted-foreground/20 flex items-center justify-center"
          style={{ rotate: "8deg" }}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        >
          <span className="text-muted-foreground text-xs font-mono text-center">📓 scrapbook</span>
        </motion.div>

        {/* Flower - scattered */}
        <motion.div
          className="absolute top-[28%] left-[28%] text-2xl md:text-3xl"
          style={{ rotate: "-15deg" }}
          animate={{ y: [0, -3, 0], rotate: [-15, -10, -15] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          🌸
        </motion.div>

        <motion.div
          className="absolute bottom-[25%] right-[22%] text-xl md:text-2xl"
          style={{ rotate: "20deg" }}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
        >
          🌼
        </motion.div>

        {/* Sticker bottom right */}
        <motion.div
          className="absolute bottom-[10%] right-[8%] w-24 h-16 md:w-32 md:h-20 rounded-sm bg-accent/20 border border-accent/30 flex items-center justify-center"
          style={{ rotate: "-6deg" }}
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3.9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          <span className="text-muted-foreground text-xs font-mono">✦ sticker</span>
        </motion.div>

        {/* Small ticket */}
        <motion.div
          className="absolute bottom-[18%] left-[35%] w-32 h-14 md:w-40 md:h-16 rounded-sm bg-secondary/50 border border-muted-foreground/15 flex items-center justify-center"
          style={{ rotate: "10deg" }}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4.1, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        >
          <span className="text-muted-foreground text-[10px] font-mono">🎫 ticket</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroTray;
