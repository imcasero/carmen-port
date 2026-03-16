import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { OptimizedImage } from "./ui/OptimizedImage";
import cameraImg from "../assets/red-camera.png";
import kindleImg from "../assets/kindle.png";
import sunglassesImg from "../assets/sunglasses.png";
import airpodsImg from "../assets/airpods.png";
import macbookImg from "../assets/macbook-alt.png";
import scrapbookImg from "../assets/polaroid.png";
import flowerImg from "../assets/flower.png";
import seashellImg from "../assets/seashell.png";
import stickerImg from "../assets/stamp.png";
import ticketImg from "../assets/stamp-1.png";
import trayImg from "../assets/tray.png";

const HeroTray = () => {
  const { t } = useTranslation();

  return (
    <section 
      id="home" 
      className="h-[100svh] w-full flex items-center justify-center px-4 md:px-8 bg-[#1a1a1a] overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mx-auto bg-center bg-no-repeat"
        style={{ 
          width: "100%",
          maxWidth: "min(100%, 85svh, 1200px)",
          aspectRatio: "1 / 1",
          backgroundImage: `url(${trayImg})`, 
          backgroundSize: "contain" 
        }}
      >
        {/* Magazine cutout name - center */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="flex flex-col items-center gap-1">
            <span className="magazine-cut text-[2.8rem] min-[480px]:text-6xl md:text-7xl lg:text-9xl tracking-tight rotate-[-2deg]">
              CARMEN
            </span>
            <span className="magazine-cut text-xs min-[480px]:text-sm md:text-base lg:text-xl mt-2 rotate-[2deg]">
              {t("hero.role")}
            </span>
          </div>
        </div>

        {/* Camera - top left */}
        <motion.div
          className="absolute top-[25%] left-[13%] w-[16%]"
          style={{ rotate: "-15deg" }}
        >
          <OptimizedImage src={cameraImg} alt="Camera" className="w-full h-auto object-contain drop-shadow-lg" loading="eager" />
        </motion.div>

        {/* Polaroid - top center */}
        <motion.div
          className="absolute top-[24%] left-[45%] w-[8%]"
          style={{ rotate: "8deg" }}
        >
          <OptimizedImage src={scrapbookImg} alt="Polaroid" className="w-full h-auto object-contain drop-shadow-md" loading="eager" />
        </motion.div>

        {/* Kindle - top right area */}
        <motion.div
          className="absolute top-[23%] right-[13%] w-[13%]"
          style={{ rotate: "-2deg" }}
        >
          <OptimizedImage src={kindleImg} alt="Kindle" className="w-full h-auto object-contain drop-shadow-lg" loading="eager" />
        </motion.div>

        {/* Flower - scattered upper left */}
        <motion.div
          className="absolute top-[35%] left-[34%] w-[6%]"
          style={{ rotate: "-10deg" }}
        >
          <OptimizedImage src={flowerImg} alt="Flower" className="w-full h-auto object-contain drop-shadow-md" />
        </motion.div>

        {/* Sunglasses - left middle */}
        <motion.div
          className="absolute top-[65%] left-[45%] w-[14%] -translate-y-1/2"
          style={{ rotate: "12deg" }}
        >
          <OptimizedImage src={sunglassesImg} alt="Sunglasses" className="w-full h-auto object-contain drop-shadow-lg" />
        </motion.div>

        {/* Airpods - right middle */}
        <motion.div
          className="absolute top-[52%] right-[10%] w-[13%] -translate-y-1/2"
          style={{ rotate: "15deg" }}
        >
          <OptimizedImage src={airpodsImg} alt="Airpods" className="w-full h-auto object-contain drop-shadow-sm" />
        </motion.div>

        {/* Macbook - bottom left */}
        <motion.div
          className="absolute bottom-[20%] left-[13%] w-[28%]"
          style={{ rotate: "0deg" }}
        >
          <OptimizedImage src={macbookImg} alt="Macbook" className="w-full h-auto object-contain drop-shadow-lg" />
        </motion.div>

        {/* Sticker - bottom center */}
        <motion.div
          className="absolute bottom-[21%] left-[52%] w-[6%]"
          style={{ rotate: "-8deg" }}
        >
          <OptimizedImage src={stickerImg} alt="Sticker" className="w-full h-auto object-contain drop-shadow-sm" />
        </motion.div>

        {/* Seashell - bottom center-right */}
        <motion.div
          className="absolute bottom-[36%] right-[25%] w-[7%]"
          style={{ rotate: "25deg" }}
        >
          <OptimizedImage src={seashellImg} alt="Seashell" className="w-full h-auto object-contain drop-shadow-md" />
        </motion.div>

        {/* Butterfly Stamp */}
        <motion.div
          className="absolute bottom-[20%] right-[22%] w-[10%]"
          style={{ rotate: "-6deg" }}
        >
          <OptimizedImage src={ticketImg} alt="Stamp" className="w-full h-auto object-contain drop-shadow-md" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroTray;
