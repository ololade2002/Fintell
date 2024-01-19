/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '400px',
        // => @media (min-width: 500px) { ... }
  
        'sm': '600px',
          // => @media (min-width: 600px) { ... }
    
        'md': '768px',
          // => @media (min-width: 768px) { ... }
    
        'lg': '992px',
          // => @media (min-width: 992px) { ... }  
    
        'xl': '1024px',
          // => @media (min-width: 1024px) { ... }
    
        '2xl': '1280px',
          // => @media (min-width: 1280px) { ... }
    
        '3xl': '1536px',
          // => @media (min-width: 1536px) { ... }
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        dmSans : ['DM Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}

