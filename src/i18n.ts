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
        items: {
          gymbroBanner: {
            label: "GymBro · Banner",
            desc: "Banner publicitario para campaña digital.",
          },
          videoChica: {
            label: "Girl Video · Story",
            desc: "Video generado con IA para contenido en redes sociales.",
          },
          intraworkNewsletter: {
            label: "Intrawork · Newsletter",
            desc: "Imagen promocional para newsletter de marca.",
          },
          barritasPost: {
            label: "Barritas · Social",
            desc: "Post de Instagram para lanzamiento de producto.",
          },
          androblastYoutube: {
            label: "Androblast · YouTube",
            desc: "Miniatura de YouTube para contenido fitness.",
          },
          zmaSuplement: {
            label: "ZMA · Supplement",
            desc: "Post promocional para lanzamiento de suplemento.",
          },
        },
      },
      others: {
        title: "Otros.",
        subtitle: "Ilustraciones · Fotografía · For fun",
        items: {
          illustration: {
            label: "Hamilton · Ilustración",
            desc: "Ilustración digital por encargo realizada en Procreate.",
          },
          photo: {
            label: "Foto Aranjuez · Fotografía",
            desc: "Fotografía de paisaje urbano.",
          },
          editorial: {
            label: "Vitamina D · Editorial",
            desc: "Cartel promocional para evento \"tardeo\" del Restaurante Hierbabuena (Toledo).",
          },
          motion: {
            label: "Tender Balls Astronauta · Motion",
            desc: "Video publicitario conceptual para lanzamiento de producto.",
          },
          collage: {
            label: "Leche Poster · Collage",
            desc: "Cartel publicitario ficticio explorando distintos estilos visuales.",
          },
          sketchbook: {
            label: "Molko · Branding",
            desc: "Proyecto ficticio de branding y packaging para bebida vegetal.",
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
        items: {
          gymbroBanner: {
            label: "GYMBRO · Banner",
            desc: "Advertising banner for digital campaign.",
          },
          videoChica: {
            label: "Girl Video · Story",
            desc: "AI-generated video for social media content.",
          },
          intraworkNewsletter: {
            label: "Intrawork · Newsletter",
            desc: "Promotional image for brand newsletter.",
          },
          barritasPost: {
            label: "Barritas · Social",
            desc: "Instagram post for product launch.",
          },
          androblastYoutube: {
            label: "Androblast · YouTube",
            desc: "YouTube thumbnail for fitness content.",
          },
          zmaSuplement: {
            label: "ZMA · Supplement",
            desc: "Promotional post for supplement launch.",
          },
        },
      },
      others: {
        title: "Others.",
        subtitle: "Illustration · Photography · For fun",
        items: {
          illustration: {
            label: "Hamilton · Illustration",
            desc: "Digital illustration commissioned and created in Procreate.",
          },
          photo: {
            label: "Aranjuez Photo · Photography",
            desc: "Urban landscape photography.",
          },
          editorial: {
            label: "Vitamin D · Editorial",
            desc: "Promotional poster for \"tardeo\" event at Restaurante Hierbabuena (Toledo).",
          },
          motion: {
            label: "Tender Balls Astronaut · Motion",
            desc: "Conceptual advertising video for product launch.",
          },
          collage: {
            label: "Milk Poster · Collage",
            desc: "Fictional advertising poster exploring different visual styles.",
          },
          sketchbook: {
            label: "Molko · Branding",
            desc: "Fictional branding and packaging project for plant-based beverage.",
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
          stampMadrid: "Madrid",
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
