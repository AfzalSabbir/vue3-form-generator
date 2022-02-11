<script setup>
import {ref, useAttrs} from "vue";
import _               from "lodash";

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

const attrs      = useAttrs();
const attributes = ref(attrs);

// remove type from attributes
if (attributes.value) {
  attributes.value = _.omit(attributes.value, 'type');
}

let modelValue = props.modelValue;
// multiple and not object
if (props.field?.multiple && !(_.isArray(props.modelValue) || _.isObject(props.modelValue))) {
  modelValue = _.castArray(props.modelValue);
}
</script>

<template>
  <label v-if="label" :for="attrs.id">{{ label }}</label>
  <select :class="[className]"
          :id="attrs.id"
          v-bind="attributes"
          v-model="modelValue"
          @change="$emit('update:modelValue', modelValue)">
    <option :value="option.value ? option.value : option"
            v-for="option in options">
      {{ option.label ? option.label : option }}
    </option>
  </select>

  <ShowErrorMessages :error="error"/>
</template>

<style scoped>

</style>