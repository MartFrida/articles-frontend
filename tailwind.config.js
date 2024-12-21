/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx, s?css}",],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('imgs/bg-texture.webp')",
      },
      fontFamily: {
        display: 'Roboto, sans-serif', // Adds a new `font-display` class
      },
      screens: {
        '3xl': '1600px', // Adds a new `3xl:` screen variant
      },
      colors: {
        'header-color': 'var(--dark-purple)',
        'light-purple': 'var(--light-purple)',
        'medium-purple': 'var(--medium-purple)',
        'medium-purple-hover': 'var(--medium-purple-hover)',
      }
    },
  },
  plugins: [],
}

