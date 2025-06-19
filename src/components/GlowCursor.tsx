"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GlowCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isTargetButton, setIsTargetButton] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            const target = e.target as HTMLElement;
            // Verifica si el cursor está sobre el botón con el texto "¡Explorar!" o "Explore!"
            const isExploreButton = target.closest("a, button")?.textContent?.trim() === "¡Explorar!" ||
                target.closest("a, button")?.textContent?.trim() === "Explore!";
            setIsTargetButton(isExploreButton);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 z-50" aria-hidden="true">
            <motion.div
                className="absolute rounded-full"
                style={{
                    top: position.y - 300,
                    left: position.x - 300,
                    width: "600px",
                    height: "600px",
                    background: isTargetButton
                        ? "radial-gradient(circle, rgba(255,165,0,0.35) 0%, rgba(0,0,0,0) 70%)"
                        : "radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(0,0,0,0) 70%)",
                    mixBlendMode: "overlay",
                }}
                animate={{ scale: isTargetButton ? 1.7 : 1 }}
                transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
            />
        </div>
    );
};

export default GlowCursor;
