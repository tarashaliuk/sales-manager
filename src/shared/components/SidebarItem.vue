<template>
  <li :class="{active: props.isActive}">
    <Icon :name="props.icon" />
    <RouterLink :to="props.routePath">
      {{props.title}}
    </RouterLink>
  </li>
</template>

<script setup lang="ts">
import type {ISidebarItem} from "@/shared/models/sidebar-item.model";
import Icon from "@/shared/components/Icon.vue";

const props = defineProps<ISidebarItem & {
  isActive: boolean
}>()
</script>

<style scoped>
li {
  --base-color: #000000;
  --primary-color: #0B63F8;

  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  height: 39px;

  svg {
    stroke: var(--base-color);
    margin-inline-start: 41px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  &.active{
    color: var(--primary-color);
    position: relative;

    &::before {
      content: '';
      left: 0;
      position: absolute;
      width: 3px;
      height: 100%;
      background: var(--primary-color);
    }

    svg {
      stroke: var(--primary-color)
    }
  }
}


</style>