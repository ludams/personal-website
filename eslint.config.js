import eslintPluginAstro from "eslint-plugin-astro";
export default [
  ...eslintPluginAstro.configs["flat/jsx-a11y-recommended"],
  {
    files: ["*.astro"],
    parser: "astro-eslint-parser",
    parserOptions: {
      parser: "@typescript-eslint/parser",
      extraFileExtensions: [".astro"],
    },
  },
];
