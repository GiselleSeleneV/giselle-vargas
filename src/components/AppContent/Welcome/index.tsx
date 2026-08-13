"use client";

import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { useSectionRefs } from '@/store/useSectionsRefs';
import { ChevronDown } from "lucide-react";
import { CodeIcon } from "@/components/Icons";

const generateParticles = (count: number) =>

    Array.from({ length: count }, (_, i) => ({
        x: Math.random() * 600 - 300,
        y: Math.random() * 600 - 300,
        delay: Math.random() * 2,
        scale: Math.random() * 1.5 + 0.5,
        index: i,
    }));

const particles = generateParticles(25);

export default function Welcome() {
    const { welcomeRef, aboutMeRef, experienceRef, projectsRef, skillsRef } = useSectionRefs();
    const { t } = useTranslation();

    const scrollToSection = (index: number) => {
        const refs = [welcomeRef, aboutMeRef, experienceRef, projectsRef, skillsRef];
        const ref = refs[index];
        if (ref?.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="flex flex-col w-full items-center justify-center min-h-screen text-[#ededed] text-center overflow-hidden relative">
            {particles.map((particle) => (
                <motion.div
                    key={particle.index}
                    className="absolute w-6 h-6 bg-gradient-to-br from-[#AF9661] to-[#ededed] rounded-full opacity-30"
                    initial={{ x: particle.x, y: particle.y, scale: particle.scale }}
                    animate={{
                        x: [particle.x, particle.x + 100 * Math.sin(particle.index)],
                        y: [particle.y, particle.y + 100 * Math.cos(particle.index)],
                        rotate: 360,
                    }}
                    transition={{ repeat: Infinity, duration: 8 + Math.random() * 4, delay: particle.delay }}
                />
            ))}

            <motion.h1
                className="font-extrabold mb-2 tracking-wide relative p-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <span className="relative inline-block text-[40px] md:text-[60px] lg:text-[95px] xl:text-[120px] font-extrabold drop-shadow-[0_0_12px_#AF9661] text-white">
                    {t("home.greetings")}
                    <motion.span
                        className="absolute top-0 left-0 w-full h-full text-[#AF9661]"
                        initial={{ x: -2 }}
                        animate={{ x: [0, -2, 2, 0] }}
                        transition={{ repeat: Infinity, duration: 0.2 }}
                    />
                </span>
            </motion.h1>

            <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
            >
                <h2 className="text-[26px] md:text-[30px] lg:text-[56px] xl:text-[76px] font-bold text-center text-[#AF9661] relative group mb-6 lg:mb-8">
                    <span className="text-[rgb(237,237,237)] mr-1 md:mr-2 lg:mr-4 xl:mr-4">{t("home.I_am")}</span>Giselle Vargas
                    <motion.span
                        className="flex justify-center text-[16px] md:text-[18px] lg:text-[28px] xl:text-[34px] text-[#ededed] drop-shadow-[0_0_6px_#AF9661]"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.2 }}
                    >
                        <div className="flex items-center mr-1 lg:mr-2">
                            <CodeIcon />
                        </div>
                        {t("home.position")}
                    </motion.span>
                </h2>

                <motion.button
                    type="button"
                    onClick={() => scrollToSection(3)}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 border border-[#AF9661] px-4 py-1.5 lg:px-5 lg:py-2 rounded-full text-[#AF9661] text-[12px] lg:text-[14px] font-semibold bg-white/5 backdrop-blur-sm cursor-pointer"
                >
                    {t("home.cta_projects")}
                </motion.button>
            </motion.div>

            <motion.div
                className="absolute bottom-34 md:bottom-10 lg:bottom-10 xl:bottom-10 flex flex-col items-center text-[#AF9661] cursor-pointer z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.8 }}
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 2.8 }}
                >
                    <ChevronDown
                        onClick={() => scrollToSection(1)}
                        className="w-14 h-14 lg:w-[4.5rem] lg:h-[4.5rem] xl:w-20 xl:h-20 drop-shadow-[0_0_6px_#AF9661] transition-transform hover:scale-110"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}
