import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
        width: "width",
        spacing: "margin, padding",
      },
    },
    colors: {
      black: "#242424",
      white: "#ffffffde",
      blue: {
        light: "#1cc1cf",
        DEFAULT: "#0e6269",
        dark: "",
      },
    },
    screens: {
      xs: "0",
      // => @media (min-width: 00px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      xxl: "1920px",
      // => @media (min-width: ) {1920px ... }
    },
  },
  plugins: [],
};
export default config;
