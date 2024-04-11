const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./build/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                "sans": ['"Poppins"', ...defaultTheme.fontFamily.sans],
            },
        },
        colors: {
            "white": "#ffffff",
            "primary": "#1CBCCF",
            "mine-shaft": "#333333",
            "abbey": "#4c5354",
            "gray": "#808080",
            "alto": "#DCDCDC"
        },
        boxShadow: {
            "3xl": "0 0 40px rgba(0, 0, 0, 0.1)"
        }
    },
    plugins: [],
}
