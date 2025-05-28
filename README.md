# @tbostest/ps-core

A UI library for Nuxt 3 applications using Element Plus and Tailwind CSS.

## Installation

To install the package, use npm or yarn:

```bash
npm install @tbostest/ps-core
# or
yarn add @tbostest/ps-core
```

## Usage

### Importing Components

You can import the components from the library like so:

```vue
<script setup>
import { MyButton, MyLink } from '@tbostest/ps-core';
</script>
```

### Peer Dependencies Setup

This library relies on `vue`, `nuxt`, `element-plus`, and `tailwindcss` as peer dependencies. If your Nuxt 3 project doesn't already have Element Plus and Tailwind CSS configured, you'll need to set them up.

- **Element Plus**: Follow the [official Nuxt Element Plus guide](https://element-plus.org/en-US/guide/quickstart.html#on-demand-import) for installation and setup.
- **Tailwind CSS**: Ensure Tailwind CSS is set up in your Nuxt project. You might need to configure your `tailwind.config.js` to scan the components from this library for Tailwind classes:
  ```javascript
  // tailwind.config.js
  module.exports = {
    content: [
      // ... other paths
      "./node_modules/@tbostest/ps-core/dist/**/*.{vue,js,ts,jsx,tsx}", // Path to ps-core components
      "./node_modules/@tbostest/ps-core/src/components/**/*.{vue,js,ts,jsx,tsx}", // if accessing src directly
    ],
    // ...
  };
  ```

### Importing CSS

You need to import the necessary CSS for the components to be styled correctly. This includes Element Plus base styles and the library's component styles.

**Option 1: Import pre-built CSS (includes Element Plus base and component styles):**

In your main entry file (e.g., `nuxt.config.ts` by adding to `css` array, or a client-side plugin):

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  css: [
    '@tbostest/ps-core/style.css',
    // ... other global css
  ],
})
```

**Option 2: If you manage Element Plus styles and Tailwind separately:**

If you prefer to manage Element Plus styles globally yourself or have a specific Tailwind setup:

1.  Ensure Element Plus CSS is imported in your project:
    ```javascript
    // e.g., in a Nuxt plugin or nuxt.config.ts
    import 'element-plus/dist/index.css';
    ```
2.  This library also exports its own Tailwind CSS utilities that were used in components (minimal base, components, utilities). You can import it if needed, though it's generally better to have a single Tailwind build process from your main app:
    ```javascript
    // e.g., in a Nuxt plugin or nuxt.config.ts
    import '@tbostest/ps-core/tailwind.css';
    ```
    Ensure your project's Tailwind CSS build process scans the components from `@tbostest/ps-core` as shown in the Peer Dependencies Setup section.

### Component Examples

#### `MyButton`

A simple button component that wraps Element Plus's `el-button` and applies Tailwind CSS classes.

```vue
<template>
  <MyButton label="Click Me" @click="handleClick" />
</template>

<script setup>
import { MyButton } from '@tbostest/ps-core';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

#### `MyLink`

A wrapper around Nuxt's `<NuxtLink>` component. It accepts all the standard props of `<NuxtLink>`.

```vue
<template>
  <MyLink to="/about">About Page</MyLink>
</template>

<script setup>
import { MyLink } from '@tbostest/ps-core';
</script>
```

## Building from Source

If you want to build the library from its source code:

1.  Clone the repository:
    ```bash
    git clone <repository_url>
    cd ps-core 
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Build the library:
    ```bash
    npm run build
    ```
    The build artifacts will be located in the `dist` directory.

## Peer Dependencies

This library has the following peer dependencies:

-   `vue`: ^3.0.0 (or compatible)
-   `nuxt`: ^3.0.0 (or compatible)
-   `element-plus`: ^2.0.0 (or compatible)
-   `tailwindcss`: ^3.0.0 (or compatible, though components are built with v4 styles)

Ensure these are installed in your project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
