"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const skills = [
    {
        title: "Habilidades Técnicas",
        data: [
            { category: "Lenguajes de programación", skills: ["JavaScript (ES6+), TypeScript, HTML5, CSS3"] },
            { category: "Frameworks y bibliotecas", skills: ["React, Next.js, Framer Motion, Tailwind CSS, Styled Components, Ant Design, Bootstrap"] },
            { category: "APIs y manejo de datos", skills: ["GraphQL, RESTful APIs, JSON"] },
            { category: "Optimización y rendimiento", skills: ["Mejoras de velocidad de carga, SEO técnico, SSR"] },
            { category: "Herramientas de desarrollo", skills: ["Git, GitHub, Docker, Jest, Postman, VS Code"] },
            { category: "Soporte técnico", skills: ["Gestión de tickets, Diagnóstico de errores, Atención al cliente"] },
        ]
    },
    {
        title: "Habilidades Blandas",
        data: [
            { category: "Comunicación efectiva", skills: ["Traducir conceptos técnicos en explicaciones claras."] },
            { category: "Resolución de problemas", skills: ["Diagnosticar y solucionar errores de software eficientemente."] },
            { category: "Trabajo en equipo", skills: ["Colaboración con distintos departamentos."] },
            { category: "Adaptabilidad", skills: ["Aprendizaje continuo de nuevas tecnologías y frameworks."] },
            { category: "Gestión del tiempo", skills: ["Capacidad para priorizar tareas y cumplir plazos."] },
            { category: "Creatividad", skills: ["Buscar enfoques innovadores para resolver problemas."] },
            { category: "Empatía", skills: ["Comprender las necesidades del usuario y del equipo."] },
            { category: "Autonomía", skills: ["Mantener eficiencia y calidad sin supervisión constante."] },
        ]
    }
];

export default function Skills() {
    const [activeIndex, setActiveIndex] = useState(0);
    const totalSteps = skills.length;

    const currentSection = skills[activeIndex];
    const data = currentSection.data;
    const middleIndex = Math.ceil(data.length / 2); // Si es impar, izquierda tiene más

    const leftItems = data.slice(0, middleIndex);
    const rightItems = data.slice(middleIndex);


    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % totalSteps);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + totalSteps) % totalSteps);
    };


    return (
        <div className="relative h-screen w-full overflow-hidden bg-white flex flex-col items-center justify-center">
            <div className="w-[90%] h-[80%] bg-[#EFEFF0] flex flex-col items-center justify-center">
                {/* Texto de fondo animado */}
                <motion.div
                    className="
                     text-center 
                     text-[clamp(20px,16vw,200px)] 
                     font-bold 
                     text-[#AF9661] 
                     opacity-10 
                     z-0 
                     select-none 
                     whitespace-nowrap 
                     leading-none 
                     mt-6
                     md:mt-0
                     md:absolute 
                     md:top-1/2 
                     lg:top-1/2 
                     xl:top-1/2 
                     md:left-1/2 
                     md:-translate-x-1/2 
                     md:-translate-y-1/2
                   "
                    animate={{ opacity: [0.1, 0.15, 0.1] }}
                    transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                >
                    {currentSection.title.split(" ").map((word, index) => (
                        <div key={index} className={`flex justify-center ${index === 0 ? "-mb-5" : "mt-5"}`}>
                            {word.split("").map((char, charIndex) => (
                                <motion.span
                                    key={charIndex}
                                    className="inline-block"
                                    animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        delay: charIndex * 0.15,
                                    }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </div>
                    ))}

                </motion.div>

                {/* Línea divisoria */}
                <div className="absolute left-1/2 top-0 h-full w-0.5 bg-[#e9e6e6]" />

                {/* Secciones */}
                <div className="flex h-full w-full z-10 justify-center items-center mt-4 md:mt-20">

                    <motion.div
                        whileHover={{ scale: 1.2, x: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center transform z-20 cursor-pointer"
                        onClick={handlePrev}
                    >
                        <ChevronLeft size={48} className="text-[#AF9661] hover:text-[#967c47] transition-colors duration-300 pl-2" />
                    </motion.div>


                    {leftItems && (
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-full flex flex-col h-full pr-4 md:pr-4 lg:pr-6 xl:pr-6 items-end"
                        >
                            {leftItems.map((item, index) => (
                                <div key={index} className="h-full w-full xl:w-[80%] flex flex-col text-end">
                                    <h3 className="text-[16px] md:text-[22px] lg:text-[24px] xl:text-[28px] text-[#0F172A] font-bold ">{item.category}</h3>
                                    <div className="text-[12px] md:text-[14px] lg:text-[18px] xl:text-[20px] text-[#AF9661] ">
                                        {item.skills.map((skill, idx) => (
                                            <p key={idx} className="text-end">{skill}</p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {/* Segunda sección */}
                    {rightItems && (
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-full flex flex-col  h-full pl-4 md:pl-4 lg:pl-6 xl:pl-6 items-start"
                        >
                            {rightItems.map((item, index) => (
                                <div key={index} className="w-full xl:w-[80%] h-full flex flex-col">
                                    <h3 className="text-[16px] md:text-[22px] lg:text-[24px] xl:text-[28px] text-[#0F172A] font-bold">{item.category}</h3>
                                    <div className="text-[12px] md:text-[14px] lg:text-[18px] xl:text-[20px] text-[#AF9661] ">
                                        {item.skills.map((skill, idx) => (
                                            <p key={idx} className="">{skill}</p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}

                    <motion.div
                        whileHover={{ scale: 1.2, x: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center transform z-20 cursor-pointer"
                        onClick={handleNext}
                    >
                        <ChevronRight size={48} className="text-[#AF9661] hover:text-[#967c47] transition-colors duration-300 pr-2" />
                    </motion.div>
                </div>

                <div className="absolute z-10 bottom-10 flex justify-center gap-4">
                    {Array.from({ length: totalSteps }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={`w-3 h-3 rounded-full  transition-all duration-300
                ${activeIndex === idx
                                    ? "bg-[#AF9661] scale-125"
                                    : "bg-gray-500"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div >
    );
}  