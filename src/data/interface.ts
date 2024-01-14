interface ICommon {
  title: string;
  from?: string;
  to?: string;
  description: string;
}

export interface IExperience extends ICommon {}

export interface IEducation extends ICommon {}

export interface IOthers extends ICommon {
  level: string;
}
