import * as DialogPrimitive from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { OptimizedImage } from "./ui/OptimizedImage";
import { OptimizedVideo } from "./ui/OptimizedVideo";
import type { PictureSource } from "@/lib/image";

// Deterministic "barcode" strip for the boarding-pass modal.
const BARCODE = Array.from({ length: 36 }, (_, i) =>
  i % 5 === 0 ? 3 : i % 3 === 0 ? 1 : i % 2 === 0 ? 2 : 1,
);

// Boarding-pass coding: Flight = año del proyecto, Gate = mes, Seat = fijo por carta.
const MONTHS_ES = [
  "ENE",
  "FEB",
  "MAR",
  "ABR",
  "MAY",
  "JUN",
  "JUL",
  "AGO",
  "SEP",
  "OCT",
  "NOV",
  "DIC",
];

import hamiltonIllustration from "@/assets/projects/illustrations/hamilton_illustration.png?opt";
import videoBallsSpace from "@/assets/projects/stories/story-balls-space-animated.mp4";
import molkoMilk from "@/assets/projects/branding/brading_molko.jpg?opt";
import calimaPost from "@/assets/projects/newsletters/calima.jpg?opt";
import genevaAstro1 from "@/assets/projects/illustrations/geneva_university_1.png?opt";
import genevaAstro2 from "@/assets/projects/illustrations/geneva_university_2.png?opt";
import genevaAstro3 from "@/assets/projects/illustrations/geneva_university_3.png?opt";

type OtherItem = {
  id: number;
  rotate: number;
  top: string;
  left: string;
  width: number;
  aspectRatio: string;
  label: string;
  desc: string;
  img?: PictureSource | string;
  video?: string;
  /** Año del proyecto → campo "Flight". */
  year: number;
  /** Mes del proyecto (1-12) → campo "Gate". */
  month: number;
  /** Asiento fijo por carta → campo "Seat". */
  seat: string;
};

const otherItems: OtherItem[] = [

  {
    id: 7,
    rotate: -6,
    top: "3%",
    left: "7%",
    width: 350,
    aspectRatio: "2160/1765",
    label: "others.items.genevaAstro1.label",
    desc: "others.items.genevaAstro1.desc",
    img: genevaAstro1,
    year: 2026,
    month: 8,
    seat: "26A",
  },
  {
    id: 8,
    rotate: 8,
    top: "0%",
    left: "55%",
    width: 230,
    aspectRatio: "1620/2160",
    label: "others.items.genevaAstro2.label",
    desc: "others.items.genevaAstro2.desc",
    img: genevaAstro2,
    year: 2026,
    month: 8,
    seat: "26B",
  },
  // — Banda media (3) —
  {
    id: 1,
    rotate: 6,
    top: "27%",
    left: "3%",
    width: 295,
    aspectRatio: "1080/1300",
    label: "others.items.illustration.label",
    desc: "others.items.illustration.desc",
    img: hamiltonIllustration,
    year: 2024,
    month: 6,
    seat: "04D",
  },
  {
    id: 3,
    rotate: -4,
    top: "30%",
    left: "33%",
    width: 300,
    aspectRatio: "1080/1250",
    label: "others.items.editorial.label",
    desc: "others.items.editorial.desc",
    img: calimaPost,
    year: 2025,
    month: 5,
    seat: "15J",
  },
  {
    id: 6,
    rotate: 5,
    top: "25%",
    left: "63%",
    width: 300,
    aspectRatio: "1080/1080",
    label: "others.items.sketchbook.label",
    desc: "others.items.sketchbook.desc",
    img: molkoMilk,
    year: 2021,
    month: 11,
    seat: "12M",
  },
  // — Banda inferior (2) —
  {
    id: 9,
    rotate: -10,
    top: "56%",
    left: "22%",
    width: 230,
    aspectRatio: "1620/2160",
    label: "others.items.genevaAstro3.label",
    desc: "others.items.genevaAstro3.desc",
    img: genevaAstro3,
    year: 2026,
    month: 8,
    seat: "26C",
  },
  {
    id: 4,
    rotate: 3,
    top: "54%",
    left: "50%",
    width: 240,
    aspectRatio: "1080/1920",
    label: "others.items.motion.label",
    desc: "others.items.motion.desc",
    video: videoBallsSpace,
    year: 2023,
    month: 9,
    seat: "09F",
  },
];

const ItemMedia = ({ item, sizes }: { item: OtherItem; sizes: string }) => {
  const { t } = useTranslation();

  if (item.video) {
    return (
      <OptimizedVideo
        src={item.video}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
      />
    );
  }

  return (
    <OptimizedImage
      src={item.img}
      alt={t(item.label)}
      className="w-full h-full object-cover"
      sizes={sizes}
    />
  );
};

const OthersSection = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<OtherItem | null>(null);

  return (
    <section id="others" className="min-h-screen relative py-24 px-6 md:px-12 lg:px-16">
      <div className="max-w-[1600px] mx-auto">
        {/* Title - left aligned */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:w-[32%] xl:w-[30%] relative z-10 flex-shrink-0 mb-16 lg:mb-0"
        >
          <h2 className="font-display text-4xl md:text-5xl xl:text-6xl font-black italic text-foreground mb-2">
            {t("others.title")}
          </h2>
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
            {t("others.subtitle")}
          </p>
        </motion.div>

        {/* Desktop scattered polaroids - click to open detail - centered */}
        <div className="relative h-[1020px] hidden md:block mx-auto max-w-[1200px]">
          {otherItems.map((item, i) => (
            <motion.button
              key={item.id}
              type="button"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ scale: 1.05, zIndex: 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => setSelected(item)}
              className="polaroid absolute cursor-pointer overflow-hidden"
              style={{
                top: item.top,
                left: item.left,
                width: item.width,
                aspectRatio: item.aspectRatio,
                rotate: `${item.rotate}deg`,
              }}
            >
              <ItemMedia item={item} sizes="(max-width: 768px) 45vw, 400px" />
            </motion.button>
          ))}

          {/* Decorative stamp */}
          <motion.div
            initial={{ opacity: 0, rotate: -20 }}
            whileInView={{ opacity: 1, rotate: -15 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="stamp absolute top-[43%] left-[1%] pointer-events-none"
          >
            {t("others.items.stampMadrid")}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute top-[62%] left-[58%] w-24 h-7 bg-accent/25 rotate-[22deg] rounded-sm pointer-events-none"
          />
        </div>

        {/* Mobile grid */}
        <div className="grid grid-cols-2 gap-5 md:hidden lg:hidden mt-8">
          {otherItems.map((item, i) => (
            <motion.button
              key={item.id}
              type="button"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              onClick={() => setSelected(item)}
              className="polaroid text-left"
              style={{ rotate: `${item.rotate}deg` }}
            >
              <div className="w-full aspect-[3/4] overflow-hidden">
                <ItemMedia item={item} sizes="(max-width: 768px) 45vw, 400px" />
              </div>
              <p
                className="font-body text-[9px] text-center pt-1 pb-1"
                style={{ color: "hsl(0 0% 40%)" }}
              >
                {t(item.desc)}
              </p>
            </motion.button>
          ))}
        </div>
      </div>

      <DialogPrimitive.Root
        open={selected !== null}
        onOpenChange={(open) => !open && setSelected(null)}
      >
        <DialogPrimitive.Portal>
          {selected && (
            <>
              <DialogPrimitive.Overlay asChild>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm"
                />
              </DialogPrimitive.Overlay>

              <DialogPrimitive.Content asChild aria-describedby="others-modal-desc">
                <motion.div
                  style={{ x: "-50%", y: "-50%" }}
                  initial={{ opacity: 0, scale: 0.93, rotate: -1.5, y: "-46%" }}
                  animate={{ opacity: 1, scale: 1, rotate: 0, y: "-50%" }}
                  transition={{ type: "spring", stiffness: 220, damping: 26, mass: 0.9 }}
                  className="fixed left-1/2 top-1/2 z-50 w-[95vw] max-w-[95vw] focus:outline-none md:w-max"
                >
                  <div className="boarding-pass relative flex w-full flex-col overflow-hidden rounded-xl shadow-[0_40px_120px_-25px_rgba(0,0,0,0.8)] md:h-[84vh] md:w-auto md:max-w-full md:flex-row">
                    {/* Artwork coupon — panel sized from the artwork so the frame hugs it, no bars, no scroll */}
                    <div
                      className="relative shrink-0 overflow-hidden bg-neutral-900 max-md:aspect-[var(--art-ar)] max-md:max-h-[52vh] max-md:w-full md:h-full md:w-[var(--art-w)] md:max-w-[calc(95vw-350px)] [&_picture]:contents"
                      style={
                        {
                          "--art-ar": selected.aspectRatio,
                          "--art-w": `calc(84vh * ${selected.aspectRatio})`,
                        } as React.CSSProperties
                      }
                    >
                      {selected.video ? (
                        <video
                          src={selected.video}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="h-full w-full object-contain"
                        />
                      ) : (
                        <OptimizedImage
                          src={selected.img}
                          alt={t(selected.label)}
                          loading="eager"
                          sizes="(max-width: 768px) 95vw, 70vh"
                          className="h-full w-full object-contain"
                        />
                      )}
                      <motion.div
                        initial={{ scale: 0.3, opacity: 0, rotate: -32 }}
                        animate={{ scale: 1, opacity: 0.95, rotate: -11 }}
                        transition={{ delay: 0.28, type: "spring", stiffness: 190, damping: 11 }}
                        className="stamp absolute bottom-4 left-4 z-[2] bg-white/80 text-sm backdrop-blur-[1px]"
                      >
                        {t("others.items.stampMadrid")}
                      </motion.div>
                    </div>

                    {/* Tear line + detail stub */}
                    <div className="passport-inner relative flex w-full shrink-0 flex-col justify-center gap-5 border-t-2 border-dashed border-black/25 p-7 md:w-[350px] md:border-l-2 md:border-t-0">
                      <span
                        aria-hidden
                        className="pointer-events-none absolute -left-[11px] -top-[11px] h-5 w-5 rounded-full bg-background md:top-[-11px]"
                      />
                      <span
                        aria-hidden
                        className="pointer-events-none absolute -right-[11px] -top-[11px] h-5 w-5 rounded-full bg-background md:bottom-[-11px] md:left-[-11px] md:right-auto md:top-auto"
                      />

                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/50">
                          {t("others.modal.kicker")}
                        </span>
                        <motion.span
                          aria-hidden
                          initial={{ x: -8, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.2, duration: 0.45, ease: "easeOut" }}
                          className="text-base text-black/40"
                        >
                          ✈
                        </motion.span>
                      </div>

                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-black/45">
                          {t("others.modal.project")}
                        </p>
                        <DialogPrimitive.Title className="mt-1 font-display text-2xl font-bold leading-tight text-black/85 md:text-3xl">
                          {t(selected.label)}
                        </DialogPrimitive.Title>
                      </div>

                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-black/45">
                          {t("others.modal.details")}
                        </p>
                        <DialogPrimitive.Description
                          id="others-modal-desc"
                          className="mt-1.5 font-body text-[15px] leading-relaxed text-black/70"
                        >
                          {t(selected.desc)}
                        </DialogPrimitive.Description>
                      </div>

                      <div className="flex flex-col gap-4 pt-1">
                        <div
                          aria-hidden
                          className="grid grid-cols-3 gap-3 border-t border-dashed border-black/20 pt-4"
                        >
                          {[
                            ["Flight", String(selected.year)],
                            ["Gate", MONTHS_ES[selected.month - 1]],
                            ["Seat", selected.seat],
                          ].map(([label, value]) => (
                            <div key={label}>
                              <p className="font-mono text-[8px] uppercase tracking-widest text-black/40">
                                {label}
                              </p>
                              <p className="font-mono text-sm font-bold text-black/70">{value}</p>
                            </div>
                          ))}
                        </div>

                        <div aria-hidden className="flex items-center gap-2 text-black/35">
                          <span className="h-1.5 w-1.5 rounded-full bg-black/35" />
                          <span className="flex-1 border-t border-dashed border-black/25" />
                          <span className="text-xs">✈</span>
                          <span className="flex-1 border-t border-dashed border-black/25" />
                          <span className="h-1.5 w-1.5 rounded-full bg-black/35" />
                        </div>

                        <div
                          aria-hidden
                          className="flex h-9 items-stretch gap-[2px] border-t border-dashed border-black/20 pt-3"
                        >
                          {BARCODE.map((w, i) => (
                            <span key={i} className="bg-black/70" style={{ width: w }} />
                          ))}
                        </div>
                      </div>
                    </div>

                    <DialogPrimitive.Close className="absolute right-3 top-3 rounded-full bg-black/45 p-1.5 text-white/90 transition hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/60">
                      <X className="h-4 w-4" />
                      <span className="sr-only">{t("others.modal.close")}</span>
                    </DialogPrimitive.Close>
                  </div>
                </motion.div>
              </DialogPrimitive.Content>
            </>
          )}
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </section>
  );
};

export default OthersSection;
