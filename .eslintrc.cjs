module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:react/recommended',
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsConfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: [
    '.eslintrc.cjs',
    'next.config.js',
    'postcss.config.js',
    'out/',
    'node_modules/',
    'tailwind.config.ts',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-loss-of-precision': 'error',
    'no-unused-vars': ['error', {varsIgnorePattern: '_.*', argsIgnorePattern: '_.*'}],
    '@typescript-eslint/no-unused-vars': ['error', {varsIgnorePattern: '_.*', argsIgnorePattern: '_.*'}],
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
      {
        selector: 'import',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'enumMember',
        format: ['PascalCase'],
      },
      {
        selector: 'function',
        modifiers: ['exported'],
        format: ['PascalCase', 'camelCase'],
      },
      {
        selector: 'variable',
        modifiers: ['exported', 'const'],
        format: ['PascalCase', 'camelCase'],
      },
    ],
  },
}
