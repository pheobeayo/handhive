/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /** primary */
        "prosperity": "#9747FF",
        "forest": "#476520",
        /** base */
        "gypsum": "#FCF6F1",
        "sand": "#E7E3D4",
        "wood": "#655947",
        "fig": "#1E002B",
        /** functional */
        "snow": "#FFFFFF",
        "onyx": "#000000",
        "success": "#329F3B",
        "error": "#E70532",
        "disabled": "#9B9B9B",
        /** accent */
        "sky": "#7CC0FF",
        "citrus": "#FF9A51",
        "lotus": "#FFA3EB",
        "lavender": "#B490FF"
        
      },
      screens: {

        'xs': {'min' :'320', 'max' : "639"},
    
        'sm': {'min': '640px', 'max': '767px'},
        
        'md': {'min': '768px', 'max': '1023px'},
      
        'lg': {'min': '1024px', 'max': '1279px'},
        
        'xl': {'min': '1280px', 'max': '1535px'},
        
        '2xl': {'min': '1536px'},
        
        
      },
    },
  },
  plugins: [],
}
