<script setup>
import {useAttrs} from "vue";

const props = defineProps({
  label     : {
    type   : String,
    default: null,
  },
  modelValue: {
    type   : Boolean,
    default: false,
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
const attrs = useAttrs();
</script>

<template>
  <input :class="[className]"
         :id="attrs.id"
         :checked="modelValue"
         @change="$emit('update:modelValue', $event.target.checked)"
         v-bind="attrs">
  <label :for="attrs.id" v-if="label">
    {{ label }}
  </label>

  <ShowErrorMessages :error="error"/>
</template>

<style scoped>

</style>