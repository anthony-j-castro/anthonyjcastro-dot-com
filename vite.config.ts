import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import path from "node:path";
import customMedia from "postcss-custom-media";
import globalData from "@csstools/postcss-global-data";

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        globalData({
          files: ["./src/media-queries.css"],
        }),
        customMedia(),
      ],
    },
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
});
