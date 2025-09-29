"use client";

import TechStack from "@/components/TechStack/TechStack";
import { ProjectsType } from "@/types/projects";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

type ProjectsProps = {
    projectsData: ProjectsType[];
};



export default function Projects({ projectsData }: ProjectsProps) {

    const { t } = useTranslation();

    return (
        <motion.section
            id="projects"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className=" flex-1 w-full lg:max-w-7xl px-6 lg:px-14"
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center "
            >
                <h2 className="text-center text-[24px] md:text-[38px] lg:text-[48px] xl:text-[68px] font-extrabold text-[#AF9661] mb-4 md:mb-6 lg:mb-8 xl:mb-10">
                    {t("projects.title")}
                </h2>
            </motion.div>


            {/* Grid responsive */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-6 xl:gap-16 min-h-[330px]">
                {projectsData.map((project, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="relative bg-white/5 border border-white/10 backdrop-blur-md shadow-lg rounded-2xl  flex justify-between transition-all px-3 py-2 md:px-4 md:py-4 hover:shadow-[#AF9661]/30 hover:scale-[1.03]"
                    >
                        <div className="flex flex-col w-full lg:w-[66%] justify-between">
                            {/* Título */}
                            <h3 className="text-[14px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-bold text-white mb-2">
                                {project.title}
                            </h3>

                            {/* Descripción */}
                            <p className="text-gray-300 text-[12px] md:text-[12px] lg:text-[14px] xl:text-[16px] text-justify mb-4">
                                {project.description}
                            </p>

                            {/* Botón */}

                            <div className="flex flex-col">
                                <div>
                                    <TechStack techStack={project.techStack} />
                                </div>
                                {project.link ? (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-2 text-center text-[12px] md:text-[12px] lg:text-[14px] xl:text-[16px] bg-[#AF9661] text-black font-semibold py-1 px-1 lg:py-2 lg:px-4 rounded-lg hover:bg-[#d0b97b] transition-all"
                                    >
                                        Visit
                                    </a>
                                ) : (
                                    <div className="mt-2 text-center text-[12px] md:text-[12px] lg:text-[14px] xl:text-[16px] bg-gray-600/40 text-gray-400 font-semibold py-1 px-1 lg:py-2 lg:px-4 rounded-lg cursor-not-allowed">
                                        Visit 🔒
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Imagen */}
                        <div className="hidden lg:block w-[30%] h-full rounded-xl bg-cover bg-center" style={{ backgroundImage: `url(/images/photo-projects.png)` }} />


                    </motion.div>
                ))}
            </div>

        </motion.section>
    );
}