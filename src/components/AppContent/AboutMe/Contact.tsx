"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { contactData } from './contactData'

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    return (
        <motion.div
            ref={ref}
            className="mt-4 lg:mt-6 xl:mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl w-full"
            initial="hidden"
            animate={controls}
            variants={{
                visible: {
                    transition: { staggerChildren: 0.15 }
                }
            }}
        >
            {contactData.map((item, index) => (
                <motion.a
                    key={`${item.text}-${index}`}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    className="flex flex-col items-center text-center p-2 lg:p-3 xl:p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg hover:shadow-[#AF9661]/30 hover:scale-105 transition-all duration-300"
                >
                    <item.img color="#AF9661" />
                    <span className="mt-3 text-[12px] lg:text-[14px] text-white">{item.text}</span>
                </motion.a>
            ))}
        </motion.div>
    );
}
