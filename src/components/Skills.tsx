"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const skills = [
    {
        title: "Habilidades Técnicas",
        data: [
            { category: "Lenguajes de programación", skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"] },
            { category: "Frameworks y bibliotecas", skills: ["React", "Next.js", "Framer Motion", "Tailwind CSS", "Styled Components", "Ant Design", "Bootstrap"] },
            { category: "APIs y manejo de datos", skills: ["GraphQL", "RESTful APIs", "JSON"] },
            { category: "Optimización y rendimiento", skills: ["Mejoras de velocidad de carga", "SEO técnico", "SSR"] },
            { category: "Herramientas de desarrollo", skills: ["Git", "GitHub", "Docker", "Jest", "Postman", "VS Code"] },
            { category: "Soporte técnico", skills: ["Gestión de tickets", "Diagnóstico de errores", "Atención al cliente"] },
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

    const sections = skills.flatMap(({ title, data }) => data.map(item => ({ ...item, title })));
    const totalSteps = Math.ceil(sections.length / 2);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % totalSteps);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + totalSteps) % totalSteps);
    };

    const firstItem = sections[activeIndex * 2];
    const secondItem = sections[activeIndex * 2 + 1];


    return (
        <div className="relative h-screen w-full overflow-hidden bg-white flex flex-col items-center justify-center">
            <div className="w-[89%] h-[80%] bg-[#EFEFF0] flex flex-col items-center justify-center">
                {/* Texto de fondo animado */}
                <motion.div
                    className="absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(80px,20vw,200px)] font-bold text-[#AF9661] opacity-10 z-0 select-none whitespace-nowrap leading-none"
                    animate={{ opacity: [0.1, 0.15, 0.1] }}
                    transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                >

                    {firstItem?.title.split(" ").map((word, index) => (
                        <div key={index} className={`flex justify-center ${index === 0 ? "-mb-5" : "mt-5"}`}>
                            {word.split("").map((char, charIndex) => (
                                <motion.span
                                    key={charIndex}
                                    className="inline-block"
                                    animate={{
                                        y: [0, -10, 0],
                                        scale: [1, 1.1, 1],
                                    }}
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
                <div className="absolute left-1/2 top-0 h-full w-0.5 bg-[#e9e6e6] transform -translate-x-[2px]" />

                {/* Secciones */}
                <div className="flex z-10 w-[98%] h-[30%] px-10">

                    <motion.div
                        whileHover={{ scale: 1.2, x: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center transform z-20 cursor-pointer"
                        onClick={handlePrev}
                    >
                        <ChevronLeft size={48} className="text-[#AF9661] hover:text-[#967c47] transition-colors duration-300" />
                    </motion.div>

                    {/* Primera sección */}
                    {firstItem && (
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-1/2 flex justify-end pr-9"
                        >
                            <div className="max-w-md text-right">
                                <h3 className="text-[32px] text-[#0F172A] font-bold mb-2">{firstItem.category}</h3>
                                <div className="text-[28px] text-[#AF9661]">
                                    {firstItem.skills.map((skill, idx) => (
                                        <p key={idx} className="text-lg">{skill}</p>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Segunda sección */}
                    {secondItem && (
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-1/2 pl-8"
                        >
                            <h3 className="text-[32px] text-[#0F172A] font-bold mb-2">{secondItem.category}</h3>
                            <div className="text-[28px] text-[#AF9661] ">
                                {secondItem.skills.map((skill, idx) => (
                                    <p key={idx} className="text-lg">{skill}</p>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    <motion.div
                        whileHover={{ scale: 1.2, x: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center transform z-20 cursor-pointer"
                        onClick={handleNext}
                    >
                        <ChevronRight size={48} className="text-[#AF9661] hover:text-[#967c47] transition-colors duration-300" />
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
        </div>
    );
}  