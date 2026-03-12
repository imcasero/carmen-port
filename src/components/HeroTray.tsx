import { motion } from "framer-motion";
import cameraImg from "../assets/red-camera.png";
import kindleImg from "../assets/kindle.png";
import sunglassesImg from "../assets/sunglasses.png";
import airpodsImg from "../assets/airpods.png";
import macbookImg from "../assets/macbook.png";
import scrapbookImg from "../assets/polaroid.png";
import flowerImg from "../assets/flower.png";
import seashellImg from "../assets/seashell.png";
import stickerImg from "../assets/stamp.png";
import ticketImg from "../assets/stamp-1.png";
import trayImg from "../assets/tray.png";

const HeroTray = () => {
  return (
    <section 
      id="home" 
      className="h-[100svh] flex items-center justify-center px-6 md:px-10 pt-16 pb-6 bg-center bg-no-repeat bg-[#1a1a1a]"
      style={{ backgroundImage: `url(${trayImg})`, backgroundSize: "auto 100%" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-7xl h-full mx-auto"
      >
        {/* Magazine cutout name - center */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="flex flex-col items-center gap-1">
            <span className="magazine-cut text-6xl md:text-8xl lg:text-9xl tracking-tight">
              CARMEN
            </span>
            <span className="magazine-cut text-base md:text-xl mt-2">
              graphic designer
            </span>
          </div>
        </div>

        {/* Camera - top left */}
        <motion.div
          className="absolute top-[22%] left-[16%] w-24 md:w-32 lg:w-40"
          style={{ rotate: "-15deg" }}
        >
          <img src={cameraImg} alt="Camera" className="w-full object-contain drop-shadow-lg" />
        </motion.div>

        {/* Polaroid - top center-right */}
        <motion.div
          className="absolute top-[20%] left-[55%] w-10 md:w-16"
          style={{ rotate: "8deg" }}
        >
          <img src={scrapbookImg} alt="Polaroid" className="w-full object-contain drop-shadow-md" />
        </motion.div>

        {/* Kindle - top right area */}
        <motion.div
          className="absolute top-[18%] right-[25%] w-20 md:w-28 lg:w-32"
          style={{ rotate: "-5deg" }}
        >
          <img src={kindleImg} alt="Kindle" className="w-full object-contain drop-shadow-lg" />
        </motion.div>

        {/* Flower - scattered */}
        <motion.div
          className="absolute top-[32%] left-[30%] w-10 md:w-14"
          style={{ rotate: "-10deg" }}
        >
          <img src={flowerImg} alt="Flower" className="w-full object-contain drop-shadow-md" />
        </motion.div>

        {/* Sunglasses - left middle */}
        <motion.div
          className="absolute top-[46%] left-[12%] w-20 md:w-28 lg:w-32"
          style={{ rotate: "12deg" }}
        >
          <img src={sunglassesImg} alt="Sunglasses" className="w-full object-contain drop-shadow-lg" />
        </motion.div>

        {/* Airpods - right middle */}
        <motion.div
          className="absolute top-[44%] right-[18%] w-8 md:w-12"
          style={{ rotate: "15deg" }}
        >
          <img src={airpodsImg} alt="Airpods" className="w-full object-contain drop-shadow-sm" />
        </motion.div>

        {/* Macbook - bottom left */}
        <motion.div
          className="absolute bottom-[18%] left-[16%] w-28 md:w-40 lg:w-48"
          style={{ rotate: "5deg" }}
        >
          <img src={macbookImg} alt="Macbook" className="w-full object-contain drop-shadow-lg" />
        </motion.div>

        {/* Sticker - bottom center-left */}
        <motion.div
          className="absolute bottom-[25%] left-[40%] w-10 md:w-14"
          style={{ rotate: "-8deg" }}
        >
          <img src={stickerImg} alt="Sticker" className="w-full object-contain drop-shadow-sm" />
        </motion.div>

        {/* Seashell - bottom center-right */}
        <motion.div
          className="absolute bottom-[32%] right-[28%] w-10 md:w-14"
          style={{ rotate: "25deg" }}
        >
          <img src={seashellImg} alt="Seashell" className="w-full object-contain drop-shadow-md" />
        </motion.div>

        {/* Butterfly Stamp */}
        <motion.div
          className="absolute bottom-[20%] right-[20%] w-16 md:w-24 lg:w-28"
          style={{ rotate: "-5deg" }}
        >
          <img src={ticketImg} alt="Stamp" className="w-full object-contain drop-shadow-md" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroTray;
