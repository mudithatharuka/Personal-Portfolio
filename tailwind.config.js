/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--primary))",
        background: "rgba(var(--background))",
        altBackground: "rgba(var(--altBackground))",
        footerBackground: "rgba(var(--footerBackground))",
        // border: "rgba(var(--border))",
        // card: "rgba(var(--card))",
        // "copy-primary": "rgba(var(--copy-primary))",
        // "copy-secondary": "rgba(var(--copy-secondary))",
        // cta: "rgba(var(--cta))",
        // "cta-active": "rgba(var(--cta-active))",
        // "cta-text": "rgba(var(--cta-text))",
        // grape: "rgba(var(--grape))",--txt-primary: 242, 245, 247;
        txtMain: "rgba(var(--txtMain))",
        txtPrimary: "rgba(var(--txtPrimary))",
        txtSecondary: "rgba(var(--txtSecondary))",
        txtTertiary: "rgba(var(--txtTertiary))",
        txtQuaternary: "rgba(var(--txtQuaternary))",
        card: "rgba(var(--card))",
        cardBackground1: "rgba(var(--cardBackground1))",
        cardBackground2: "rgba(var(--cardBackground2))",
        boxShadow1: "rgba(var(--boxShadow1))",
        boxShadow2: "rgba(var(--boxShadow2))",
      },
      textColor: {},
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".button-gradient": {
          background: `rgba(var(--buttonGradient1))`,
          background: `linear-gradient(225deg, rgba(var(--buttonGradient1)) 0%, rgba(var(--buttonGradient2)) 100%)`,
          background: `-moz-linear-gradient(225deg, rgba(var(--buttonGradient1)) 0%, rgba(var(--buttonGradient2)) 100%)`,
          background: `-webkit-linear-gradient(225deg, rgba(var(--buttonGradient1)) 0%, rgba(var(--buttonGradient2)) 100%)`,
        },
        ".gradient-wrapper": {
          background: `linear-gradient(38.73deg, rgba(var(--gradientColor1)) 0%, rgba(var(--gradientColor2)) 50%),
                       linear-gradient(141.27deg, rgba(var(--gradientColor3)) 50%, rgba(var(--gradientColor4)) 100%)`,
        },
        ".card-gradient-1": {
          border: `1px solid linear-gradient(45deg, rgb(0, 143, 104), rgb(250, 224, 66)) 1`,
        },
      });
    },
  ],
};
