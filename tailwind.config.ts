import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        /* ── Premium Wood Palette ───────────────────────── */
        walnut: {
          DEFAULT: "#3A271B", // Deep Walnut Brown
          50: "#F6F1EC",
          100: "#E9DDD1",
          200: "#CFB69D",
          300: "#B08F6E",
          400: "#8C6A49",
          500: "#6B4E33",
          600: "#523B26",
          700: "#3A271B",
          800: "#291B12",
          900: "#1A110B",
        },
        teak: {
          DEFAULT: "#C9A24B", // Teak Gold
          50: "#FBF6E9",
          100: "#F4E8C6",
          200: "#E9D293",
          300: "#DDBB61",
          400: "#C9A24B",
          500: "#AE8838",
          600: "#8C6C2A",
          700: "#6A511F",
        },
        cream: {
          DEFAULT: "#F4ECE0", // Warm Cream
          50: "#FDFBF7",
          100: "#F8F2E9",
          200: "#F4ECE0",
          300: "#EADFCD",
        },
        charcoal: {
          DEFAULT: "#1C1714", // Charcoal Black
          800: "#211A16",
          900: "#16110E",
        },
        /* shadcn tokens */
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        tamil: ["var(--font-tamil)", "var(--font-jakarta)", "sans-serif"],
      },
      fontSize: {
        "fluid-hero": "clamp(2.75rem, 6vw + 1rem, 6.5rem)",
        "fluid-h2": "clamp(2rem, 3.5vw + 0.5rem, 3.75rem)",
        "fluid-h3": "clamp(1.5rem, 2vw + 0.5rem, 2.25rem)",
      },
      spacing: {
        "13": "3.25rem",
      },
      transitionDuration: {
        "400": "400ms",
        "1100": "1100ms",
        "1200": "1200ms",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "4xl": "2rem",
      },
      backgroundImage: {
        "wood-grain":
          "repeating-linear-gradient(115deg, rgba(201,162,75,0.035) 0px, rgba(201,162,75,0.035) 2px, transparent 2px, transparent 9px)",
        "gold-sheen":
          "linear-gradient(110deg, #C9A24B 0%, #E9D293 35%, #C9A24B 70%, #AE8838 100%)",
        "hero-overlay":
          "linear-gradient(180deg, rgba(22,17,14,0.35) 0%, rgba(22,17,14,0.55) 45%, rgba(22,17,14,0.92) 100%)",
        "cream-fade":
          "linear-gradient(180deg, #FDFBF7 0%, #F4ECE0 100%)",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(58,39,27,0.18)",
        lift: "0 24px 60px -20px rgba(58,39,27,0.35)",
        gold: "0 12px 40px -12px rgba(201,162,75,0.45)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-22px) rotate(3deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "marquee": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
