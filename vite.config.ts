import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import path from 'path'; // Make sure path is imported

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    // Configuration for playground (dev server)
    return {
      root: 'playground', // Serve files from the 'playground' directory
      plugins: [vue()],
      resolve: {
        alias: {
          // This alias allows importing from library source in playground for HMR
          '@tbostest/ps-core': path.resolve(__dirname, 'src'),
        },
      },
      server: {
        port: 3000, // Optional: specify a port for the dev server
      },
    };
  } else {
    // Configuration for library build (command === 'build')
    return {
      plugins: [
        vue(),
        dts({
          outDir: 'dist/types',
          insertTypesEntry: true, // Ensures a single entry point for types in package.json
          copyDtsFiles: true, // Good for ensuring all necessary .d.ts files are copied
        }),
      ],
      build: {
        lib: {
          entry: path.resolve(__dirname, 'src/index.ts'),
          name: 'PsCore', // Name for UMD global
          fileName: (format) => `ps-core.${format}.js`,
          formats: ['es', 'umd'], // Generate ES and UMD formats
        },
        rollupOptions: {
          // Ensure peer dependencies are not bundled
          external: ['vue', 'nuxt', 'element-plus'],
          output: {
            // Define globals for UMD build for externalized deps
            globals: {
              vue: 'Vue',
              'element-plus': 'ElementPlus',
            },
            // Control the naming of asset files, especially CSS
            assetFileNames: (assetInfo) => {
              // Vite often names the CSS bundle 'style.css' by default when building a lib.
              // If it's named differently (e.g., 'index.css') due to entry file imports,
              // this ensures it is output as 'style.css' to match package.json exports.
              if (assetInfo.name === 'style.css' || assetInfo.name === 'index.css') {
                return 'style.css';
              }
              return assetInfo.name;
            },
          },
        },
      },
      resolve: {
        // Alias for internal library paths if you use them (e.g., @/components)
        alias: {
          '@': path.resolve(__dirname, 'src'),
        },
      },
    };
  }
});
