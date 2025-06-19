"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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
    const totalSections = Math.ceil(sections.length / 2);

    return (
        <div className="relative h-screen w-full overflow-hidden">

            <motion.div
                className="absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(80px,20vw,200px)] font-bold text-[#AF9661] opacity-10 z-0 select-none whitespace-nowrap leading-none"
                animate={{ opacity: [0.1, 0.15, 0.1] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
            >
                {sections[activeIndex * 2]?.title.split(" ").map((word, index) => (
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

            <div className="absolute left-1/2 top-0 h-full w-0.5 bg-[#1E293B] transform -translate-x-[9px]" />

            <div className="h-full overflow-y-scroll snap-mandatory snap-y ">
                {sections.map((item, index) => (
                    index % 2 === 0 && (
                        <section
                            key={index}
                            className="h-screen flex items-center justify-center snap-start"
                            onMouseEnter={() => setActiveIndex(Math.floor(index / 2))}
                        >
                            <motion.div
                                className="flex w-full max-w-5xl justify-between px-10"
                                initial={index === 0 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}

                            >
                                <div className="w-1/2 text-right pr-10">
                                    <h3 className="text-2xl font-bold text-[#AF9661]">{sections[index]?.category}</h3>
                                    <ul className="mt-2 text-lg text-white opacity-80">
                                        {sections[index]?.skills.map((skill, i) => (
                                            <li key={i}>{skill}</li>
                                        ))}
                                    </ul>
                                </div>

                                {sections[index + 1] && (
                                    <div className="w-1/2 text-left pl-10">
                                        <h3 className="text-2xl font-bold text-[#AF9661]">{sections[index + 1]?.category}</h3>
                                        <ul className="mt-2 text-lg text-white opacity-80">
                                            {sections[index + 1]?.skills.map((skill, i) => (
                                                <li key={i}>{skill}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </motion.div>
                        </section>
                    )
                ))}
            </div>

            <div className="absolute right-10 top-1/2 transform -translate-y-1/2 flex flex-col gap-3">
                {Array.from({ length: totalSections }).map((_, i) => (
                    <motion.div
                        key={i}
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${i === activeIndex ? "bg-[#AF9661] scale-125" : "bg-gray-500"}`}
                    />
                ))}
            </div>
        </div>
    );
}
