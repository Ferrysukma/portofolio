import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import nextPlugin from '@next/eslint-plugin-next';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    name: 'Next.js Custom Rules',
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
    },
  }
]);

export default eslintConfig;
