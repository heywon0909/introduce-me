import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/introduce-me/',
    build: {
        assetsDir: path.resolve(__dirname, 'build'),
        rollupOptions: {
            input: path.resolve(__dirname, 'index.html'),
            output: {
                dir: 'build',
                entryFileNames: '[name]-[hash].js',
                chunkFileNames: 'assets/[name]-[hash].js',
                assetFileNames: '[name]-[hash][extname]',
            },
        },
    },
    plugins: [react()],
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, 'src') },
            {
                find: '@components',
                replacement: path.resolve(__dirname, 'src/components'),
            },
            {
                find: '@pages',
                replacement: path.resolve(__dirname, 'src/pages'),
            },
            {
                find: '@assets',
                replacement: path.resolve(__dirname, 'public/assets'),
            },
            {
                find: '@utils',
                replacement: path.resolve(__dirname, 'src/utils'),
            },
            {
                find: '@hooks',
                replacement: path.resolve(__dirname, 'src/hooks'),
            },
            {
                find: '@common',
                replacement: path.resolve(__dirname, 'src/common'),
            },
            {
                find: '@error',
                replacement: path.resolve(__dirname, 'src/error'),
            },
        ],
    },
})
