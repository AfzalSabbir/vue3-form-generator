<script setup>
import {useAttrs} from "vue";

const props = defineProps({
  modelValue: {
    type    : [String, Number],
    required: true,
  },
  label     : {
    type   : String,
    default: null,
  },
  className : {
    type   : String,
    default: '',
  },
  error     : {
    type   : String,
    default: '',
  },
});
const attrs = useAttrs();
</script>

<template>
  <label v-if="label" :for="attrs.id">
    {{ label }}
  </label>
  <input :id="attrs.id" :class="[className]"
         v-bind="attrs"
         v-model="modelValue"/>

  <ShowErrorMessages :error="error"/>
</template>

<style scoped>

</style>