/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
     './node_modules/flowbite/**/*.js',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.html',
    'path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    'path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px'
      }
    },
    // screens: {
    //   sm: '640px',
    //   md: '768px',
    //   lg: '960px',
    //   xl: '1200px'
    // },
    extend: {
      colors: {

        pr2:'#0f0f0f',
        pr1:'#c7ab5a',
        primary: '#131424',
        secondary: '#393A47',
        accent: '#F13024',
        semgold: '#CFB53B',
        gold1: '#AA8061',
        gold2: '#D6AA84',
        gold3: '#E6C7A2',
        blue1: '#051333',
        blue2: '#122356'
      },
      backgroundImage: {
        explosion: 'url("/bg-explosion.png")',
        circles: 'url("/bg-circles.png")',
        circleStar: 'url("/circle-star.svg")',
        site: 'url("/site-bg.svg")'
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite'
      },
      fontFamily: {
        Montserrat: [`var(--font-Montserrat)`, 'sans-serif'],
        poppins: [`var(--font-poppins)`, 'sans-serif']
      }
    }
  },
   plugins: [require('flowbite/plugin')]
}
