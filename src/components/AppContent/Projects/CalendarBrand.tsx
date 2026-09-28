"use client";

import { CalendarDays } from "lucide-react";
import { useTranslation } from "react-i18next";

type CalendarBrandProps = {
    readonly label: string;
};

export default function CalendarBrand({ label }: CalendarBrandProps) {
    const { t } = useTranslation();

    return (
        <div className="flex min-w-0 flex-1 items-center gap-2 lg:gap-3">
            <span className="grid place-items-center w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 shrink-0 border border-(--accent)/40 text-(--accent)">
                <CalendarDays className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5" strokeWidth={1.5} />
            </span>
            <div className="min-w-0">
                <h3 className="display-title m-0 truncate text-[18px] md:text-[20px] lg:text-[26px] short:lg:text-[20px]! short:xl:text-[22px]! leading-none text-[#F6F1EC]">
                    {label}
                </h3>
                <p className="mt-1 truncate text-[10px] lg:text-[11px] uppercase tracking-[0.16em] text-[#B7AFA8]">
                    {t("projects.calendar_subtitle")}
                </p>
            </div>
        </div>
    );
}
