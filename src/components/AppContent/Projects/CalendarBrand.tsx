"use client";

import { useState } from "react";
import { CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

type CalendarBrandProps = {
    readonly label: string;
};

export default function CalendarBrand({ label }: CalendarBrandProps) {
    const { t } = useTranslation();
    const [ready, setReady] = useState(false);

    return (
        <motion.header
            className={`auth-brand ${ready ? "auth-brand--ready" : ""}`}
            viewport={{ once: true, amount: 0.6 }}
            onViewportEnter={() => setReady(true)}
        >
            <span className="auth-brand__icon" aria-hidden="true">
                <CalendarDays className="w-[1.1rem] h-[1.1rem]" strokeWidth={2} />
            </span>
            <div className="auth-brand__text">
                <h3 className="auth-brand__title">{label}</h3>
                <p className="auth-brand__subtitle">{t("projects.calendar_subtitle")}</p>
            </div>
        </motion.header>
    );
}
