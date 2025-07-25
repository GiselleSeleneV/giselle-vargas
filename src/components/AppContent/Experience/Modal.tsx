"use client";

import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageIcon, CloseIcon, PhoneIcon } from "../../Icons";
import Image from "next/image";
import CarouselImages from './CarouselImages';
import { WorkExperience } from '@/types/experience';

type ModalProps = Readonly<{
    isModalOpen: boolean;
    workExperience: WorkExperience[];
    setIsModalOpen: (value: boolean) => void;
    currentIndex: number;
    selectedProject: string;
    selectedRole: string[] | null;
    selectedProjectImages: string[] | null;
    projectLogo: string | null;
}>;

export default function Modal({
    isModalOpen,
    workExperience,
    setIsModalOpen,
    currentIndex,
    selectedProject,
    selectedRole,
    selectedProjectImages,
    projectLogo
}: ModalProps) {

    const { t } = useTranslation();
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);

    const getImageDimensions = (logo: string) => {
        if (logo === "/images/projects/SIGP/logo.jpeg") return { className: "w-[110px] lg:w-[140px]" };
        if (logo === "/images/projects/regional/logo.png") return { className: "w-[70px] lg:w-[90px]" };
        if (logo === "/images/projects/peer/logo.png") return { className: "w-[48px] lg:w-[78px]" };
        return { className: "w-[65px] lg:w-[80px]" };
    };

    const { className } = getImageDimensions(projectLogo ?? "");

    return (
        <AnimatePresence>
            {isModalOpen && (
                <motion.div
                    key="modal"
                    initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                    animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
                    exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                    transition={{ duration: 0.4 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4"
                >
                    <motion.div
                        initial={{ y: 50, opacity: 0, scale: 0.95 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 50, opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
                        className="relative w-full max-w-5xl h-[70vh] overflow-auto rounded-3xl shadow-2xl bg-gradient-to-br from-[#1E293B] to-black text-white p-6 md:px-10 md:py-4 flex flex-col justify-between"
                    >
                        <div>
                            <motion.button
                                onClick={() => setIsModalOpen(false)}
                                whileHover={{ rotate: 90 }}
                                whileTap={{ scale: 0.95 }}
                                className="absolute top-3 right-3 text-[#AF9661] hover:text-white transition-all cursor-pointer"
                            >
                                <CloseIcon color="#AF9661" />
                            </motion.button>

                            <div className="flex flex-col md:flex-row items-center justify-between border-b border-[#AF9661]/30 pb-4 gap-4">
                                <div>
                                    <h2 className="text-[16px] md:text-[22px] lg:text-[26px] xl:text-[30px] font-bold text-[#AF9661]">{selectedProject}</h2>
                                    <p className="text-[12px] lg:text-[14px] text-white text-center md:text-start mt-1">{t('experience.responsibilities_performed')}</p>
                                </div>

                                {projectLogo && (
                                    <Image
                                        src={projectLogo}
                                        alt="Logo del proyecto"
                                        width={80}
                                        height={80}
                                        className={`object-contain ${className} rounded-xl shadow-md`}
                                    />
                                )}
                            </div>

                            <div className="mt-4 text-justify text-[12px] lg:text-[14px] leading-relaxed text-gray-300">
                                <ul className="list-disc pl-5 space-y-3">
                                    {selectedRole?.filter(Boolean).map((role, idx) => (
                                        <li key={`${role}-${idx}`}>{role}</li>
                                    ))}
                                </ul>
                            </div>

                            {selectedProjectImages && selectedProjectImages.length > 0 && (
                                <div className="mt-2">
                                    <motion.button
                                        onClick={() => setIsGalleryOpen(true)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-[160px] animate-[pulse_2.5s_ease-in-out_infinite] backdrop-blur-sm bg-white/5 border border-[#AF9661] text-[#AF9661] px-2 py-1 mt-1 lg:mt-3 rounded-full text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px] font-semibold transition-all duration-300 cursor-pointer"
                                    >
                                        {t('experience.btn_view_project')}
                                    </motion.button>
                                </div>
                            )}
                        </div>

                        <div className="mt-6">
                            <h3 className="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-semibold text-[#AF9661] mb-4">{t('experience.references')}</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-4">
                                {workExperience[currentIndex].references?.map((ref, idx) => (
                                    <div
                                        key={`${ref.email}-${idx}`}
                                        className="bg-white/5 p-2 lg:p-4 rounded-xl border border-[#AF9661]/20 shadow"
                                    >
                                        <p className="text-white text-[12px] lg:text-[16px] font-semibold">{ref.name}</p>
                                        <p className="text-[#AF9661] text-sm">{ref.company}</p>
                                        <div className="flex items-center gap-2 mt-2 text-[12px] lg:text-[14px] text-gray-300">
                                            <PhoneIcon color="#AF9661" />
                                            <p>{ref.number}</p>
                                        </div>
                                        <div className="flex items-center gap-2 mt-1 text-[12px] lg:text-[14px] text-gray-300">
                                            <MessageIcon color="#AF9661" />
                                            <p>{ref.email}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-center mt-8">
                                <motion.button
                                    onClick={() => setIsModalOpen(false)}
                                    whileHover={{ scale: 1.05 }}
                                    className="w-full md:w-[60%] py-2 bg-[#7A2E2E] text-white rounded-xl hover:bg-[#B55442] transition-all cursor-pointer"
                                >
                                    {t('experience.btn_close')}
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}

            {isGalleryOpen && (
                <motion.div
                    key="gallery"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-md"
                >
                    <div className="absolute top-4 right-4">
                        <motion.button
                            onClick={() => setIsGalleryOpen(false)}
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.95 }}
                            className="transition-all cursor-pointer"
                        >
                            <CloseIcon color="#AF9661" />
                        </motion.button>
                    </div>
                    <CarouselImages selectedProjectImages={selectedProjectImages} />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
