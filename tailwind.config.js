// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const config = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#d00b53",
          secondary: "#d62a61",
        },
      },
    },
    plugins: [],
  };
  
  export default config;
  