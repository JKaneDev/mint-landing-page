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
                    "carousel-custom":
                         "0 0 100px -25px rgba(12, 192, 223, 0.25)",
                    "blue-custom-left":
                         "inset 0px 10px 300px 10px rgba(12, 192, 223, 0.25), -25px -1px 300px 25px rgba(12, 192, 223, 0.25)",
                    "blue-custom-left-2":
                         "inset 0px 10px 150px 0px rgba(12, 192, 223, 0.15), -25px 0px 300px 10px rgba(12, 192, 223, 0.25)",
                    "blue-custom-right":
                         "inset 0px 10px 300px 10px rgba(12, 192, 223, 0.25), 25px 1px 300px 25px rgba(12, 192, 223, 0.25)",
                    "green-custom-left":
                         "inset 0px 10px 300px 10px rgba(143, 188, 143, 0.25), -50px 10px 500px -10px rgba(143, 188, 143, 0.25)",
                    "green-custom-left-2":
                         "inset 0px 10px 150px 0px rgba(143, 188, 143, 0.15), -25px 0px 300px 10px rgba(143, 188, 143, 0.25)",
                    "green-custom-right":
                         "inset 0px 10px 300px 10px rgba(143, 188, 143, 0.25), 50px -10px 500px -10px rgba(143, 188, 143, 0.25)",
                    "inner-custom": "inset 0 0 10px rgba(12, 192, 223, 0.25)",
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
                    "qty-btn-hover": "#8FBC8F",
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
