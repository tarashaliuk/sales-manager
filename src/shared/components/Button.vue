<template>
  <button :class="{badge: props.showBadge}">
    <Icon :name="props.icon" />
    <slot />
  </button>
</template>

<script setup lang="ts">
import Icon from "@/shared/components/Icon.vue";

const props = defineProps<{
  icon: string,
  showBadge: boolean
}>()


</script>

<style scoped>
button {
  border-radius: 3px;
  background: #ffffff;
  border: none;
  padding: 14px;

  & svg{
    stroke: #ADA7A7;
  }

  &.badge {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      inset-inline-end: -5px;
      inset-block-start: -5px;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background: #FFBC0F;
    }
  }
}


</style>