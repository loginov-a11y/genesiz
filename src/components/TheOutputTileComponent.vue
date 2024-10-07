<script setup lang="ts">
const props = defineProps({
  entity: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="entity">
    <div class="entity__id">
      {{props.entity.id}}
    </div>
    <div class="entity__type">
      {{props.entity.item}}
    </div>
  </div>
</template>

<style scoped lang="scss">
.entity{
  border-bottom: solid 1px #000;
  margin: 10px 0;
  display: flex;
  padding: 5px 0;
  font-size: 20px;
  &__id{
    width: 30%;
  }
  &__type{
    width: 70%;
  }
}
</style>