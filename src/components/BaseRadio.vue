<template>
  <input :class="[className, errorClassName]"
         :value="value"
         :id="$attrs.id"
         :checked="modelValue === value"
         @change="$emit('update:modelValue', value)"
         v-bind="$attrs">
  <label :for="$attrs.id" :class="errorClassName">
    {{ label }}
  </label>

  <ShowErrorMessages :errors="errors || []" :error="error || ``"/>
</template>

<script setup>
import Helpers from "../tools/Helpers";

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

let {errors, error}  = props;
const errorClassName = 'is-invalid';
</script>

<style scoped>

</style>