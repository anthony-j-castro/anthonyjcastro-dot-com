import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";
import packageJson from "eslint-plugin-package-json";
import { importX } from "eslint-plugin-import-x";
import perfectionist from "eslint-plugin-perfectionist";
import rules from "./eslint-rules.js";
import stylistic from "@stylistic/eslint-plugin";

export default defineConfig([
  globalIgnores(["dist"]),

  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "import-x": importX,
      "@stylistic": stylistic,
      "import-x": importX,
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.stylisticTypeChecked,
      importX.flatConfigs.recommended,
      importX.flatConfigs.typescript,
      reactHooks.configs.flat.recommended,
      perfectionist.configs["recommended-natural"],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: "latest",
      globals: globals.browser,
      parserOptions: {
        projectService: true,
      },
      sourceType: "module",
    },
    rules: {
      ...rules,
    },
  },
  {
    files: ["eslint-rules.js"],
    plugins: {
      perfectionist,
    },
    rules: {
      "perfectionist/sort-objects": ["error", { newlinesBetween: 0 }],
    },
  },
  {
    extends: [packageJson.configs.recommended],
    files: ["package.json"],
    rules: {
      "package-json/require-description": "off",
    },
  },
]);
