/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary1: "#F5F5F5",
                primary2: "#EAEAEA",
                revenue: "#DDEFE0",
                transactions: "#F4ECDD",
                likes: "#EFDADA",
                users: "#DEE0EF",
                heading: "#666666",
                description: "#999999",
            },
        },
    },
    plugins: [],
};
