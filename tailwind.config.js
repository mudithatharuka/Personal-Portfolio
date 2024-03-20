/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
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
        txtPrimary: "rgba(var(--txtPrimary))",
        txtSecondary: "rgba(var(--txtSecondary))",
        txtTertiary: "rgba(var(--txtTertiary))",
        txtQuaternary: "rgba(var(--txtQuaternary))",
      },
      textColor: {},
    },
  },
  plugins: [],
};
