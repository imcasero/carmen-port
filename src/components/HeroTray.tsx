import { motion } from "framer-motion";
import { useState } from "react";
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
  const [clickedId, setClickedId] = useState<number | null>(null);

 
  const itemConfigs = [
    { delay: 0.3, duration: 0.7, animation: null, interaction: "hover", scale: 1.08 }, // Camera
    { delay: 0.05, duration: 0.5, animation: null, interaction: "click", scale: 1.1 }, // Polaroid
    { delay: 0.2, duration: 0.8, animation: null, interaction: "hover", scale: 1.07 }, // Kindle
    { delay: 0.5, duration: 0.6, animation: null, interaction: "click", scale: 1.15 }, // Flower - spin on click
    { delay: 0.1, duration: 0.65, animation: null, interaction: "hover", scale: 1.09 }, // Sunglasses
    { delay: 0.35, duration: 0.7, animation: null, interaction: "click", scale: 1.12 }, // Airpods
    { delay: 0.15, duration: 0.75, animation: null, interaction: "hover", scale: 1.05 }, // Macbook
    { delay: 0.45, duration: 0.55, animation: null, interaction: "click", scale: 1.11 }, // Sticker
    { delay: 0.25, duration: 0.7, animation: null, interaction: "hover", scale: 1.1 }, // Seashell
    { delay: 0.4, duration: 0.65, animation: null, interaction: "click", scale: 1.13 }, // Butterfly Stamp
  ];

  const handleClick = (id: number) => {
    setClickedId(clickedId === id ? null : id);
  };

  return (
    <section
      id="home"
      className="h-[100svh] w-full flex items-center justify-center px-4 md:px-8 bg-background overflow-hidden"
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
              graphic designer
            </span>
          </div>
        </div>

        {/* Camera - top left - Hover interaction */}
        <motion.div
          className="absolute top-[25%] left-[13%] w-[16%]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: itemConfigs[0].duration, delay: itemConfigs[0].delay, ease: "easeOut" }}
          whileHover={{ scale: itemConfigs[0].scale }}
          style={{ rotate: "-15deg" }}
        >
          <img src={cameraImg} alt="Camera" className="w-full h-auto object-contain drop-shadow-lg cursor-pointer" />
        </motion.div>

        {/* Polaroid - top center - Click interaction: flip */}
        <motion.div
          className="absolute top-[24%] left-[45%] w-[8%]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, rotateY: clickedId === 1 ? 360 : 0 }}
          transition={{ duration: itemConfigs[1].duration, delay: itemConfigs[1].delay, ease: "easeOut" }}
          onClick={() => handleClick(1)}
          style={{ rotate: "8deg" }}
        >
          <img src={scrapbookImg} alt="Polaroid" className="w-full h-auto object-contain drop-shadow-md cursor-pointer" />
        </motion.div>

        {/* Kindle - top right area - Hover interaction */}
        <motion.div
          className="absolute top-[23%] right-[13%] w-[13%]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: itemConfigs[2].duration, delay: itemConfigs[2].delay, ease: "easeOut" }}
          whileHover={{ scale: itemConfigs[2].scale }}
          style={{ rotate: "-2deg" }}
        >
          <img src={kindleImg} alt="Kindle" className="w-full h-auto object-contain drop-shadow-lg cursor-pointer" />
        </motion.div>

        {/* Flower - scattered upper left - Click interaction: spin */}
        <motion.div
          className="absolute top-[35%] left-[34%] w-[6%]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, rotate: clickedId === 3 ? 360 : "-10deg" }}
          transition={{ duration: itemConfigs[3].duration, delay: itemConfigs[3].delay, ease: "easeOut" }}
          onClick={() => handleClick(3)}
        >
          <img src={flowerImg} alt="Flower" className="w-full h-auto object-contain drop-shadow-md cursor-pointer" />
        </motion.div>

        {/* Sunglasses - left middle - Hover interaction */}
        <motion.div
          className="absolute top-[65%] left-[45%] w-[14%] -translate-y-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: itemConfigs[4].duration, delay: itemConfigs[4].delay, ease: "easeOut" }}
          whileHover={{ scale: itemConfigs[4].scale }}
          style={{ rotate: "12deg" }}
        >
          <img src={sunglassesImg} alt="Sunglasses" className="w-full h-auto object-contain drop-shadow-lg cursor-pointer" />
        </motion.div>

        {/* Airpods - right middle - Click interaction: shake */}
        <motion.div
          className="absolute top-[52%] right-[10%] w-[13%] -translate-y-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: clickedId === 5 ? [0, -8, 8, -8, 8, 0] : 0
          }}
          transition={{ duration: itemConfigs[5].duration, delay: itemConfigs[5].delay, ease: "easeOut" }}
          onClick={() => handleClick(5)}
          style={{ rotate: "15deg" }}
        >
          <img src={airpodsImg} alt="Airpods" className="w-full h-auto object-contain drop-shadow-sm cursor-pointer" />
        </motion.div>

        {/* Macbook - bottom left - Hover interaction */}
        <motion.div
          className="absolute bottom-[20%] left-[13%] w-[28%]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: itemConfigs[6].duration, delay: itemConfigs[6].delay, ease: "easeOut" }}
          whileHover={{ scale: itemConfigs[6].scale }}
          style={{ rotate: "0deg" }}
        >
          <img src={macbookImg} alt="Macbook" className="w-full h-auto object-contain drop-shadow-lg cursor-pointer" />
        </motion.div>

        {/* Sticker - bottom center - Click interaction: bounce */}
        <motion.div
          className="absolute bottom-[21%] left-[52%] w-[6%]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: clickedId === 7 ? [0, -20, 0, -10, 0] : 0
          }}
          transition={{ duration: itemConfigs[7].duration, delay: itemConfigs[7].delay, ease: "easeOut" }}
          onClick={() => handleClick(7)}
          style={{ rotate: "-8deg" }}
        >
          <img src={stickerImg} alt="Sticker" className="w-full h-auto object-contain drop-shadow-sm cursor-pointer" />
        </motion.div>

        {/* Seashell - bottom center-right - Hover interaction */}
        <motion.div
          className="absolute bottom-[36%] right-[25%] w-[7%]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: itemConfigs[8].duration, delay: itemConfigs[8].delay, ease: "easeOut" }}
          whileHover={{ scale: itemConfigs[8].scale }}
          style={{ rotate: "25deg" }}
        >
          <img src={seashellImg} alt="Seashell" className="w-full h-auto object-contain drop-shadow-md cursor-pointer" />
        </motion.div>

        {/* Butterfly Stamp - Click interaction: spin */}
        <motion.div
          className="absolute bottom-[20%] right-[22%] w-[10%]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, rotate: clickedId === 9 ? "-6deg" : "-6deg" }}
          transition={{ duration: itemConfigs[9].duration, delay: itemConfigs[9].delay, ease: "easeOut" }}
          onClick={() => handleClick(9)}
          style={{ rotate: "-6deg" }}
        >
          <img src={ticketImg} alt="Stamp" className="w-full h-auto object-contain drop-shadow-md cursor-pointer" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroTray;
