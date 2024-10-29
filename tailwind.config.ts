import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        primaryImage: "url('../public/images/primaryBG.png')",
        informationImage: "url('../public/images/informationBG.png')",
      },
      colors: {
        navbar: "#C3D4E9",
        primary: {
          100: "#D6E4FD",
          300: "#85A8F8",
          500: "#3563E9",
          700: "#1A37A7",
          focused: "#CEBEFE",
        },
        secondary: {
          300: "#90A3BF",
          400: "#596780",
          500: "#1A202C",
        },
        information: {
          500: "#54A6FF",
        },
      },
      fontSize: {
        "2base": ["2rem", "2.5rem"],
        "2sm": ["1.75rem", "2.5rem"],
      },
    },
  },
  plugins: [],
};
export default config;
