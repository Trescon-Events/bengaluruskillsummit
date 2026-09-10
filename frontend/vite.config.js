import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/bengaluruskillsummit.com/',
  plugins: [
    react(),
    {
      name: 'serve-wp-content-at-root',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url.startsWith('/wp-content/') || req.url.startsWith('/uploads/')) {
            req.url = '/bengaluruskillsummit.com' + req.url;
          }
          next();
        });
      }
    }
  ],
})
