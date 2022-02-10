<template>
  <label v-if="label" :for="attrs.id" :class="errorClassName">
    {{ label }}
  </label>
  <textarea :id="attrs.id"
            :class="[className, errorClassName]"
            v-bind="attrs"
            @input="$emit('update:modelValue', $event.target.value)">{{ modelValue }}</textarea>

  <ShowErrorMessages :errors="errors" :error="error"/>
</template>

<script setup>
import Helpers    from "../tools/Helpers";
import {useAttrs} from "vue";

const attrs = useAttrs();

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

let {errors}         = props;
const errorClassName = Helpers().getErrorClassName(errors)
</script>

<style scoped>

</style>