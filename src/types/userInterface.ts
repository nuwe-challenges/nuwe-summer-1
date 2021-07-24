import * as logo from "../assets/icons/stack";
type mapType = keyof typeof logo;

export default interface user {
  name: string;
  mail: string;
  phone: string;
  position: string;
  location: string;
  description: string;
  github: string;
  linkedin: string;
  jobLocation: string;
  jobDesc: string;
  jobSalary: {
    min: number;
    max: number;
  };
  jobTravel: boolean;
  jobRemote: boolean;
  jobWhen: string;
  stack: string[];
  hardSkills: {
    type: string;
    points: number;
  }[];
  softSkills: {
    type: string;
    points: number;
  }[];
  otherValidated: {
    type: mapType;
    points: number;
  }[];
}
