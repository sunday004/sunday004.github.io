import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Root user site (sunday004.github.io) is served from the domain root.
// For a project site, change this to '/<repo-name>/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
});
