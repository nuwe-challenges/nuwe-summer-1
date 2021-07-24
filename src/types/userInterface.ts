export default interface userType {
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
    stack: string[]
}