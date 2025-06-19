"use client";
import { useState, useEffect, useRef } from "react";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import { motion } from "framer-motion";

export default function Profile() {
    const sections = ["AboutMe", "Experience"];
    const [activeIndex, setActiveIndex] = useState(0);

    const aboutMeRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target === aboutMeRef.current) {
                            setActiveIndex(0);
                        } else if (entry.target === experienceRef.current) {
                            setActiveIndex(1);
                        }
                    }
                });
            },
            { threshold: 0.5 } // Se activa cuando al menos el 50% del elemento es visible
        );

        if (aboutMeRef.current) observer.observe(aboutMeRef.current);
        if (experienceRef.current) observer.observe(experienceRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden bg-[#0F172A] text-white">

            <div className="h-screen overflow-y-scroll snap-mandatory snap-y scrollbar-none">

                <section ref={aboutMeRef} className="scroll-section h-screen flex items-center justify-center snap-start">
                    <AboutMe />
                </section>

                <section ref={experienceRef} className="scroll-section h-screen flex items-center justify-center snap-start">
                    <Experience />
                </section>
            </div>

            <div className="absolute right-30 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
                {sections.map((_, index) => (
                    <motion.div
                        key={index}
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-[#AF9661] scale-125" : "bg-gray-500"}`}
                    />
                ))}
            </div>
        </div>
    );
}
