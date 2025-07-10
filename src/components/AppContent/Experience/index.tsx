"use client";

import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '@/components/Modal';
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { WorkExperience } from '@/types/experience'

type Project = {
    nameProject: string;
    logo?: string;
    startDate: string;
    endDate: string;
    role: string[];
    images: string[];
};


export default function Experience() {
    const { t } = useTranslation();

    const [currentIndex, setCurrentIndex] = useState(0);
    const [hasInteracted, setHasInteracted] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRole, setSelectedRole] = useState<string[] | null>(null);
    const [selectedProject, setSelectedProject] = useState("");
    const [selectedProjectImages, setSelectedProjectImages] = useState<string[] | null>(null);
    const [projectLogo, setProjectLogo] = useState<string | null>(null);

    const title = t('experience.title');
    const projectsLabel = t('experience.projects');

    const workExperience: WorkExperience[] = [
        t('experience.company_one', { returnObjects: true }) as WorkExperience,
        t('experience.company_two', { returnObjects: true }) as WorkExperience,
    ];

    const nextSlide = () => {
        setHasInteracted(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % workExperience.length);
    };

    return (
        <div className="w-full h-full flex flex-col lg:flex-row items-center overflow-hidden bg-[#0F172A] p-6">

            <div className='flex w-full items-center justify-center mt-15 md:mt-10 lg:mt-0 xl:mt-0 ml-0 md:ml-0 lg:ml-0 xl:ml-8 h-[20%] md:h-[40%] lg:h-full xl:h-full flex-col lg:top-0 lg:xl:w-[60%]'>
                <motion.div
                    className="w-full flex-col lg:xl:w-[60%] gap-10 top-16 text-[clamp(40px,8vw,140px)] font-bold text-[#AF9661] select-none z-0 leading-none"
                    animate={{ opacity: [0.1, 0.15, 0.1] }}
                    transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                >
                    {title.split(" ").map((word, wordIndex) => (
                        <div key={`${word}-${wordIndex}`} className="flex justify-center">
                            {word.split("").map((char, index) => (
                                <motion.span
                                    key={`${char}-${index}`}
                                    className="inline-block"
                                    animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
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

                <AnimatePresence mode="wait">
                    <motion.div
                        key={workExperience[currentIndex].company}
                        className="flex items-center gap-4 text-[16px] md:text-[25px] lg:text-[32px] xl:text-[40px] text-white z-10"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                        <span>{workExperience[currentIndex].company.toUpperCase()}</span>

                        {workExperience[currentIndex].companyLogo && (
                            <motion.div
                                key={workExperience[currentIndex].companyLogo}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                            >
                                <Image
                                    src={workExperience[currentIndex].companyLogo}
                                    alt="Logo"
                                    width={workExperience[currentIndex].companyLogo === "/images/coporacion-talentum-logo.png" ? 65 : 48}
                                    height={workExperience[currentIndex].companyLogo === "/images/coporacion-talentum-logo.png" ? 65 : 48}
                                    className="object-contain"
                                />
                            </motion.div>
                        )}
                    </motion.div>
                </AnimatePresence>

                <motion.p
                    className="text-[14px] md:text-[16px] lg:text-[16px] xl:text-[20px] text-[#AF9661] z-10 "
                    initial={{ opacity: 0, filter: "blur(5px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    {workExperience[currentIndex].position?.toUpperCase()}
                </motion.p>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={hasInteracted ? { opacity: 0, y: -40 } : false}
                    animate={{ opacity: 1, y: 0 }}
                    exit={hasInteracted ? { opacity: 0, y: 40 } : undefined}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    className="relative gap-2 flex w-full h-full flex-col text-end mr-0 md:mr-26 lg:mr-10 xl:mr-12 mt-10 lg:mt-0 lg:justify-center"
                >
                    <p className="flex justify-end w-full font-bold text-[24px] md:text-[32px] lg:text-[42px] xl:text-[52px]  text-[#AF9661] ">
                        {projectsLabel}
                    </p>

                    {workExperience[currentIndex].projects.map((project: Project, idx: number) => (
                        <div key={`${project.nameProject}-${idx}`} className="mb-4">
                            <button
                                onClick={() => {
                                    setSelectedProject(project.nameProject);
                                    setSelectedRole(project.role);
                                    setSelectedProjectImages(project.images);
                                    setProjectLogo(project.logo ?? "");
                                    setIsModalOpen(true);
                                }}
                                className="text-[14px] md:text-[20px] lg:text-[24px] xl:text-[32px] text-right text-white font-semibold hover:text-[#334155] transition-colors duration-500 cursor-pointer"
                            >
                                {project.nameProject}
                            </button>
                            <p className="text-[12px] text-[#8b8b8d]">
                                {project.startDate} - {project.endDate}
                            </p>
                        </div>
                    ))}

                    <div className="absolute bottom-0 md:bottom-22 lg:bottom-3 xl:bottom-24 left-1/2 md:left-[80%] lg:left-[60%] xl:left-[70%] transform -translate-x-1/2 z-20">
                        <motion.div
                            className="flex flex-col items-center text-[#AF9661] cursor-pointer z-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: [20, 0, 20] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                        >
                            <ChevronDown onClick={nextSlide} className="w-14 h-14 drop-shadow-[0_0_6px_#AF9661] transition-transform hover:scale-110" />
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>

            <Modal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                workExperience={workExperience}
                currentIndex={currentIndex}
                selectedProject={selectedProject}
                selectedRole={selectedRole}
                selectedProjectImages={selectedProjectImages}
                projectLogo={projectLogo}
            />
        </div>
    );
}
