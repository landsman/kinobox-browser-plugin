import { defineConfig, loadEnv } from 'vite';
import { resolve } from 'path';

const chromePlugin = resolve(__dirname, 'src/chrome-plugin');

export default defineConfig(({ mode }) => {
    // Load environment variables based on mode (development, production, etc.)
    const env = loadEnv(mode, process.cwd());
    console.log("VITE_MINIFY", env.VITE_MINIFY)
    return {
        build: {
            minify: env.VITE_MINIFY === 'true', // Use your custom env variable
            target: 'esnext',
            modulePreload: {
                polyfill: false
            },
            outDir: 'build/chrome-plugin',
            rollupOptions: {
                input: {
                    content: resolve(chromePlugin, 'content.js'),
                    background: resolve(chromePlugin, 'background.js'),
                },
                output: {
                    entryFileNames: '[name].js',
                }
            }
        },
        define: {
            'process.env': env // Pass the environment variables to process.env if needed
        }
    };
});
