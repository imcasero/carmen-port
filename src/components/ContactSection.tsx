import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen py-24 px-6 md:px-16 flex items-center justify-center">
      <div className="relative w-full max-w-4xl mx-auto min-h-[700px] md:min-h-[600px]">
        
        {/* Boarding Pass - behind, offset */}
        <motion.div
          initial={{ opacity: 0, x: 60, rotate: 8 }}
          whileInView={{ opacity: 1, x: 0, rotate: 5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          whileHover={{ 
            x: 80, 
            rotate: 12, 
            scale: 1.02,
            zIndex: 20,
            transition: { duration: 0.4, ease: "easeOut" }
          }}
          className="boarding-pass w-[360px] md:w-[480px] rounded-lg overflow-hidden absolute right-0 md:right-[2%] top-[50%] md:top-[15%] z-0 cursor-pointer"
        >
          {/* Header */}
          <div className="bg-accent/10 px-6 py-4 border-b border-dashed border-muted-foreground/20">
            <div className="flex justify-between items-center">
              <span className="font-mono text-[11px] tracking-widest uppercase text-card-foreground/50">Boarding Pass</span>
              <span className="font-mono text-lg text-card-foreground/50">✈</span>
            </div>
          </div>

          <div className="p-8 space-y-6">
            <div className="flex justify-between">
              <div>
                <p className="font-mono text-[9px] tracking-widest uppercase text-muted-foreground/60">Pasajero</p>
                <p className="font-display text-xl font-bold text-card-foreground">Carmen</p>
              </div>
              <div className="text-right">
                <p className="font-mono text-[9px] tracking-widest uppercase text-muted-foreground/60">Destino</p>
                <p className="font-display text-xl font-bold text-card-foreground">Tu proyecto</p>
              </div>
            </div>

            <div className="space-y-4 border-t border-dashed border-muted-foreground/20 pt-5">
              <div className="flex justify-between">
                <div>
                  <p className="font-mono text-[9px] tracking-widest uppercase text-muted-foreground/60">Contacto</p>
                  <p className="font-body text-sm text-card-foreground">Disponible por LinkedIn</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-[9px] tracking-widest uppercase text-muted-foreground/60">Ubicación</p>
                  <p className="font-body text-sm text-card-foreground">España</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <p className="font-mono text-[9px] tracking-widest uppercase text-muted-foreground/60">LinkedIn</p>
                  <p className="font-body text-sm text-card-foreground">carmencaballeromedina</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-[9px] tracking-widest uppercase text-muted-foreground/60">Herramientas</p>
                  <p className="font-body text-sm text-card-foreground">Ai · Ps · Id</p>
                </div>
              </div>
            </div>

            {/* Barcode */}
            <div className="pt-4 border-t border-dashed border-muted-foreground/20">
              <div className="flex gap-[2px] justify-center">
                {Array.from({ length: 50 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-card-foreground/70"
                    style={{
                      width: Math.random() > 0.5 ? 2.5 : 1,
                      height: 34,
                    }}
                  />
                ))}
              </div>
              <p className="font-mono text-[8px] text-center mt-2 text-muted-foreground/40">
                CARMEN-CABALLERO-MEDINA
              </p>
            </div>
          </div>
        </motion.div>

        {/* Passport - on top */}
        <motion.div
          initial={{ opacity: 0, x: -50, rotate: -8 }}
          whileInView={{ opacity: 1, x: 0, rotate: -5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ 
            x: -60, 
            rotate: -12, 
            scale: 1.02,
            zIndex: 30,
            transition: { duration: 0.4, ease: "easeOut" }
          }}
          className="passport-cover w-[340px] md:w-[420px] p-1 relative z-10 cursor-pointer"
        >
          {/* Cover */}
          <div className="text-center py-10">
            <div className="w-14 h-14 mx-auto mb-5 rounded-full border-2 border-primary/40 flex items-center justify-center">
              <span className="font-mono text-sm text-primary/70">✦</span>
            </div>
            <p className="font-mono text-[10px] tracking-[0.35em] uppercase text-primary/50 mb-1">Portfolio</p>
            <p className="font-display text-xl text-primary/80 font-bold">PASAPORTE</p>
          </div>

          {/* Inner pages */}
          <div className="passport-inner rounded-sm mx-1 mb-1">
            <div className="flex gap-5 p-7">
              {/* Photo */}
              <div className="w-28 h-32 bg-muted/30 border border-muted-foreground/20 rounded-sm flex items-center justify-center flex-shrink-0">
                <span className="font-mono text-[10px] text-muted-foreground">FOTO</span>
              </div>

              {/* Info */}
              <div className="space-y-4 flex-1">
                <div>
                  <p className="font-mono text-[9px] tracking-widest uppercase text-muted-foreground/60">Nombre</p>
                  <p className="font-display text-lg font-bold text-card-foreground">Carmen Caballero</p>
                </div>
                <div>
                  <p className="font-mono text-[9px] tracking-widest uppercase text-muted-foreground/60">Nacionalidad</p>
                  <p className="font-body text-sm text-card-foreground">Española</p>
                </div>
                <div>
                  <p className="font-mono text-[9px] tracking-widest uppercase text-muted-foreground/60">Profesión</p>
                  <p className="font-body text-sm text-card-foreground">Diseñadora Gráfica</p>
                </div>
              </div>
            </div>

            {/* About me */}
            <div className="px-7 pb-7">
              <p className="font-mono text-[9px] tracking-widest uppercase text-muted-foreground/60 mb-3">About me</p>
              <p className="font-body text-sm leading-relaxed text-card-foreground/80">
                Diseñadora gráfica con base en Adobe Suite y experiencia en branding,
                identidad visual y contenido digital. Formada en la Escuela de Arte de Toledo.
                Actualmente en iO.GENIX, con interés creciente en UX e IA creativa.
              </p>

              {/* Stamps */}
              <div className="flex gap-5 mt-5 justify-end">
                <div className="stamp rotate-[-12deg]">
                  Toledo
                </div>
                <div className="stamp rotate-[8deg] border-muted-foreground/40 text-muted-foreground/60">
                  
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
