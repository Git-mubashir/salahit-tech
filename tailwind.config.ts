import type { Config } from "tailwindcss";

// Brand palette pulled from the SalahIT Tech logo:
// deep navy shield, blue-to-green circuit gradient, gold ring.
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0F2A4A",
          light: "#173A63",
          dark: "#0A1D33",
        },
        steel: "#2D6CB0",
        teal: "#1F9D75",
        gold: "#C99A2E",
        ink: "#141B26",
        slate: "#5B6472",
        mist: "#F5F8FA",
        line: "#E2E8F0",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #2D6CB0 0%, #1F9D75 100%)",
      },
      maxWidth: {
        content: "72rem",
        prose: "42rem",
      },
    },
  },
  plugins: [],
};

export default config;
