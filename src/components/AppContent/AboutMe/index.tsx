"use client";

import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import Contact from "./Contact";

export default function AboutMe() {
    const { t } = useTranslation();
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
        <section className="w-full min-h-screen bg-[#0F172A] px-6 lg:px-16 py-10 flex flex-col items-center justify-center">
            <motion.div
                ref={ref}
                className="relative max-w-6xl w-full rounded-xl bg-white/5 border border-white/10 shadow-lg  p-4 lg:p-8 xl:p-16 flex flex-col lg:flex-row items-center gap-4 lg:gap-8 xl:gap-12"
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0, scale: 0.95 },
                    visible: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                            duration: 1,
                            when: "beforeChildren",
                            staggerChildren: 0.15
                        }
                    }
                }}
            >
                <motion.div
                    className="relative w-[140px] h-[130px] md:w-[220px] md:h-[200px] lg:w-[240px] lg:h-[320px] xl:w-[300px] xl:h-[380px] rounded-3xl overflow-hidden border-1 lg:border-2 border-[#AF9661] shadow-[0_10px_40px_rgba(175,150,97,0.3)] hover:scale-105 transition-transform duration-500 group"
                    whileHover={{ rotate: 2 }}
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

                <div className="w-full lg:max-w-xl text-white flex flex-col gap-2 lg:gap-5">
                    <h2 className="text-[#AF9661] text-[12px] lg:text-[14px] font-medium uppercase tracking-widest">
                        {title}
                    </h2>

                    <h1 className="text-[16px] md:text-[28px] lg:text-[38px] xl:text-[48px] font-bold leading-tight">
                        Giselle Vargas
                    </h1>

                    <p className="text-[12px] md:text-[12px] lg:text-[14px] xl:text-[16px] md:text-lg text-gray-300 leading-relaxed text-justify">
                        {t("about_me.description")}
                    </p>

                    <motion.a
                        href="/pdf/CV-giselle-vargas-benitez.pdf"
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 lg:mt-4 inline-block self-start border border-[#AF9661] px-4 py-1 lg:px-5 lg:py-3 rounded-full text-[#AF9661] text-[12px] md:text-[12px] lg:text-[14px] xl:text-[16px] transition-transform duration-300"
                        whileHover={{ scale: 1.05 }}
                    >
                        {t("about_me.btn_download")}
                    </motion.a>
                </div>
            </motion.div>

            <Contact />
        </section>
    );
}
