<script setup>
import {useAttrs} from "vue";

const props = defineProps({
  modelValue: {
    type    : String,
    required: true,
  },
  label     : {
    type   : String,
    default: null,
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

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <label v-if="label" :for="attrs.id">
    {{ label }}
  </label>
  <textarea :id="attrs.id"
            :class="[className]"
            v-bind="attrs"
            v-model="modelValue"
            @input="emit('update:modelValue', modelValue)"></textarea>

  <ShowErrorMessages :error="error"/>
</template>


<style scoped>

</style>