<template>
  <label v-if="label" :for="attrs.id" :class="errorClassName">{{ label }}</label>

  <select :class="[className, errorClassName]"
          :id="attrs.id"
          v-bind="attributes"
          v-model="selectedValue"
          @change="$emit('update:modelValue', selectedValue)">
    <option :value="option.value ? option.value : option"
            v-for="option in options">
      {{ option.label ? option.label : option }}
    </option>
  </select>

  <ShowErrorMessages :errors="errors" :error="error"/>
</template>

<script setup>
import Helpers         from "../tools/Helpers";
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
  className : {
    type   : String,
    default: '',
  },
  options   : {
    type   : Array,
    default: [],
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

let {errors}     = props;
const attributes = ref(attrs);

let modelValue = props.modelValue;
// multiple and not object
if (props.field?.multiple && !(_.isArray(props.modelValue || _.isObject(props.modelValue)))) {
  modelValue = _.castArray(props.modelValue);
}
const selectedValue = ref(modelValue);

// remove type from attributes
if (attributes.value) {
  attributes.value = _.omit(attributes.value, 'type');
}
const errorClassName = Helpers().getErrorClassName(errors);
</script>

<style scoped>

</style>