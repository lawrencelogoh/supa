module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: {
    react: { version: "18.2" },
    "import/resolver": {
      node: {
        extensions: [".js", ".vue", ".ts", ".d.ts"],
      },
      alias: {
        extensions: [".vue", ".js", ".ts", ".scss", ".d.ts"],
        map: [
          ["@/assets", "./src/assets"],
          ["@/base", "./src/base"],
          ["@/canvas", "./src/canvas"],
          ["@/components", "./src/components"],
          ["@/Fonts", "./src/Fonts"],
          ["@/stores", "./src/stores"],
        ],
      },
    },
  },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      // 'warn',
      { allowConstantExport: true },
    ],
  },
};
