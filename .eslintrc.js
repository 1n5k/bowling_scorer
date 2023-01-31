module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  env: {
    es2016: true
  },
  parserOptions: {
    emcaVersion: "2016",
    sourceType: "module",
    project: "./tsconfig.eslint.json",
    tsconfigRootDir: __dirname
  },
  ignorePatterns: ["dist"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  rules: {
    "no-console": "error",
    semi: ["error", "always"],
    "@typescript-eslint/quotes": ["error", "double"]
  }
};
