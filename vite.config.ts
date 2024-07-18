import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/introduce-me/',
    build: {
        rollupOptions: {
            input: path.resolve(__dirname, 'index.html'),
            output: {
                dir: 'build',
                entryFileNames: '[name]-[hash].js',
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
        ],
    },
})
