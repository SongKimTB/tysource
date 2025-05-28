<template>
  <NuxtLink v-bind="$attrs">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
// This component just wraps NuxtLink.
// It will inherit all attributes from the parent, including 'to', 'href', etc.
// and pass them to NuxtLink.
// No specific props are defined here to keep it simple and flexible.
// Make sure NuxtLink is available in the project where this component is used.
</script>

<style scoped>
/* Add any specific styles for MyLink if needed in the future */
</style>
