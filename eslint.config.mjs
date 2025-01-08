// General imports
import globals from 'globals'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
// This is still needed until 'eslint-plugin-react-hooks' exports a recommended flat config.
import {FlatCompat} from '@eslint/eslintrc'

// Rules/plugin imports
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettierConfig from 'eslint-config-prettier'
import react from 'eslint-plugin-react'

// TODO: Once eslint-plugin-react-hooks supports flat config, this can be eliminated.
// And so can the dev-dependency on @eslint/eslintrc
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  js.configs.recommended,
  prettierConfig,
  react.configs.flat.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    ignores: [
      '.next/',
      '.prettierrc.js',
      'eslint.config.mjs',
      'next.config.mjs',
      'postcss.config.cjs',
      'tailwind.config.ts',
      'out/',
      '**/node_modules/',
    ],
  },
  ...compat.extends('plugin:react-hooks/recommended'),
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
      },

      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        project: true,
        tsConfigRootDir: __dirname,
      },
    },

    settings: {
      'import/resolver': {
        typescript: {},
      },

      react: {
        version: 'detect',
      },
    },

    rules: {
      'no-loss-of-precision': 'error',

      'react/react-in-jsx-scope': 'off',

      'no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '_.*',
          argsIgnorePattern: '_.*',
        },
      ],

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '_.*',
          argsIgnorePattern: '_.*',
        },
      ],

      '@typescript-eslint/switch-exhaustiveness-check': [
        'error',
        {
          considerDefaultExhaustiveForUnions: true,
        },
      ],

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
  },
]
