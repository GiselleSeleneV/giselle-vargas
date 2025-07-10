"use client"


import { useState } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
    selectedProjectImages: string[] | null;
}

export default function CarouselImages({ selectedProjectImages }: ModalProps) {


    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? (selectedProjectImages?.length ?? 1) - 1 : prevIndex - 1
        );
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === (selectedProjectImages?.length ?? 1) - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <AnimatePresence>
            {selectedProjectImages && selectedProjectImages.length > 0 && (
                <div className="w-full h-full flex  items-center justify-center bg-[#0F172A] p-6">

                    <motion.div
                        whileHover={{ scale: 1.2, x: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="cursor-pointer"
                        onClick={handlePrevImage}
                    >
                        <ChevronLeft className="w-[30px] h-[30px] lg:w-[48px] lg:h-[48px] text-white transition-colors duration-300" />
                    </motion.div>

                    <div className="relative rounded-xl overflow-hidden shadow-lg">
                        <motion.img
                            key={selectedProjectImages[currentImageIndex]}
                            src={selectedProjectImages[currentImageIndex]}
                            alt={`project-image-${currentImageIndex}`}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="object-cover w-full h-full rounded-xl"
                        />

                        <div className="flex flex-wrap gap-2 mt-4 justify-center">
                            {selectedProjectImages.map((project, idx) => (

                                <div
                                    key={`${project}-${idx}`}
                                    className={`w-2 md:w-3 md:h-3 h-2 rounded-full ${idx === currentImageIndex ? 'bg-[#AF9661]' : 'bg-gray-300'
                                        }`}
                                />
                            ))}

                        </div>
                    </div>

                    <motion.div
                        whileHover={{ scale: 1.2, x: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="cursor-pointer"
                        onClick={handleNextImage}
                    >
                        <ChevronRight className="w-[30px] h-[30px] lg:w-[48px] lg:h-[48px]" />
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}