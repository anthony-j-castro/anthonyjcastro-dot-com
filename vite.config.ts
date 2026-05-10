import path from "node:path";
import globalData from "@csstools/postcss-global-data";
import babel from "@rolldown/plugin-babel";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import customMedia from "postcss-custom-media";
import { defineConfig } from "vite";

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
