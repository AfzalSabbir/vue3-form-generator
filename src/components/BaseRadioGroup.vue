<template>
  <label class="d-block mt-2" :class="errorClassName" v-if="label">
    {{ label }}
  </label>
  <div v-for="option in options">
    <BaseRadio :label="option.label || option"
               @change="$emit('update:modelValue', option.value || option)"
               v-bind="$attrs"
               :id="$attrs.id + '-' + (option.value || option)"
               type="radio"
               :field="field"
               :value="option.value || option"
               :modelValue="modelValue"
               name="gender"/>
  </div>

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
  options   : {
    type    : Array,
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

let {errors, error}         = props;
const errorClassName = 'is-invalid';
</script>

<style scoped>

</style>