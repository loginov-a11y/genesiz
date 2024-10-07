<script setup lang="ts">
import TheFormComponent from "@/components/TheFormComponent.vue";
import TheOutputTileComponent from "@/components/TheOutputTileComponent.vue";
import {useStore} from "@/stores/store";


const store = useStore();
</script>

<template>
  <div class="container">
    <TheFormComponent/>
    <div
        class="entity-list"
        v-if="store.entityArr.length !== 0"
    >
      <TheOutputTileComponent
          v-for="entity in store.entityArr"
          :entity="entity"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.output-content {}
.entity-list{
  padding: 10px;
  border: 1px solid #aaa;
  border-radius: 10px;
  margin: 15px 0;
}

</style>