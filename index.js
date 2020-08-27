module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    './prettier',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  plugins: ['babel', 'import'],
  rules: {
    'import/no-unresolved': [2, { commonjs: true }],
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/named': 'off'
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        },

        // typescript-eslint specific options
        warnOnUnsupportedTypeScriptVersion: true
      },
      // NOTICE: Next config cannot be applied because react-scripts@^2.1.8 hoists an older versions of eslint-plugin-import
      plugins: ['@typescript-eslint'],
      extends: ['plugin:import/typescript'],
      // If adding a typescript-eslint version of an existing ESLint rule,
      // make sure to disable the ESLint rule here.
      settings: {
        'import/resolver': {
          node: {
            // By default eslint-plugin-import supports only .js
            // Supporting other extensions must be declared here
            extensions: ['.js', '.jsx', '.ts', '.tsx']
          }
        },
        react: {
          pragma: 'React',
          version: 'detect'
        }
      },
      rules: {
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/member-delimiter-style': 'off'
      }
    }
  ]
}
