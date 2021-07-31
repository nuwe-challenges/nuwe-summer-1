import * as logo from "../assets/icons/stack";
type mapType = keyof typeof logo;

export default interface User {
  name: string;
  mail: string;
  avatar: string;
  emblema: string;
  userName: string;
  openToWork: boolean;
  hackathons: string;
  proyectoOS: string;
  challenges: string;
  phone: string;
  position: string;
  location: {
    country: string
    city: string
    continent: string
  };
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
  rank: {
    rankName: string
    global: number
    country: number
    continent: number
  };
  participations: {
    hackathons: number
    challenges: number
    proyectoOS: number
    emblemas: number
  }
}
