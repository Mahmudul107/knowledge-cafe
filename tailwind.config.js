/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3f8911",

          secondary: "#161c84",

          accent: "#ef676b",

          neutral: "#322B3B",

          "base-100": "#F3F4F7",

          info: "#3A82CB",

          success: "#33E17B",

          warning: "#E0790B",

          error: "#E9779B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
