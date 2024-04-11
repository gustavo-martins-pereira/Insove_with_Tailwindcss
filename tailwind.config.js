const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./build/**/*.{html,js}"],
    theme: {
        extend: {
            backgroundImage: {
                "hero": "url('/build/assets/images/hero/hero.png')",
            },
            fontFamily: {
                "sans": ['"Poppins"', ...defaultTheme.fontFamily.sans],
            },
        },
        colors: {
            "white": "#ffffff",
            "primary": "#1CBCCF",
            "secondary": "#90C6CD",
            "mine-shaft": "#333333",
            "abbey": "#4c5354",
            "rolling-stone": "#777F81",
            "gray": "#808080",
            "gull-gray": "#9AB4B7",
            "alto": "#DCDCDC",
            "mystic": "#E8F0F1",
        },
        boxShadow: {
            "3xl": "0 0 40px rgba(0, 0, 0, 0.1)"
        }
    },
    plugins: [],
}
