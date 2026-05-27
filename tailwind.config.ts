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
        navy: {
          900: '#0A2342',
          700: '#1F3654',
          500: '#2F4E73',
        },
        beige: {
          500: '#D6B370',
          300: '#E7D3AD',
          100: '#F7F1E6',
        },
        luxe: {
          50: '#F7F3EE',
          100: '#EFE6DA',
          200: '#E2D2BC',
          300: '#CDB291',
          500: '#A97A50',
          700: '#7E5536',
          900: '#2A211D',
        },
        sea: {
          100: '#DDEBED',
          300: '#8FB6BE',
          500: '#3D6F7A',
          700: '#1F4E58',
        },
        green: {
          50: '#30AF5B',
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
          50: '#FEC601',
        },
      },
      backgroundImage: {
        'bg-img-1': "url('/img-1.png')",
        'bg-img-2': "url('/img-2.png')",
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
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
