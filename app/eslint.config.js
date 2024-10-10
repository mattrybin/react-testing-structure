import tsParser from "@typescript-eslint/parser"
import tsPlugin from "@typescript-eslint/eslint-plugin"
import globals from "globals"

export default [
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.browser,
        cy: "readonly",
        Cypress: "readonly",
        describe: "readonly",
        it: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        context: "readonly",
        before: "readonly"
      }
    },
    plugins: {
      "@typescript-eslint": tsPlugin
    }
  },
  {
    ignores: ["build", "dist", "node_modules"]
  }
]
