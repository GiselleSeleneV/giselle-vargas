import Image from "next/image";
import { motion } from "framer-motion";
import { useActiveComponent } from "@/store/useActiveComponent";

export type TechItem = {
    name: string;
    icon: string;
};

type TechStackProps = {
    techStack?: TechItem[];
};

export default function TechStack({ techStack }: TechStackProps) {

    const { activeIndex } = useActiveComponent();

    return (
        <>
            {techStack && techStack.length > 0 && (
                <div className={`${activeIndex === 4 && 'bottom-6 absolute'} left-0 w-full z-0 overflow-hidden`}>
                    <motion.div
                        className={`${activeIndex === 4 && 'opacity-30 blur-[2.5px] gap-0 md:gap-2 lg:gap-4 xl:gap-8'} flex gap-0 w-max mx-auto `}
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                    >
                        {[...techStack, ...techStack].map((tech, idx) => (
                            <div
                                key={`${tech.name}-${idx}`}
                                className={`${activeIndex === 4 && 'min-w-[50px]'} flex flex-col items-center justify-center min-w-[30px]`}
                            >
                                <Image
                                    src={tech.icon}
                                    alt={tech.name}
                                    width={activeIndex === 4 ? 32 : 16}
                                    height={activeIndex === 4 ? 32 : 16}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            )}
        </>
    )
}