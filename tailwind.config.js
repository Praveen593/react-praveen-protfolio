
/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/components/Header.js",
    "./src/components/Body.js",
    "./src/components/About.js",
    "./src/components/Skills.js",
    "./src/components/Projects.js",
    "./src/components/contact.js"
  ],
  theme: {
    extend: {
    },
    fontFamily: {
      PriFont : ['WorkSans'],
      SecFont : ['SpaceGrotesk'],
      DecoFont :['CastoroTitling']
    }
  },
  plugins: [
    require("@xpd/tailwind-3dtransforms")
  ],
}

