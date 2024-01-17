/** @type {import('tailwindcss').Config} */
module.exports = {
     content: ["./src/**/*.{js,jsx,ts,tsx}"],
     theme: {
          extend: {
               screens: {
                    xs: "380px",
                    sm: "651px",
                    md: "768px",
                    lg: "1024px",
                    xl: "1280px",
                    "2xl": "1536px",
                    "3xl": "1920px",
                    "4xl": "2560px",
               },
               boxShadow: {
                    custom: "0 0 25px -12px rgba(255, 255, 255, 0.25)",
               },
               fontFamily: {
                    "arian-demi": ["Arian LT Demi", "Poppins", "sans-serif"],
                    "arian-bold": ["Arian LT Bold", "Poppins", "sans-serif"],
               },
               translate: {
                    "-2.5": "-2.5%",
               },
               colors: {
                    "btn-hover": "#0cc0df",
                    "btn-hover-2": "#1cd6f3",
                    "border-color": "#0cc0df",
               },
               objectFit: ["contain", "cover", "fill", "none", "scale-down"],
          },
     },
     variants: {
          extend: {
               backgroundColor: ["hover"],
          },
     },
     plugins: [],
};
