/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        slideDown: "slideDown 1.5s ease-in-out forwards",
      },
      keyframes: {
        slideDown: {
          from: {
            transform: "translateY(-100%)",
            opacity: 0,
          },
          to: {
            transform: "translateY(0)",
            opacity: 100,
          },
        },
      },
    },
  },
  plugins: [],
};
