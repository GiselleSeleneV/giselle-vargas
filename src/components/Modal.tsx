"use client"

import { motion, AnimatePresence } from 'framer-motion';
import { PhoneIcon, MessageIcon, CloseIcon } from "./Icons";

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
    companyLogo: string,
    selectedRole: string[] | null;
}

export default function Modal({ isModalOpen, workExperience, setIsModalOpen, currentIndex, companyLogo, selectedProject, selectedRole }: ModalProps) {

    console.log("logo:", companyLogo)
    return (
        <AnimatePresence>
            {isModalOpen && (
                <motion.div
                    initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                    animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
                    exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                    transition={{ duration: 0.4 }}
                    className="fixed inset-0 flex items-center justify-center bg-[#0F172A] bg-opacity-50 z-50"
                >

                    <motion.div
                        initial={{ y: 50, opacity: 0, scale: 0.9 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 50, opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4, type: "spring", stiffness: 120 }}
                        className="bg-white pt-2 p-6 rounded-xl shadow-2xl w-[40%] relative "
                    >

                        <motion.button
                            onClick={() => setIsModalOpen(false)}
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute  right-3  text-gray-500 hover:text-gray-700 transition-all cursor-pointer"
                        >
                            <CloseIcon color="#252E3E" />
                        </motion.button>
                        {/* coporacion-talentum-logo.png */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="h-[100px] bg-right bg-no-repeat bg-contain "
                            style={{ backgroundImage: `url(${companyLogo})` }}
                        >

                            <p className='text-[24px] text-[#AF9661] font-bold'>FUNCIONES DESEMPEÑADAS</p>
                            <p className='text-[14px] text-[#8b8b8d]'>{selectedProject}</p>

                        </motion.div>

                        <ul className="list-disc pt-2 pl-6 text-gray-900 mt-2 border-t border-[#EFEFF0] ">
                            {selectedRole?.map((role, index) => (
                                <li key={index}>{role}</li>
                            ))}
                        </ul>

                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="w-full mt-6 p-1 border-b border-[#EFEFF0] font-bold text-[18px] text-[#AF9661]"
                        >
                            REFERENCIAS
                        </motion.p>

                        <div className='flex gap-4 mt-4'>
                            {workExperience[currentIndex].references.map((ref, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                                    whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(175, 150, 97, 0.3)" }}
                                    className="w-full p-4 bg-[#F9F9F9] rounded-lg shadow-md transition-all"
                                >
                                    <p className="text-gray-900 font-semibold text-[14px]">{ref.name}</p>
                                    <p className="text-[#AF9661] text-[14px]">{ref.company}</p>
                                    <div className="flex items-center text-[14px] gap-2 text-gray-700 mt-2">
                                        <PhoneIcon color="#AF9661" />
                                        <p>{ref.number}</p>
                                    </div>
                                    <div className="flex items-center text-[14px] gap-2 text-gray-700 mt-1">
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
                            className="mt-6 w-full py-2 bg-[#7A2E2E] text-white border border-[#AF9661] rounded-lg hover:bg-[#B55442] transition-all cursor-pointer"
                        >
                            Cerrar
                        </motion.button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}