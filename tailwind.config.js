/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: 
    {
      backgroundColor: theme => ({
        'light-gray' : 'var(--light-gray)' ,   
        'grayish-blue' : 'var(--grayish-blue)' ,     
        'moderate-blue' : 'var(--moderate-blue)' ,              
      }),
      textColor: theme => ({
        'light-gray' : 'var(--light-gray)' ,
        'grayish-blue' : 'var(--grayish-blue)' ,
        'moderate-blue' : 'var(--moderate-blue)' ,              
      })
    },
  },
  plugins: [],
}

