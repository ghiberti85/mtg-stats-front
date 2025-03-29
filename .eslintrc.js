module.exports = {
    ignorePatterns: ['jest.config.cjs', 'jest.setup.js'],
    extends: ['next', 'plugin:@typescript-eslint/recommended'],
    overrides: [
      {
        files: ['jest.config.cjs'],
        rules: {
          '@typescript-eslint/no-require-imports': 'off'
        }
      }
    ]
  };
  