module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('https://mysmart-menu.s3.amazonaws.com/web-assets/hero-bg-1.png')",
        second:
          "url('https://mysmart-menu.s3.amazonaws.com/web-assets/hero-bg-2.png')",
      },
      colors: {
        primary: {
          DEFAULT: "#FA4A0C",
          100: "rgba(246, 99, 48, 0.1)",
          200: "rgba(246, 99, 48, 0.2)",
          300: "rgba(246, 99, 48, 0.3)",
          400: "rgba(246, 99, 48, 0.4)",
          500: "rgba(246, 99, 48, 0.5)",
          600: "rgba(246, 99, 48, 0.6)",
          700: "rgba(246, 99, 48, 0.7)",
          800: "rgba(246, 99, 48, 0.8)",
        },
        black: {
          DEFAULT: "#19202A",
          100: "#4B5254",
          300: "#F9F9FA",
          400: "#F2F2F2",
          500: "#DBDDE0",
          600: "#CACCCF",
          700: "#A0A4A8",
          800: "#52575C",
          900: "#454f5b",
        },
        grey: {
          DEFAULT: "#9FA3A8",
          100: "#F1F1F5",
          200: "#bebebe",
        },
        background: "#dedede",
        orange: "#FA4A0C",
        secondary: {
          DEFAULT: "#FFF4E3",
        },
        footerGray: {
          DEFAULT: "#3C3434",
        },
        blue: {
          100: "#4E95F2",
          200: "#4E95F21A",
        },
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        imageSlide: {
          "0%": {
            transform: "translate(0, 0)",
          },
          "100%": {
            transform: "translate(-50%, 0)",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn .5s ease-out 1",
        imageSlide: "imageSlide 5s linear infinite",
      },
    },
    fontFamily: {
      "sans-serif": ["Poppins", "Montserrat", "Lato"],
      montserrat: ["Montserrat", "sans-serif"],
      manrope: ["Manrope", "sans-serif"],
    },
  },
  plugins: [],
};
