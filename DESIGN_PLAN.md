# Plan de Mejoras de Diseño — Portfolio Carmen Caballero

> Generado tras revisión completa del código. Ordenado por prioridad de impacto visual/funcional.

---

## 🔴 Crítico

### 1. HeroTray — Animar los objetos del tray

**Problema:** Los `motion.div` que envuelven cada objeto (cámara, kindle, gafas, airpods, etc.) no tienen animaciones. Solo tienen `style={{ rotate: "..." }}` estático. El tailwind.config.ts ya define un keyframe `float` que no se usa en ningún sitio.

**Solución:**
- Añadir animación de entrada escalonada (`initial` + `animate` con `delay` por índice) a cada objeto
- Aplicar `animate-float` (ya definida en tailwind) con distintos `animation-delay` por objeto para crear movimiento orgánico asíncrono
- Añadir `whileHover={{ scale: 1.05, rotate: ±2deg }}` en cada objeto para microinteracción

**Archivos:** `src/components/HeroTray.tsx`

---

### 2. ContactSection — Añadir links accionables

**Problema:** El Boarding Pass muestra `carmencaballeromedina` y dice "Disponible por LinkedIn" pero nada es clickeable. El visitante no puede contactar a Carmen.

**Solución:**
- Envolver el campo LinkedIn en `<a href="https://linkedin.com/in/carmencaballeromedina" target="_blank">` con estilo hover
- Considerar añadir email si disponible
- El Boarding Pass completo podría ser un link al perfil de LinkedIn (actualmente tiene `cursor-pointer` pero no hace nada)

**Archivos:** `src/components/ContactSection.tsx`

---

### 3. ContactSection — Resolver el placeholder de foto en el pasaporte

**Problema:** El pasaporte tiene un cuadro gris con texto "FOTO" que parece inacabado. En el portfolio de una diseñadora gráfica esto es especialmente visible.

**Opciones (elegir una):**
- A) Añadir foto real de Carmen como asset `src/assets/carmen-photo.jpg`
- B) Reemplazar con una ilustración o silueta con un tratamiento visual intencional (ej: foto en blanco y negro con tono sepia)
- C) Convertirlo en un patrón decorativo / monograma si no hay foto disponible

**Archivos:** `src/components/ContactSection.tsx`, posiblemente `src/assets/`

---

### 4. ContactSection — Stamp vacío

**Problema:** Hay dos stamps en el pasaporte. El primero dice "Toledo", el segundo está completamente vacío (solo whitespace).

```tsx
<div className="stamp rotate-[8deg] border-muted-foreground/40 text-muted-foreground/60">
  {/* vacío */}
</div>
```

**Solución:** Añadir contenido real — opciones: `iO.GENIX`, `2024`, `España`, `ART`, o cualquier texto significativo para Carmen.

**Archivos:** `src/components/ContactSection.tsx:151`

---

## 🟠 Alto

### 5. Global — Añadir overlay de textura de grano

**Problema:** El concepto visual entero se basa en materiales físicos y táctiles (papel, polaroids, sellos impresos, pasaporte). Pero todas las secciones tienen fondo oscuro completamente liso — sin grano, sin textura. Esto contradice la estética analógica.

**Solución:** Añadir un pseudo-elemento `::before` o un `div` fixed con z-index bajo usando `SVG feTurbulence` o una imagen de ruido PNG:

```css
/* En index.css */
body::after {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.035;
  background-image: url("data:image/svg+xml,..."); /* SVG noise */
  background-repeat: repeat;
}
```

También considerar añadir un SVG noise filter generado inline como overlay global.

**Archivos:** `src/index.css`

---

### 6. Navigation — Indicador de sección activa

**Problema:** La navegación no tiene ningún estado activo. El visitante no sabe en qué sección se encuentra mientras hace scroll.

**Solución:**
- Usar `IntersectionObserver` para detectar qué sección está visible
- Añadir un indicador visual al nav-link activo: subrayado, punto decorativo, o cambio de opacidad invertido (activo = opacidad 1, resto = 0.4)
- Mantener coherencia con la estética — un pequeño `•` o `✦` antes del label activo sería apropiado

**Archivos:** `src/components/Navigation.tsx`

---

### 7. WorkSection — Labels de trabajos ilegibles

**Problema:** El caption de cada postcard es `text-[10px] text-card-foreground/60` — 10px al 60% de opacidad es prácticamente invisible.

**Solución:**
- Aumentar a mínimo `text-xs` (12px)
- Subir opacidad a `text-card-foreground/80`
- O replantear: mostrar el label como overlay en hover con un fondo semitransparente que aparezca suavemente

**Archivos:** `src/components/WorkSection.tsx:99`

---

## 🟡 Medio

### 8. ContactSection — Barcode determinístico

**Problema:** `Math.random()` dentro del render genera anchos de barra distintos en cada re-render, lo que es un anti-patrón React.

**Solución:** Definir el array de anchos fuera del componente como constante:

```tsx
// Fuera del componente
const BARCODE_WIDTHS = Array.from({ length: 50 }, (_, i) =>
  ((i * 7 + 13) % 3 === 0) ? 2.5 : 1
);
```

**Archivos:** `src/components/ContactSection.tsx:70-79`

---

### 9. OthersSection — Reemplazar altura fija por min-height

**Problema:** `h-[1050px]` es una altura fija que puede causar overflow o espacio vacío excesivo según el viewport y el tamaño de las tarjetas.

**Solución:** Cambiar a `min-h-[1050px]` o mejor aún, revisar si el layout scattered puede ser relativo en vez de absoluto.

**Archivos:** `src/components/OthersSection.tsx:120`

---

### 10. HeroTray — Inconsistencia de color de fondo

**Problema:** HeroTray usa `bg-[#1a1a1a]` hardcodeado mientras el resto del sitio usa `bg-background` (= `hsl(0 0% 8%)` ≈ `#141414`). Son valores distintos.

**Solución:** Cambiar `bg-[#1a1a1a]` por `bg-background` en la sección hero.

**Archivos:** `src/components/HeroTray.tsx:18`

---

### 11. WorkSection Mobile — Reducir rotaciones

**Problema:** En mobile los postcards se renderizan apilados verticalmente pero con las mismas rotaciones del desktop (`rotate: ±5-14deg`), causando posible overflow horizontal y visual incómodo.

**Solución:** En el layout mobile (el `div` con clase `md:hidden`), eliminar las rotaciones o reducirlas a máximo `±2deg`.

**Archivos:** `src/components/WorkSection.tsx:115`

---

## 🟢 Menor / Pulido

### 12. Footer — Corregir error gramatical

**Problema:** `"and Develop by"` debería ser `"and Developed by"`.

**Archivos:** `src/pages/Index.tsx:19`

---

### 13. HeroTray — Conectar la animación `float` existente

**Problema:** `tailwind.config.ts` define `animate-float` (keyframe de 4s ease-in-out infinite) pero no se aplica a ningún elemento del tray.

**Solución:** Aplicar `className="animate-float"` con distintos `style={{ animationDelay: "Xs" }}` a cada objeto del tray para movimiento orgánico asíncrono. (Relacionado con item #1.)

**Archivos:** `src/components/HeroTray.tsx`, `tailwind.config.ts`

---

### 14. Global — Scrollbar personalizado

**Problema:** El scrollbar del navegador rompe la estética analógica con su apariencia por defecto.

**Solución:**
```css
/* En index.css */
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: hsl(var(--background)); }
::-webkit-scrollbar-thumb { background: hsl(var(--accent) / 0.4); border-radius: 2px; }
::-webkit-scrollbar-thumb:hover { background: hsl(var(--accent) / 0.7); }
```

**Archivos:** `src/index.css`

---

## Orden de Implementación Sugerido

```
1. Footer typo (2 min)                    → impacto: bajo, esfuerzo: mínimo
2. Stamps vacíos (5 min)                  → impacto: medio, esfuerzo: mínimo
3. Barcode determinístico (5 min)         → impacto: técnico, esfuerzo: mínimo
4. Scrollbar personalizado (5 min)        → impacto: pulido global, esfuerzo: mínimo
5. Labels WorkSection (10 min)            → impacto: legibilidad, esfuerzo: bajo
6. Color HeroTray (5 min)                 → impacto: consistencia, esfuerzo: mínimo
7. Altura fija OthersSection (10 min)     → impacto: robustez, esfuerzo: bajo
8. Mobile WorkSection rotaciones (15 min) → impacto: mobile UX, esfuerzo: bajo
9. Links accionables ContactSection       → impacto: ALTO funcional, esfuerzo: bajo
10. Animaciones HeroTray + float          → impacto: MUY ALTO visual, esfuerzo: medio
11. Nav con estado activo                 → impacto: alto UX, esfuerzo: medio
12. Textura de grano global               → impacto: MUY ALTO estético, esfuerzo: medio
13. Foto pasaporte                        → impacto: ALTO credibilidad, esfuerzo: variable
```
