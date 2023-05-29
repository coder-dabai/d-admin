<template>
  <div :style="{ width, height }" class="border-solid border-2 border-indigo-600 p-2">
    <slot name="content"></slot>
  </div>
</template>
<script lang="ts" setup>
  defineProps({
    width: {
      type: String,
      default: '400px',
    },
    height: {
      type: String,
      default: '400px',
    },
  });
</script>
