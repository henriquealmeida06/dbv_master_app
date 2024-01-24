/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'ceuDia':'url("./img/ceu-escuro.svg")',
        
      },
      padding:{
        'px90':'90px',
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
      },
      width:{
        'px420':'454px',
        'px400':'350px',
      }
    },
  },
  plugins: [],
}