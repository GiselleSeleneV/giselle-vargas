"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useSectionRefs } from "@/store/useSectionsRefs";
import { ArrowUpRight } from "lucide-react";

export default function Welcome() {
  const { welcomeRef, aboutMeRef, experienceRef, projectsRef, skillsRef } =
    useSectionRefs();
  const { t } = useTranslation();

  const scrollToSection = (index: number) => {
    const refs = [
      welcomeRef,
      aboutMeRef,
      experienceRef,
      projectsRef,
      skillsRef,
    ];
    const ref = refs[index];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex h-dvh w-full items-center justify-center overflow-hidden px-6 text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[46%] h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--accent) opacity-[0.09] blur-3xl md:h-[32rem] md:w-[32rem]"
      />

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center">
        <motion.p
          className="mb-5 text-[11px] uppercase tracking-[0.42em] text-(--accent) short:mb-3! lg:mb-7 lg:text-[13px]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {t("home.greetings")}
        </motion.p>

        <motion.h1
          className="display-title text-[clamp(3.4rem,12vw,8.5rem)] leading-[0.88] text-[#F6F1EC] short:text-[clamp(2.8rem,10vw,4.5rem)]!"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: "easeOut" }}
        >
          Giselle
          <span className="block text-(--accent)">Vargas</span>
        </motion.h1>

        <motion.div
          className="my-6 h-px w-14 bg-(--accent)/55 short:my-4! lg:my-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
        />

        <motion.p
          className="text-[13px] uppercase tracking-[0.28em] text-[#B7AFA8] lg:text-[16px] short:text-[12px]!"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
        >
          {t("home.position")}
        </motion.p>

        <motion.button
          type="button"
          onClick={() => scrollToSection(3)}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          whileTap={{ scale: 0.98 }}
          className="mt-8 inline-flex cursor-pointer items-center gap-2 border border-(--accent)/40 px-5 py-2.5 text-[11px] uppercase tracking-[0.28em] text-[#F6F1EC] transition-colors duration-300 hover:border-(--accent) hover:text-(--accent) short:mt-5! lg:mt-10 lg:text-[12px]"
        >
          {t("home.cta_projects")}
          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
        </motion.button>
      </div>

      <motion.button
        type="button"
        onClick={() => scrollToSection(1)}
        className="absolute bottom-16 z-10 flex cursor-pointer flex-col items-center md:bottom-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        aria-label={t("home.button")}
      >
        <motion.span
          className="block h-12 w-px origin-top bg-(--accent)/70 short:h-8!"
          animate={{ scaleY: [0.35, 1, 0.35] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        />
      </motion.button>
    </div>
  );
}
