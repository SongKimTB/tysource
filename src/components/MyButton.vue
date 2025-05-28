<template>
  <el-button type="primary" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" @click="handleClick">
    {{ label }}
  </el-button>
</template>

<script setup lang="ts">
import { ElButton } from 'element-plus';

defineProps<{
  label: string;
}>();

const emit = defineEmits(['click']);

const handleClick = (event: MouseEvent) => {
  emit('click', event);
};
</script>

<style scoped>
/* You can add component-specific styles here if needed */
</style>
