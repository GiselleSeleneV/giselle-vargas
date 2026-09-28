"use client";

type HeroesTitleProps = {
    readonly title: string;
};

export default function HeroesTitle({ title }: HeroesTitleProps) {
    return (
        <h3 className="display-title m-0 min-w-0 flex-1 truncate text-[18px] md:text-[20px] lg:text-[26px] short:lg:text-[20px]! short:xl:text-[22px]! leading-none text-[#F6F1EC]">
            {title}
        </h3>
    );
}
