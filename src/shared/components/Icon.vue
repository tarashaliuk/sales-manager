<template>
  <component :is="iconComponent" />
</template>

<script setup lang="ts">
import {computed, defineAsyncComponent} from "vue";

const props = defineProps<{
  name: string,
}>()


const iconComponent = computed(() => {
  const name = props.name.charAt(0).toUpperCase() + props.name.slice(1);

  return defineAsyncComponent(() => import(`@/shared/components/icons/${name}Icon.vue`));
})
</script>