
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D1B2A",     // 🔵 Site Background
        secondary: "#1B263B",   // 🔹 Section/Card Backgrounds
        accent: "#E63946",      // 🔴 Call-to-action Buttons, Important Highlights
        highlight: "#FFB703",   // 🟡 Hover effects, Icons, UI Highlights
        muted: "#BFC6D1",       // ⚪ Placeholder text, Subtle borders
        heading: "#F1FAEE",     // ✳️ Main Headings (White-Cream tone for contrast)
        text: "#DDE2E9",        // 📝 Normal paragraph text
        drama: "#7209B7",       // 🎭 Drama-related sections or badges
        music: "#3A86FF",       // 🎵 Music-related sections or badges
        dance: "#FF006E",       // 💃 Dance-related sections or badges
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
        lora: ['Lora', 'serif'],
        baskerville: ['Libre Baskerville', 'serif'],
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            backgroundSize: '200% 200%',
            backgroundPosition: 'left center',
          },
          '50%': {
            backgroundSize: '200% 200%',
            backgroundPosition: 'right center',
          },
        },
        fadeInUp: {
          '0%': {
            opacity: 0,
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        combined: {
          '0%': {
            opacity: 0,
            transform: 'translateY(20px)',
            backgroundSize: '200% 200%',
            backgroundPosition: 'left center',
          },
          '50%': {
            backgroundSize: '200% 200%',
            backgroundPosition: 'right center',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
            backgroundSize: '200% 200%',
            backgroundPosition: 'left center',
          },
        },
      },
      animation: {
        gradient: 'gradient 4s ease infinite',
        fadeInUp: 'fadeInUp 4s ease-out forwards',
        gradientFadeInUp: 'combined 2s ease once',
      }
    },
  },
  plugins: [],
}
