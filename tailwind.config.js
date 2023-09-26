/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            black: {
                sm: "#202B38",
                lg: "#0B151D",
            },
            white: {
                100: "#ffffff",
                200: "#E5EAF0",
            },
            red: "tomato",
        },
        extend: {},
    },
    plugins: [],
};
