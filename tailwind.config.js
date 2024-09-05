/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./src/[bookId]/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}",
    ],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {},
        colors: {
            transparent: "transparent",
            accent: "#6C4320",
            beige: "#B5A18F",
            light: "#F0F0F0",
            black: "#000000",
        },
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
    plugins: [],
};
