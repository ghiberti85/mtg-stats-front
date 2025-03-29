module.exports = {
    content: ["src/**/*.{ts,tsx}", "app/**/*.{ts,tsx}"],
    theme: { extend: {} },
    plugins: [import("eslint-plugin-tailwindcss")],
  };
  