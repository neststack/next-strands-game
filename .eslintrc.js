module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "next",
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:@next/next/recommended",
    "plugin:react/jsx-runtime"
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [".eslintrc.{js,cjs}", "**/*.js", "**/*.ts", "**/*.tsx"],
      parserOptions: {
        sourceType: "script"
      },
      rules: {
        "@typescript-eslint/padding-line-between-statements": [
          "error",
          {
            blankLine: "always",
            next: ["interface", "type"],
            prev: "*"
          }
        ],
        "no-duplicate-imports": "error",
        "padding-line-between-statements": [
          "error",
          { blankLine: "always", next: "*", prev: "block" },
          { blankLine: "always", next: "*", prev: ["const", "let", "var"] },
          {
            blankLine: "any",
            next: ["const", "let", "var"],
            prev: ["const", "let", "var"]
          },
          {
            blankLine: "always",
            next: "*",
            prev: "export"
          },
          {
            blankLine: "any",
            next: "export",
            prev: "export"
          },
          {
            blankLine: "always",
            next: "function",
            prev: "*"
          }
        ],
        "react/jsx-sort-props": [
          "error",
          {
            callbacksLast: true,
            ignoreCase: true,
            noSortAlphabetically: false,
            reservedFirst: true,
            shorthandFirst: true,
            shorthandLast: false
          }
        ],
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              [
                // `react` first, `next` second, then packages starting with a character
                "^react$",
                "^next",
                "^@/navigation",
                "^@[a-z]",
                "^[a-z]",
                // middlewares, reducers, store, hooks, context
                "^@/middlewares",
                "^@/reducer",
                "^@/store",
                "^@/hooks",
                "^@/context",
                // mui, emotion
                "^@emotion",
                "^@mui",
                "^@/theme",
                // Internal components and utils.
                "^@/app",
                "^@/components",
                "^@/views",
                "^@/utils",
                "^@/[a-z]",
                // types
                "^@/types",
                // Imports starting with `../`
                "^\\.\\.(?!/?$)",
                "^\\.\\./?$",
                // Imports starting with `./`
                "^\\./(?=.*/)(?!/?$)",
                "^\\.(?!/?$)",
                "^\\./?$",
                // Style imports
                "^.+\\.s?css$",
                // Side effect imports
                "^\\u0000"
              ]
            ]
          }
        ],
        "sort-keys-fix/sort-keys-fix": "warn"
      }
    }
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "@typescript-eslint",
    "react",
    "simple-import-sort",
    "sort-destructure-keys",
    "sort-keys-fix"
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    // Example: Enforce specific object property order
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
    "sort-destructure-keys/sort-destructure-keys": [
      2,
      {
        caseSensitive: true
      }
    ],
    "sort-keys": [2, "asc", { caseSensitive: true, natural: false }]
  }
};
