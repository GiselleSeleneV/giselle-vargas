"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";


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
    const middleIndex = Math.ceil(data.length / 2); // Si es impar, izquierda tiene más

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
        <div className="relative h-screen w-full overflow-hidden bg-white flex flex-col items-center justify-center">
            <div className="w-full md:w-[90%] h-[80%] bg-[#EFEFF0] flex flex-col items-center justify-center">
                <motion.div
                    className="
                     text-center 
                     text-[clamp(20px,16vw,200px)] 
                     font-bold 
                     text-[#AF9661] 
                     opacity-10 
                     z-0 
                     select-none 
                     whitespace-nowrap 
                     leading-none 
                     mt-6
                     md:mt-0
                     md:absolute 
                     md:top-1/2 
                     lg:top-1/2 
                     xl:top-1/2 
                     md:left-1/2 
                     md:-translate-x-1/2 
                     md:-translate-y-1/2
                   "
                    animate={{ opacity: [0.1, 0.15, 0.1] }}
                    transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                >
                    {currentSection.title.split(" ").map((word, idx) => (
                        <div key={`${word}-${idx}`} className={`flex justify-center ${idx === 0 ? "-mb-5" : "mt-5"}`}>
                            {word.split("").map((char, charIdx) => (
                                <motion.span
                                    key={`${char}-${charIdx}`}
                                    className="inline-block"
                                    animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        delay: charIdx * 0.15,
                                    }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </div>
                    ))}

                </motion.div>

                {/* Línea divisoria */}
                <div className="absolute left-1/2 top-0 h-full w-0.5 bg-[#e9e6e6]" />

                <div className="flex h-full w-full z-10 justify-center items-center mt-4 md:mt-20">
                    <motion.div
                        whileHover={{ scale: 1.2, x: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center transform z-20 cursor-pointer"
                        onClick={handlePrev}
                    >
                        <ChevronLeft className="w-[40px] h-[40px] lg:w-[48px] lg:h-[48px] text-[#AF9661] hover:text-[#967c47] transition-colors duration-300" />
                    </motion.div>

                    <div className="relative w-full h-full overflow-hidden flex-1">
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: direction === "right" ? 60 : -60 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: direction === "right" ? -60 : 60 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className="absolute top-0 left-0 w-full h-full flex"
                            >

                                <div className="w-full flex flex-col h-full pr-2 md:pr-4 lg:pr-6 xl:pr-6 items-end">
                                    {leftItems.map((item, idx) => (
                                        <div key={`${item.category}-${idx}`} className="h-full w-full xl:w-[80%] flex flex-col text-end">
                                            <h3 className="text-[14px] md:text-[22px] lg:text-[24px] xl:text-[28px] text-[#0F172A] font-bold">
                                                {item.category}
                                            </h3>
                                            <div className="text-[12px] md:text-[14px] lg:text-[18px] xl:text-[20px]  text-[#0F172A] ">
                                                {item.skills.map((skill, idx) => (
                                                    <p key={`${skill}-${idx}`} className="text-end ">{skill}</p>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="w-full flex flex-col h-full pl-2 md:pl-4 lg:pl-6 xl:pl-6 items-start">
                                    {rightItems.map((item, index) => (
                                        <div key={`${item.category}-${index}`} className="w-full xl:w-[80%] h-full flex flex-col">
                                            <h3 className="text-[14px] md:text-[22px] lg:text-[24px] xl:text-[28px] text-[#0F172A]  font-bold">
                                                {item.category}
                                            </h3>
                                            <div className="text-[12px] md:text-[14px] lg:text-[18px] xl:text-[20px] text-[#0F172A]">
                                                {item.skills.map((skill, idx) => (
                                                    <p key={`${skill}-${idx}`}>{skill}</p>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <motion.div
                        whileHover={{ scale: 1.2, x: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center transform z-20 cursor-pointer"
                        onClick={handleNext}
                    >
                        <ChevronRight className="w-[40px] h-[40px] lg:w-[48px] lg:h-[48px] text-[#AF9661] hover:text-[#967c47] transition-colors duration-300" />
                    </motion.div>
                </div>

                <div className="absolute z-10 bottom-10 lg:bottom-6 xl:bottom-10 flex justify-center gap-4">
                    {Array.from({ length: totalSteps }).map((step, idx) => (
                        <button
                            key={`${step}-${idx}`}
                            onClick={() => setActiveIndex(idx)}
                            className={`w-3 h-3 rounded-full  transition-all duration-300
                ${activeIndex === idx
                                    ? "bg-[#AF9661] scale-125"
                                    : "bg-gray-500"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div >
    );
}  