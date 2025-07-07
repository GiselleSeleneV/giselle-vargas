"use client"

import { motion, AnimatePresence } from 'framer-motion';
import { MessageIcon, CloseIcon } from "./Icons";
import { useState } from "react";
import Image from "next/image";
import CarouselImages from './CarouselImages';

interface WorkExperience {
    company: string;
    startDate: string;
    endDate: string;
    city: string;
    position: string;
    role: string;
    references: {
        name: string;
        company: string;
        number: string;
        email: string;
    }[];
}

interface ModalProps {
    isModalOpen: boolean;
    workExperience: WorkExperience[];
    setIsModalOpen: (value: boolean) => void;
    currentIndex: number;
    selectedProject: string,
    selectedRole: string[] | null;
    selectedProjectImages: string[] | null;
    projectLogo: string | null;
}

export default function Modal({ isModalOpen, workExperience, setIsModalOpen, currentIndex, selectedProject, selectedRole, selectedProjectImages, projectLogo }: ModalProps) {

    const [isGalleryOpen, setIsGalleryOpen] = useState(false);


    const getImageDimensions = (logo: string) => {
        if (logo === "/images/projects/SIGP/logo.jpeg") return { width: 190, height: 190, marginRight: "mr-0" };
        if (logo === "/images/projects/regional/logo.png") return { width: 90, height: 90, marginRight: "mr-4" };
        if (logo === "/images/projects/peer/logo.png") return { width: 70, height: 60, marginRight: "mr-4" };
        return { width: 80, height: 80, marginRight: "mr-4" }; // valor por defecto
    };

    const { width, height, marginRight } = getImageDimensions(projectLogo ?? "");

    return (
        <AnimatePresence>
            {isModalOpen && (
                <motion.div
                    initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                    animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
                    exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                    transition={{ duration: 0.4 }}
                    className="fixed inset-0 flex items-center justify-center bg-[#0F172A] bg-opacity-50 z-50 p-4"
                >

                    <motion.div
                        initial={{ y: 50, opacity: 0, scale: 0.9 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 50, opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4, type: "spring", stiffness: 120 }}
                        className="bg-white pt-2 p-4 rounded-xl shadow-2xl w-full lg:w-[70%] xl:w-[50%] relative "
                    >
                        <motion.button
                            onClick={() => setIsModalOpen(false)}
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute right-3 text-gray-500 hover:text-gray-700 transition-all cursor-pointer"
                        >
                            <CloseIcon color="#252E3E" />
                        </motion.button>

                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="flex flex-col sm:flex-row sm:items-center justify-between bg-right bg-no-repeat bg-contain"

                        >

                            <p className='text-[24px] text-[#AF9661] font-bold mr-5'>{selectedProject}</p>

                            {projectLogo && (
                                <Image
                                    src={projectLogo}
                                    alt="Logo"
                                    width={width}
                                    height={height}
                                    className={`${marginRight} object-contain`}
                                />
                            )}

                        </motion.div>

                        <div className='border-t border-[#EFEFF0] mt-2'>
                            <p className='text-[14px] md:text-[14px] lg:text-[14px] xl:text-[16px] text-gray-900 font-semibold py-2'>FUNCIONES DESEMPEÑADAS</p>
                            <ul className="list-disc text-gray-900 text-[12px] md:text-[14px] lg:text-[14px] xl:text-[16px] pl-6 text-justify space-y-2">
                                {selectedRole?.map((role, index) => (
                                    <li key={index}>{role}</li>
                                ))}
                            </ul>
                        </div>

                        {selectedProjectImages && selectedProjectImages.length > 0 && (
                            <motion.button
                                onClick={() => setIsGalleryOpen(true)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-2 px-2 py-1 bg-[#AF9661] text-white text-[14px] md:text-[14px] lg:text-[16px] xl:text-[16px] rounded-lg hover:bg-[#967d4c] transition cursor-pointer"
                            >
                                Ver proyecto
                            </motion.button>
                        )}

                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="w-full mt-2 md:mt-6 p-1 border-b border-[#EFEFF0] font-bold text-[14px] md:text-[18px] lg:text-[18px] xl:text-[18px] text-[#AF9661]"
                        >
                            REFERENCIAS
                        </motion.p>

                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 mt-2 md:mt-4'>
                            {workExperience[currentIndex].references.map((ref, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                                    whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(175, 150, 97, 0.3)" }}
                                    className="w-full p-2 md:p-4 bg-[#F9F9F9] rounded-lg shadow-md transition-all"
                                >
                                    <p className="text-gray-900 font-semibold text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px]">{ref.name}</p>
                                    <p className="text-[#AF9661] text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px]">{ref.company}</p>
                                    {/* <div className="flex items-center text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px] gap-2 text-gray-700 mt-2">
                                        <PhoneIcon color="#AF9661" />
                                        <p>{ref.number}</p>
                                    </div> */}
                                    <div className="flex items-center text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px] gap-2 text-gray-700 mt-1">
                                        <MessageIcon color="#AF9661" />
                                        <p>{ref.email}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            onClick={() => setIsModalOpen(false)}
                            whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(186, 85, 69, 0.5)" }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-4 md:mt-6 w-full py-2 bg-[#7A2E2E] text-white border border-[#AF9661] rounded-lg hover:bg-[#B55442] transition-all cursor-pointer"
                        >
                            Cerrar
                        </motion.button>
                    </motion.div>
                </motion.div>
            )}

            {isGalleryOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-90"
                >
                    <div className="absolute top-4 right-1">
                        <motion.button
                            onClick={() => setIsGalleryOpen(false)}
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute right-3 transition-all cursor-pointer"
                        >
                            <CloseIcon color="#fff" />
                        </motion.button>

                    </div>

                    <CarouselImages selectedProjectImages={selectedProjectImages} />

                </motion.div>
            )}
        </AnimatePresence>
    );
}