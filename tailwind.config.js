/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030303", // Deep black background
        surface: "#0A0A0A", // Card background
        border: "#1F1F1F", // Minimal border
        primary: {
          DEFAULT: "#4F46E5", // Indigo accent
          glow: "rgba(79, 70, 229, 0.15)",
        },
        secondary: "#3B82F6", // Blue accent
        accent: "#6366F1",
        muted: "#737373", // Muted text
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        'glow-gradient': 'radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.1) 0%, transparent 80%)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
