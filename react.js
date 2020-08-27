module.exports = {
  extends: ['plugin:react/recommended', 'plugin:jsx-a11y/recommended'],
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  rules: {
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/display-name': 0
  },
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
  }
}
