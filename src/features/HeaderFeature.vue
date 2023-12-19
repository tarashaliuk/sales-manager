<template>
  <header>
    <InputField
      v-model="searchValue"
      placeholder="Search"
      icon="search"
      class="search-field"
    />
    <div class="side-elements">
      <Button icon="notification" showBadge />
      <Avatar src="public/images/avatar.jpeg"/>
    </div>
  </header>
</template>
<script setup lang="ts">
import InputField from "@/shared/components/InputField.vue";
import {ref} from "vue";
import Avatar from "@/shared/components/Avatar.vue";
import Button from "@/shared/components/Button.vue";

const searchValue = ref<string>('')
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-block-end: 44px;

  .search-field {
    max-width: 665px;
    width: 100%;
  }

  .side-elements {
    display: flex;
    gap: 20px;
  }
}
</style>

