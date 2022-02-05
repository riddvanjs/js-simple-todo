module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module"
    },
    extends: [
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended"
    ],
    rules: {
      "semi": "error",
      "quotes": ["ERROR", "single"],
      "object-curly-spacing": ["error", "always"],
      "curly": ["ERROR", "all"],
      "brace-style": "error",
      "indent": "error",
      "@typescript-eslint/no-var-requires": 0,
      "@typescript-eslint/no-explicit-any": 0,
      "@typescript-eslint/explicit-module-boundary-types": 0
    }
  };
