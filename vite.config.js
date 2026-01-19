import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    publicDir: 'resources',
    plugins: [
        tailwindcss(),
    ],
    build: {
        outDir: 'docs'
    },
    server: {
        watch: {
            usePolling: true
        }
    }
})
