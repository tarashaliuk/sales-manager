<template>
  <div class="search-fields">
    <label>
      Title
      <InputField
          v-model="titleSearch"
          placeholder="Enter Title"
      />
    </label>
    <label>
      Brand
      <InputField
          v-model="brandSearch"
          placeholder="Enter Brand"
      />
    </label>
  </div>

  <Table
      :headers="headers"
      :data="products"
      v-model:checked="checkedItemsIds"
      identifier="title"
  />
</template>

<script setup lang="ts">
import Table from "@/shared/components/Table.vue";
import InputField from "@/shared/components/InputField.vue";
import {onMounted, ref} from "vue";
import type {IDataItem, ITableColumn} from "@/shared/models/table.model";
import {ProductsService} from "@/features/products/services/products.service";

const titleSearch = ref('')
const brandSearch = ref('')
const checkedItemsIds = ref<string[]>([])

const products = ref<IDataItem[]>([

])
const headers = ref<ITableColumn[]>([
  {
    selector: 'title',
    title: 'Title',
  },
  {
    selector: 'category',
    title: 'Category',
  }
])

onMounted(() => {
  const productsService = new ProductsService()
  products.value = productsService.getProductsList()
})

</script>

<style scoped>
.search-fields {
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
  margin-block-end: 34px;

  & label {
    width: 100%;
    max-width: 266px;

    & > * {
      margin-block-start: 16px;
    }

    span {
      margin-block-end: 16px;
    }
  }
}
</style>