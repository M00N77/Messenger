import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import jsxA11y from 'eslint-plugin-jsx-a11y'

export default tseslint.config(

  { ignores: ['dist'] },


  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    

    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'react': react,
      'simple-import-sort': simpleImportSort,
      'jsx-a11y': jsxA11y,
    },


    settings: {
      react: { version: 'detect' },
    },

    rules: {

      ...reactHooks.configs.recommended.rules,
      'react-hooks/exhaustive-deps': 'warn', 

      // --- REACT (База) ---
      ...react.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off', 
      'react/prop-types': 'off',


      ...jsxA11y.configs.recommended.rules,
      

      'simple-import-sort/imports': 'error', 
      'simple-import-sort/exports': 'error', 

      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)
