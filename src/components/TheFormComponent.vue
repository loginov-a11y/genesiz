<script setup lang="ts">
import {ref, watch, onMounted} from "vue";
import BaseSelect from "@/components/BaseSelect.vue";
import BaseButton from "@/components/BaseButton.vue";
import {BUTTON_TEXT, SELECT_TEXT_LIST} from "@/constant";
import {sendStatus} from "@/function/sendStatusFunction";
import {getToken} from "@/function/getTokenFunction";
import {requestEntityFunction} from "@/function/requestEntityFunction";

const buttonText = ref(BUTTON_TEXT.create);
const selectActive = ref();
const entityResponse = ref();
const selectItem = {
  api: '',
  text: ''
};

const loader = ref(false);
const getEntity = async () => {
  buttonText.value = sendStatus('load');
  loader.value = true;
  entityResponse.value = await requestEntityFunction(selectItem.api, selectItem.text);
  if (entityResponse.value) {
    loader.value = false;
    buttonText.value = sendStatus('save');
  }
}

onMounted(() => {
  getToken();
});

watch(() => selectActive, () => {
  SELECT_TEXT_LIST.find(select => {
    if (select.api === selectActive.value) {
      selectItem.api = select.api as string;
      selectItem.text = select.text;
    }
  });
  if (selectActive.value === null) buttonText.value = sendStatus('default');
}, {deep: true});

</script>

<template>
  <form
      action=""
      class="form"
      @submit.prevent="getEntity()"
  >
    <div class="form__point">
      <BaseSelect
          v-model="selectActive"
      />
    </div>
    <div class="form__point">
      <BaseButton
          :disabled='!selectActive'
          :class="{ load: loader }"
      >
        {{ buttonText }}
      </BaseButton>
    </div>
  </form>
</template>

<style scoped lang="scss">
.form {
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid #aaa;
  max-width: 300px;
  margin: auto;

  &__point {
    margin: 10px 0;
  }
}

</style>