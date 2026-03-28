/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        on_primary: "#e2e2e2",
        primary_fixed: "#5e5e5e",
        primary_container: "#3b3b3b",
        on_primary_container: "#ffffff",
        surface: "#f9f9f9",
        on_surface: "#1b1b1b",
        surface_container_lowest: "#ffffff",
        surface_container_low: "#f3f3f3",
        surface_container_high: "#e8e8e8",
        surface_container_highest: "#e2e2e2",
        outline: "#777777",
        outline_variant: "#c6c6c6",
        error: "#ba1a1a",
        error_container: "#ffdad6",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        body: ['Inter', "sans-serif"],
      },
      fontSize: {
        "display-lg": ["3.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "body-md": ["0.875rem", { lineHeight: "1.6" }],
        "label-md": [
          "0.75rem",
          { lineHeight: "1.4", letterSpacing: "0.05em", fontWeight: "600" },
        ],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      backdropBlur: {
        nav: "12px",
      },
      boxShadow: {
        paper: "0 20px 40px rgba(0,0,0,0.06)",
      },
      transitionDuration: {
        button: "150ms",
      },
    },
  },
  plugins: [],
};
