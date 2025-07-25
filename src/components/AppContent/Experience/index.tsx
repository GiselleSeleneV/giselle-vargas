"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "@/components/AppContent/Experience/Modal";
import Image from "next/image";
import { WorkExperience } from "@/types/experience";

interface ExperienceTalentumProps {
    readonly experience: WorkExperience;
}

export default function Experiences({ experience }: ExperienceTalentumProps) {
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
        <section className="relative w-full min-h-screen bg-[#0F172A] px-6 lg:px-24 overflow-y-auto snap-start">
            <div className="w-full h-[100vh] flex flex-col items-center">
                <div className="absolute top-0 left-1/2 w-[0.5px] h-full bg-[#AF9661]/40 rounded-full transform -translate-x-1/2 z-0" />

                <div className="w-full flex flex-col items-center z-10">

                    <div className="absolute w-2 h-2 lg:w-4 lg:h-4 bg-[#AF9661] rounded-full border-1 lg:border-2 border-white shadow-lg z-10 top-14 lg:top-12" />

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mt-24"
                    >
                        {experience.company_logo && (
                            <div className={`relative top-1 lg:top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${experience.company_logo === "/images/deft-logo.jpg"
                                ? "w-[40px] h-[40px] md:w-[60px] md:h-[60px]"
                                : "w-[60px] h-[60px] md:w-[80px] md:h-[80px]"
                                }`}>
                                <Image
                                    src={experience.company_logo}
                                    alt="Logo empresa"
                                    fill
                                    className="object-contain rounded-lg shadow-md"
                                />
                            </div>
                        )}
                        <h3 className="text-[#AF9661] text-[16px] md:text-[18px] lg:text-[24px] xl:text-[28px] font-semibold uppercase">{experience.company}</h3>
                        <p className="text-white text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] mt-1">{experience.position}</p>
                    </motion.div>

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 lg:gap-6 xl:gap-10 mt-6 xl:mt-14 mb-2">
                        {experience.projects.map((project, i) => (
                            <motion.div
                                key={project.nameProject}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className={`relative group p-2 lg:p-4 xl:p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg transition-transform hover:scale-[1.03] cursor-pointer ${i % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
                                    }`}
                                onClick={() => {
                                    setSelectedProject(project.nameProject);
                                    setSelectedRole(project.role);
                                    setSelectedProjectImages(project.images);
                                    setProjectLogo(project.logo ?? "");
                                    setIsModalOpen(true);
                                }}
                            >
                                <h4 className="text-white text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-semibold group-hover:text-[#AF9661] transition-colors">
                                    {project.nameProject}
                                </h4>
                                <p className="text-[11px] md:text-[12px] lg:text-[14px] text-gray-400 mt-1">
                                    {project.startDate} – {project.endDate}
                                </p>

                                {project.logo && (
                                    <div
                                        className={`absolute right-2 top-1/2 transform -translate-y-1/2 opacity-40 group-hover:opacity-100 transition-opacity ${project.logo === "/images/projects/SIGP/logo.jpeg"
                                            ? "w-[90px] h-[90px] lg:w-[130px] lg:h-[130px] xl:w-[140px] xl:h-[140px]"
                                            : "w-[45px] h-[45px] lg:w-[70px] lg:h-[70px] xl:w-[90px] xl:h-[90px]"
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
