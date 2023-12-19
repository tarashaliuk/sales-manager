<template>
  <div class="input-wrapper">
    <Icon
      v-if="props.icon"
      :name="props.icon"
    />
    <input
      v-model="value"
      :type="props.type"
      :placeholder="props.placeholder"
    />
  </div>
</template>

<script setup lang="ts">
import {computed} from "vue";
import Icon from "@/shared/components/Icon.vue";

const props = withDefaults(defineProps<{
  modelValue: string
  type?: string
  placeholder?: string
  icon?: string
}>(), {
  type: 'text'
})

const emit = defineEmits(['update:modelValue']);

const value = computed({
  get() {
    return props.modelValue
  },
  set(value: string) {
    emit('update:modelValue', value)
  }
})
</script>

<style scoped>
.input-wrapper {
  position: relative;

  svg {
    position: absolute;
    inset-block: 14px;
    inset-inline: 20px;
    stroke: #ADA7A7;

  }

  svg + input {
    padding-left: 60px;
  }

  input {
    outline: none;
    padding: 13px 24px;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid rgba(19, 19, 19, 0.25);
    border-radius: 3px;
    width: 100%;
  }
}
</style>