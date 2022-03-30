module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    backgroundColor: (theme) => ({
      ...theme('colors'),
    }),
    textColor: (theme) => ({
      ...theme('colors'),
    }),
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')],
  corePlugins: {
    preflight: true,
  },
};
