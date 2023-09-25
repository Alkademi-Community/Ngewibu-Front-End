import type { Config } from "tailwindcss"

export default <Partial<Config>>{
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem"
      }
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      heading: ["Catamaran"],
      carterOne: ["Carter One"],
      outfit: ["Outfit"]
    },
    extend: {
      colors: {
        primary: "#87CEEB",
        secondary: "#70ACC4",
        black: "#333333",
        white: {
          DEFAULT: "#F9F9F9",
          soft: "#F7F7F7"
        },
        gray: {
          soft: "#F3F3F3",
          dark: "#C9C9C9",
          light: "#D3D3D3"
        }
      },
      boxShadow: {
        small: "0 0 4px 0 rgba(0, 0, 0, .25)"
      }
    },
    plugins: []
  }
}
