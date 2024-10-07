import {type Ref, ref, type UnwrapRef} from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', () => {
  const token = ref(''),
      baseDomain = ref(''),
      entityArr: Ref<UnwrapRef<any[]>> = ref([]);

  return { token,baseDomain,entityArr }
})
