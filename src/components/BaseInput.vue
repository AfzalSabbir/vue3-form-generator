<template>
  <label v-if="label" :for="attrs.id" :class="errorClassName">
    {{ label }}
  </label>
  <input :id="attrs.id" :class="[className, errorClassName]"
         v-bind="attrs"
         @input="$emit('update:modelValue', inputValue)"
         v-model="inputValue"/>

  <ShowErrorMessages :errors="errors" :error="error"/>
</template>

<script setup>
import Helpers                from "../tools/Helpers";
import {ref, useAttrs, watch} from "vue";

const props          = defineProps({
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
const attrs          = useAttrs();

let {errors} = props;
const value  = props.modelValue;

const type       = attrs.type;
const inputValue = ref(value);
const errorClassName = Helpers().getErrorClassName(errors);

watch(() => inputValue.value, (newValue) => {
      if (type === 'number') {
        inputValue.value = parseInt(newValue);
      }
    },
);
</script>

<style scoped>

</style>