import { defineProject, mergeConfig } from "vitest/config";
// @ts-expect-error
import { baseConfig } from "./base-config.ts";

export const uiConfig = mergeConfig(
  baseConfig,
  defineProject({
    test: {
      environment: "jsdom",
      setupFiles: ["../../packages/vitest-config/configs/vitest-setup.ts"],
    },
  }),
);

// import react from "@vitejs/plugin-react";
// import { defineConfig } from "vitest/config";

// // See https://vitest.dev/config/#configuration
// export default defineConfig({
//   plugins: [react()],
//   test: {
//     environment: "jsdom",
//     setupFiles: ["./vitest-setup.ts"],
//   },
// });
