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
    const [selectedProjectImages, setSelectedProjectImages] = useState<string[] | null>(null);
    const [projectLogo, setProjectLogo] = useState<string | null>(null);
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
                    logo: "/images/projects/SIGP/logo.jpeg",
                    endDate: "Dic 2024",
                    role: [
                        "Asistir a los usuarios ante inquietudes, incidencias o dificultades.",
                        "Clasificación de los casos según su complejidad en soporte de nivel 1, 2 o 3.",
                        "Dar una respuesta oportuna y eficaz, mejorando significativamente la experiencia de las instituciones educativas con el sistema."
                    ],

                    images: [
                        "/images/projects/SIGP/control-board.png", "/images/projects/SIGP/control-board-sec.png", "/images/projects/SIGP/dashboard-sec.png"
                    ]
                },
                {
                    nameProject: "Aulas Quindío",
                    logo: "/images/projects/quindio/logo.png",
                    startDate: "Julio 2024",
                    endDate: "Dic 2024",
                    role: [
                        "Desarrollo de componentes reutilizables y escalables.",
                        "Integración de APIs mediante GraphQL y optimización del rendimiento.",
                        "Elaboración de la documentación oficial del proyecto, detallando procesos y guías de uso técnico para el equipo y los usuarios."
                    ],
                    images: [
                        "/images/projects/quindio/login.png",
                        "/images/projects/quindio/login-with-image.png",
                        "/images/projects/quindio/user-management.png",
                        "/images/projects/quindio/accompaniment.png",
                        "/images/projects/quindio/general-statistics.png",
                        "/images/projects/quindio/statistics-by-month.png",
                        "/images/projects/quindio/statistics-by-competencies.png",
                        "/images/projects/quindio/student-profile.png",
                        "/images/projects/quindio/project-choice.png",
                        "/images/projects/quindio/choice-of-design-thinking.png",
                        "/images/projects/quindio/ova-selection.png",
                        "/images/projects/quindio/component-selection.png",
                        "/images/projects/quindio/glossary.png",
                        "/images/projects/quindio/activity-1.png",
                        "/images/projects/quindio/activity-2.png",
                        "/images/projects/quindio/activity-3.png",
                        "/images/projects/quindio/activity-4.png",
                        "/images/projects/quindio/finished-projects.png",
                        "/images/projects/quindio/conquests.png"
                    ]
                },

                {
                    nameProject: "Aulas STEAM Regional",
                    logo: "/images/projects/regional/logo.png",
                    startDate: "Feb 2024",
                    endDate: "Jul 2024",
                    role: [
                        "Desarrollo de interfaces responsivas y accesibles.",
                        "Integración de servicios REST para el registro y monitoreo de datos académicos.",
                        "Construcción de componentes reutilizables y dinámicos orientados a la visualización de resultados educativos.",
                        "Optimización del rendimiento y experiencia del usuario en distintos dispositivos y contextos de uso.",
                        "Elaboración de documentación oficial del proyecto, incluyendo manuales técnicos y guías de usuario.",
                        "Preparación y realización de presentaciones funcionales del sistema a los clientes."
                    ],
                    images: [
                        "/images/projects/regional/login.png",
                        "/images/projects/regional/landing.png",
                        "/images/projects/regional/indicators-1.png",
                        "/images/projects/regional/indicators-2.png",
                        "/images/projects/regional/user-management.png",
                        "/images/projects/regional/user-edition.png",
                        "/images/projects/regional/reports.png",
                        "/images/projects/regional/help.png",
                    ]
                },
                {
                    nameProject: "Sapere AUDE atrevete a pensar",
                    logo: "/images/projects/sapere/logo.png",
                    startDate: "Mar 2024",
                    endDate: "Jun 2024",
                    role: [
                        "Desarrollo de interfaces responsivas y accesibles.",
                        "Integración de servicios REST para el registro y monitoreo de datos académicos.",
                        "Construcción de componentes reutilizables y dinámicos orientados a la visualización de resultados educativos.",
                        "Optimización del rendimiento y experiencia del usuario en distintos dispositivos y contextos de uso.",
                        "Elaboración de documentación oficial del proyecto, incluyendo manuales técnicos y guías de usuario.",
                        "Preparación y realización de presentaciones funcionales del sistema a los clientes."
                    ],
                    images: [
                        "/images/projects/sapere/login.png",
                        "/images/projects/sapere/indicators.png",
                        "/images/projects/sapere/graphics-1.png",
                        "/images/projects/sapere/graphics-2.png"
                    ]
                },
                {
                    nameProject: "Pertenezco",
                    logo: "/images/projects/peer/logo.png",
                    startDate: "Ago 2023",
                    endDate: "Feb 2024",
                    role: [
                        "Desarrollo de interfaces dinámicas y responsivas.",
                        "Implementación de flujos de autenticación, registro de usuarios y gestión de contenidos educativos (cartillas,módulos y guías)",
                        "Creación y optimización de componentes reutilizables, asegurando una experiencia de usuario intuitiva y consistente.",
                        "Optimización del rendimiento de la aplicación, asegurando tiempos de carga rápidos y una navegación fluida."
                    ],
                    images: [
                        "/images/projects/peer/login.png",
                        "/images/projects/peer/app-selection.png",
                        "/images/projects/peer/profile.png",
                        "/images/projects/peer/subjects.png",
                        "/images/projects/peer/teaching-guides.png",
                        "/images/projects/peer/projects.png",
                        "/images/projects/peer/settings.png",
                        "/images/projects/peer/teacher-network.png"
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
                    logo: "",
                    startDate: "Ene 2021",
                    endDate: "Jul 2022",
                    role: [
                        "Facilitar el acceso a la información del pico y cédula durante la pandemia",
                        "Implementar una interfaz dinámica, intuitiva y adaptable a distintos dispositivos.",
                        "Desarrollo de componentes interactivos."
                    ],
                    images: []
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
        <div className="w-full h-full flex flex-col lg:flex-row items-center overflow-hidden bg-[#0F172A] p-6">

            <div className='flex w-full items-center justify-center mt-15 md:mt-10 lg:mt-0 xl:mt-0 ml-0 md:ml-0 lg:ml-0 xl:ml-8 h-[20%] md:h-[40%] lg:h-full xl:h-full flex-col lg:top-0 lg:xl:w-[60%]'>

                <motion.div
                    className="w-full flex-col lg:xl:w-[60%] gap-10 top-16 text-[clamp(40px,8vw,140px)] font-bold text-[#AF9661] select-none z-0 leading-none"
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
                        className="flex items-center gap-4 text-[16px] md:text-[25px] lg:text-[32px] xl:text-[40px] text-white z-10"
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
                    className="text-[14px] md:text-[16px] lg:text-[16px] xl:text-[20px] text-[#AF9661] z-10"
                    initial={{ opacity: 0, filter: "blur(5px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    {workExperience[currentIndex].position.toUpperCase()}
                </motion.p>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={hasInteracted ? { opacity: 0, y: -40 } : false}
                    animate={{ opacity: 1, y: 0 }}
                    exit={hasInteracted ? { opacity: 0, y: 40 } : undefined}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    className="flex w-full h-full flex-col text-end gap-2 mr-0 md:mr-26 lg:mr-10 xl:mr-12 justify-center"
                >

                    <p className="flex justify-end w-full font-bold text-[32px] md:text-[38px] lg:text-[42px] xl:text-[52px]  text-[#AF9661] ">
                        {t('experience.projects')}
                    </p>

                    {workExperience[currentIndex].projects.map((project, idx) => (
                        <div key={idx} className="mb-4">
                            <button onClick={() => {
                                setSelectedProject(project.nameProject);
                                setSelectedRole(project.role);
                                setSelectedProjectImages(project.images)
                                setProjectLogo(project.logo)
                                setIsModalOpen(true);
                            }} className="text-[16px] md:text-[20px] lg:text-[24px] xl:text-[32px] text-right text-white font-semibold hover:text-[#334155] transition-colors duration-500 cursor-pointer">
                                {project.nameProject}
                            </button>
                            <p className="text-[14px] text-[#8b8b8d]">
                                {project.startDate} - {project.endDate}
                            </p>
                        </div>
                    ))}

                    <div className="flex w-full z-10 items-center justify-center gap-4">

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

            <Modal isModalOpen={isModalOpen} workExperience={workExperience} setIsModalOpen={setIsModalOpen} currentIndex={currentIndex} selectedProject={selectedProject} selectedRole={selectedRole} selectedProjectImages={selectedProjectImages} projectLogo={projectLogo} />

        </div >
    );
}
