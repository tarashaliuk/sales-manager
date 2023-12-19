<template>
  <table>
    <thead>
    <tr>
      <th v-if="props.checked" scope="col">
        <input
            type="checkbox"
            :checked="areAllItemsChecked"
            @change="toggleCheckAllItems"
        />
      </th>
      <th
        v-for="head in props.headers"
        :key="head.selector"
        scope="col"
      >
        {{head.title}}
      </th>
    </tr>
    </thead>
    <tbody>
      <tr v-for="item in data" :key="item[props.identifier]">
        <th v-if="props.checked" scope="col">
          <input
              type="checkbox"
              :checked="isChecked(item)"
              @change="setItemChecked(item)"
          />
        </th>

        <th
            v-for="head in props.headers"
            :key="head.selector"
            :item="item"
        >
          <slot :name="`${head.selector}-${item[props.identifier]}`">
            {{item[head.selector]}}
          </slot>
        </th>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import type {DataItemValue, IDataItem, ITableColumn} from "@/shared/models/table.model";
import {computed} from "vue";

const props = defineProps<{
  identifier: string
  checked?: DataItemValue[],
  data: IDataItem[],
  headers: ITableColumn[]
}>()

enum Emits {
  UPDATE_CHECKED = 'update:checked'
}

const emit = defineEmits([Emits.UPDATE_CHECKED,]);

const isChecked = (item: IDataItem): boolean => {
  if (!props.checked) {
    return false
  }
  return props.checked.includes(item[props.identifier])
}

const setItemChecked = (item: IDataItem) => {
  emit(
      Emits.UPDATE_CHECKED,
      isChecked(item)
          ? props.checked!.filter(checkedItem => checkedItem !== item[props.identifier])
          : [...props.checked!, item[props.identifier]]
  )

}

const toggleCheckAllItems = () => {
  emit(Emits.UPDATE_CHECKED, areAllItemsChecked.value
      ? []
      : props.data.map(item => item[props.identifier])
  )
}

const areAllItemsChecked = computed(() => {
  return props.data.every((item) =>
      props.checked?.includes(item[props.identifier])
  )
})


</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  background: #ffffff;

  th {
    text-align: left;
    border-bottom: 1px solid #eaeaea;

    input[type="checkbox"] {
      width: 24px;
      height: 24px;
    }
  }

  thead th {
    padding: 24px 0 24px 24px;
    font-weight: 600;
  }

  tbody th {
    padding: 30px 0 24px 24px;
  }
}



</style>