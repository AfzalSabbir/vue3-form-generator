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
            v-bind="{
              ...attrs,
              onInput: (e) => emit('update:modelValue', e.target.value),
            }"
            :value="modelValue"></textarea>

  <ShowErrorMessages :error="error"/>
</template>


<style scoped>

</style>