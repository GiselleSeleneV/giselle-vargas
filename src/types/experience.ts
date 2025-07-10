export type Project = {
    nameProject: string;
    logo?: string;
    startDate: string;
    endDate: string;
    role: string[];
    images: string[];
};

export type Reference = {
    name: string;
    number: string;
    email: string;
    company?: string;
};

export type WorkExperience = {
    company: string;
    companyLogo?: string;
    startDate: string;
    endDate: string;
    city: string;
    position: string;
    role?: string[];
    projects: Project[];
    references?: Reference[];
};