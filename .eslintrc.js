module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        indent: 'off',
        'linebreak-style': 0,
        quotes: ['error', 'single', {avoidEscape: true}],
        semi: ['error', 'always'],
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': ['error'],
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unused-vars': ['warn'],
        'react/display-name': 'off',
        'react/prop-types': ['error'],
        'prettier/prettier': 'error',
        '@typescript-eslint/no-explicit-any': ['warn'],
      },
    },
  ],
};
