/** @type {import('tailwindcss').Config} */
module.exports = {
     content: ["./src/**/*.{js,jsx,ts,tsx}"],
     theme: {
          extend: {
               screens: {
                    sm: "640px",
                    md: "768px",
                    lg: "1024px",
                    xl: "1280px",
                    "2xl": "1536px",
                    "3xl": "1920px",
                    "4xl": "2560px",
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
