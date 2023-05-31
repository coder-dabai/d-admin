<template>
  <div
    :style="{ width, height }"
    class="border-solid border-2 border-indigo-600 p-2 rounded-md shadow-dark-200 shadow-sm"
  >
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
<style lang="less" scoped></style>
