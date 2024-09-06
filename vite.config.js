import { defineConfig } from 'vite';
import { resolve } from 'path';

const chromePlugin = resolve(__dirname, 'src/chrome-plugin');

export default defineConfig({
    build: {
        outDir: 'build/chrome-plugin',
        rollupOptions: {
            input: {
                csfd: resolve(chromePlugin, 'csfd.js'),
                seznam: resolve(chromePlugin, 'seznam.js'),
                background: resolve(chromePlugin, 'background.js'),
            },
            output: {
                entryFileNames: '[name].js',
            }
        }
    },
    publicDir: 'public'
});