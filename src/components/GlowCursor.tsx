"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useActiveComponent } from "@/store/useActiveComponent";
import { sectionThemes } from "@/theme/sections";

const GlowCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isTargetButton, setIsTargetButton] = useState(false);
    const { activeIndex } = useActiveComponent();
    const theme = sectionThemes[activeIndex] ?? sectionThemes[0];

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            const target = e.target as HTMLElement;
            const isExploreButton = target.closest("a, button")?.textContent?.trim() === "¡Explorar!" ||
                target.closest("a, button")?.textContent?.trim() === "Explore!";
            setIsTargetButton(isExploreButton);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const glow = isTargetButton ? 0.55 : 0.38;

    return (
        <div className="pointer-events-none fixed inset-0 z-50" aria-hidden="true">
            <motion.div
                className="absolute rounded-full"
                style={{
                    top: position.y - 300,
                    left: position.x - 300,
                    width: "600px",
                    height: "600px",
                    background: `radial-gradient(circle, rgba(${theme.rgb},${glow}) 0%, rgba(${theme.rgb},0) 68%)`,
                    mixBlendMode: "screen",
                    transition: "background 0.45s ease",
                }}
                animate={{ scale: isTargetButton ? 1.7 : 1 }}
                transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
            />
        </div>
    );
};

export default GlowCursor;
