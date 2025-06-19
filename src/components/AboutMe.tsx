"use client"
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { motion } from "framer-motion";
import Contact from "./Contact";

export default function AboutMe() {
    const { t } = useTranslation();
    const title = t("about_me.about_me");
    return (
        <div className="w-full h-full bg-white   flex flex-col text-center overflow-y-auto">
            {/* 
bg-[url('/images/bg-about-me.png')] bg-cover */}
            <div className="w-full">
                <Contact />
            </div>

            <div className="relative flex flex-col sl:w-[95%] md:w-[94%] lg:w-[75%] xl:w-[75%] h-full sm:ml-0 md:ml-0 lg:ml-[80px] xl:ml-[100px] px-10 py-2 z-10 text-[#0F172A]  bg-[#EFEFF0]" >

                <div className="relative w-full p-4 sm:block flex md:block lg:hidden xl:hidden  border-1 border-[#AF9661]">
                    <div className="w-[170px] h-[180px] relative overflow-visible">
                        <Image
                            src="/images/photo-three.jpeg"
                            alt="Foto de perfil"
                            fill
                            className="absolute -right-6 brightness-75 grayscale transition-all duration-500 object-cover"
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-center sm:w-[100%] md:w-[100%] lg:w-[83%] xl:w-[83%] relative text-left">

                    <motion.div
                        className="absolute flex flex-col sm:flex-row top-2 md:top-[-158px] lg:top-2 xl:top-2 left-0 md:left-48 lg:left-0 xl:left-0 text-[clamp(60px,10vw,140px)] font-bold text-[#AF9661] opacity-10 select-none z-0 leading-none sm:gap-6 md:gap-10 lg:gap-8 xl:gap-18"
                        animate={{ opacity: [0.1, 0.15, 0.1] }}
                        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                    >
                        {title.split(" ").map((word, wordIndex) => (
                            <div key={wordIndex} className="flex">
                                {word.split("").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        className="inline-block"
                                        animate={{
                                            y: [0, -10, 0],
                                            scale: [1, 1.05, 1],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                            delay: index * 0.1,
                                        }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </div>
                        ))}
                    </motion.div>

                    <motion.p
                        className="relative mt-10 md:mt-[-140px] lg:mt-10 xl:mt-10 ml-0 md:ml-50 lg:ml-0 xl:ml-0 font-bold text-[46px] text-[#0F172A] z-10"
                        initial={{ opacity: 0, filter: "blur(5px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        {title}
                    </motion.p>

                    <p className="text-justify text-[#0F172A] mr-0 md:mr-0 lg:mr-10 xl:mr-10 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] sm:mt-10 md:mt-22 lg:mt-10 xl:mt-10 whitespace-pre-line z-10">
                        {t("about_me.description")}
                    </p>
                </div>


                <div className="sm:hidden md:hidden lg:block xl:block absolute lg:top-34 xl:top-34 lg:right-[-130px] xl:right-[-172px] lg:w-[250px] xl:w-[330px] lg:h-[350px] xl:h-[440px] border border-[#AF9661] overflow-visible">

                    <motion.div
                        initial={{ scale: 1.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="absolute left-[-40px] top-[-42px] lg:w-[250px] xl:w-[330px] lg:h-[350px] xl:h-[440px]"
                    >
                        <Image
                            src="/images/photo-three.jpeg"
                            layout="fill"
                            objectFit="cover"
                            alt="Foto de perfil"
                            className="brightness-75 grayscale transition-all duration-500"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
