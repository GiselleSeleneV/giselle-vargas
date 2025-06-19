// src/store/useSectionRefs.ts
import { create } from 'zustand';
import { RefObject } from 'react';

type Refs = {
    welcomeRef: RefObject<HTMLDivElement | null>;
    aboutMeRef: RefObject<HTMLDivElement | null>;
    experienceRef: RefObject<HTMLDivElement | null>;
    skillsRef: RefObject<HTMLDivElement | null>;
};

type SectionRefs = Partial<Refs> & {
    setRefs: (refs: Refs) => void;
};

export const useSectionRefs = create<SectionRefs>((set) => ({
    welcomeRef: undefined,
    aboutMeRef: undefined,
    experienceRef: undefined,
    skillsRef: undefined,
    setRefs: (refs) => set(refs),
}));
