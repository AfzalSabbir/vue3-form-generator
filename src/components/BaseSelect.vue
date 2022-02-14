<script setup>
import {useAttrs} from "vue";

const props = defineProps({
  modelValue: {
    type    : [String, Number, Array],
    required: true,
    default : null,
  },
  label     : {
    type   : String,
    default: '',
  },
  options   : {
    type   : Array,
    default: [],
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
  <label v-if="label" :for="attrs.id">{{ label }}</label>
  <select :class="[className]"
          :id="attrs.id"
          v-bind="{
            ...attrs,
            onChange: ($event) => {
              $emit('update:modelValue', $event.target.value);
            },
          }"
          :value="modelValue">
    <option :value="option.value || option"
            :selected="(option.value || option) === modelValue"
            v-for="option in options">
      {{ option.label || option }}
    </option>
  </select>

  <ShowErrorMessages :error="error"/>
</template>

<style scoped>

</style>