import i18n, { type Resource } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const supportedLngs = ["es", "en"];

const resources: Resource = {
  es: {
    translation: {
      nav: {
        home: "Inicio",
        work: "Trabajos",
        others: "Otros",
        contact: "Contacto",
      },
      hero: {
        role: "diseñadora gráfica",
      },
      work: {
        title: "Trabajos.",
        experience: "Experiencia",
        descriptionTitle: "Descripción",
        description:
          "Diseñadora gráfica con base técnica en Adobe Suite y ~3 años de experiencia en branding, identidad visual y contenido digital. Formada en CFGS Diseño Gráfico (Escuela de Arte de Toledo). Interés creciente en UX y flujos creativos con IA.",
        roles: {
          ioGenix: "Diseñadora Gráfica — iO.GENIX",
          motorOk: "Marketing — MotorOk.com",
          freelance: "Diseñadora Gráfica — Freelance",
          maktagg: "Diseñadora Gráfica — Maktagg",
        },
        dates: {
          ioGenix: "Abr 2024 — Presente",
          motorOk: "May 2022 — Jul 2023",
          freelance: "Sep – Dic 2021",
          maktagg: "Jun – Jul 2021",
        },
      },
      others: {
        title: "Otros.",
        subtitle: "Ilustraciones · Fotografía · For fun",
        items: {
          illustration: {
            label: "Ilustración",
            desc: "Exploración tipográfica y composición de formas geométricas para uso editorial.",
          },
          photo: {
            label: "Fotografía",
            desc: "Capturas del día a día — objetos, texturas y luz natural. Toledo, Madrid, Barcelona.",
          },
          editorial: {
            label: "Editorial",
            desc: "Diseño de publicación y maquetación. Trabajo con InDesign y grilla tipográfica.",
          },
          motion: {
            label: "Motion",
            desc: "Piezas de contenido animado para redes sociales. Edición en CapCut y After Effects.",
          },
          collage: {
            label: "Collage",
            desc: "Collage analógico y digital. Recortes, capas y texturas combinadas manualmente.",
          },
          sketchbook: {
            label: "Sketchbook",
            desc: "Bocetos y experimentos visuales de proceso creativo. Ideas en crudo.",
          },
          stampMadrid: "MADRID",
        },
      },
      contact: {
        boardingPass: "Boarding Pass",
        passenger: "Pasajero",
        destination: "Destino",
        destinationValue: "Tu proyecto",
        contact: "Contacto",
        contactValue: "Disponible por LinkedIn",
        location: "Ubicación",
        locationValue: "España",
        tools: "Herramientas",
        toolsValue: "Ai · Ps · Id",
        passport: {
          portfolio: "Portfolio",
          title: "PASAPORTE",
          photo: "FOTO",
          name: "Nombre",
          nameValue: "Carmen Caballero",
          nationality: "Nacionalidad",
          nationalityValue: "Española",
          profession: "Profesión",
          professionValue: "Diseñadora Gráfica",
          aboutMeTitle: "Sobre mí",
          aboutMe:
            "Diseñadora gráfica con base en Adobe Suite y experiencia en branding, identidad visual y contenido digital. Formada en la Escuela de Arte de Toledo. Actualmente en iO.GENIX, con interés creciente en UX e IA creativa.",
          stampToledo: "Toledo",
        },
      },
      footer: {
        designedBy: "Diseñado por",
        and: "y",
        developedBy: "Desarrollado por",
      },
      notFound: {
        title: "Oops! Página no encontrada",
        backHome: "Volver al inicio",
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        work: "Work",
        others: "Others",
        contact: "Contact",
      },
      hero: {
        role: "graphic designer",
      },
      work: {
        title: "Work.",
        experience: "Experience",
        descriptionTitle: "Description",
        description:
          "Graphic designer with a technical foundation in Adobe Suite and ~3 years of experience in branding, visual identity, and digital content. Trained in Higher Vocational Training in Graphic Design (School of Art in Toledo). Growing interest in UX and AI-assisted creative workflows.",
        roles: {
          ioGenix: "Graphic Designer — iO.GENIX",
          motorOk: "Marketing — MotorOk.com",
          freelance: "Graphic Designer — Freelance",
          maktagg: "Graphic Designer — Maktagg",
        },
        dates: {
          ioGenix: "Apr 2024 — Present",
          motorOk: "May 2022 — Jul 2023",
          freelance: "Sep – Dec 2021",
          maktagg: "Jun – Jul 2021",
        },
      },
      others: {
        title: "Others.",
        subtitle: "Illustration · Photography · For fun",
        items: {
          illustration: {
            label: "Illustration",
            desc: "Typography exploration and geometric composition for editorial use.",
          },
          photo: {
            label: "Photography",
            desc: "Everyday captures — objects, textures, and natural light. Toledo, Madrid, Barcelona.",
          },
          editorial: {
            label: "Editorial",
            desc: "Publication design and layout. Working with InDesign and typographic grids.",
          },
          motion: {
            label: "Motion",
            desc: "Animated content for social media. Editing in CapCut and After Effects.",
          },
          collage: {
            label: "Collage",
            desc: "Analog and digital collage. Cutouts, layers, and textures combined by hand.",
          },
          sketchbook: {
            label: "Sketchbook",
            desc: "Sketches and visual experiments from the creative process. Raw ideas.",
          },
          stampMadrid: "MADRID",
        },
      },
      contact: {
        boardingPass: "Boarding Pass",
        passenger: "Passenger",
        destination: "Destination",
        destinationValue: "Your project",
        contact: "Contact",
        contactValue: "Available on LinkedIn",
        location: "Location",
        locationValue: "Spain",
        tools: "Tools",
        toolsValue: "Ai · Ps · Id",
        passport: {
          portfolio: "Portfolio",
          title: "PASSPORT",
          photo: "PHOTO",
          name: "Name",
          nameValue: "Carmen Caballero",
          nationality: "Nationality",
          nationalityValue: "Spanish",
          profession: "Profession",
          professionValue: "Graphic Designer",
          aboutMeTitle: "About me",
          aboutMe:
            "Graphic designer with an Adobe Suite background and experience in branding, visual identity, and digital content. Trained at the School of Art in Toledo. Currently at iO.GENIX, with a growing interest in UX and creative AI.",
          stampToledo: "Toledo",
        },
      },
      footer: {
        designedBy: "Designed by",
        and: "and",
        developedBy: "Developed by",
      },
      notFound: {
        title: "Oops! Page not found",
        backHome: "Return to Home",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["navigator"],
      lookupQuerystring: "lng",
      lookupCookie: "lng",
      lookupLocalStorage: "lng",
      caches: [],
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
