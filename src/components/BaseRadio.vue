<template>
  <input :class="[errorClassName]"
         :value="value"
         :id="$attrs.id"
         :checked="modelValue === value"
         @change="$emit('update:modelValue', value)"
         v-bind="$attrs">
  <label :for="$attrs.id" :class="errorClassName">
    {{ label }}
  </label>

  <ShowErrorMessages :errors="errors" :error="error"/>
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
  errors    : {
    type   : Array,
    default: [],
  },
  error     : {
    type   : String,
    default: null,
  },
  field     : {
    type    : Object,
    required: true,
    default : () => ({}),
  },
});

let {errors}         = props;
const errorClassName = Helpers().getErrorClassName(errors)
</script>

<style scoped>

</style>