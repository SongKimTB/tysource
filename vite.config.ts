import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      outDir: 'dist/types',
      // rollupTypes: true, // This option helps in bundling types into a single file per entry.
    }),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'PsCore',
      fileName: (format) => `ps-core.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', 'nuxt', 'element-plus'],
      output: {
        globals: {
          vue: 'Vue',
          'element-plus': 'ElementPlus',
        },
      },
    },
  },
});
