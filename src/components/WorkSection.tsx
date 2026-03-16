import { motion } from "framer-motion";
import { useState } from "react";

import imgBannerGymbro from "@/assets/projects/banners/banner-gymbro-pack.png";
import imgStoryHydracherry from "@/assets/projects/stories/story-hydracherry.png";
import imgYoutubAndroblast from "@/assets/projects/youtube/youtube-thumbnail-androblast.png";
import imgSocialBars from "@/assets/projects/social/social-post-bars.png";
import imgNewsletterIntra from "@/assets/projects/newsletters/newsletter-intrawork-promo.png";
import imgStoryAloe from "@/assets/projects/stories/story-aloe-launch.png";

const workItems = [
  { id: 1, rotate: -3, top: "5%", left: "5%", width: "45%", aspectRatio: "3002/1100", label: "GymBro Pack · Banner", img: imgBannerGymbro },
  { id: 2, rotate: 3, top: "0%", left: "38%", width: "30%", aspectRatio: "1080/1920", label: "HydraCherry · Story", img: imgStoryHydracherry },
  { id: 3, rotate: -3, top: "2%", left: "68%", width: "30%", aspectRatio: "1920/1080", label: "Androblast · YouTube", img: imgYoutubAndroblast },
  { id: 4, rotate: 3, top: "45%", left: "8%", width: "30%", aspectRatio: "1080/1080", label: "Barritas · Post Social", img: imgSocialBars },
  { id: 5, rotate: -3, top: "55%", left: "35%", width: "32%", aspectRatio: "1080/1350", label: "IntraWork · Newsletter", img: imgNewsletterIntra },
  { id: 6, rotate: 3, top: "38%", left: "72%", width: "26%", aspectRatio: "816/1456", label: "Aloe Vera · Story", img: imgStoryAloe },
];

const WorkSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="work" className="min-h-screen relative py-24 px-6 md:px-12 lg:px-16">
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-8 min-h-[800px]">
        {/* Title & experience - left side (30-35%) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:w-[32%] xl:w-[30%] relative z-10 flex-shrink-0 flex flex-col justify-center"
        >
          <h2 className="font-display text-4xl md:text-5xl xl:text-6xl font-black italic text-foreground mb-10">Trabajos.</h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-mono text-sm tracking-widest uppercase text-muted-foreground mb-4">
                Experiencia
              </h3>
              <div className="space-y-4">
                <div className="border-l-2 border-accent pl-4">
                  <p className="font-sans text-lg md:text-xl text-white font-medium">Diseñadora Gráfica — iO.GENIX</p>
                  <p className="font-mono text-xs text-gray-500 mt-1 uppercase tracking-wider">Abr 2024 — Presente</p>
                </div>
                <div className="border-l-2 border-gray-700 pl-4">
                  <p className="font-sans text-lg md:text-xl text-white font-medium">Marketing — MotorOk.com</p>
                  <p className="font-mono text-xs text-gray-500 mt-1 uppercase tracking-wider">May 2022 — Jul 2023</p>
                </div>
                <div className="border-l-2 border-gray-700 pl-4">
                  <p className="font-sans text-lg md:text-xl text-white font-medium">Diseñadora Gráfica — Freelance</p>
                  <p className="font-mono text-xs text-gray-500 mt-1 uppercase tracking-wider">Sep – Dic 2021</p>
                </div>
                <div className="border-l-2 border-gray-700 pl-4">
                  <p className="font-sans text-lg md:text-xl text-white font-medium">Diseñadora Gráfica — Maktagg</p>
                  <p className="font-mono text-xs text-gray-500 mt-1 uppercase tracking-wider">Jun – Jul 2021</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-mono text-sm tracking-widest uppercase text-muted-foreground mb-3">
                Descripción
              </h3>
              <p className="font-sans text-lg md:text-xl leading-relaxed text-gray-300" style={{ lineHeight: '1.6' }}>
                Diseñadora gráfica con base técnica en Adobe Suite y ~3 años de experiencia
                en branding, identidad visual y contenido digital. Formada en CFGS Diseño
                Gráfico (Escuela de Arte de Toledo). Interés creciente en UX y flujos creativos con IA.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Scattered work images - right side (65-70%) */}
        <div className="lg:w-[68%] xl:w-[70%] relative min-h-[700px] lg:min-h-[800px] hidden md:block">
          {workItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="postcard absolute cursor-pointer transition-all duration-500 ease-out"
              style={{
                rotate: hoveredId === item.id ? "0deg" : `${item.rotate}deg`,
                top: item.top,
                left: item.left,
                width: item.width,
                zIndex: hoveredId === item.id ? 30 : 10,
                opacity: hoveredId && hoveredId !== item.id ? 0.4 : 1,
                transform: hoveredId === item.id ? "scale(1.05)" : "scale(1)",
              }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className="w-full overflow-hidden"
                style={{ aspectRatio: item.aspectRatio }}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <p className="font-sans text-sm font-semibold text-white">{item.label.split(' · ')[0]}</p>
                <p className="font-mono text-xs text-gray-500 uppercase tracking-wider mt-1">{item.label.split(' · ')[1]}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: stacked */}
        <div className="mt-12 space-y-6 md:hidden">
          {workItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="postcard mx-auto max-w-sm"
              style={{ rotate: `${item.rotate}deg` }}
            >
              <div className="w-full overflow-hidden" style={{ aspectRatio: item.aspectRatio }}>
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <p className="font-sans text-sm font-semibold text-white">{item.label.split(' · ')[0]}</p>
                <p className="font-mono text-xs text-gray-500 uppercase tracking-wider mt-1">{item.label.split(' · ')[1]}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
