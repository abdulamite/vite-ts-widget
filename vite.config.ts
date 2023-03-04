import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    lib: {
      entry: './src/main.tsx',
      name: 'MyWidget',
      fileName: (format) => `my-widget.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
