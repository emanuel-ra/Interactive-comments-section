/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: 
    {
      backgroundColor:theme => ({
        'light-gray' : 'var(--light-gray)' ,   
        'grayish-blue' : 'var(--grayish-blue)' ,     
        'moderate-blue' : 'var(--moderate-blue)' ,
        'light-grayish-blue' : 'var(--light-grayish-blue)' ,
        'very-light-gray' : 'var(--very-light-gray)' ,  
        'dark-blue' : 'var(--dark-blue)' ,  
        'soft-red' : 'var(--soft-red)' ,  
      }),
      textColor:theme => ({
        'light-gray' : 'var(--light-gray)' ,
        'grayish-blue' : 'var(--grayish-blue)' ,
        'moderate-blue' : 'var(--moderate-blue)' ,              
      }),
      fontFamily:theme => ({
        'Rubik': ['Rubik', 'sans-serif'] ,
      }) ,
      textColor:theme => ({
        'grayish-blue' : 'var(--grayish-blue)' ,    
        'moderate-blue' : 'var(--moderate-blue)' ,            
      })
    },
  },
  plugins: [],
}

