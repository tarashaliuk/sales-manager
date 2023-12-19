<script setup lang="ts">
import SidebarFeature from "@/features/SidebarFeature.vue";
import HeaderFeature from "@/features/HeaderFeature.vue";
</script>

<template>
  <div class="wrapper">
    <SidebarFeature />
    <div class="content">
      <HeaderFeature />
      <main>
        <RouterView />
      </main>
    </div>

  </div>

</template>

<style scoped>
.wrapper {
  display: flex;

  .content {
    background: #F8F8F8;
    flex-grow: 1;
    padding: 56px 40px 33px;
  }
}
</style>