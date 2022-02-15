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
const emit  = defineEmits(['update:modelValue']);
</script>

<template>
  <label v-if="label" :for="attrs.id">
    {{ label }}
  </label>
  <input v-bind="attrs"
         :id="attrs.id"
         :class="[className]"
         :value="modelValue"
         @input="emit('update:modelValue', $event.target.value)"/>

  <ShowErrorMessages :error="error"/>
</template>

<style scoped>

</style>