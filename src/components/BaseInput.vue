<template>
  <label v-if="label" :for="attrs.id" :class="errorClassName">
    {{ label }}
  </label>
  <input :id="attrs.id" :class="[className, errorClassName]"
         v-bind="attrs"
         @input="$emit('update:modelValue', inputValue)"
         v-model="inputValue"/>

  <ShowErrorMessages :errors="errors || []" :error="error || ``"/>
</template>

<script setup>
import Helpers                from "../tools/Helpers";
import {ref, useAttrs, watch} from "vue";

const props = defineProps({
  modelValue: {
    type    : [String, Number],
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
});
const attrs = useAttrs();

let {errors, error} = props;
const value         = props.modelValue;

const type           = attrs.type;
const inputValue     = ref(value);
const errorClassName = 'is-invalid';

watch(() => inputValue.value, (newValue) => {
      if (type === 'number') {
        inputValue.value = parseInt(newValue);
      }
    },
);

error = "This field is required";
</script>

<style scoped>

</style>