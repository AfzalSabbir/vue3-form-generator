<template>
  <input :class="[className]"
         :value="value"
         :id="$attrs.id"
         :checked="modelValue === value"
         @change="$emit('update:modelValue', value)"
         v-bind="$attrs">
  <label :for="$attrs.id" class="form-check-label">
    {{ label }}
  </label>
</template>

<script setup>
const props = defineProps({
  label     : {
    type   : String,
    default: null,
  },
  modelValue: {
    type   : [String, Number],
    default: false,
  },
  value     : {
    type    : [String, Number],
    required: true,
  },
  name      : {
    type    : String,
    required: true,
  },
  field     : {
    type    : Object,
    required: true,
    default : () => ({}),
  },
  className : {
    type   : String,
    default: '',
  },
});
</script>

<style scoped>

</style>