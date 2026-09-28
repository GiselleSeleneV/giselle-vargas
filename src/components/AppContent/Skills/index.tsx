"use client";

import { useRef, useState } from "react";
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
    setActiveIndex((prev) => (prev + 1) % totalSteps);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalSteps) % totalSteps);
  };

  const swipeStart = useRef<{ x: number; y: number } | null>(null);

  const onTouchStart = (event: React.TouchEvent) => {
    const touch = event.changedTouches[0];
    swipeStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const onTouchEnd = (event: React.TouchEvent) => {
    if (!swipeStart.current) return;
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - swipeStart.current.x;
    const deltaY = touch.clientY - swipeStart.current.y;
    swipeStart.current = null;

    if (Math.abs(deltaX) < 48 || Math.abs(deltaX) <= Math.abs(deltaY)) return;
    if (deltaX < 0) handleNext();
    else handlePrev();
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full flex-1 min-h-0 overflow-hidden px-6 flex flex-col justify-between"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-(--accent) opacity-[0.09] blur-3xl"
      />
      <div
        className="relative z-10 w-full lg:max-w-[min(94vw,1600px)] mx-auto flex flex-col items-center justify-center flex-grow touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onTouchCancel={() => {
          swipeStart.current = null;
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeIndex}
            className="mb-4 md:mb-6 lg:mb-8 short:mb-3! flex flex-col items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <p className="mb-2 text-[11px] uppercase tracking-[0.42em] text-(--accent)">
              {String(activeIndex + 1).padStart(2, "0")}
            </p>
            <h2 className="display-title text-center text-[28px] md:text-[40px] lg:text-[48px] xl:text-[56px] short:text-[26px]! short:lg:text-[34px]! short:xl:text-[40px]! leading-[0.92] text-[#F6F1EC]">
              {currentSection.title}
            </h2>
            <div className="mt-3 h-px w-12 bg-(--accent)/55" />
          </motion.div>
        </AnimatePresence>

        <div className="relative w-full">
          <div className="md:flex items-center justify-between w-full md:gap-8 md:px-4 lg:gap-14 lg:px-8 xl:gap-20 xl:px-12 short:md:gap-6! short:lg:gap-8! short:xl:gap-10!">
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={handlePrev}
              className="hidden md:block z-10 shrink-0 text-(--accent)/80 hover:text-(--accent) cursor-pointer transition-colors"
            >
              <ChevronLeft size={28} strokeWidth={1.5} />
            </motion.button>

            <div className="relative min-w-0 flex-1">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16 xl:gap-x-20 short:gap-x-6! min-h-0"
                >
                  {[leftItems, rightItems].map((side, sideIndex) => (
                    <div
                      key={sideIndex === 0 ? "left" : "right"}
                      className="w-full"
                    >
                      {side.map((item, idx) => (
                        <div
                          key={`${item.category}-${idx}`}
                          className="border-b border-white/10 py-2.5 md:py-3 lg:py-4 short:py-1.5! short:lg:py-2!"
                        >
                          <h3 className="text-[11px] md:text-[12px] lg:text-[13px] uppercase tracking-[0.2em] text-(--accent)">
                            {item.category}
                          </h3>
                          <p className="mt-1 text-[12px] md:text-[13px] lg:text-[15px] short:text-[12px]! leading-snug text-[#F6F1EC]">
                            {item.skills.join(" ")}
                          </p>
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
              className="hidden md:block z-10 shrink-0 text-(--accent)/80 hover:text-(--accent) cursor-pointer transition-colors"
            >
              <ChevronRight size={28} strokeWidth={1.5} />
            </motion.button>
          </div>

          <div className="flex flex-col items-center md:hidden mt-8 w-full">
            <div className="flex items-center justify-center gap-10">
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

      <footer className="mt-2 text-center text-[11px] lg:text-[12px] uppercase tracking-[0.22em] text-[#B7AFA8] relative z-10">
        © {new Date().getFullYear()} Giselle Vargas.
      </footer>
    </motion.section>
  );
}
