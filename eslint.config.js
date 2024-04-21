import tseslint from 'typescript-eslint'
import js from '@eslint/js'
import prettier from 'eslint-config-prettier'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  {
    ignores: ['node_modules', 'dist', 'src/.vitepress/cache'],
  },
)
