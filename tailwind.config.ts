/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#043F48',
          90: '#292C27',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          50: '#DFFAFF',
        },
        primary: "#002329",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        mobilenav: "rgba(140, 226, 241, 1)",
        navcolor: "rgba(0, 35, 41, 1)",
        mobiletitle: "#043F48",
        herocolor: "#DFFAFF",
      },
      fontFamily: {
        poppins: ["Poppins"],
        inter: ["Inter"],
        montserrat: ["Montserrat"],
      },
      backgroundImage: {
         'bg-img-1': "url('/bghero.svg')",
         'bg-img-2': "url('/Component 1.png')",
         'bg-img-3': "url('/footerBackground.png')",
         'bg-img-4': "url('/BG.png')",
         'bg-img-5': "url('/BGFooterMobile.svg')",
         'bg-img-6': "url('/bubblesBg.png')",
         'bg-img-7': "url('/bubblesBg2.png')"
        // 'feature-bg': "url('/feature-bg.png')",
        // pattern: "url('/pattern.png')",
        // 'pattern-2': "url('/pattern-bg.png')",
      },
      backgroundPosition: {
        'custom-bottom': 'center 90%', /* Adjust 30% as needed */
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};

