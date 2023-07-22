import { InlineConfig, UserConfig, defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    environment: "jsdom",
  },
} as VitestConfigExport);
