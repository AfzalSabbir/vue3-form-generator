<template>
  <input :class="[className, 'me-2']"
         :value="value"
         :id="attrs.id"
         :checked="modelValue === value"
         @change="emit('update:modelValue', value)"
         v-bind="attrs">
  <label :for="attrs.id" class="form-check-label">
    {{ label }}
  </label>
</template>

<script setup>
import {useAttrs, defineProps, defineEmits} from "vue";

const props = defineProps({
  modelValue: {
    type   : [String, Number],
    default: false,
  },
  label     : {
    type   : String,
    default: null,
  },
  value     : {
    type    : [String, Number],
    required: true,
  },
  name      : {
    type    : String,
    required: true,
  },
  className : {
    type   : String,
    default: '',
  },
});
const attrs = useAttrs();
const emit  = defineEmits(['update:modelValue']);
</script>

<style scoped>

</style>