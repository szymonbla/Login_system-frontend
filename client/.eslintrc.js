module.exports = {
  extends: ["prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error"],
    "linebreak-style": 0,
    "max-len": ["error", { code: 100 }],
    "react/jsx-one-expression-per-line": "off",
  },
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: true,
  },
};
