import config from "@anthony-j-castro/eslint-config";
import globals from "globals";

export default [
  ...config,
  { ignores: ["build/*"] },
  {
    files: ["eslint.config.mjs", "webpack.config.js"],
    languageOptions: { globals: { ...globals.node } },
  },
];
