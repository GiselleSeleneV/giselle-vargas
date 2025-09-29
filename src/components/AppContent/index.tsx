"use client";
import { useEffect, useRef } from "react";
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

export default function AppContent() {
    const { t } = useTranslation();

    const sections = ["Welcome", "AboutMe", "Experience", "Projects", "Skills"];
    const { activeIndex, setActiveIndex } = useActiveComponent();

    const welcomeRef = useRef<HTMLDivElement>(null);
    const aboutMeRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);

    const experienceTalentum = t("experience.company_one", { returnObjects: true }) as WorkExperience;
    const experienceDeft = t("experience.company_two", { returnObjects: true }) as WorkExperience;
    const projectsData = t("projects.data", { returnObjects: true }) as ProjectsType[];
    const sectionRefs = useSectionRefs();

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
        <div className="relative h-screen w-full overflow-hidden text-white bg-[#0F172A]">

            <div className="h-screen overflow-y-scroll snap-mandatory snap-y scrollbar-none">

                <section ref={welcomeRef} className="scroll-section h-screen flex items-center justify-center snap-start">
                    <Welcome />
                </section>

                <section ref={aboutMeRef} className="scroll-section h-screen flex items-center justify-center snap-start">
                    <AboutMe />
                </section>

                <section ref={experienceRef} className="scroll-section h-screen flex items-center justify-center snap-start">
                    <Experiences experience={experienceTalentum} />
                </section>

                <section className="scroll-section h-screen flex items-center justify-center snap-start">
                    <Experiences experience={experienceDeft} />
                </section>

                <section ref={projectsRef} className="scroll-section h-screen flex items-center justify-center snap-start">
                    <Projects projectsData={projectsData} />
                </section>

                <section ref={skillsRef} className="scroll-section h-screen flex items-center justify-center snap-start">
                    <Skills />
                </section>
            </div>

            <div className="hidden lg:flex absolute right-2 md:right-10 lg:right-8 xl:right-8 top-1/2 transform -translate-y-1/2  flex-col gap-4">
                {sections.map((item, index) => (
                    <motion.div
                        key={`${item}-${index}`}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-[#AF9661] scale-125" : "bg-gray-500"}`}
                    />
                ))}
            </div>
        </div>
    );
}
