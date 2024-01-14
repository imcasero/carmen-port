import type { IEducation, IOthers } from "./interface";

export const educationData: IEducation[] = [
  {
    title: "Graphic Advertising",
    from: "2019",
    to: "2021",
    description:
      "Higher degree studied at Escuela de arte de Toledo Studies related to advertising, marketing and graphic design",
  },
  {
    title: "Fine Arts",
    from: "2017",
    to: "On hold",
    description:
      "Studied at Rey Juan Carlos University Studies related to fine arts",
  },
  {
    title: "Baccalaureate",
    from: "2015",
    to: "2017",
    description: "Studied at Escuela de arte de Toledo Studies related to art",
  },
] as const;

export const otherData: IOthers[] = [
  {
    title: "English qualification",
    description: "Official Cambridge qualification at B2 English level",
    level: "B2 Level",
  },
] as const;
