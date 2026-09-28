"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { techStack } from "./TechStackData";
import TechStack from "@/components/TechStack/TechStack";

export type TechItem = {
  name: string;
  icon: string;
};

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
      className="relative w-full flex-1 min-h-0 overflow-hidden px-6 flex flex-col justify-between"
    >
      <div className="w-full lg:max-w-[min(94vw,1600px)] mx-auto flex flex-col items-center justify-center flex-grow">
        <AnimatePresence mode="wait" initial={false}>
          <motion.h2
            key={activeIndex}
            className="display-title flex text-center text-[28px] md:text-[40px] lg:text-[48px] xl:text-[56px] short:text-[28px]! short:lg:text-[34px]! short:xl:text-[40px]! text-(--accent) mb-4 md:mb-6 lg:mb-8 xl:mb-10 short:mb-3! short:lg:mb-4! short:xl:mb-4!"
            initial={{ opacity: 0, x: direction === "right" ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === "right" ? -50 : 50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {currentSection.title}
          </motion.h2>
        </AnimatePresence>

        <div className="relative w-full">
          <div className="md:flex items-center justify-between w-full ">
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={handlePrev}
              className="hidden md:block z-10 text-(--accent)/80 hover:text-(--accent) cursor-pointer pl-0 lg:pl-4 transition-colors"
            >
              <ChevronLeft size={28} strokeWidth={1.5} />
            </motion.button>

            <div className="relative flex-1 ">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: direction === "right" ? 80 : -80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction === "right" ? -80 : 80 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-6 xl:gap-16 short:gap-2.5! short:md:gap-3! short:xl:gap-6! min-h-0"
                >
                  {[leftItems, rightItems].map((side, sideIndex) => (
                    <div
                      key={sideIndex === 0 ? "left" : "right"}
                      className="space-y-4 xl:space-y-8 short:space-y-2.5! short:xl:space-y-3! w-full"
                    >
                      {side.map((item, idx) => (
                        <div
                          key={`${item.category}-${idx}`}
                          className="bg-white/5 border border-white/10 px-3 py-2 md:px-4 md:py-4 short:py-2! short:md:py-2.5! rounded-xl backdrop-blur-md md:h-[116px] lg:h-[110px] xl:h-[130px] short:md:h-[92px]! short:lg:h-[96px]! short:xl:h-[100px]! flex flex-col overflow-hidden w-full"
                        >
                          <h3 className="flex text-[14px] md:text-[18px] lg:text-[20px] xl:text-[24px] short:text-[14px]! short:lg:text-[16px]! short:xl:text-[18px]! font-bold md:text-white mb-2 short:mb-1!">
                            {item.category}
                          </h3>
                          <ul className="space-y-1 text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px] short:lg:text-[13px]! short:xl:text-[14px]! text-[#E6E1E8] overflow-hidden">
                            {item.skills.map((skill, idx) => (
                              <li
                                key={`${skill}-${idx}`}
                                className="flex before:content-['•'] before:mr-2 before:text-(--accent)"
                              >
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
              whileTap={{ scale: 0.96 }}
              onClick={handleNext}
              className="hidden md:block z-10 text-(--accent)/80 hover:text-(--accent) cursor-pointer pr-0 lg:pr-4 transition-colors"
            >
              <ChevronRight size={28} strokeWidth={1.5} />
            </motion.button>
          </div>

          <div className="flex flex-col items-center md:hidden mt-2 w-full">
            <div className="flex items-center justify-center gap-6 mt-6">
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={handlePrev}
                className="text-(--accent)/80 hover:text-(--accent) transition-colors"
              >
                <ChevronLeft size={26} strokeWidth={1.5} />
              </motion.button>

              <div className="flex gap-2">
                {Array.from({ length: totalSteps }).map((i, idx) => (
                  <button
                    key={`${i}-${idx}`}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${activeIndex === idx ? "bg-(--accent)" : "bg-white/30"}`}
                  />
                ))}
              </div>

              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={handleNext}
                className="text-(--accent)/80 hover:text-(--accent) transition-colors"
              >
                <ChevronRight size={26} strokeWidth={1.5} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <TechStack techStack={techStack} />

      <footer className="mt-2 text-center text-[12px] lg:text-[14px] text-[#C8C2CC] relative z-10">
        © {new Date().getFullYear()} Giselle Vargas.
      </footer>
    </motion.section>
  );
}
