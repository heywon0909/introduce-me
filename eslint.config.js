import tseslint from 'typescript-eslint'
import everything from 'eslint-config-everything'

export default tseslint.config(
    tseslint.configs.strictTypeChecked,
    tseslint.configs.stylisticTypeChecked,
    {
        ignores: [
            '**/.history/**', // ✅ .history 폴더 무시
            '**/node_modules/**',
            '**/dist/**',
            '**/build/**',
            '**/public/**',
            '**/eslint.config.js',
            '**/.yarn/**',
        ],
    },
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        extends: [everything],
        rules: {
            '@typescript-eslint/await-thenable': 'off',
        },
    }
)
