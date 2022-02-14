<script setup>
import {useAttrs} from "vue";

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
const emit  = defineEmits(['update:modelValue']);
</script>

<template>
  <label class="d-block mt-2 form-check-label" v-if="label">
    {{ label }}
  </label>
  <div v-for="option in options">
    <BaseRadio :label="option.label || option"
               @update:modelValue="emit('update:modelValue', option.value || option.label || option)"
               v-bind="attrs"
               :id="attrs.id + '-' + (option.value || option.label || option)"
               :key="option.value || option.label || option"
               className="form-check-input"
               :value="option.value || option.label || option"
               :modelValue="modelValue"/>
  </div>

  <ShowErrorMessages :error="error"/>
</template>

<style scoped>

</style>