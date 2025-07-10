"use client"
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { motion } from "framer-motion";
import Contact from "./Contact";

export default function AboutMe() {
    const { t } = useTranslation();
    const title = t("about_me.about_me");
    return (
        <div className="w-full h-full bg-white flex flex-col text-center overflow-y-auto 
        items-center md:items-center lg:items-stretch xl:items-stretch">
            <div className="w-full">
                <Contact />
            </div>

            <div className="relative flex flex-col w-full md:w-[95%] lg:w-[75%] xl:w-[80%] h-full ml-0 lg:ml-[80px] xl:ml-[100px] px-6 py-6 z-10 text-[#0F172A] bg-[#EFEFF0]" >

                <div className="relative w-full p-2 md:p-4 sm:block flex md:block lg:hidden xl:hidden  border-1 border-[#AF9661]">
                    <div className="w-[110px] h-[120px] md:w-[170px] md:h-[180px] relative overflow-visible">
                        <Image
                            src="/images/photo-three.jpeg"
                            alt="Foto de perfil"
                            fill
                            className="absolute -right-6 brightness-75 grayscale transition-all duration-500 object-cover"
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-center sm:w-[100%] md:w-[100%] lg:w-[83%] xl:w-[75%] relative text-left mt-6 lg:mt-15  xl:mt-18">

                    <motion.div
                        className="absolute flex flex-row top-0 md:top-[-180px] lg:top-0 xl:top-0 left-0 md:left-48 lg:left-0 text-[46px] md:text-[88px] lg:text-[112px] xl:text-[140px]  font-bold text-[#0F172A] md:text-[#AF9661] opacity-10 select-none z-0 leading-none gap-4 md:gap-10 lg:gap-8 xl:gap-18"
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
                        className="relative mt-5 md:mt-[-150px] lg:mt-8 xl:mt-12 ml-0 md:ml-50 lg:ml-0 xl:ml-0 font-bold text-[22px] md:text-[40px] lg:text-[50px] xl:text-[60px] text-[#0F172A] z-10"
                        initial={{ opacity: 0, filter: "blur(5px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        {title}
                    </motion.p>

                    <p className="text-justify text-[#0F172A] mr-0 md:mr-0 lg:mr-10 xl:mr-10 text-[12px] md:text-[18px] lg:text-[20px] xl:text-[24px] mt-2 md:mt-22 lg:mt-10 xl:mt-6 whitespace-pre-line z-10">
                        {t("about_me.description")}
                    </p>
                </div>


                <div className="sm:hidden md:hidden lg:block xl:block absolute lg:top-30 xl:top-34 lg:right-[-130px] xl:right-[-152px] lg:w-[250px] xl:w-[340px] lg:h-[350px] xl:h-[450px] border border-[#AF9661] overflow-visible">

                    <motion.div
                        initial={{ scale: 1.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="absolute left-[-40px] top-[-42px] lg:w-[250px] xl:w-[340px] lg:h-[350px] xl:h-[450px]"
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
