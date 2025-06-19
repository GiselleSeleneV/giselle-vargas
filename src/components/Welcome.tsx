"use client";

import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { useSectionRefs } from '@/store/useSectionsRefs';
import { ChevronDown } from "lucide-react";

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
    const { welcomeRef, aboutMeRef, experienceRef, skillsRef } = useSectionRefs();
    const { t } = useTranslation();

    const scrollToSection = (index: number) => {
        const refs = [welcomeRef, aboutMeRef, experienceRef, skillsRef];
        const ref = refs[index];
        if (ref?.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className="flex flex-col w-full items-center justify-center min-h-screen bg-[#0F172A] text-[#ededed] text-center overflow-hidden relative">
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
                <span className="relative inline-block text-[40px] md:text-[60px] lg:text-[80px] xl:text-[90px] font-extrabold">
                    {t("home.greetings")}
                    <motion.span
                        className="absolute top-0 left-0 w-full h-full text-[#AF9661]"
                        initial={{ x: -2 }}
                        animate={{ x: [0, -2, 2, 0] }}
                        transition={{ repeat: Infinity, duration: 0.2 }}
                    />
                </span>
            </motion.h1>

            <motion.p
                className="text-[26px] md:text-[30px] lg:text-[30px] xl:text-[40px] mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
            >
                {t("home.I_am")} <span className="text-[#AF9661]">Giselle Vargas</span>
            </motion.p>

            <motion.p
                className="text-[20px] md:text-[30px] lg:text-[20px] xl:text-[30px] mb-8"
                initial={{ opacity: 0, rotate: -5 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
            >
                {t('home.explore')}
            </motion.p>

            <motion.div
                className="absolute bottom-12 flex flex-col items-center text-[#AF9661] cursor-pointer z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: [20, 0, 20] }}
                transition={{ repeat: Infinity, duration: 2 }}

            >
                <ChevronDown onClick={() => scrollToSection(1)} className="w-16 h-16 drop-shadow-[0_0_6px_#AF9661] transition-transform hover:scale-110" />

            </motion.div>
        </div>
    );
}
