import { motion } from "framer-motion";
import { useState } from "react";

const otherItems = [
  { id: 1, rotate: -6, top: "4%", left: "5%", width: 240, height: 300, label: "Ilustración 1", desc: "Exploración de formas orgánicas y color en acuarela digital." },
  { id: 2, rotate: 5, top: "2%", left: "38%", width: 280, height: 210, label: "Fotografía 1", desc: "Serie de retratos analógicos en blanco y negro, Madrid 2023." },
  { id: 3, rotate: -3, top: "6%", left: "72%", width: 220, height: 280, label: "Ilustración 2", desc: "Cartel para festival de música independiente en formato A2." },
  { id: 4, rotate: 7, top: "52%", left: "3%", width: 260, height: 195, label: "Fotografía 2", desc: "Fotografía de producto para marca de cerámica artesanal." },
  { id: 5, rotate: -4, top: "48%", left: "40%", width: 230, height: 310, label: "Ilustración 3", desc: "Portada de fanzine autopublicado, técnica mixta collage." },
  { id: 6, rotate: 3, top: "55%", left: "74%", width: 200, height: 260, label: "Fotografía 3", desc: "Documentación visual de un viaje por el sur de Portugal." },
];

const FlipCard = ({ item, index }: { item: typeof otherItems[0]; index: number }) => {
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
          height: item.height,
          transformStyle: "preserve-3d",
          rotate: `${item.rotate}deg`,
        }}
        className="relative hover:z-20"
      >
        {/* Front */}
        <div
          className="polaroid absolute inset-0 flex items-center justify-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="w-full h-full bg-muted/40 flex items-center justify-center">
            <span className="font-mono text-xs text-muted-foreground">{item.label}</span>
          </div>
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
          <p className="font-display text-sm font-bold text-center mb-3" style={{ color: "hsl(0 0% 15%)" }}>
            {item.label}
          </p>
          <p className="font-body text-xs leading-relaxed text-center" style={{ color: "hsl(0 0% 30%)" }}>
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
        <div className="relative h-[800px] hidden md:block">
          {otherItems.map((item, i) => (
            <FlipCard key={item.id} item={item} index={i} />
          ))}

          {/* Decorative stamp */}
          <motion.div
            initial={{ opacity: 0, rotate: -20 }}
            whileInView={{ opacity: 1, rotate: -15 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="stamp absolute top-[0%] left-[30%]"
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
              <div className="w-full aspect-[3/4] bg-muted/40 flex items-center justify-center">
                <span className="font-mono text-[10px] text-muted-foreground">{item.label}</span>
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
