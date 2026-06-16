"use client";

import { motion } from "framer-motion";
import { Smartphone, RotateCw } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function RotateDevicePrompt() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col items-center justify-center gap-6 px-6 py-10 max-w-sm mx-auto text-center">
            <div className="relative flex items-center justify-center w-40 h-40">
                <motion.div
                    className="absolute inset-0 rounded-full border border-[#AF9661]/20"
                    animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute inset-4 rounded-full border border-[#AF9661]/30"
                    animate={{ scale: [1.1, 1, 1.1], opacity: [0.6, 0.3, 0.6] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                />

                <motion.div
                    animate={{ rotate: [0, 90, 90, 0] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        times: [0, 0.35, 0.65, 1],
                    }}
                    className="relative z-10 flex items-center justify-center w-20 h-20 rounded-2xl bg-white/5 border border-[#AF9661]/40 shadow-[0_0_30px_rgba(175,150,97,0.25)] backdrop-blur-sm"
                >
                    <Smartphone className="w-10 h-10 text-[#AF9661]" strokeWidth={1.5} />
                </motion.div>

                <motion.div
                    className="absolute -right-1 top-1/2 -translate-y-1/2"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                    <RotateCw className="w-8 h-8 text-[#AF9661]/70" strokeWidth={1.5} />
                </motion.div>
            </div>

            <div className="space-y-2">
                <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-[18px] font-bold text-[#AF9661]"
                >
                    {t("experience.rotate_device_title")}
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-[13px] leading-relaxed text-gray-300"
                >
                    {t("experience.rotate_device_description")}
                </motion.p>
            </div>

            <motion.div
                className="flex items-center gap-2 text-[11px] text-[#AF9661]/80 uppercase tracking-widest"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <span className="w-8 h-px bg-[#AF9661]/50" />
                {t("experience.rotate_device_hint")}
                <span className="w-8 h-px bg-[#AF9661]/50" />
            </motion.div>
        </div>
    );
}
