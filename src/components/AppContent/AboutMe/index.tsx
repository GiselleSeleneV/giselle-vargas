"use client";

import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Contact from "./Contact";
import { DownloadIcon } from "@/components/Icons";

export default function AboutMe() {
    const { t, i18n } = useTranslation();
    const cvHref = i18n.language.startsWith("es")
        ? "/pdf/CV_Selene_Vargas_Espanol.pdf"
        : "/pdf/Selene_Vargas_CV_English.pdf";
    const title = t("about_me.about_me");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    return (
        <section className="relative w-full flex-1 min-h-0 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-[18%] top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-(--accent) opacity-[0.08] blur-3xl lg:h-80 lg:w-80"
            />
            <motion.div
                ref={ref}
                className="relative w-full max-w-[1600px] max-h-full overflow-hidden p-1 sm:p-2 lg:p-4 xl:p-8 short:p-1! short:lg:p-2! short:xl:p-4! flex flex-col lg:flex-row items-center gap-4 lg:gap-10 xl:gap-14 short:gap-3! short:lg:gap-4! short:xl:gap-5!"
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
                    aria-label={t("about_me.visual_label")}
                    role="img"
                    className="relative isolate shrink-0 self-center w-[96%] h-[108px] sm:w-full sm:h-[120px] md:h-[145px] lg:w-[240px] lg:h-[320px] xl:w-[300px] xl:h-[380px] short:h-[104px]! short:md:h-[130px]! short:lg:w-[160px]! short:lg:h-[190px]! short:xl:w-[180px]! short:xl:h-[210px]! overflow-hidden rounded-2xl border border-(--accent)/45 bg-[#171318] shadow-[0_24px_80px_rgba(0,0,0,0.3)]"
                >
                    <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_18%,rgba(var(--accent-rgb),0.23),transparent_48%),linear-gradient(145deg,rgba(255,255,255,0.035),transparent_55%)]" />
                    <div aria-hidden="true" className="absolute inset-[10px] md:inset-4 border border-white/[0.08] rounded-xl" />
                    <div aria-hidden="true" className="absolute -right-10 top-[18%] h-32 w-32 rounded-full border border-(--accent)/25 md:h-48 md:w-48" />
                    <div aria-hidden="true" className="absolute -right-5 top-[24%] h-24 w-24 rounded-full border border-(--accent)/15 md:h-36 md:w-36" />
                    <div className="absolute inset-0 flex flex-row items-center justify-between p-5 sm:p-6 md:p-8 lg:flex-col lg:items-stretch lg:p-8 short:p-4! short:lg:p-5!">
                        <div className="flex flex-col items-start gap-2 text-[8px] md:text-[9px] uppercase tracking-[0.24em] text-white/55 lg:flex-row lg:items-center lg:justify-between">
                            <span>GV</span>
                            <span className="h-px w-8 bg-(--accent)/70 md:w-12" />
                        </div>
                        <div className="relative text-center lg:text-left">
                            <span aria-hidden="true" className="absolute -left-1 -top-5 text-[70px] md:-top-8 md:text-[112px] lg:text-[132px] short:text-[64px]! short:lg:text-[82px]! leading-none display-title text-white/[0.035]">GV</span>
                            <p className="relative display-title text-[44px] md:text-[68px] lg:text-[82px] short:text-[40px]! short:lg:text-[52px]! leading-[0.85] tracking-[-0.06em] text-[#F6F1EC]">
                                G<span className="text-(--accent)">V</span>
                            </p>
                            <div className="mx-auto mt-2 h-px w-8 bg-(--accent) md:mt-3 md:w-12 lg:mx-0 lg:mt-5" />
                            <p className="mt-1.5 text-[7px] md:text-[9px] uppercase tracking-[0.2em] text-white/65 lg:mt-2">{t("about_me.visual_caption")}</p>
                        </div>
                        <div className="flex max-w-[88px] items-center justify-end gap-2 text-right text-[7px] md:max-w-none md:text-[9px] uppercase tracking-[0.18em] text-white/45 lg:justify-start lg:text-left">
                            <span className="h-1 w-1 rounded-full bg-(--accent)" />
                            <span>{t("about_me.visual_footer")}</span>
                        </div>
                    </div>
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

                    <div className="mt-2 lg:mt-4 short:mt-1.5! short:lg:mt-2! flex w-full">
                        <div className="flex flex-wrap items-center justify-start gap-3">
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
