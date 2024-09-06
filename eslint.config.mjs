import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
    ignores: [
      '**/vite.config.js',
      '**/jest.config.js',
      '**/node_modules/**',
      '**/dist/**',
      '**/coverage/**',
      '**/build/**',
    ],
  },
];
