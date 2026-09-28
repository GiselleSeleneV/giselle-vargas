"use client";

import { BookOpen } from "lucide-react";

type JournalBrandProps = {
    readonly label?: string;
    readonly className?: string;
};

export default function JournalBrand({ label = "Journal", className = "" }: JournalBrandProps) {
    return (
        <div className={`flex flex-1 items-center gap-2 lg:gap-3 min-w-0 ${className}`}>
            <div className="grid place-items-center w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 shrink-0 border border-(--accent)/40 text-(--accent)">
                <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5" strokeWidth={1.5} />
            </div>
            <h3 className="display-title text-[18px] md:text-[20px] lg:text-[26px] short:lg:text-[20px]! short:xl:text-[22px]! leading-none text-[#F6F1EC] m-0 truncate">
                {label}
            </h3>
        </div>
    );
}
