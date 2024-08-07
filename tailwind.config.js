/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        // 'md': '500',
        'lg': '1250px',
        'mid': { 'min': '600px', 'max': '1250px' },
       
      },
      backgroundImage: {
        "hero-pattern1": "url('/src/assets/backgrounds_images/bg_22.png')",
        "hero-pattern2": "url('/src/assets/backgrounds_images/bg5.jpg')",
        "hero-pattern3": "url('/src/assets/backgrounds_images/bg_222.jpg')",
        "hero-pattern4": "url('/src/assets/backgrounds_images/bg_1.jpg')",
        "hero-pattern5": "url('/src/assets/backgrounds_images/69.jpg')",
        "sphere-img": "url('/src/assets/backgrounds_images/sphere.png')",
        "white-img": "url('/src/assets/backgrounds_images/whiteback.jpg')",
        contactbg: "url('/src/assets/backgrounds_images/contactbg.jpg')",
        aboutbg: "url('/src/assets/backgrounds_images/aboutbg.jpg')",
        aboutbg2: "url('/src/assets/backgrounds_images/aboutbg2.jpg')",
        servicebg: "url('/src/assets/backgrounds_images/servicebg.jpg')",
        servicebg2: "url('/src/assets/backgrounds_images/servicebg2.jpg')",
        servicebg3: "url('/src/assets/backgrounds_images/services3.jpg')",
        landingbg: "url('/src/assets/backgrounds_images/landingbg2.jpg')",
        termbg: "url('/src/assets/backgrounds_images/termbg.jpg')",
      },
      colors: {
        "yellow-custom": "#FFD700", // Example custom yellow color
        "sky-blue-custom": "#87CEEB", // Example custom sky blue color
      },
      fontFamily: {
        // concert: ['"Concert One"', 'sans-serif'],
        questrial: ["Questrial", "sans-serif"],
        "varela-round": ['"Varela Round"', "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        sans: ["Roboto", "sans-serif"],
        serif: ["Merriweather", "serif"],
        "open-sans": ['"Open Sans"', "sans-serif"],
        lilita: ['"none"'],
        // lilita: ['"Lilita One"', 'cursive'],
      },
    },
  },
  variants: {},
  plugins: [],
};
