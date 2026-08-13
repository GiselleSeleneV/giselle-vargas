export type TechItem = {
    name: string;
    icon: string;
};

export type ProjectsType = {
    title: string;
    description: string;
    link: string;
    githubLink?: string;
    techStack: TechItem[];
};