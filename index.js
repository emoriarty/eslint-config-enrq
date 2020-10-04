module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "./prettier",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  plugins: ["babel", "import"],
  rules: {
    "import/no-unresolved": [2, { commonjs: true }],
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "import/named": "off",
  },
};
