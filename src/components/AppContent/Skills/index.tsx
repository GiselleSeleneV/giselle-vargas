"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { techStack } from "./data";

export default function Skills() {
    const [direction, setDirection] = useState<"left" | "right">("right");
    const { t } = useTranslation();

    const skills = t("skills", { returnObjects: true }) as {
        title: string;
        data: {
            category: string;
            skills: string[];
        }[];
    }[];

    const [activeIndex, setActiveIndex] = useState(0);
    const totalSteps = skills.length;

    const currentSection = skills[activeIndex];
    const data = currentSection.data;
    const middleIndex = Math.ceil(data.length / 2);

    const leftItems = data.slice(0, middleIndex);
    const rightItems = data.slice(middleIndex);

    const handleNext = () => {
        setDirection("right");
        setActiveIndex((prev) => (prev + 1) % totalSteps);
    };

    const handlePrev = () => {
        setDirection("left");
        setActiveIndex((prev) => (prev - 1 + totalSteps) % totalSteps);
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-full min-h-screen text-white overflow-hidden px-6 py-8 flex flex-col justify-between "
        >
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center flex-grow">
                <AnimatePresence mode="wait" initial={false}>
                    <motion.h2
                        key={activeIndex}
                        className="flex text-center text-[20px] md:text-[48px] lg:text-[58px] xl:text-[72px] font-extrabold tracking-tight font-playfair text-[#AF9661] mb-1 lg:mb-4 xl:mb-10"
                        initial={{ opacity: 0, x: direction === "right" ? 50 : -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: direction === "right" ? -50 : 50 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                        {currentSection.title}
                    </motion.h2>
                </AnimatePresence>

                <div className="relative w-full">

                    <div className="hidden md:flex items-center justify-between w-full">
                        <motion.button
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handlePrev}
                            className="z-10 text-[#AF9661] hover:text-[#d0b97b] cursor-pointer px-6"
                        >
                            <ChevronLeft size={48} />
                        </motion.button>

                        <div className="relative flex-1 max-w-5xl ">
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, x: direction === "right" ? 80 : -80 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: direction === "right" ? -80 : 80 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-6 xl:gap-16 min-h-[330px]"
                                >
                                    {[leftItems, rightItems].map((side, sideIndex) => (
                                        <div key={sideIndex === 0 ? "left" : "right"} className="space-y-4 xl:space-y-8 w-full">
                                            {side.map((item, idx) => (
                                                <div
                                                    key={`${item.category}-${idx}`}
                                                    className=" bg-white/5 border border-white/10 shadow-lg px-4 py-4 rounded-2xl backdrop-blur-md h-[100px] md:h-[116px] lg:h-[110px] xl:h-[130px] flex flex-col overflow-hidden w-full"
                                                >
                                                    <h3 className="flex text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-bold text-white mb-2">
                                                        {item.category}
                                                    </h3>
                                                    <ul className="space-y-1 text-[12px] md:text-[12px] lg:text-[14px] xl:text-[16px] text-gray-300 overflow-hidden">
                                                        {item.skills.map((skill, idx) => (
                                                            <li key={`${skill}-${idx}`} className="flex before:content-['•'] before:mr-2 before:text-[#AF9661]">
                                                                {skill}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleNext}
                            className="z-10 text-[#AF9661] hover:text-[#d0b97b] cursor-pointer px-6"
                        >
                            <ChevronRight size={48} />
                        </motion.button>
                    </div>

                    <div className="flex flex-col items-center md:hidden mt-2 w-full">
                        <div className="w-full">
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, x: direction === "right" ? 80 : -80 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: direction === "right" ? -80 : 80 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                    className="grid grid-cols-1 gap-2"
                                >
                                    {[...leftItems, ...rightItems].map((item, idx) => (
                                        <motion.div
                                            key={`${item.category}-${idx}`}
                                            whileHover={{ scale: 1.03, boxShadow: "0px 8px 30px rgba(175,150,97,0.15)" }}
                                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                            className="bg-white/5 border border-white/10 shadow-lg px-3 py-2 rounded-2xl backdrop-blur-md flex flex-col overflow-hidden w-full"
                                        >
                                            <h3 className="text-[12px] font-bold text-[#AF9661] mb-2">{item.category}</h3>
                                            <ul className="space-y-1 text-[12px] text-gray-300 overflow-hidden">
                                                {item.skills.map((skill, skillIdx) => (
                                                    <li key={`${skill}-${skillIdx}`} className="flex before:content-['•'] before:mr-2 before:text-[#AF9661]">
                                                        {skill}
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="flex items-center justify-center gap-6 mt-6">
                            <motion.button
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handlePrev}
                                className="text-[#AF9661] hover:text-[#d0b97b]"
                            >
                                <ChevronLeft size={32} />
                            </motion.button>

                            <div className="flex gap-2">
                                {Array.from({ length: totalSteps }).map((i, idx) => (
                                    <button
                                        key={`${i}-${idx}`}
                                        onClick={() => setActiveIndex(idx)}
                                        className={`w-[10px] h-[10px] rounded-full transition-all duration-300 ${activeIndex === idx ? "bg-[#AF9661] scale-110" : "bg-white/30"}`}
                                    />
                                ))}
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleNext}
                                className="text-[#AF9661] hover:text-[#d0b97b]"
                            >
                                <ChevronRight size={32} />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>

            {techStack && techStack.length > 0 && (
                <div className="absolute bottom-6 left-0 w-full z-0 overflow-hidden">
                    <motion.div
                        className="flex gap-0 md:gap-2 lg:gap-4 xl:gap-8 w-max mx-auto opacity-30 blur-[2.5px]"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                    >
                        {[...techStack, ...techStack].map((tech, idx) => (
                            <div
                                key={`${tech.name}-${idx}`}
                                className="flex flex-col items-center justify-center min-w-[50px]"
                            >
                                <Image
                                    src={tech.icon}
                                    alt={tech.name}
                                    width={32}
                                    height={32}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            )}

            <footer className="mt-2 text-center text-[12px] lg:text-[14px] text-gray-400 relative z-10">
                © {new Date().getFullYear()} Giselle Vargas.
            </footer>
        </motion.section>
    );
}
