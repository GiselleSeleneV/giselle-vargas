"use client"

import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '@/components/Modal';
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Experience() {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hasInteracted, setHasInteracted] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRole, setSelectedRole] = useState<string[] | null>(null);
    const [selectedProject, setSelectedProject] = useState("");
    const title = "EXPERIENCIA LABORAL"

    const workExperience = [
        {
            company: t('experience.company_one.company'),
            companyLogo: "/images/coporacion-talentum-logo.png",
            startDate: t('experience.company_one.startDate'),
            endDate: t('experience.company_one.endDate'),
            city: t('experience.company_one.city'),
            position: t('experience.company_one.position'),
            role: t('experience.company_one.role'),
            projects: [
                {
                    nameProject: "Soporte de primer nivel para el SIGP",
                    startDate: "Sep 2024",
                    endDate: "Dic 2024",
                    role: [
                        "Asistir a los usuarios ante inquietudes, incidencias o dificultades.",
                        "Clasificación de los casos según su complejidad en soporte de nivel 1, 2 o 3.",
                        "Dar una respuesta oportuna y eficaz, mejorando significativamente la experiencia de las instituciones educativas con el sistema."
                    ]
                },
                {
                    nameProject: "Aulas Quindío",
                    startDate: "Julio 2024",
                    endDate: "Dic 2024",
                    role: [
                        "Desarrollo de componentes reutilizables y escalables.",
                        "Integración de APIs mediante GraphQL y optimización del rendimiento.",
                        "Elaboración de la documentación oficial del proyecto, detallando procesos y guías de uso técnico para el equipo y los usuarios."
                    ]
                },
                {
                    nameProject: "Aulas STEAM Regional",
                    startDate: "Feb 2024",
                    endDate: "Jul 2024",
                    role: [
                        "Desarrollo de interfaces responsivas y accesibles.",
                        "Integración de servicios REST para el registro y monitoreo de datos académicos.",
                        "Construcción de componentes reutilizables y dinámicos orientados a la visualización de resultados educativos.",
                        "Optimización del rendimiento y experiencia del usuario en distintos dispositivos y contextos de uso.",
                        "Elaboración de documentación oficial del proyecto, incluyendo manuales técnicos y guías de usuario.",
                        "Preparación y realización de presentaciones funcionales del sistema a los clientes."
                    ]
                },
                {
                    nameProject: "Pertenezco",
                    startDate: "Ago 2023",
                    endDate: "Feb 2024",
                    role: [
                        "Desarrollo de interfaces dinámicas y responsivas.",
                        "Implementación de flujos de autenticación, registro de usuarios y gestión de contenidos educativos (cartillas,módulos y guías)",
                        "Creación y optimización de componentes reutilizables, asegurando una experiencia de usuario intuitiva y consistente.",
                        "Optimización del rendimiento de la aplicación, asegurando tiempos de carga rápidos y una navegación fluida."
                    ]
                },
            ],
            references: [
                { name: "JUAN PABLO VICTORIA", company: "Corporación Talentum.", number: "234324", email: "juan@email.com" },
                { name: "CARLOS MENDOZA", company: "Corporación Talentum.", number: "987654", email: "carlos@email.com" }
            ]
        },
        {
            company: t('experience.company_two.company'),
            companyLogo: "/images/deft-logo.jpg",
            startDate: t('experience.company_two.startDate'),
            endDate: t('experience.company_two.endDate'),
            city: t('experience.company_two.city'),
            position: t('experience.company_two.position'),
            role: t('experience.company_two.role'),
            projects: [
                {
                    nameProject: "Placa y Cédula",
                    startDate: "Ene 2021",
                    endDate: "Jul 2022",
                    role: [
                        "Facilitar el acceso a la información del pico y cédula durante la pandemia",
                        "Implementar una interfaz dinámica, intuitiva y adaptable a distintos dispositivos.",
                        "Desarrollo de componentes interactivos."
                    ]
                }
            ],
            references: [
                { name: "MARIO PAYAN", company: "Deft Soluciones Tecnologicas.", number: "234324", email: "mario@email.com" },
                { name: "ANA GÓMEZ", company: "Deft Soluciones Tecnologicas.", number: "456789", email: "ana@email.com" }
            ]
        }
    ];

    const nextSlide = () => {
        setHasInteracted(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % workExperience.length);
    };


    return (
        <div className="flex  w-full h-full  overflow-hidden bg-[#0F172A]">

            <div className=' flex flex-col justify-center items-center w-[60%] h-full'>

                <motion.div
                    className="w-full items-center gap-10  top-16 text-[140px] font-bold text-[#AF9661] select-none z-0 leading-none "
                    animate={{ opacity: [0.1, 0.15, 0.1] }}
                    transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                >
                    {title.split(" ").map((word, wordIndex) => (
                        <div key={wordIndex} className="flex justify-center">
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

                <AnimatePresence mode="wait">
                    <motion.div
                        key={workExperience[currentIndex].company}
                        className="flex items-center gap-4 text-[40px] text-white z-10"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                        <span>{workExperience[currentIndex].company.toUpperCase()}</span>

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
                    </motion.div>
                </AnimatePresence>

                <motion.p
                    className="text-[20px] text-[#AF9661] z-10"
                    initial={{ opacity: 0, filter: "blur(5px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    {workExperience[currentIndex].position.toUpperCase()}
                </motion.p>
            </div>

            <div className="flex items-center w-full overflow-hidden ">
                <div className='w-full flex justify-center'>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={hasInteracted ? { opacity: 0, y: -40 } : false}
                            animate={{ opacity: 1, y: 0 }}
                            exit={hasInteracted ? { opacity: 0, y: 40 } : undefined}
                            transition={{ duration: 0.6, ease: 'easeInOut' }}
                            className="flex flex-col"
                        >

                            <div className="flex w-[554px] h-[530px] flex-col items-end">
                                <div className="flex flex-col gap-4 text-end">
                                    <p className="w-full font-bold text-end text-[52px]  text-[#AF9661] ">
                                        {t('experience.projects')}
                                    </p>

                                    {workExperience[currentIndex].projects.map((project, idx) => (
                                        <div key={idx} className="mb-4">
                                            <button onClick={() => {
                                                setSelectedProject(project.nameProject);
                                                setSelectedRole(project.role);
                                                setIsModalOpen(true);
                                            }} className="text-[32px] text-right text-white font-semibold hover:text-[#334155] transition-colors duration-500 cursor-pointer">
                                                {project.nameProject}
                                            </button>
                                            <p className="text-[14px] text-[#8b8b8d]">
                                                {project.startDate} - {project.endDate}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                            </div>
                            <div className="flex w-full z-10 items-center justify-center gap-4 mt-6">

                                <motion.div
                                    className=" bottom-12 flex flex-col items-center text-[#AF9661] cursor-pointer z-10"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: [20, 0, 20] }}
                                    transition={{ repeat: Infinity, duration: 2 }}

                                >
                                    <ChevronDown onClick={nextSlide} className="w-14 h-14 drop-shadow-[0_0_6px_#AF9661] transition-transform hover:scale-110" />

                                </motion.div>

                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div >

            <Modal isModalOpen={isModalOpen} workExperience={workExperience} setIsModalOpen={setIsModalOpen} currentIndex={currentIndex} companyLogo={workExperience[currentIndex].companyLogo} selectedProject={selectedProject} selectedRole={selectedRole} />

        </div >
    );
}
