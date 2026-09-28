"use client";

import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import Contact from "./Contact";
import { DownloadIcon } from "@/components/Icons";
import { useSectionRefs } from "@/store/useSectionsRefs";

export default function AboutMe() {
    const { t, i18n } = useTranslation();
    const cvHref = i18n.language.startsWith("es")
        ? "/pdf/CV_Selene_Vargas_Espanol.pdf"
        : "/pdf/Selene_Vargas_CV_English.pdf";
    const title = t("about_me.about_me");
    const { projectsRef } = useSectionRefs();

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const scrollToProjects = () => {
        projectsRef?.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative w-full flex-1 min-h-0 px-6 lg:px-8 flex flex-col items-center justify-center">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-[18%] top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-(--accent) opacity-[0.08] blur-3xl lg:h-80 lg:w-80"
            />
            <motion.div
                ref={ref}
                className="relative w-full max-w-[min(94vw,1600px)] max-h-full overflow-hidden p-1 lg:p-4 xl:p-8 short:p-1! short:lg:p-2! short:xl:p-4! flex flex-col lg:flex-row items-center gap-4 lg:gap-10 xl:gap-14 short:gap-3! short:lg:gap-4! short:xl:gap-5!"
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 1,
                            when: "beforeChildren",
                            staggerChildren: 0.15
                        }
                    }
                }}
            >
                <motion.div
                    className="relative shrink-0 w-[140px] h-[130px] md:w-[220px] md:h-[200px] lg:w-[240px] lg:h-[320px] xl:w-[300px] xl:h-[380px] short:w-[120px]! short:h-[120px]! short:md:w-[150px]! short:md:h-[150px]! short:lg:w-[160px]! short:lg:h-[190px]! short:xl:w-[180px]! short:xl:h-[210px]! rounded-2xl overflow-hidden border border-(--accent)/45 group"
                >
                    <Image
                        src="/images/photo.jpeg"
                        alt="Photo B&N"
                        fill
                        className="object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0 rounded-3xl"
                    />

                    <Image
                        src="/images/photo-color.jpeg"
                        alt="Photo color"
                        fill
                        className="object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100 rounded-3xl"
                    />
                </motion.div>

                <div className="w-full flex-1 min-w-0 min-h-0 flex flex-col text-white gap-2 lg:gap-5 short:gap-1.5! short:lg:gap-2!">
                    <h2 className="text-(--accent) text-[11px] lg:text-[13px] font-medium uppercase tracking-[0.32em]">
                        {title}
                    </h2>

                    <div className="flex flex-col gap-3">
                      <div className="my-1 h-px w-10 bg-(--accent)/55 short:hidden lg:my-2" />
                      <h1 className="display-title text-[22px] md:text-[32px] lg:text-[42px] xl:text-[52px] short:text-[22px]! short:lg:text-[30px]! short:xl:text-[34px]! leading-[0.92] text-[#F6F1EC]">
                         Giselle
                         <span className="text-(--accent)"> Vargas</span>
                      </h1>

                      <p className="text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px] short:text-[12px]! short:lg:text-[13px]! short:xl:text-[13px]! text-[#E6E1E8] leading-relaxed short:leading-snug! text-left">
                         {t("about_me.description")}
                      </p>
                    </div>

                    <div className="mt-2 lg:mt-4 short:mt-1.5! short:lg:mt-2! flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 short:gap-2! w-full">
                        <button
                            type="button"
                            onClick={scrollToProjects}
                            className="inline-flex items-center justify-center gap-2 border border-(--accent)/40 px-4 py-1.5 lg:px-5 lg:py-2 text-[11px] lg:text-[12px] uppercase tracking-[0.18em] text-[#F6F1EC] transition-colors duration-300 hover:border-(--accent) hover:text-(--accent) cursor-pointer w-fit"
                        >
                            {t("about_me.btn_projects")}
                        </button>

                        <div className="flex flex-wrap items-center gap-3 sm:justify-end">
                            <motion.a
                                href={cvHref}
                                download
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 border border-(--accent)/40 px-4 py-1.5 lg:px-5 lg:py-2 text-[11px] lg:text-[12px] uppercase tracking-[0.18em] text-[#F6F1EC] transition-colors duration-300 hover:border-(--accent) hover:text-(--accent)"
                            >
                                {t("about_me.btn_download")}
                                <DownloadIcon color="var(--accent)" />
                            </motion.a>

                            <motion.a
                                href="/pdf/certificados-certifications.pdf"
                                download
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 border border-(--accent)/40 px-4 py-1.5 lg:px-5 lg:py-2 text-[11px] lg:text-[12px] uppercase tracking-[0.18em] text-[#F6F1EC] transition-colors duration-300 hover:border-(--accent) hover:text-(--accent)"
                            >
                                {t("about_me.btn_certifications")}
                                <DownloadIcon color="var(--accent)" />
                            </motion.a>
                        </div>
                    </div>
                </div>
            </motion.div>

            <Contact />
        </section>
    );
}
