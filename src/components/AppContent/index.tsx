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
    const scrollerRef = useRef<HTMLDivElement>(null);
    const activeIndexRef = useRef(activeIndex);


    const experienceAndromeda = t("experience.company_three", { returnObjects: true }) as WorkExperience;
    const experienceTalentum = t("experience.company_two", { returnObjects: true }) as WorkExperience;
    const experienceDeft = t("experience.company_one", { returnObjects: true }) as WorkExperience;
    const projectsData = t("projects.data", { returnObjects: true }) as ProjectsType[];
    const sectionRefs = useSectionRefs();

    useLayoutEffect(() => {
        activeIndexRef.current = activeIndex;
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
    }, []);

    useEffect(() => {
        const scroller = scrollerRef.current;
        if (!scroller) return;

        const updateActiveStep = () => {
            const rootRect = scroller.getBoundingClientRect();
            const sections = scroller.querySelectorAll<HTMLElement>("[data-step]");
            let nextIndex = activeIndexRef.current;
            let largestVisible = 0;

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                const visibleTop = Math.max(rect.top, rootRect.top);
                const visibleBottom = Math.min(rect.bottom, rootRect.bottom);
                const visible = visibleBottom - visibleTop;
                if (visible > largestVisible) {
                    largestVisible = visible;
                    nextIndex = Number(section.dataset.step);
                }
            });

            if (nextIndex !== activeIndexRef.current) {
                activeIndexRef.current = nextIndex;
                setActiveIndex(nextIndex);
            }
        };

        updateActiveStep();
        scroller.addEventListener("scroll", updateActiveStep, { passive: true });
        return () => scroller.removeEventListener("scroll", updateActiveStep);
    }, [setActiveIndex]);

    return (
        <div className="relative h-dvh w-full overflow-hidden text-white bg-[#100E12]">

            <div ref={scrollerRef} className="h-dvh overflow-y-scroll snap-mandatory snap-y scrollbar-none">

                <section ref={welcomeRef} data-step="0" style={sectionAccentStyle(0)} className="scroll-section h-dvh overflow-hidden flex items-center justify-center snap-start">
                    <Welcome />
                </section>

                <section ref={aboutMeRef} data-step="1" style={sectionAccentStyle(1)} className="scroll-section h-dvh overflow-hidden flex flex-col pt-14 pb-3 snap-start">
                    <AboutMe />
                </section>

                <section ref={experienceRef} data-step="2" style={sectionAccentStyle(2)} className="scroll-section h-dvh overflow-hidden flex flex-col pt-14 pb-3 snap-start">
                    <Experiences experience={experienceAndromeda} index={0} />
                </section>

                <section data-step="2" style={sectionAccentStyle(2)} className="scroll-section h-dvh overflow-hidden flex flex-col pt-14 pb-3 snap-start">
                    <Experiences experience={experienceTalentum} index={1} />
                </section>

                <section data-step="2" style={sectionAccentStyle(2)} className="scroll-section h-dvh overflow-hidden flex flex-col pt-14 pb-3 snap-start">
                    <Experiences experience={experienceDeft} index={2} />
                </section>

                <section ref={projectsRef} data-step="3" style={sectionAccentStyle(3)} className="scroll-section h-dvh box-border flex flex-col snap-start pt-14 pb-3 overflow-y-auto">
                    <Projects projectsData={projectsData} />
                </section>

                <section ref={skillsRef} data-step="4" style={sectionAccentStyle(4)} className="scroll-section h-dvh overflow-hidden flex flex-col pt-14 pb-3 snap-start">
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
