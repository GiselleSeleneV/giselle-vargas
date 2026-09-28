"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "@/components/AppContent/Experience/Modal";
import Image from "next/image";
import { WorkExperience } from "@/types/experience";

interface ExperienceTalentumProps {
    readonly experience: WorkExperience;
    readonly index: number;
}

export default function Experiences({ experience, index }: ExperienceTalentumProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRole, setSelectedRole] = useState<string[] | null>(null);
    const [selectedProject, setSelectedProject] = useState("");
    const [selectedProjectImages, setSelectedProjectImages] = useState<string[] | null>(null);
    const [projectLogo, setProjectLogo] = useState<string | null>(null);

    const modalProps = {
        isModalOpen,
        setIsModalOpen,
        workExperience: [experience],
        currentIndex: 0,
        selectedProject,
        selectedRole,
        selectedProjectImages,
        projectLogo,
    };
    return (
        <section className="relative w-full mx-auto flex-1 min-h-0 lg:max-w-[min(94vw,1600px)] px-6 lg:px-8 flex flex-col overflow-hidden">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-16 h-56 w-56 -translate-x-1/2 rounded-full bg-(--accent) opacity-[0.08] blur-3xl"
            />
            <div className="relative w-full flex-1 min-h-0 flex flex-col items-center justify-center">
                <div className="absolute inset-y-0 left-1/2 w-[0.5px] bg-(--accent)/40 rounded-full transform -translate-x-1/2 z-0" />

                <div className="w-full flex flex-col items-center z-10">

                    <div className="absolute w-1.5 h-1.5 lg:w-2 lg:h-2 short:w-1.5! short:h-1.5! bg-(--accent) rounded-full z-10 -top-3" />

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        {experience.company_logo && (
                            <div className={`relative left-1/2 transform -translate-x-1/2 mb-1 ${experience.company_logo === "/images/deft-logo.jpg"
                                ? "w-[40px] h-[40px] md:w-[60px] md:h-[60px] short:w-[36px]! short:h-[36px]! short:md:w-[44px]! short:md:h-[44px]!"
                                : "w-[60px] h-[60px] md:w-[80px] md:h-[80px] short:w-[44px]! short:h-[44px]! short:md:w-[52px]! short:md:h-[52px]!"
                                }`}>
                                <Image
                                    src={experience.company_logo}
                                    alt="Logo empresa"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        )}
                        <p className="mb-2 text-[11px] uppercase text-(--accent)">
                            <span className="inline-block tracking-[0.42em] -mr-[0.42em]">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                        </p>
                        <h3 className="display-title text-[#F6F1EC] text-[22px] md:text-[28px] lg:text-[36px] xl:text-[42px] short:text-[20px]! short:lg:text-[26px]! short:xl:text-[30px]! leading-none">{experience.company}</h3>
                        <p className="text-[#B7AFA8] text-[11px] md:text-[13px] lg:text-[15px] xl:text-[16px] short:text-[11px]! short:lg:text-[13px]! mt-2 uppercase tracking-[0.22em]">{experience.position}</p>
                    </motion.div>

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 lg:gap-6 xl:gap-10 short:gap-2! short:md:gap-2.5! short:lg:gap-3! short:xl:gap-3! mt-6 xl:mt-14 short:mt-3! short:xl:mt-4! mb-2">
                        {experience.projects.map((project, i) => (
                            <motion.div
                                key={project.nameProject}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className={`relative group min-h-[80px] lg:min-h-[132px] xl:min-h-[150px] short:min-h-[64px]! short:lg:min-h-[92px]! short:xl:min-h-[100px]! p-3 lg:p-5 xl:p-6 short:p-2! short:lg:p-3! short:xl:p-3! border border-white/10 bg-white/[0.02] transition-colors duration-300 hover:border-(--accent)/40 cursor-pointer overflow-hidden ${i % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
                                    }`}
                                onClick={() => {
                                    setSelectedProject(project.nameProject);
                                    setSelectedRole(project.role);
                                    setSelectedProjectImages(project.images);
                                    setProjectLogo(project.logo ?? "");
                                    setIsModalOpen(true);
                                }}
                            >
                                <h4 className="display-title text-[#F6F1EC] text-[15px] md:text-[17px] lg:text-[20px] xl:text-[22px] short:text-[14px]! short:lg:text-[16px]! short:xl:text-[17px]! group-hover:text-(--accent) transition-colors pr-[5.5rem] lg:pr-[8.5rem] short:pr-[4.5rem]! short:lg:pr-[6rem]!">
                                    {project.nameProject}
                                </h4>
                                <p className="flex text-[11px] md:text-[12px] lg:text-[14px] text-[#C8C2CC] mt-1 pr-[5.5rem] lg:pr-[8.5rem] short:pr-[4.5rem]! short:lg:pr-[6rem]!">
                                    {project.startDate}
                                    <span className="mx-1">-</span>
                                    <span
                                        className={
                                            project.endDate === "Present" || project.endDate === "Presente"
                                                ? "text-(--accent)"
                                                : "text-[#C8C2CC]"
                                        }
                                    >
                                        {project.endDate}
                                    </span>
                                </p>

                                {project.logo && (
                                    <div
                                        className={`absolute right-2 top-1/2 transform -translate-y-1/2  lg:opacity-40 lg:group-hover:opacity-100 lg:transition-opacity ${project.logo === "/images/projects/SIGP/logo.jpeg"
                                            ? "w-[90px] h-[90px] lg:w-[130px] lg:h-[130px] xl:w-[140px] xl:h-[140px] short:w-[52px]! short:h-[52px]! short:lg:w-[72px]! short:lg:h-[72px]! short:xl:w-[80px]! short:xl:h-[80px]!"
                                            : "w-[45px] h-[45px] lg:w-[70px] lg:h-[70px] xl:w-[90px] xl:h-[90px] short:w-[36px]! short:h-[36px]! short:lg:w-[44px]! short:lg:h-[44px]! short:xl:w-[48px]! short:xl:h-[48px]!"
                                            }`}
                                    >
                                        <Image
                                            src={project.logo}
                                            alt="Project logo"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <Modal {...modalProps} />
        </section>
    );
}
