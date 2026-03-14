import { motion } from "framer-motion";

const workItems = [
  { id: 1, rotate: -5, top: "5%", left: "5%", width: "28%", aspectRatio: "4/3", label: "Branding" },
  { id: 2, rotate: 7, top: "0%", left: "38%", width: "26%", aspectRatio: "3/4", label: "Identidad Visual" },
  { id: 3, rotate: -3, top: "2%", left: "68%", width: "30%", aspectRatio: "16/9", label: "Editorial" },
  { id: 4, rotate: 5, top: "45%", left: "8%", width: "24%", aspectRatio: "1/1", label: "Packaging" },
  { id: 5, rotate: -8, top: "42%", left: "35%", width: "32%", aspectRatio: "3/2", label: "Contenido Digital" },
  { id: 6, rotate: 4, top: "38%", left: "72%", width: "26%", aspectRatio: "4/5", label: "Redes Sociales" },
];

const WorkSection = () => {
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
                  <p className="font-body text-base md:text-lg text-foreground">Diseñadora Gráfica — iO.GENIX</p>
                  <p className="font-mono text-sm text-muted-foreground mt-1">Abr 2024 — Presente</p>
                </div>
                <div className="border-l-2 border-muted pl-4">
                  <p className="font-body text-base md:text-lg text-foreground">Marketing — MotorOk.com</p>
                  <p className="font-mono text-sm text-muted-foreground mt-1">May 2022 — Jul 2023</p>
                </div>
                <div className="border-l-2 border-muted pl-4">
                  <p className="font-body text-base md:text-lg text-foreground">Diseñadora Gráfica — Freelance</p>
                  <p className="font-mono text-sm text-muted-foreground mt-1">Sep – Dic 2021</p>
                </div>
                <div className="border-l-2 border-muted pl-4">
                  <p className="font-body text-base md:text-lg text-foreground">Diseñadora Gráfica — Maktagg</p>
                  <p className="font-mono text-sm text-muted-foreground mt-1">Jun – Jul 2021</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-mono text-sm tracking-widest uppercase text-muted-foreground mb-3">
                Descripción
              </h3>
              <p className="font-body text-base md:text-lg leading-relaxed text-foreground/80">
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
              className="postcard absolute cursor-pointer hover:z-20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                rotate: `${item.rotate}deg`,
                top: item.top,
                left: item.left,
                width: item.width,
              }}
            >
              <div
                className="w-full h-auto bg-muted/50 flex items-center justify-center overflow-hidden"
                style={{ aspectRatio: item.aspectRatio }}
              >
                <span className="font-mono text-xs text-muted-foreground">{item.label}</span>
              </div>
              <div className="p-3">
                <p className="font-mono text-[10px] text-card-foreground/60">{item.label}</p>
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
              <div className="w-full h-auto bg-muted/50 flex items-center justify-center aspect-[4/3] overflow-hidden">
                <span className="font-mono text-xs text-muted-foreground">{item.label}</span>
              </div>
              <div className="p-3">
                <p className="font-mono text-[10px] text-card-foreground/60">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
