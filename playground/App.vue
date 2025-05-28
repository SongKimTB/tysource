<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">@tbostest/ps-core Playground</h1>

    <section class="mb-8 p-4 border rounded">
      <h2 class="text-xl mb-2">MyButton Component</h2>
      <MyButton :label="buttonLabel" @click="onButtonClick" />
      <p class="mt-2">Button clicked {{ clickCount }} times.</p>
    </section>

    <section class="mb-8 p-4 border rounded">
      <h2 class="text-xl mb-2">MyLink Component</h2>
      <MyLink to="/" class="text-blue-600 hover:underline">
        Go to Playground Home (effectively reloads this page)
      </MyLink>
      <br />
      <MyLink to="/some-other-page" class="text-blue-600 hover:underline">
        (Non-existent playground link for testing)
      </MyLink>
    </section>
    
    <section class="mb-8 p-4 border rounded">
      <h2 class="text-xl mb-2">Tailwind Test</h2>
      <p class="text-red-500 bg-yellow-200 p-2">This should be styled by Tailwind.</p>
    </section>

    <section class="mb-8 p-4 border rounded">
      <h2 class="text-xl mb-2">Element Plus Test</h2>
      <el-date-picker v-model="dateValue" type="date" placeholder="Pick a day"></el-date-picker>
      <el-button type="warning" class="ml-2">Element Button</el-button>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// Import components directly from the library's source via the alias
// This ensures HMR works correctly during development.
import { MyButton, MyLink } from '@tbostest/ps-core';

// Import Element Plus components directly if needed for testing Element Plus itself
// or for parts of the playground app chrome, not for testing your own components' internals.
import { ElDatePicker, ElButton } from 'element-plus';
// It's important that the library's own CSS (which includes Element Plus styles)
// is correctly processed. The import of element-plus/dist/index.css in src/index.ts
// should handle this when MyButton/MyLink are used.

const buttonLabel = ref('Click Me!');
const clickCount = ref(0);
const dateValue = ref('');

const onButtonClick = () => {
  clickCount.value++;
  console.log('MyButton clicked in playground!');
};
</script>

<style>
/* Global styles for the playground app itself, if needed */
/* Tailwind base styles are expected to be active via the library's CSS imports */
body {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f0f2f5; /* A light background for the playground page */
}
#app {
  max-width: 1000px;
  margin: 20px auto;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
</style>
