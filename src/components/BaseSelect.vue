<script setup lang="ts">
import {ref} from "vue";
import {SELECT_TEXT_LIST, SELECT_TEXT_PLACEHOLDER} from "@/constant";
import VueSelect from "vue3-select-component";

const selected = ref();
const emit = defineEmits(['update:modelValue']);
const select = () => {
  let selectArrOption: Array<any> = [];
  for(let item of SELECT_TEXT_LIST){
    selectArrOption.push({label: item.text, value: item.api});
  }
  return selectArrOption;
}


</script>

<template>
  <VueSelect
      v-model="selected"
      :options="select()"
      :isClearable = false
      :placeholder="SELECT_TEXT_PLACEHOLDER"
      @option-selected="(option) => emit('update:modelValue', option.value)"
  />
</template>
<style scoped lang="scss">

</style>