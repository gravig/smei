import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
  input: "src/index.ts",
  output: [
    {
      file: "dist/bundle.esm.js",
      format: "module",
      exports: "named",
    },
    {
      file: "dist/bundle.cjs.js",
      format: "cjs",
      exports: "named",
    },
  ],
  plugins: [
    typescript({
      tsconfig: "./tsconfig.json",
      exclude: ["**/__tests__", "**/*.test.ts", "rollup.config.ts"],
    }),
  ],
});
