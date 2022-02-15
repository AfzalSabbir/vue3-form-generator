<script setup>
import {useAttrs, defineProps, defineEmits} from "vue";

const props = defineProps({
  label     : {
    type   : String,
    default: null,
  },
  modelValue: {
    type   : Boolean,
    default: false,
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
  <input v-bind="attrs"
         :class="[className, 'me-2']"
         :id="attrs.id"
         :checked="modelValue"
         @change="emit('update:modelValue', $event.target.checked)"
  >
  <label :for="attrs.id" v-if="label">
    {{ label }}
  </label>

  <ShowErrorMessages :error="error"/>
</template>

<style scoped>

</style>