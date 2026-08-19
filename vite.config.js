import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Set base to your GitHub Pages repo name, e.g. '/portfolio/'.
// If deploying to a <username>.github.io root repo, use '/'.
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
});
