"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Welcome from "./Welcome";
import AboutMe from "@/components/AppContent/AboutMe";
import Experiences from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import { motion } from "framer-motion";
import { useActiveComponent } from "@/store/useActiveComponent";
import { useSectionRefs } from "@/store/useSectionsRefs";
import { WorkExperience } from "@/types/experience";
import { ProjectsType } from "@/types/projects";
import { sectionAccentStyle, sectionThemes } from "@/theme/sections";

export default function AppContent() {
    const { t } = useTranslation();

    const sections = ["Welcome", "AboutMe", "Experience", "Projects", "Skills"];
    const { activeIndex, setActiveIndex } = useActiveComponent();

    const welcomeRef = useRef<HTMLDivElement>(null);
    const aboutMeRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);


    const experienceAndromeda = t("experience.company_three", { returnObjects: true }) as WorkExperience;
    const experienceTalentum = t("experience.company_two", { returnObjects: true }) as WorkExperience;
    const experienceDeft = t("experience.company_one", { returnObjects: true }) as WorkExperience;
    const projectsData = t("projects.data", { returnObjects: true }) as ProjectsType[];
    const sectionRefs = useSectionRefs();

    useLayoutEffect(() => {
        const theme = sectionThemes[activeIndex] ?? sectionThemes[0];
        const root = document.documentElement;
        root.style.setProperty("--accent", theme.accent);
        root.style.setProperty("--accent-soft", theme.soft);
        root.style.setProperty("--accent-rgb", theme.rgb);
    }, [activeIndex]);

    useEffect(() => {
        sectionRefs.setRefs({
            welcomeRef,
            aboutMeRef,
            experienceRef,
            projectsRef,
            skillsRef
        });

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target === welcomeRef.current) {
                            setActiveIndex(0);
                        } else if (entry.target === aboutMeRef.current) {
                            setActiveIndex(1);
                        } else if (entry.target === experienceRef.current) {
                            setActiveIndex(2);
                        } else if (entry.target === projectsRef.current) {
                            setActiveIndex(3);
                        } else if (entry.target === skillsRef.current) {
                            setActiveIndex(4);
                        }
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (welcomeRef.current) observer.observe(welcomeRef.current);
        if (aboutMeRef.current) observer.observe(aboutMeRef.current);
        if (experienceRef.current) observer.observe(experienceRef.current);
        if (projectsRef.current) observer.observe(projectsRef.current);
        if (skillsRef.current) observer.observe(skillsRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="relative h-dvh w-full overflow-hidden text-white bg-[#100E12]">

            <div className="h-dvh overflow-y-scroll snap-mandatory snap-y scrollbar-none">

                <section ref={welcomeRef} style={sectionAccentStyle(0)} className="scroll-section h-dvh overflow-hidden flex items-center justify-center snap-start">
                    <Welcome />
                </section>

                <section ref={aboutMeRef} style={sectionAccentStyle(1)} className="scroll-section h-dvh overflow-hidden flex flex-col pt-14 pb-3 snap-start">
                    <AboutMe />
                </section>

                <section ref={experienceRef} style={sectionAccentStyle(2)} className="scroll-section h-dvh overflow-hidden flex flex-col pt-14 pb-3 snap-start">
                    <Experiences experience={experienceAndromeda} />
                </section>

                <section style={sectionAccentStyle(2)} className="scroll-section h-dvh overflow-hidden flex flex-col pt-14 pb-3 snap-start">
                    <Experiences experience={experienceTalentum} />
                </section>

                <section style={sectionAccentStyle(2)} className="scroll-section h-dvh overflow-hidden flex flex-col pt-14 pb-3 snap-start">
                    <Experiences experience={experienceDeft} />
                </section>

                <section ref={projectsRef} style={sectionAccentStyle(3)} className="scroll-section h-dvh box-border flex flex-col snap-start pt-14 pb-3 overflow-y-auto md:overflow-hidden">
                    <Projects projectsData={projectsData} />
                </section>

                <section ref={skillsRef} style={sectionAccentStyle(4)} className="scroll-section h-dvh overflow-hidden flex flex-col pt-14 pb-3 snap-start">
                    <Skills />
                </section>
            </div>

            <div className="hidden lg:flex absolute right-2 md:right-4 lg:right-4 xl:right-5 top-1/2 transform -translate-y-1/2  flex-col gap-4">
                {sections.map((item, index) => (
                    <motion.div
                        key={`${item}-${index}`}
                        className={`w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full transition-colors duration-300 ${index === activeIndex ? "bg-(--accent)" : "bg-white/25"}`}
                    />
                ))}
            </div>
        </div>
    );
}
