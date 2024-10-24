const eslintPlugin = require("./eslint-plugin");

const globals = require("globals");

module.exports = [
  {
    ignores: [
      "**/node_modules/**",
      "**/.expo/**",
      "**/dist/**",
      "**/web-build/**",
    ],
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
        React: true,
        JSX: true,
      },
    },
    plugins: {
      react: require("eslint-plugin-react"),
      "react-hooks": require("eslint-plugin-react-hooks"),
      "react-native": require("eslint-plugin-react-native"),
      "custom-rules": eslintPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "custom-rules/upper-snake-case-keys": "error",
      "custom-rules/no-hardcoded-strings": "error",

      // "no-hardcoded-strings": noHardcodedStrings,

      // React rules
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // React Native rules
      "react-native/no-unused-styles": "warn",
      "react-native/split-platform-components": "warn",
      "react-native/no-inline-styles": "warn",
      "react-native/no-color-literals": "warn",
      "react-native/no-raw-text": [
        "warn",
        {
          skip: ["Text"],
        },
      ],

      // General rules
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },
];

// module.exports = {
//   root: true,
//   extends: [
//     "eslint:recommended",
//     "plugin:react/recommended",
//     "plugin:react-hooks/recommended",
//     "plugin:@typescript-eslint/recommended",
//     "plugin:react-native/all",
//     "@react-native",
//     "prettier",
//   ],
//   parser: "@typescript-eslint/parser",
//   plugins: [
//     "react",
//     "react-native",
//     "react-hooks",
//     "@typescript-eslint",
//     "prettier",
//     "import",
//   ],
//   settings: {
//     react: {
//       version: "detect",
//     },
//   },
//   env: {
//     "react-native/react-native": true,
//     jest: true,
//     browser: true,
//     es2021: true,
//     node: true,
//   },
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: 2021,
//     sourceType: "module",
//   },
//   rules: {
//     // React Native specific rules
    // "react-native/no-unused-styles": "error",
    // "react-native/no-inline-styles": "error",
    // "react-native/no-raw-text": ["error", { skip: ["TextInput"] }],
    // "react-native/no-single-element-style-arrays": "error",
    // "react-native/split-platform-components": "error",
    // "react-native/no-color-literals": "error",

    // // React rules
    // "react/prop-types": "off", // Turn off if using TypeScript
    // "react/react-in-jsx-scope": "off", // Not needed in newer React versions
    // "react/display-name": "error",
    // "react/no-deprecated": "error",
    // "react/jsx-key": "error",
    // "react/jsx-no-duplicate-props": "error",
    // "react/jsx-no-undef": "error",
    // "react/no-direct-mutation-state": "error",
    // "react/no-typos": "error",

    // // React Hooks rules
    // "react-hooks/rules-of-hooks": "error",
    // "react-hooks/exhaustive-deps": "warn",

    // // TypeScript rules
    // "@typescript-eslint/no-explicit-any": "error",
    // "@typescript-eslint/explicit-module-boundary-types": "off",
    // "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    // "@typescript-eslint/no-non-null-assertion": "error",
    // "@typescript-eslint/no-empty-interface": "error",

    // // Import rules
    // "import/no-cycle": "error",
    // "import/no-unresolved": "error",
    // "import/first": "error",
    // "import/no-duplicates": "error",
    // "import/order": [
    //   "error",
    //   {
    //     groups: [
    //       "builtin",
    //       "external",
    //       "internal",
    //       "parent",
    //       "sibling",
    //       "index",
    //     ],
    //     "newlines-between": "always",
    //     alphabetize: {
    //       order: "asc",
    //       caseInsensitive: true,
    //     },
    //   },
    // ],

    // // General rules
    // "no-console": ["warn", { allow: ["warn", "error"] }],
    // "no-debugger": "error",
    // "no-alert": "error",
    // "prefer-const": "error",
    // "no-var": "error",
    // "no-unused-vars": "off", // Use TypeScript version instead
    // eqeqeq: ["error", "always"],
    // curly: ["error", "all"],
    // "max-len": [
    //   "error",
    //   {
    //     code: 100,
    //     ignoreUrls: true,
    //     ignoreStrings: true,
    //     ignoreTemplateLiterals: true,
    //     ignoreRegExpLiterals: true,
    //   },
    // ],
//   },
//   overrides: [
//     {
//       files: ["*.ts", "*.tsx"],
//       rules: {
//         "@typescript-eslint/explicit-function-return-type": ["error"],
//       },
//     },
//     {
//       files: ["*.test.ts", "*.test.tsx", "*.spec.ts", "*.spec.tsx"],
//       env: {
//         jest: true,
//       },
//       rules: {
//         "@typescript-eslint/no-explicit-any": "off",
//       },
//     },
//   ],
// };