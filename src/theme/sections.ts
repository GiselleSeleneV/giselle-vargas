import type { CSSProperties } from "react";

export const sectionThemes = [
    { accent: "#C97A70", soft: "#E4B4AC", rgb: "201, 122, 112" },
    { accent: "#6FB4C4", soft: "#C5E4EC", rgb: "111, 180, 196" },
    { accent: "#5EAE84", soft: "#B7E0C8", rgb: "94, 174, 132" },
    { accent: "#D2BE4E", soft: "#EBE3A4", rgb: "210, 190, 78" },
    { accent: "#B07CC4", soft: "#E0C8EE", rgb: "176, 124, 196" },
] as const;

export function sectionAccentStyle(index: number): CSSProperties {
    const theme = sectionThemes[index] ?? sectionThemes[0];
    return {
        "--accent": theme.accent,
        "--accent-soft": theme.soft,
        "--accent-rgb": theme.rgb,
    } as CSSProperties;
}
