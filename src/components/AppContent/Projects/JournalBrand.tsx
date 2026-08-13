"use client";

import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";

type JournalBrandProps = {
    readonly label?: string;
    readonly className?: string;
};

export default function JournalBrand({ label = "Journal", className = "" }: JournalBrandProps) {
    return (
        <motion.div
            className={`flex items-center gap-2 md:gap-2 lg:gap-3 min-w-0 ${className}`}
            animate={{ y: [0, -3] }}
            transition={{
                duration: 2.8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
            }}
        >
            <div
                className="grid place-items-center w-7 h-7 sm:w-8 sm:h-8 md:w-8 md:h-8 lg:w-11 lg:h-11 rounded-lg md:rounded-xl shrink-0"
                style={{
                    background: "rgba(201,169,110,0.22)",
                    border: "1px solid rgba(201,169,110,0.45)",
                }}
            >
                <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-[22px] lg:h-[22px] text-[#E8D5A8]" strokeWidth={1.75} />
            </div>
            <h3
                className="font-semibold text-[15px] sm:text-[16px] md:text-[16px] lg:text-[26px] tracking-[0.3px] text-white m-0 truncate"
                style={{ fontFamily: '"Fraunces", serif' }}
            >
                {label}
            </h3>
        </motion.div>
    );
}
