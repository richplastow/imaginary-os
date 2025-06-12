import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

// See https://vitest.dev/config/#configuration
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest-setup.ts"],
  },
});
