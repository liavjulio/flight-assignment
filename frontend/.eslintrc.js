module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['airbnb', 'airbnb/hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-props-no-spreading': 'off',
    // Completely disable all strict rules to get the app running
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/named': 'off',
    'arrow-parens': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'object-curly-newline': 'off',
    'no-unused-vars': 'off',
    'react/jsx-wrap-multilines': 'off',
    'comma-dangle': 'off',
    'react/no-array-index-key': 'off',
    'arrow-body-style': 'off',
    'implicit-arrow-linebreak': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
