/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {}, // This points back to the standard v3 engine
    autoprefixer: {},
  },
};

export default config;