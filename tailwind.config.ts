import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            screens: {
                sm: "640px",   // Small (móviles)
                md: "768px",   // Medium (tablets)
                lg: "1024px",  // Large (laptops)
                xl: "1280px",  // Extra large
                '2xl': "1536px",
            }
        },
    },
    plugins: [],
};

export default config;
