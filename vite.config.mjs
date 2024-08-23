import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';

export default defineConfig({
  build: {
    outDir: 'build',
  },
  server: {
    hmr: {
      overlay: false, // Disable the error overlay
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser global polyfills
      define: {
        global: 'globalThis',
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
          process: true,
          crypto: true, // Include crypto polyfill
          stream: true, // Include stream polyfill
        }),
        NodeModulesPolyfillPlugin(),
      ],
    },
  },
  resolve: {
    alias: {
      buffer: 'buffer',
      crypto: 'crypto-browserify',
      stream: 'stream-browserify',
    },
  },
  plugins: [
    react(),
    {
      name: 'log-requests',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          try {
            console.log('Request URL:', decodeURI(req.url)); // Log the request URL
            next();
          } catch (e) {
            console.error('Malformed URI:', req.url);
            res.status(400).send('Malformed URI');
          }
        });
      },
    },
  ],
});
