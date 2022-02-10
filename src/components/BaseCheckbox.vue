<template>
  <input :class="[className, errorClassName]"
         :id="attrs.id"
         :checked="modelValue"
         @change="$emit('update:modelValue', $event.target.checked)"
         v-bind="attrs">
  <label :for="attrs.id" :class="errorClassName" v-if="label">
    {{ label }}
  </label>

  <ShowErrorMessages :errors="errors" :error="error"/>
</template>

<script setup>
import Helpers    from "../tools/Helpers";
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
const attrs = useAttrs();

let {errors}         = props;
let {error}          = props;
const errorClassName = Helpers().getErrorClassName(error ?? errors)
</script>

<style scoped>

</style>