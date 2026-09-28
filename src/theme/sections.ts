import type { CSSProperties } from "react";

export const sectionThemes = [
    { accent: "#C97A70", soft: "#E4B4AC", rgb: "201, 122, 112" },
    { accent: "#6FB4C4", soft: "#C5E4EC", rgb: "111, 180, 196" },
    { accent: "#7D9E86", soft: "#C9DDD0", rgb: "125, 158, 134" },
    { accent: "#C9C47A", soft: "#E6E4B8", rgb: "201, 196, 122" },
    { accent: "#A489B0", soft: "#D9C9E0", rgb: "164, 137, 176" },
] as const;

export function sectionAccentStyle(index: number): CSSProperties {
    const theme = sectionThemes[index] ?? sectionThemes[0];
    return {
        "--accent": theme.accent,
        "--accent-soft": theme.soft,
        "--accent-rgb": theme.rgb,
    } as CSSProperties;
}
