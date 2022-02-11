<script setup>
import {watch, ref}        from "vue";
import {useField, useForm} from "vee-validate";
import * as yup            from "yup";

const props = defineProps({
  modelValue: {
    type   : String,
    default: false,
  },
  label     : {
    type   : String,
    default: null,
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
  error     : {
    type   : String,
    default: '',
  },
});

</script>

<template>
  <label class="d-block mt-2 form-check-label" v-if="label">
    {{ label }}
  </label>
  <div v-for="option in options">
    <BaseRadio :label="option.label || option"
               @change="$emit('update:modelValue', option.value || option)"
               v-bind="$attrs"
               :id="$attrs.id + '-' + (option.value || option)"
               type="radio"
               :field="field"
               className="form-check-input"
               :value="option.value || option"
               :modelValue="modelValue"
               name="gender"/>
  </div>
  <ShowErrorMessages :error="error"/>
</template>

<style scoped>

</style>