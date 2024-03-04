import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import httpAuth from "vite-plugin-http-basic-auth";

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
        },
      ),
    ],
  };
});
