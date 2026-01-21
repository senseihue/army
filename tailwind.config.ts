import forms from "@tailwindcss/forms"
import { cyan, amber, red, sky, gray, green } from "tailwindcss/colors"

import type { Config } from "tailwindcss"

export const colors = {
  primary: cyan,
  secondary: gray,
  success: green,
  warning: amber,
  danger: red,
  info: sky,
  blue: {
    ateneo: "#0A4D67",
    bondi: "#0099B5",
    bright: "#E6F0F3",
    command: "#0078B5",
    light: "#9BCAE2",
    midnight: "#013D8C",
    moonstone: "#6CB7C7"
  },
  gray: {
    olive: "#3D3D3D",
    sand: "#737373",
    1: '#70707a',
    2: '#313135',
  },
  green: {
    benzol: "#00D066",
    texas: "#10A230"
  }
}

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.vue", "./app.vue", "./error.vue", "./app.config.{js,ts,mjs}"],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ["Inter", "sans-serif"]
      },
      screens: {
        "3xl": "1920px"
      }
    }
  },
  plugins: [forms({ strategy: "class" })]
}

export default config
