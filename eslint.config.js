const config = require("@anthony-j-castro/eslint-config");
const globals = require("globals");

module.exports = [
  ...config,
  {
    ignores: ["build/*"],
  },
  {
    files: ["eslint.config.js", "webpack.config.js"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];
