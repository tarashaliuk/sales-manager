<template>
  <img
    :src="props.src"
    alt="avatar"
  >
</template>

<script setup lang="ts">
const props = defineProps<{
  src: string
}>()
</script>

<style scoped>
img {
  border-radius: 10px;
  width: 52px;
  height: 52px;
}
</style>