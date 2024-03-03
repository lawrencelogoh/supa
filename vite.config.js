import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import fs from "fs";

const root = path.resolve(__dirname, "src");
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: root }],
  },
});
