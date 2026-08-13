"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const TITLE_COLORS = [
    "#f97316",
    "#3b82f6",
    "#22c55e",
    "#a855f7",
];

type HeroesTitleProps = {
    readonly title: string;
};

export default function HeroesTitle({ title }: HeroesTitleProps) {
    const [ready, setReady] = useState(false);

    return (
        <motion.h3
            className="m-0 flex flex-wrap text-[14px] sm:text-[16px] md:text-[16px] lg:text-[32px] tracking-wider uppercase leading-tight max-w-full"
            style={{ fontFamily: '"Bangers", system-ui, sans-serif' }}
            viewport={{ once: true, amount: 0.6 }}
            onViewportEnter={() => setReady(true)}
        >
            {title.split("").map((char, index) => (
                <span
                    key={`${title}-${index}`}
                    className={`inline-block ${ready ? "title-drop-letter" : "opacity-0"}`}
                    style={{
                        color: TITLE_COLORS[index % TITLE_COLORS.length],
                        animationDelay: ready ? `${index * 0.05}s` : undefined,
                        textShadow: "2px 2px 0 rgba(0,0,0,0.35)",
                    }}
                >
                    {char === " " ? "\u00A0" : char}
                </span>
            ))}
        </motion.h3>
    );
}
