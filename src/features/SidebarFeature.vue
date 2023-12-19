<template>
  <div class="sidebar">
    <h1>Sales.</h1>

    <ul class="main-list">
      <SidebarItem
        v-for="item in items"
        :key="item.title"
        :title="item.title"
        :icon="item.icon"
        :routePath="item.routePath"
        :isActive="isActiveItem(item.title)"
        @click="setActiveItem(item)"
      />
    </ul>

    <ul class="additional-list">
      <SidebarItem
        v-for="item in additionalItems"
        :key="item.title"
        :title="item.title"
        :icon="item.icon"
        :routePath="item.routePath"
        :isActive="isActiveItem(item.title)"
        @click="setActiveItem(item)"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import SidebarItem from "@/shared/components/SidebarItem.vue";
import {ref} from "vue";
import type {ISidebarItem} from "@/shared/models/sidebar-item.model";

const items: ISidebarItem[] = [
  {
    title: 'Dashboard',
    icon: 'dashboard',
    routePath: '/'
  },
  {
    title: 'Lab Test',
    icon: 'labTest',
    routePath: '/lab-test'
  },
  {
    title: 'Appointment',
    icon: 'calendar',
    routePath: '/appointment'
  }
]

const additionalItems: ISidebarItem[] = [
  {
    title: 'Help',
    icon: 'question',
    routePath: '/help'
  }
]

const activeItemTitle = ref<string>(items[0].title)

const isActiveItem = (title: string): boolean => {
  return title === activeItemTitle.value
}

const setActiveItem = (item: ISidebarItem) => {
  activeItemTitle.value = item.title
}

</script>

<style scoped>
.sidebar {
  width: 250px;
  height: 100vh;
  padding-block: 55px 30px;
  flex-direction: column;
  display: flex;

  h1 {
    color: #013CC6;
    font-weight: 500;
    font-size: 24px;
    margin: 0 0 65px 29px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 41px;

    &.additional-list {
      margin-top: auto;
    }
  }
}

</style>