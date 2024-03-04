import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import httpAuth from "vite-plugin-http-basic-auth";
import { fileURLToPath, URL } from "url";
import * as path from "path";

const root = path.resolve(__dirname, "src");
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(),
      httpAuth(
        [
          {
            username: "larry123",
            password: "r53kFxRpoe",
          },
        ],
        {
          realm: env.VITE_AUTH_REALM,
          useInServer: true, // True by default
          useInPreview: true, // True by default
        }
      ),
    ],
    resolve: {
      alias: [
        {
          find: "@",
          replacement: fileURLToPath(new URL("./src", import.meta.url)),
        },
        {
          find: "@assets",
          replacement: fileURLToPath(
            new URL("./src/shared/assets", import.meta.url)
          ),
        },
        {
          find: "@cmp",
          replacement: fileURLToPath(
            new URL("./src/shared/cmp", import.meta.url)
          ),
        },
        {
          find: "@stores",
          replacement: fileURLToPath(
            new URL("./src/shared/stores", import.meta.url)
          ),
        },
        {
          find: "@use",
          replacement: fileURLToPath(
            new URL("./src/shared/use", import.meta.url)
          ),
        },
      ],
    },
  };
});
