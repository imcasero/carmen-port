import { motion } from "framer-motion";
import { useState } from "react";

import imgZma from "@/assets/projects/social/social-post-zma.png";
import imgLavender from "@/assets/projects/stories/story-lavender.png";
import imgBbqNewsletter from "@/assets/projects/newsletters/newsletter-bbq-chips.png";
import videoBallsSpace from "@/assets/projects/stories/story-balls-space-animated.mp4";
import imgAquaLaunch from "@/assets/projects/stories/story-aqua-launch-text.png";
import imgSocialGeneric from "@/assets/projects/social/social-post-generic.png";

type OtherItem = {
  id: number;
  rotate: number;
  top: string;
  left: string;
  width: number;
  aspectRatio: string;
  label: string;
  desc: string;
  img?: string;
  video?: string;
};

const otherItems: OtherItem[] = [
  { id: 1, rotate: -5, top: "1%",  left: "5%",  width: 340, aspectRatio: "1080/1080", label: "Ilustración", desc: "Exploración tipográfica y composición de formas geométricas para uso editorial.", img: imgZma },
  { id: 2, rotate: 6,  top: "0%",  left: "30%", width: 255, aspectRatio: "1080/1920", label: "Fotografía",  desc: "Capturas del día a día — objetos, texturas y luz natural. Toledo, Madrid, Barcelona.", img: imgLavender },
  { id: 3, rotate: -3, top: "4%",  left: "63%", width: 310, aspectRatio: "1080/1350", label: "Editorial",   desc: "Diseño de publicación y maquetación. Trabajo con InDesign y grilla tipográfica.", img: imgBbqNewsletter },
  { id: 4, rotate: 8,  top: "48%", left: "7%",  width: 255, aspectRatio: "1080/1920", label: "Motion",      desc: "Piezas de contenido animado para redes sociales. Edición en CapCut y After Effects.", video: videoBallsSpace },
  { id: 5, rotate: -5, top: "46%", left: "39%", width: 255, aspectRatio: "816/1456",  label: "Collage",     desc: "Collage analógico y digital. Recortes, capas y texturas combinadas manualmente.", img: imgAquaLaunch },
  { id: 6, rotate: 4,  top: "49%", left: "69%", width: 320, aspectRatio: "1080/1080", label: "Sketchbook",  desc: "Bocetos y experimentos visuales de proceso creativo. Ideas en crudo.", img: imgSocialGeneric },
];

const FlipCard = ({ item, index }: { item: OtherItem; index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="absolute cursor-pointer"
      style={{
        top: item.top,
        left: item.left,
        perspective: "1000px",
      }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        style={{
          width: item.width,
          aspectRatio: item.aspectRatio,
          transformStyle: "preserve-3d",
          rotate: `${item.rotate}deg`,
        }}
        className="relative hover:z-20"
      >
        {/* Front */}
        <div
          className="polaroid absolute inset-0 overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          {item.video ? (
            <video
              src={item.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img src={item.img} alt={item.label} className="w-full h-full object-cover" />
          )}
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center p-6 rounded-sm"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "hsl(40 25% 88%)",
            boxShadow: "3px 3px 12px rgba(0,0,0,0.35)",
          }}
        >
          <p className="font-display text-lg font-bold text-center mb-4" style={{ color: "hsl(0 0% 15%)" }}>
            {item.label}
          </p>
          <p className="font-body text-sm leading-relaxed text-center" style={{ color: "hsl(0 0% 30%)" }}>
            {item.desc}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const OthersSection = () => {
  return (
    <section id="others" className="min-h-screen py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-foreground mb-2">Otros.</h2>
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-16">
            Ilustraciones · Fotografía · For fun
          </p>
        </motion.div>

        {/* Desktop scattered polaroids with flip */}
        <div className="relative h-[1050px] hidden md:block">
          {otherItems.map((item, i) => (
            <FlipCard key={item.id} item={item} index={i} />
          ))}

          {/* Decorative stamp */}
          <motion.div
            initial={{ opacity: 0, rotate: -20 }}
            whileInView={{ opacity: 1, rotate: -15 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="stamp absolute top-[44%] left-[26%]"
          >
            MADRID
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute bottom-[10%] right-[12%] w-24 h-7 bg-accent/25 rotate-[22deg] rounded-sm"
          />
        </div>

        {/* Mobile grid */}
        <div className="grid grid-cols-2 gap-5 md:hidden">
          {otherItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="polaroid"
              style={{ rotate: `${item.rotate}deg` }}
            >
              <div className="w-full aspect-[3/4] overflow-hidden">
                {item.video ? (
                  <video src={item.video} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                ) : (
                  <img src={item.img} alt={item.label} className="w-full h-full object-cover" />
                )}
              </div>
              <p className="font-body text-[9px] text-center pt-1 pb-1" style={{ color: "hsl(0 0% 40%)" }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OthersSection;
