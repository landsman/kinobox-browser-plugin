import { defineConfig, loadEnv } from 'vite';
import { resolve } from 'path';

const src = resolve(__dirname, 'src');

export default defineConfig(({ mode }) => {
  // Load environment variables from the monorepo root
  const env = loadEnv(mode, resolve(__dirname, '../..'));
  console.log('VITE_MINIFY', env.VITE_MINIFY);
  return {
    build: {
      minify: env.VITE_MINIFY === 'true',
      target: 'esnext',
      modulePreload: {
        polyfill: false,
      },
      outDir: 'build/chrome-plugin',
      rollupOptions: {
        input: {
          content: resolve(src, 'content.js'),
          background: resolve(src, 'background.js'),
        },
        output: {
          entryFileNames: '[name].js',
          format: 'es',
        },
      },
    },
    define: {
      'process.env': env,
    },
  };
});
