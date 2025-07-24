module.exports = {
  root: true, 
  parser: '@typescript-eslint/parser', 
  parserOptions: {
    ecmaVersion: 2020, 
    sourceType: 'module', 
    project: ['./tsconfig.json'], 
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', 
    'plugin:prettier/recommended', 
  ],
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  rules: {
    'prettier/prettier': ['error'],
    '@typescript-eslint/no-unused-vars': ['warn'],
  },
  ignorePatterns: ['node_modules', 'dist'],
};
