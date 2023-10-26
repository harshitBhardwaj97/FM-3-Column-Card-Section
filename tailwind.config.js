/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      brightOrange: "hsl(31, 77%, 52%)",
      darkCyan: "hsl(184, 100%, 22%)",
      veryDarkCyan: "hsl(179, 100%, 13%)",
      transparentWhite: "hsla(0, 0%, 100%, 0.75)",
      veryLightGray: "hsl(0, 0%, 95%)",
    },
    fontFamily: {
      bigShouldersDisplay: ['Big Shoulders Display', 'sans-serif'],
      lexendDeca: ['Lexend Deca', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};

/*
Bright orange: hsl(31, 77%, 52%)
Dark cyan: hsl(184, 100%, 22%)
Very dark cyan: hsl(179, 100%, 13%)

### Neutral

Transparent white (paragraphs): hsla(0, 0%, 100%, 0.75)
Very light gray (background, headings, buttons): hsl(0, 0%, 95%)

*/
