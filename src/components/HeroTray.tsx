import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { OptimizedImage } from "./ui/OptimizedImage";
import cameraImg from "../assets/red-camera.png";
import kindleImg from "../assets/kindle.png";
import sunglassesImg from "../assets/sunglasses.png";
import airpodsImg from "../assets/airpods.png";
import macbookImg from "../assets/macbook-alt.png";
import flowerImg from "../assets/flower.png";
import matchaImg from "../assets/matcha.png";
import stickerImg from "../assets/stamp.png";
import ticketImg from "../assets/stamp-1.png";
import mapImg from "../assets/map.png";
import background from "../assets/background.jpg";

const HeroTray = () => {
  const { t } = useTranslation();

  return (
    <section 
      id="home" 
      className="h-[100svh] w-full flex items-center justify-center px-4 md:px-8 overflow-hidden relative"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: '100% auto',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(1px)',
          opacity: '0.1'
        }}
      ></div>
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mx-auto"
        style={{ 
          width: "100%",
          height: "100svh"
        }}
      >
        {/* Magazine cutout name - center */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="flex flex-col items-center gap-3">
            <span className="magazine-cut text-[3rem] min-[480px]:text-6xl md:text-7xl lg:text-9xl tracking-tight rotate-[-2deg]">
              CARMEN
            </span>
            <span className="magazine-cut text-xs pb-4 min-[480px]:text-sm md:text-base lg:text-6xl mt-2 rotate-[2deg]">
              {t("hero.role")}
            </span>
          </div>
        </div>

        {/* Camera - top left */}
        <motion.div
          className="absolute top-[20%] left-[5%] w-[10%]"
          style={{ rotate: "-15deg" }}
        >
          <OptimizedImage src={cameraImg} alt="Camera" className="w-full h-auto object-contain drop-shadow-lg" loading="eager" />
        </motion.div>



        {/* Kindle - top right area */}
        <motion.div
          className="absolute top-[15%] right-[5%] w-[11%]"
          style={{ rotate: "-25deg" }}
        >
          <OptimizedImage src={kindleImg} alt="Kindle" className="w-full h-auto object-contain drop-shadow-lg" loading="eager" />
        </motion.div>

        {/* Flower - scattered upper left */}
        <motion.div
           className="absolute bottom-[18%] left-[38%] w-[15%]"
          style={{ rotate: "-8deg" }}
        >
          <OptimizedImage src={flowerImg} alt="Flower" className="w-full h-auto object-contain drop-shadow-md" />
        </motion.div>

        {/* Sunglasses - left middle */}
        <motion.div
          className="absolute top-[15%] left-[25%] w-[18%] -translate-y-1/2"
          style={{ rotate: "12deg" }}
        >
          <OptimizedImage src={sunglassesImg} alt="Sunglasses" className="w-full h-auto object-contain drop-shadow-lg" />
        </motion.div>

        {/* Airpods - right middle */}
        <motion.div
            className="absolute top-[7%] left-[52%] w-[10%]"
          style={{ rotate: "8deg" }}
        >
          <OptimizedImage src={airpodsImg} alt="Airpods" className="w-full h-auto object-contain drop-shadow-sm" />
        </motion.div>

        {/* Macbook - bottom left */}
        <motion.div
          className="absolute bottom-[3%] left-[-3%] w-[30%] z-10"
          style={{ rotate: "6deg" }}
        >
          <OptimizedImage src={macbookImg} alt="Macbook" className="w-full h-auto object-contain drop-shadow-lg" />
        </motion.div>

        {/* Sticker - bottom center */}
        <motion.div
       
          className="absolute top-[40%] left-[25%] w-[4%]"
          style={{ rotate: "-10deg" }}
        >
          <OptimizedImage src={stickerImg} alt="Sticker" className="w-full h-auto object-contain drop-shadow-sm" />
        </motion.div>

        {/* Seashell - bottom center-right */}
        <motion.div
          className="absolute bottom-[48%] right-[28%] w-[15%]"
          style={{ rotate: "25deg" }}
        >
          <OptimizedImage src={matchaImg} alt="Matcha" className="w-full h-auto object-contain drop-shadow-md" />
        </motion.div>

        {/* Butterfly Stamp */}
        <motion.div
          className="absolute bottom-[12%] right-[8%] w-[6%]"
          style={{ rotate: "-6deg" }}
        >
          <OptimizedImage src={ticketImg} alt="Stamp" className="w-full h-auto object-contain drop-shadow-md" />
        </motion.div>
        
        {/* Map */}
        <motion.div
          className="absolute bottom-[2%] right-[23%] w-[14%]"
          style={{ rotate: "25deg" }}
        >
          <OptimizedImage src={mapImg} alt="Map" className="w-full h-auto object-contain drop-shadow-md" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroTray;
